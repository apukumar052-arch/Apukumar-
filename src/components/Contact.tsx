import { useEffect, useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  ArrowUpRight,
  Briefcase,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_CHANNELS, SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/services';
import type { ServiceId } from '../types/content';

interface ContactProps {
  preselectedService: ServiceId | '';
}

interface FormValues {
  name: string;
  email: string;
  service: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  details?: string;
}

type SubmissionState =
  | 'idle'
  | 'submitting'
  | 'endpoint-success'
  | 'endpoint-error'
  | 'direct-ready';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const CHANNEL_ICONS = {
  whatsapp: MessageCircle,
  email: Mail,
  fiverr: Briefcase,
  upwork: ExternalLink,
} as const;

export function Contact({ preselectedService }: ContactProps) {
  const { t, pick } = useLanguage();
  const hasConfiguredEndpoint = Boolean(
    SITE_CONFIG.contactForm.formEndpoint.trim()
  );

  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    service: preselectedService || '',
    details: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    name: false,
    email: false,
    service: false,
    details: false,
  });
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [copied, setCopied] = useState(false);

  // Sync service dropdown whenever user clicks "Get Started" or "Request Similar Project"
  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({ ...prev, service: preselectedService }));
      setErrors((prev) => ({ ...prev, service: undefined }));
      if (status === 'direct-ready') {
        setStatus('idle');
      }
    }
  }, [preselectedService]); // eslint-disable-line react-hooks/exhaustive-deps

  const validate = (next: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (next.name.trim().length < 2) {
      nextErrors.name = t.contact.form.validation.nameRequired;
    }
    if (!EMAIL_PATTERN.test(next.email.trim())) {
      nextErrors.email = t.contact.form.validation.emailRequired;
    }
    if (!next.service) {
      nextErrors.service = t.contact.form.validation.serviceRequired;
    }
    if (next.details.trim().length < 15) {
      nextErrors.details = t.contact.form.validation.detailsRequired;
    }
    return nextErrors;
  };

  const handleFieldChange = (field: keyof FormValues, value: string) => {
    const updated = { ...values, [field]: value };
    setValues(updated);
    if (touched[field]) {
      const nextErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: nextErrors[field] }));
    }
    if (status === 'endpoint-error') {
      setStatus('idle');
    }
  };

  const handleFieldBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const nextErrors = validate(values);
    setErrors((prev) => ({ ...prev, [field]: nextErrors[field] }));
  };

  const selectedServiceTitle = (() => {
    if (values.service === 'canvas-design') {
      return t.portfolio.categories.canvas;
    }
    const match = SERVICES_DATA.find((item) => item.id === values.service);
    return match ? pick(match.title) : values.service;
  })();

  const buildFormattedBrief = () => {
    return [
      `Project Inquiry for Apu Kumar`,
      `--------------------------------`,
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Service: ${selectedServiceTitle}`,
      ``,
      `Project Details:`,
      values.details.trim(),
    ].join('\n');
  };

  const buildMailtoHref = () => {
    const subject = `Project Inquiry: ${selectedServiceTitle} — ${values.name.trim()}`;
    return `mailto:${SITE_CONFIG.contact.emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildFormattedBrief())}`;
  };

  const buildGmailHref = () => {
    const subject = `Project Inquiry: ${selectedServiceTitle} — ${values.name.trim()}`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      SITE_CONFIG.contact.emailAddress
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      buildFormattedBrief()
    )}`;
  };

  const buildWhatsappHref = () => {
    return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      buildFormattedBrief()
    )}`;
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildFormattedBrief());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      // Fallback copy via temporary textarea if Clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = buildFormattedBrief();
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ name: true, email: true, service: true, details: true });
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Mode 1: Real Form Service Endpoint Configured (e.g., Formspree / Web3Forms)
    if (hasConfiguredEndpoint) {
      setStatus('submitting');
      try {
        const response = await fetch(SITE_CONFIG.contactForm.formEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            service: selectedServiceTitle,
            details: values.details.trim(),
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        setStatus('endpoint-success');
        setValues({ name: '', email: '', service: '', details: '' });
        setTouched({ name: false, email: false, service: false, details: false });
      } catch {
        setStatus('endpoint-error');
      }
      return;
    }

    // Mode 2: Honest Static Direct-Dispatch Handoff (Never fakes automatic delivery)
    setStatus('direct-ready');
  };

  const visibleChannels = CONTACT_CHANNELS.filter(
    (ch) => ch.id !== 'fiverr' && ch.id !== 'upwork'
  );
  const hasAnyPlaceholderChannel = visibleChannels.some((ch) => ch.isPlaceholder);

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#FF6B35] mb-3">
            {t.contact.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.02em] leading-[1.15] text-white">
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A5A5AD] leading-relaxed">
            {t.contact.subheading}
          </p>
        </div>

        <div className="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl bg-[#141419] border border-white/[0.08] p-6 sm:p-8"
          >
            {status === 'endpoint-success' ? (
              <div className="py-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t.contact.form.endpointSuccessTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#A5A5AD] leading-relaxed max-w-lg">
                  {t.contact.form.endpointSuccessText}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B0B0D] border border-white/15 hover:border-white/30 text-sm font-medium text-white transition-colors cursor-pointer"
                >
                  {t.contact.form.editBriefBtn}
                </button>
              </div>
            ) : status === 'direct-ready' ? (
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#FF6B35]/15 border border-[#FF6B35]/35 flex items-center justify-center text-[#FF6B35] shrink-0">
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {t.contact.form.dispatchReadyTitle}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#A5A5AD] leading-relaxed">
                      {t.contact.form.dispatchReadyText}
                    </p>
                  </div>
                </div>

                {/* Read-Only Preview of Prepared Inquiry */}
                <pre className="rounded-xl bg-[#0B0B0D] border border-white/[0.08] p-4 text-xs sm:text-sm text-white/85 whitespace-pre-wrap font-sans leading-relaxed">
                  {buildFormattedBrief()}
                </pre>

                {/* Verified Real Dispatch Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={buildGmailHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FF6B35] hover:bg-[#ff7d4d] text-[#0B0B0D] font-semibold text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>{t.contact.form.openEmailBtn}</span>
                  </a>

                  <a
                    href={buildWhatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0B0B0D] hover:bg-white/[0.06] border border-white/15 text-white font-semibold text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#F5B544]" aria-hidden="true" />
                    <span>{t.contact.form.openWhatsappBtn}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0B0B0D] hover:bg-white/[0.06] border border-white/15 text-white font-medium text-sm transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                        <span>{t.contact.form.copiedBtn}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#A5A5AD]" aria-hidden="true" />
                        <span>{t.contact.form.copyBriefBtn}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-sm font-medium text-[#A5A5AD] hover:text-white transition-colors cursor-pointer"
                  >
                    ← {t.contact.form.editBriefBtn}
                  </button>
                  <a
                    href={buildMailtoHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#A5A5AD] hover:text-[#FF6B35] transition-colors underline underline-offset-4"
                  >
                    {t.contact.form.openMailAppBtn}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {status === 'endpoint-error' && (
                  <div
                    role="alert"
                    className="rounded-xl bg-red-500/10 border border-red-500/30 p-4 flex items-start gap-3 text-sm"
                  >
                    <AlertCircle
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="space-y-2">
                      <p className="font-semibold text-white">
                        {t.contact.form.endpointErrorTitle}
                      </p>
                      <p className="text-[#A5A5AD]">
                        {t.contact.form.endpointErrorText}
                      </p>
                      <div className="flex flex-wrap gap-3 pt-1">
                        <a
                          href={buildGmailHref()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#FF6B35] hover:underline"
                        >
                          {t.contact.form.openEmailBtn} →
                        </a>
                        <a
                          href={buildWhatsappHref()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#F5B544] hover:underline"
                        >
                          {t.contact.form.openWhatsappBtn} →
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      {t.contact.form.nameLabel}{' '}
                      <span className="text-[#FF6B35]" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={values.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      onBlur={() => handleFieldBlur('name')}
                      placeholder={t.contact.form.namePlaceholder}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full rounded-lg bg-[#0B0B0D] border px-4 py-3 text-sm text-white placeholder:text-[#A5A5AD]/55 focus:outline-none focus:border-[#FF6B35] transition-colors ${
                        errors.name ? 'border-red-400/70' : 'border-white/12'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      {t.contact.form.emailLabel}{' '}
                      <span className="text-[#FF6B35]" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      onBlur={() => handleFieldBlur('email')}
                      placeholder={t.contact.form.emailPlaceholder}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full rounded-lg bg-[#0B0B0D] border px-4 py-3 text-sm text-white placeholder:text-[#A5A5AD]/55 focus:outline-none focus:border-[#FF6B35] transition-colors ${
                        errors.email ? 'border-red-400/70' : 'border-white/12'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    {t.contact.form.serviceLabel}{' '}
                    <span className="text-[#FF6B35]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    value={values.service}
                    onChange={(e) => handleFieldChange('service', e.target.value)}
                    onBlur={() => handleFieldBlur('service')}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={
                      errors.service ? 'contact-service-error' : undefined
                    }
                    className={`w-full rounded-lg bg-[#0B0B0D] border px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B35] transition-colors ${
                      errors.service ? 'border-red-400/70' : 'border-white/12'
                    } ${!values.service ? 'text-[#A5A5AD]' : 'text-white'}`}
                  >
                    <option value="" className="bg-[#0B0B0D] text-[#A5A5AD]">
                      {t.contact.form.servicePlaceholder}
                    </option>
                    {SERVICES_DATA.map((service) => (
                      <option
                        key={service.id}
                        value={service.id}
                        className="bg-[#0B0B0D] text-white"
                      >
                        {service.number}. {pick(service.title)}
                      </option>
                    ))}
                    <option
                      value="canvas-design"
                      className="bg-[#0B0B0D] text-white"
                    >
                      06. {t.portfolio.categories.canvas}
                    </option>
                  </select>
                  {errors.service && (
                    <p
                      id="contact-service-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="contact-details"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    {t.contact.form.detailsLabel}{' '}
                    <span className="text-[#FF6B35]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    rows={5}
                    required
                    value={values.details}
                    onChange={(e) => handleFieldChange('details', e.target.value)}
                    onBlur={() => handleFieldBlur('details')}
                    placeholder={t.contact.form.detailsPlaceholder}
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={
                      errors.details ? 'contact-details-error' : undefined
                    }
                    className={`w-full rounded-lg bg-[#0B0B0D] border px-4 py-3 text-sm text-white placeholder:text-[#A5A5AD]/55 focus:outline-none focus:border-[#FF6B35] transition-colors resize-y ${
                      errors.details ? 'border-red-400/70' : 'border-white/12'
                    }`}
                  />
                  {errors.details && (
                    <p
                      id="contact-details-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.details}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#FF6B35] hover:bg-[#ff7d4d] disabled:opacity-60 text-[#0B0B0D] font-semibold text-sm sm:text-base transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>
                      {status === 'submitting'
                        ? t.contact.form.submitting
                        : hasConfiguredEndpoint
                        ? t.contact.form.submitEndpoint
                        : t.contact.form.submitDirect}
                    </span>
                  </button>

                  <p className="text-xs text-[#A5A5AD] leading-relaxed">
                    {hasConfiguredEndpoint
                      ? t.contact.form.endpointModeNote
                      : t.contact.form.directModeNote}
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column: Direct Contact Channels (WhatsApp, Email, Fiverr, Upwork) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                {t.contact.channelsHeading}
              </h3>
              <p className="mt-2 text-sm text-[#A5A5AD] leading-relaxed">
                {t.contact.channelsSubtext}
              </p>
            </div>

            <div className="space-y-3.5">
              {visibleChannels.map((channel) => {
                const Icon = CHANNEL_ICONS[channel.id];
                const isExternal = channel.id !== 'email';

                return (
                  <a
                    key={channel.id}
                    href={channel.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group flex items-start justify-between gap-4 rounded-xl bg-[#141419] border border-white/[0.08] hover:border-[#FF6B35]/50 p-5 transition-colors duration-150"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="w-11 h-11 rounded-lg bg-[#0B0B0D] border border-white/10 group-hover:border-[#FF6B35]/40 flex items-center justify-center text-[#FF6B35] shrink-0 transition-colors">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white group-hover:text-[#FF6B35] transition-colors">
                          {pick(channel.label)}
                        </p>
                        <p className="mt-0.5 text-sm text-[#F5B544] truncate">
                          {channel.handle}
                        </p>
                        <p className="mt-1 text-xs text-[#A5A5AD]">
                          {pick(channel.description)}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className="w-4 h-4 text-[#A5A5AD] group-hover:text-[#FF6B35] shrink-0 mt-1 transition-colors"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>

            {hasAnyPlaceholderChannel && (
              <p className="text-xs text-[#A5A5AD]/80 leading-relaxed pt-1">
                {t.contact.placeholderNote}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

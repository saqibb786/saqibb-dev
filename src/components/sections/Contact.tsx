'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, CheckCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import emailjs from '@emailjs/browser';
import { personalInfo } from '@/lib/data';

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

/* ─── Types ─── */

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/* ─── Social Links ─── */

const socialLinks = [
  { icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: MessageCircle, href: personalInfo.whatsapp, label: 'WhatsApp' },
];

/* ─── Validation ─── */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }
  if (!data.email || !EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

/* ─── Component ─── */

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [hasAttempted, setHasAttempted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on change only after first attempt
    if (hasAttempted) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttempted(true);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setHasAttempted(false);
    setErrors({});
  };

  const isSending = status === 'sending';

  const inputBaseClass =
    'w-full rounded-lg border border-white/10 bg-dark-900 px-4 py-3 text-sm text-[#e6f1ff] placeholder:text-slate-500/50 transition-all duration-200 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/20 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="mb-16"
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-[#e6f1ff] md:text-3xl">
            <span className="font-mono text-base text-brand">05.</span>
            Get In Touch
            <span className="hidden h-px flex-1 bg-white/10 sm:block" />
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Text + Social */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-2 font-mono text-sm text-brand"
            >
              What&apos;s Next?
            </motion.p>

            <motion.h3
              variants={fadeUp}
              custom={1}
              className="mb-6 text-3xl font-bold text-[#e6f1ff] md:text-4xl"
            >
              Get In Touch
            </motion.h3>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mb-8 max-w-md text-base leading-relaxed text-slate-400"
            >
              I&apos;m currently open to new opportunities &mdash; full-time
              roles, freelance projects, or conversations about AI and
              engineering. Whether you have a question or just want to say
              hi, I&apos;ll do my best to get back to you.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex items-center gap-5"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center gap-2 text-slate-500 transition-colors duration-200 hover:text-brand"
                >
                  <social.icon size={20} strokeWidth={1.5} />
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Form Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={2}
            className="rounded-xl border border-white/5 bg-dark-800 p-8"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* ─── Success State ─── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle
                    size={56}
                    className="mb-5 text-brand"
                    strokeWidth={1.5}
                  />
                  <h4 className="mb-2 text-xl font-semibold text-[#e6f1ff]">
                    Message Sent!
                  </h4>
                  <p className="mb-8 text-sm text-slate-400">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={resetForm}
                    className="rounded-lg border border-brand/30 px-6 py-2.5 text-sm font-medium text-brand transition-all hover:bg-brand/10"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                /* ─── Form State ─── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSending}
                      className={inputBaseClass}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSending}
                      className={inputBaseClass}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSending}
                      className={inputBaseClass}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSending}
                      className={`${inputBaseClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error Banner */}
                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-400"
                      >
                        Something went wrong. Please try again or{' '}
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="underline transition-opacity hover:opacity-80"
                        >
                          email me directly
                        </a>
                        .
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-semibold text-dark-900 transition-all hover:bg-brand/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="inline-block">→</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

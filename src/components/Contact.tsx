"use client";

import { useState, FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiUser, FiMessageCircle } from "react-icons/fi";

export default function Contact() {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        // Simulate send — replace with actual email integration (e.g. EmailJS, Resend)
        await new Promise((r) => setTimeout(r, 1500));
        setSending(false);
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.06)_0%,_transparent_70%)]" />

            <div className="relative mx-auto max-w-2xl px-6">
                <SectionWrapper>
                    <h2 className="font-heading text-3xl font-bold text-center sm:text-4xl">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-center text-muted">
                        Have a project in mind or just want to say hi? Drop me a message and
                        I&apos;ll get back to you soon.
                    </p>
                </SectionWrapper>

                <SectionWrapper delay={0.15}>
                    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                        {/* Name */}
                        <div className="group relative">
                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-cyan-glow transition-colors" />
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                className="w-full rounded-xl border border-navy-lighter/50 bg-navy-light/50 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted/60 outline-none transition-all focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/30 focus:bg-navy-light"
                            />
                        </div>

                        {/* Email */}
                        <div className="group relative">
                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-cyan-glow transition-colors" />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Your Email"
                                className="w-full rounded-xl border border-navy-lighter/50 bg-navy-light/50 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted/60 outline-none transition-all focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/30 focus:bg-navy-light"
                            />
                        </div>

                        {/* Message */}
                        <div className="group relative">
                            <FiMessageCircle className="absolute left-4 top-4 text-muted group-focus-within:text-cyan-glow transition-colors" />
                            <textarea
                                name="message"
                                required
                                rows={5}
                                placeholder="Your Message"
                                className="w-full resize-none rounded-xl border border-navy-lighter/50 bg-navy-light/50 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted/60 outline-none transition-all focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/30 focus:bg-navy-light"
                            />
                        </div>

                        {/* Submit */}
                        <motion.button
                            type="submit"
                            disabled={sending}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-glow to-blue-glow py-3.5 text-sm font-semibold text-navy transition-all hover:shadow-lg hover:shadow-cyan-glow/25 disabled:opacity-70"
                        >
                            {sending ? (
                                <>
                                    <motion.div
                                        className="h-4 w-4 rounded-full border-2 border-navy border-t-transparent"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                    Sending...
                                </>
                            ) : sent ? (
                                "Message Sent! ✓"
                            ) : (
                                <>
                                    <FiSend size={16} />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </form>
                </SectionWrapper>
            </div>
        </section>
    );
}

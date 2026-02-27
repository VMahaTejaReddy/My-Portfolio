"use client";

import SectionWrapper from "./SectionWrapper";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const socials = [
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="border-t border-navy-lighter/30">
            <SectionWrapper>
                <div className="mx-auto max-w-6xl px-6 py-10">
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
                        {/* Copyright */}
                        <p className="flex items-center gap-1 text-sm text-muted">
                            © {new Date().getFullYear()} MahaTeja. Built with{" "}
                            <FiHeart className="text-cyan-glow" size={14} /> and AI
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:text-cyan-glow hover:bg-navy-light transition-all"
                                >
                                    <s.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </footer>
    );
}

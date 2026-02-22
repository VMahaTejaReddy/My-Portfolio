"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const socials = [
    { name: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com", color: "#0A66C2" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com", color: "#f0f0f0" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com", color: "#E4405F" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com", color: "#1DA1F2" },
];

export default function Social() {
    return (
        <section className="section-padding">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <SectionWrapper>
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                        Let&apos;s <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="mt-4 text-muted">
                        Find me on social media. I&apos;m always open to collaborations and conversations.
                    </p>
                </SectionWrapper>

                <SectionWrapper delay={0.15}>
                    <div className="mt-10 flex flex-wrap justify-center gap-6">
                        {socials.map((s) => (
                            <motion.a
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass group flex h-20 w-20 items-center justify-center rounded-2xl transition-shadow hover:glow-cyan"
                            >
                                <s.icon
                                    size={32}
                                    className="text-muted transition-colors group-hover:text-foreground"
                                    style={{ ["--hover-color" as string]: s.color }}
                                />
                            </motion.a>
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}

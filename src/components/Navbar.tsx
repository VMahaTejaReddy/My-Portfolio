"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("Home");
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 30);

            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActive(navLinks[i].label);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg" : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2">
                        <span className="text-xl font-bold font-heading text-gradient">
                            MahaTeja
                        </span>
                        <span className="hidden sm:inline text-muted text-sm">
                            | AI Engineer
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors duration-200 ${active === link.label
                                    ? "text-cyan-glow"
                                    : "text-muted hover:text-foreground"
                                    }`}
                            >
                                {link.label}
                                {active === link.label && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-glow rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        {/* Social */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex text-muted hover:text-cyan-glow transition-colors"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex text-muted hover:text-cyan-glow transition-colors"
                        >
                            <FaInstagram size={18} />
                        </a>

                        {/* Theme toggle */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-lg text-muted hover:text-cyan-glow hover:bg-navy-light transition-all"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                            </button>
                        )}

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 35 }}
                        className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className={`text-2xl font-heading font-semibold transition-colors ${active === link.label ? "text-cyan-glow" : "text-foreground"
                                    }`}
                            >
                                {link.label}
                            </motion.a>
                        ))}

                        <div className="flex gap-6 mt-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cyan-glow transition-colors">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cyan-glow transition-colors">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

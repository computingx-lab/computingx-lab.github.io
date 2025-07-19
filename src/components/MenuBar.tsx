import React, { useState } from "react";
import { Link } from "react-router-dom";

// MenuBar component: responsive navigation bar for all pages
const MenuBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Navigation links
    const navLinks = [
        { to: "/projects", label: "Projects" },
        { to: "/people", label: "People" },
        { to: "/publications", label: "Publications" },
        { to: "/teaching", label: "Teaching" },
        { to: "/awards", label: "Awards" },
        { to: "/service", label: "Service" },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-18">
                <div className="flex items-center">
                    {/* Home logo and title */}
                    <Link to="/" className="text-2xl bitcount-single mr-8">
                        <span className="flex flex-row items-center space-x-3">
                            <img src="/scl-pins.svg" alt="Lab Logo" className="h-15 w-auto" />
                            <span className="flex flex-col leading-tight text-xl">
                                <span>
                                    <span className="nd-blue">
                                        <span className="font-bold underline">S</span>ustainable
                                    </span>
                                </span>
                                <span>
                                    <span className="nd-gold">
                                        <span className="font-bold underline">C</span>omputing
                                    </span>
                                    <span>
                                        <span className="font-bold underline">L</span>ab
                                    </span>
                                </span>
                            </span>
                        </span>
                    </Link>
                    {/* Main navigation links */}
                    <div className="hidden md:flex space-x-4">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.to}
                                className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-lg"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* GitHub icon button, always at the far right */}
                <a
                    href="https://github.com/SCL-ND"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center ml-4 hover:opacity-80"
                    aria-label="GitHub"
                    style={{ marginLeft: "auto" }}
                >
                    <img src="/github.svg" alt="GitHub Logo" height={28} width={28} />
                </a>
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-700 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.to}
                            className="block px-4 py-2 hover:bg-gray-100 font-medium text-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default MenuBar;

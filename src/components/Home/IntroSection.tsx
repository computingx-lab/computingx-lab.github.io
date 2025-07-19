import React from "react";
import { Link } from "react-router-dom";

import projects from "../../data/projects.json";

function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

const researchThemes = projects.map((project: { title: string }) => ({
    label: project.title,
    to: `/projects#${slugify(project.title)}`,
}));

const IntroSection: React.FC = () => (
    <section className="mb-10">
        <p className="text-lg text-gray-700 mb-4 text-left max-w-2xl">
            <span className="inline-flex items-center align-middle leading-tight bitcount-single">
                <span className="inline-flex flex-row items-center space-x-1">
                    <span className="nd-blue">
                        <span className="font-bold underline">S</span>ustainable
                    </span>
                    <span className="nd-gold">
                        <span className="font-bold underline">C</span>omputing
                    </span>
                    <span>
                        <span className="font-bold underline">L</span>ab
                    </span>
                    <span>
                        (
                        <span className="nd-blue font-bold">S</span>
                        <span className="nd-gold font-bold">C</span>
                        <span className="font-bold">L</span>
                        )
                    </span>
                </span>
            </span><span> is dedicated to addressing the reliability and security challenges that emerge in problems at the device, circuit, and system scales. Supported by federal agencies, including the National Science Foundation and the Air Force Research Lab, and industry companies such as IBM, Intel, ITRI, and Ameren, we focus on four research themes:</span>
        </p>
        <ul className="max-w-xl space-y-2 text-left list-disc pl-6">
            {researchThemes.map((theme, idx) => (
                <li key={idx}>
                    <Link
                        to={theme.to}
                        className="text-stone-600 hover:underline hover:text-stone-400 text-base"
                    >
                        {theme.label}
                    </Link>
                </li>
            ))}
        </ul>
    </section>
);

export default IntroSection;

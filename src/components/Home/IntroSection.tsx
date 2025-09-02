import React from "react";

const researchThemes = [
    "Hardware/Software Co-Exploration for Machine Learning",
    "Personalized LLM on Edge Device",
    "Efficient Computing for Healthcare Applications",
    "In-Memory Computing and Emerging Technologies"
];

const IntroSection: React.FC = () => (
    <section className="mb-10">
        <p className="text-base text-gray-700 mb-1 text-left max-w-2xl">
            <span className="inline-flex items-center align-middle leading-tight bitcount-single">
                <span className="inline-flex flex-row items-center space-x-1">
                    <span className="nd-blue">
                        <span className="font-bold underline">Computing</span><span className="font-bold underline">X</span>
                    </span>
                    {/* <span className="nd-gold">
                        <span className="font-bold underline">X</span>
                    </span> */}
                    <span>
                        <span className="font-bold underline">Lab</span>
                    </span>
                    {/* <span>
                        (
                        <span className="nd-blue font-bold">C</span>
                        <span className="nd-blue font-bold">X</span>
                        <span className="font-bold">L</span>
                        )
                    </span> */}
                </span>
            </span><span> is dedicated to exploring problems and answers beyond the current computing paradigm. Our research interests span machine learning, edge computing, and emerging technologies in semiconductor and computer architecture. In particular, we aim to apply our research to the healthcare and medical domains. Additionally, we are collaborating with advanced research institutes across states and countries, including but not limited to the State University of New York at Buffalo, the University of Notre Dame, the University of Pittsburgh, Brown University, Northwestern University, North Dakota State University, and Technische Universität Braunschweig (Germany), and Fraunhofer IPMS - Center Nanoelectronic Technologies (Germany). We focus on the following research themes: 
            </span>
        </p>
        <ul className="max-w-xl text-left list-disc pl-6">
            {researchThemes.map((theme, idx) => (
                <li key={idx} className="text-base text-stone-600">
                    {theme}
                </li>
            ))}
        </ul>
    </section>
);

export default IntroSection;

import React from "react";

const researchThemes = [
    "Hardware/Software Co-Exploration for Neural Architectures",
    "On-Device Personalized AI",
    "Efficient Computing for Healthcare Applications",
];

const IntroSection: React.FC = () => (
    <section className="mb-10">
        <p className="text-base text-gray-700 mb-1 text-left max-w-2xl">
            <span className="inline-flex items-center align-middle leading-tight bitcount-single">
                <span className="inline-flex flex-row items-center space-x-1">
                    <span className="nd-blue">
                        <span className="font-bold underline">C</span>omputing
                    </span>
                    <span className="nd-gold">
                        <span className="font-bold underline">X</span>
                    </span>
                    <span>
                        <span className="font-bold underline">L</span>ab
                    </span>
                    <span>
                        (
                        <span className="nd-blue font-bold">C</span>
                        <span className="nd-gold font-bold">X</span>
                        <span className="font-bold">L</span>
                        )
                    </span>
                </span>
            </span><span> is dedicated to addressing the challenges in deploying state-of-the-art machine learning models on edge devices with limited resources. Our research interests span the device, circuit, and system scales, with cross-layer design in the focus. We are particularly interested in the applications of our research in the healthcare domain, through extensive collaboration with leading medical centers worldwide. Supported by federal agencies, including the National Science Foundation (NSF), National Institute of Health (NIH), Advanced Research Projects Agency for Health (ARPA-H), and many companies, we focus on three research themes:
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

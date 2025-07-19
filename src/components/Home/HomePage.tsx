import React from "react";
import IntroSection from "./IntroSection";
import NewsSection from "./NewsSection";
import DirectorSection from "./DirectorSection";

const HomePage: React.FC = () => (
    <div>
        <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="w-full md:w-15/30">
                <IntroSection />
            </div>
            <div className="w-full md:w-15/30">
                <NewsSection />
            </div>
        </div>
        <div>
            <DirectorSection />
        </div>
        <figure className="flex flex-col items-center">
            <img
                src="images/whole_group.jpg"
                alt="Group Photo"
                className="w-full max-w-2xl h-80 object-cover rounded shadow"
            />
            <figcaption className="mt-2 text-sm text-gray-600 text-center">
                Group photo from our bowling outing in South Bend, July 15, 2024.
            </figcaption>
        </figure>
    </div>
);

export default HomePage;

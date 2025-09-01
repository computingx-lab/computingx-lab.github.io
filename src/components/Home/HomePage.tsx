import React from "react";
import IntroSection from "./IntroSection";
import NewsSection from "./NewsSection";
import DirectorSection from "./DirectorSection";

const HomePage: React.FC = () => (
    <div>
        <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="w-full md:w-17/30">
                <IntroSection />
            </div>
            <div className="w-full md:w-13/30">
                <NewsSection />
            </div>
        </div>
        <div>
            <DirectorSection />
        </div>
        <div>
            <AnnouncementSection />
        </div>
    </div>
);

export default HomePage;

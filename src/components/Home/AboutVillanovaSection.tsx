import React from "react";

// AboutVillanovaSection: Photo gallery about Villanova University
const AboutVillanovaSection: React.FC = () => (
  <section className="mb-10">
    <div className="flex flex-col max-w-5xl mx-auto bg-white rounded-lg shadow px-4 md:px-8 py-6">
      <h3 className="text-xl font-semibold text-stone-500 mb-4">About Villanova University</h3>
      <p className="text-gray-700 mb-4 text-sm">
        Villanova University is a prestigious, rapidly growing national research university founded in 1842—making it the oldest Catholic university in Pennsylvania. Since 2016, it has been classified as a <strong>“High Research Activity”</strong> institution, joining the ranks of America’s national universities.  
        In FY 2023, Villanova’s total research and development expenditures reached <strong>$31.5 million</strong>, up from approximately <strong>$26.0 million</strong> in FY 2022—an impressive <strong>21% year-over-year growth</strong>, highlighting our accelerating momentum in innovation and scholarship.
        The College of Engineering supports cutting-edge discovery across multiple centers, with sustained funding from agencies such as NSF, NIH, DoD, ONR, and DARPA.  
        The ECE department, with its deep heritage, excels in areas such as advanced communications, embedded systems, robotics, signal processing, biomedical engineering, and machine learning. Notably, the Center for Advanced Communications has garnered multi-million dollar grants from federal agencies.  
        At Villanova, academic rigor harmonizes with scenic campuses and collaborative spirit—offering an environment where groundbreaking ideas and student growth thrive.
        Here are some glimpses of our beautiful campus:
      </p>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
          src="images/nova_chapel.jpg"
          alt="Villanova Campus 1"
          className="w-full aspect-square object-cover rounded-lg shadow-sm"
        />
        <img
          src="images/nova_location.jpg"
          alt="Villanova Campus 2"
          className="w-full aspect-square object-cover rounded-lg shadow-sm"
        />
        <img
          src="images/nova_ranking.jpg"
          alt="Villanova Campus 3"
          className="w-full aspect-square object-cover rounded-lg shadow-sm"
        />
        <img
          src="images/nova_pope.jpg"
          alt="Villanova Campus 4"
          className="w-full aspect-square object-cover rounded-lg shadow-sm"
        />
        <img
          src="images/nova_eng.jpg"
          alt="Villanova Campus 5"
          className="w-full aspect-square object-cover rounded-lg shadow-sm"
        />
        <img
          src="images/nova_eng_internal.jpg"
          alt="Villanova Campus 6"
          className="w-full aspect-square object-cover rounded-lg shadow-sm"
        />
        {/* 你可以继续加更多照片 */}
      </div>
    </div>
  </section>
);

export default AboutVillanovaSection;

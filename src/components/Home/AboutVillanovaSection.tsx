import React from "react";

// AboutVillanovaSection: Photo gallery about Villanova University
const AboutVillanovaSection: React.FC = () => (
  <section className="mb-10">
    <div className="flex flex-col max-w-5xl mx-auto bg-white rounded-lg shadow px-4 md:px-8 py-6">
      <h3 className="text-xl font-semibold text-stone-500 mb-4">About Villanova University</h3>
      <p className="text-gray-700 mb-4 text-sm">
        Villanova University is a nationally recognized Catholic research university located in Villanova, Pennsylvania. 
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

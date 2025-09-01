import React from "react";

// AnnouncementSection: recruitment info (PhD, Intern, Chat)
const AnnouncementSection: React.FC = () => (
    <section className="mb-10">
        <div className="flex flex-col max-w-5xl mx-auto bg-white rounded-lg shadow px-4 md:px-8 py-6">
            <h3 className="text-xl font-semibold text-stone-500 mb-4">Recruitment</h3>

            {/* For PhD Applicants */}
            <p className="text-gray-700 mb-3 text-sm">
                <span className="font-semibold">PhD Opportunities: </span> 
                We are looking for highly motivated PhD students to join our group at Villanova University. 
                Candidates with interests in machine learning, edge computing, hardware intelligence, or biomedical applications are strongly encouraged to apply.
            </p>

            {/* For Research Intern Applicants */}
            <p className="text-gray-700 mb-3 text-sm">
                <span className="font-semibold">Internships: </span> 
                We welcome research interns (undergraduate or master’s level) who are excited about exploring emerging technologies and AI for healthcare. 
                Interns will have the chance to collaborate with graduate students and contribute to ongoing projects.
            </p>

            {/* Chat / Contact */}
            <p className="text-gray-700 mb-1 text-sm">
                <span className="font-semibold">Chat with Us: </span> 
                If you are curious about our work or want to discuss potential collaborations, please don’t hesitate to reach out. 
            </p>

            {/* Email */}
            <p className="text-center text-sm text-gray-600 mt-4">
                📧 <span className="font-mono">rqin AT villanova DOT edu</span>
            </p>
        </div>
    </section>
);

export default AnnouncementSection;

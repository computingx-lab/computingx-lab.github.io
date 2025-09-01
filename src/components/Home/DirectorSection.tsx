import React from "react";

// DirectorSection: Director photo, name, bio, and CV download
const DirectorSection: React.FC = () => (
    <section className="mb-10">
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto bg-white rounded-lg shadow px-2 md:px-6 py-6">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <div className="flex justify-center">
                    <img
                        src="images/Ruiyang_Profile.jpg"
                        alt="Dr. Ruiyang Qin"
                        className="w-32 h-44 rounded-lg object-cover border-gray-400"
                    />
                </div>
                <figcaption className="text-center text-base text-gray-600 mt-2">Dr. Ruiyang Qin</figcaption>
                <div className="flex justify-center">
                    <a
                        href="files/cv-shi.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center text-xs inline-block mt-2 px-4 py-2 bg-stone-600 text-white rounded hover:bg-stone-400 transition"
                    >
                        Curriculum Vitae
                    </a>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-stone-500 mb-2">Director</h3>
                <p className="text-gray-700 mb-2 text-sm">
                    Dr. Ruiyang Qin is currently an assistant professor in the Department of Electrical and Computer Engineering at Villanova University. He received his B.S./M.S. in Computer Science from Georgia Institute of Technology (2017 - 2021) and Ph.D. in Computer Science and Engineering from the University of Notre Dame (2022 - 2025).
                </p>
                <p className="text-gray-700 mb-2 text-sm">
                    His current research interests focus on hardware intelligence and biomedical applications. In recognition of his research, more than a dozen of his papers have been nominated for or awarded as the best paper in top journals and conferences, including the 2021 IEEE Transactions on Computer-Aided Design Donald O Pederson Best Paper Award.
                    {/* He is also the recipient of Facebook Research Award, IBM Invention Achievement Award, Japan Society for the Promotion of Science (JSPS) Faculty Invitation Fellowship, Humboldt Research Fellowship, IEEE St. Louis Section Outstanding Educator Award, Academy of Science (St. Louis) Innovation Award, Missouri S&T Faculty Excellence Award, NSF CAREER Award, IEEE Region 5 Outstanding Individual Achievement Award, the Air Force Summer Faculty Fellowship, and IEEE Computer Society Mid-Career Research Achievement Award. */}
                    {/* He has served on the technical program committee of many international conferences. He is the deputy editor-in-chief of IEEE VLSI CAS Newsletter, and an associate editor of various IEEE and ACM journals. He is an IEEE CEDA distinguished lecturer and an ACM distinguished speaker. */}
                </p>
            </div>
        </div>
    </section>
);

export default DirectorSection;

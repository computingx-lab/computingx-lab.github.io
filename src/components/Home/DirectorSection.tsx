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
                    Dr. Ruiyang Qin is currently an assistant professor in the Department of Electrical and Computer Engineering at Villanova University. He is the director of the ComputingX Lab. He received his B.S./M.S. in Computer Science from Georgia Institute of Technology (2017 - 2021) and Ph.D. in Computer Science and Engineering from the University of Notre Dame (2022 - 2025).
                </p>
                <p className="text-gray-700 mb-2 text-sm">
                    In recognition of his research, more than a dozen of his papers have been published in top journals and conferences, including ACM Transactions on Design Automation of Electronic Systems, ACM/IEEE Design Automation Conference, IEEE/ACM International Conference on Computer-Aided Design, Design, Automation & Test in Europe Conference & Exhibition, Asia and South Pacific Design Automation Conference, International Conference on Machine Learning, International Conference on Learning Representations, the Association for Computational Linguistics. In the very early stages of his career, his work has been nominated William J. McCalla Best Paper in ICCAD 2024 and Spotlight Paper in ICLR 2025. 
                    He also serves as reviewer and PC member in top journals and conferences, including Nature Machine Intelligence, npj Digital Medicine, Nature Scientific Report, IEEE Transactions on Mobile Computing, IEEE Intelligent Systems, ICCAD, ICCD, NeurIPS, ICLR, AAAI, AISTATS, and RO-MAN.
                    {/* He is also the recipient of Facebook Research Award, IBM Invention Achievement Award, Japan Society for the Promotion of Science (JSPS) Faculty Invitation Fellowship, Humboldt Research Fellowship, IEEE St. Louis Section Outstanding Educator Award, Academy of Science (St. Louis) Innovation Award, Missouri S&T Faculty Excellence Award, NSF CAREER Award, IEEE Region 5 Outstanding Individual Achievement Award, the Air Force Summer Faculty Fellowship, and IEEE Computer Society Mid-Career Research Achievement Award. */}
                    {/* He has served on the technical program committee of many international conferences. He is the deputy editor-in-chief of IEEE VLSI CAS Newsletter, and an associate editor of various IEEE and ACM journals. He is an IEEE CEDA distinguished lecturer and an ACM distinguished speaker. */}
                </p>
            </div>
            import React from "react";

// DirectorSection: Director photo, name, bio, CV download, and social links
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
                    Dr. Ruiyang Qin is currently an assistant professor in the Department of Electrical and Computer Engineering at Villanova University. He is the director of the ComputingX Lab. He received his B.S./M.S. in Computer Science from Georgia Institute of Technology (2017 - 2021) and Ph.D. in Computer Science and Engineering from the University of Notre Dame (2022 - 2025).
                </p>
                <p className="text-gray-700 mb-2 text-sm">
                    In recognition of his research, more than a dozen of his papers have been published in top journals and conferences, including ACM Transactions on Design Automation of Electronic Systems, ACM/IEEE Design Automation Conference, IEEE/ACM International Conference on Computer-Aided Design, Design, Automation & Test in Europe Conference & Exhibition, Asia and South Pacific Design Automation Conference, International Conference on Machine Learning, International Conference on Learning Representations, the Association for Computational Linguistics. In the very early stages of his career, his work has been nominated William J. McCalla Best Paper in ICCAD 2024 and Spotlight Paper in ICLR 2025. 
                    He also serves as reviewer and PC member in top journals and conferences, including Nature Machine Intelligence, npj Digital Medicine, Nature Scientific Report, IEEE Transactions on Mobile Computing, IEEE Intelligent Systems, ICCAD, ICCD, NeurIPS, ICLR, AAAI, AISTATS, and RO-MAN.
                </p>

                <div className="flex items-center space-x-4 mt-3">
                    <a
                        href="https://www.linkedin.com/in/ruiyang-qin-gatech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition"
                    >
                        <img src="icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5 inline-block mr-1" />
                        LinkedIn
                    </a>
                    <a
                        href="https://scholar.google.com/citations?user=c26FtWIAAAAJ&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition"
                    >
                        <img src="icons/scholar.svg" alt="Google Scholar" className="h-5 w-5 inline-block mr-1" />
                        Google Scholar
                    </a>
                </div>
        </div>
    </section>
);

export default DirectorSection;

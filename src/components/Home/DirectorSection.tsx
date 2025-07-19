import React from "react";

// DirectorSection: Director photo, name, bio, and CV download
const DirectorSection: React.FC = () => (
    <section className="mb-10">
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto bg-white rounded-lg shadow px-2 md:px-6 py-6">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <div className="flex justify-center">
                    <img
                        src="images/dryiyu.jpeg"
                        alt="Dr. Yiyu Shi"
                        className="w-32 h-44 rounded-lg object-cover border-gray-400"
                    />
                </div>
                <figcaption className="text-center text-base text-gray-600 mt-2">Dr. Yiyu Shi</figcaption>
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
                    Dr. Yiyu Shi is currently a professor in the Department of Computer Science and Engineering at the University of Notre Dame, the site director of National Science Foundation I/UCRC Alternative and Sustainable Intelligent Computing, and the director of the Sustainable Computing Lab (SCL).
                    He is also a visiting scientist at Boston Children's Hospital, the primary pediatric program of Harvard Medical School. He received his B.S. in Electronic Engineering from Tsinghua University, Beijing, China in 2005, and the M.S and Ph.D. degrees in Electrical Engineering from the University of California, Los Angeles in 2007 and 2009 respectively.
                </p>
                <p className="text-gray-700 mb-2 text-sm">
                    His current research interests focus on hardware intelligence and biomedical applications. In recognition of his research, more than a dozen of his papers have been nominated for or awarded as the best paper in top journals and conferences, including the 2021 IEEE Transactions on Computer-Aided Design Donald O Pederson Best Paper Award.
                    He is also the recipient of Facebook Research Award, IBM Invention Achievement Award, Japan Society for the Promotion of Science (JSPS) Faculty Invitation Fellowship, Humboldt Research Fellowship, IEEE St. Louis Section Outstanding Educator Award, Academy of Science (St. Louis) Innovation Award, Missouri S&T Faculty Excellence Award, NSF CAREER Award, IEEE Region 5 Outstanding Individual Achievement Award, the Air Force Summer Faculty Fellowship, and IEEE Computer Society Mid-Career Research Achievement Award.
                    He has served on the technical program committee of many international conferences. He is the deputy editor-in-chief of IEEE VLSI CAS Newsletter, and an associate editor of various IEEE and ACM journals. He is an IEEE CEDA distinguished lecturer and an ACM distinguished speaker.
                </p>
            </div>
        </div>
    </section>
);

export default DirectorSection;

import "../assets/Resume.css";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      id="resume"
      className="md:ml-[300px] py-[20px]"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-[90%] mx-auto">
        <div className="mb-[20px] ">
          <h2 className="font-semibold text-[30px] border-b-4 border-[#1497de] inline-block pb-[10px] mb-[20px] ">
            Resume
          </h2>
        </div>
        <p className="mb-[30px]">
          Passionate about programming, I have been working as a junior
          developer for over a year with a strong focus on Python and
          JavaScript. I am excited to broaden my horizons and become a
          full-stack developer. I am currently investing in learning backend
          development, DevOps, and cloud technologies to achieve this goal
          within the next two years.
        </p>
        <div>
          <div className="mb-[40px]">
            <h3 className="font-semibold text-[25px] mb-[15px]">Education</h3>
            <div className="resume-line relative pl-[20px] mb-[40px]">
              <p className="uppercase font-semibold text-lg text-[#9f9082]">
                Bachelor of Engineering in Information Technology
              </p>
              <p className="ml-[20px] mt-[5px] mb-[20px] text-md font-semibold">
                2021 - Present
              </p>
              <p className="italic mb-[20px]">
                Hanoi University of Mining and Geology
              </p>
              <p>
                The program offers a well-rounded IT education with
                specialization tracks. By focusing on Data, I&apos;ve developed
                the technical expertise necessary to excel in web development.
              </p>
            </div>
            <div className="resume-line relative pl-[20px]">
              <p className="uppercase font-semibold text-lg text-[#9f9082]">
                F8 Learner
              </p>
              <p className="ml-[20px] mt-[5px] mb-[20px] text-md font-semibold">
                3/2024 - 9/2024
              </p>
              <p className="italic mb-[20px]">F8 Education Technology</p>
              <ul className="mb-[20px] list-inside">
                <li className="list-disc mb-[15px]">
                  Intensive training in Web, basic components when building
                  websites (Frontend, Backend, Database).
                </li>
                <li className="list-disc mb-[15px]">
                  Understand basic concepts and how to prevent basic forms of
                  web attacks (XSS, CSRF, SQLi, ...).
                </li>
                <li className="list-disc mb-[15px]">
                  Possess a solid foundational knowledge of Web.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[25px] mb-[15px]">
              Professional Experience
            </h3>
            <div className="resume-line__second relative pl-[20px] mb-[30px]">
              <p className="uppercase font-semibold text-lg text-[#9f9082]">
                Leader Team Intern Frontend
              </p>
              <p className="ml-[20px] mt-[5px] mb-[20px] text-md font-semibold">
                09/2024 - 12/2024
              </p>
              <p className="italic mb-[20px]">3i Software</p>
              <ul className="mb-[20px] list-inside">
                <li className="list-disc mb-[15px]">
                  Teck stacks: TailwindCSS, Scss, Javascript, ReactJS, NextJS
                </li>
                <li className="list-disc mb-[15px]">
                  Developed the user interface for an e-commerce website selling
                  Ngoc Linh Ginseng.
                </li>
                <li className="list-disc mb-[15px]">
                  Created templates for clients based on Figma standards.
                </li>
                <li className="list-disc mb-[15px]">
                  Communicated with clients about the user interface.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

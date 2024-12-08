import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      id="about"
      className="md:ml-[300px] py-[20px] "
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-[90%] mx-auto ">
        <div className="mb-[20px] ">
          <h2 className="font-semibold text-[30px] border-b-4 border-[#1497de] inline-block pb-[10px] mb-[20px] ">
            About
          </h2>
          <p className="justify-center ">
            I am Thanh, a native of Dong Anh, Ha Noi. With a lifelong curiosity, I have always been driven to learn and discover new things. People often describe me as humorous, with a penchant for joking and occasional mischief.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] items-center justify-center">
          <div className="md:w-[34.33%]">
            <img
              src="./img/avatar.jpg"
              alt="avatar"
              className="mx-auto w-full h-full flex-1"
            />
          </div>
          <div className="md:w-[66.66%]">
            <p className="py-[20px] font-bold text-[25px]">
              Intern Web Developer.
            </p>
            <p className="pb-[20px] italic text-[18px]">Personal Information</p>
            <ul className="flex flex-col gap-[20px]">
              <li className="flex items-center gap-[5px]">
                <MdKeyboardArrowRight className="text-[#1497de] text-2xl" />
                <p>
                  <span className="font-semibold mr-[5px]">Nick name:</span>Bear
                </p>
              </li>
              <li className="flex items-center gap-[5px]">
                <MdKeyboardArrowRight className="text-[#1497de] text-2xl" />
                <p>
                  <span className="font-semibold mr-[5px]">Phone:</span>
                  0982183703
                </p>
              </li>
              <li className="flex items-center gap-[5px]">
                <MdKeyboardArrowRight className="text-[#1497de] text-2xl" />
                <p>
                  <span className="font-semibold mr-[5px]">City: </span>Hanoi,
                  Vietnam
                </p>
              </li>
              <li className="flex items-center gap-[5px]">
                <MdKeyboardArrowRight className="text-[#1497de] text-2xl" />
                <p>
                  <span className="font-semibold mr-[5px]">Birthday: </span>27
                  July 2003
                </p>
              </li>
              <li className="flex items-center gap-[5px]">
                <MdKeyboardArrowRight className="text-[#1497de] text-2xl" />
                <p>
                  <span className="font-semibold mr-[5px]">Degree: </span>
                  Bachelor of Engineering
                </p>
              </li>
              <li className="flex items-center gap-[5px]">
                <MdKeyboardArrowRight className="text-[#1497de] text-2xl" />
                <p>
                  <span className="font-semibold mr-[5px]">Email:</span>
                  thanhdinhtien2003@gmail.com
                </p>
              </li>
              <li className="flex items-center gap-[5px]">
                <MdKeyboardArrowRight className="text-[#1497de] text-2xl" />
                <p>
                  <span className="font-semibold mr-[5px]">Github: </span>
                  github.com/kirothanh
                </p>
              </li>
            </ul>
            <p className="py-[25px] text-justify">
              I&apos;m also really into running and boxing at home. I enjoy listening and connecting with others. If you&apos;d like to have a conversation, feel free to reach out to me!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

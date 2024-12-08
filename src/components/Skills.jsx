import { FaBorderAll, FaCode } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { IoReorderThreeOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      id="skills"
      className="md:ml-[300px] py-[60px] bg-[#f5fafe]"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-[90%] mx-auto">
        <div className="mb-[20px] ">
          <h2 className="font-semibold text-[30px] border-b-4 border-[#1497de] inline-block pb-[10px] mb-[20px] ">
            Skills
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-[20px] w-full mb-[40px]">
          <div className="w-full">
            <div className="flex items-center gap-[10px] mb-[15px]">
              <FaCode className="bg-[#81807e]  px-[4px] rounded-md w-[30px] h-[40px] text-white " />
              <p className="text-2xl font-[500] ">Front-End Technologies</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] w-full">
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                Javascript
              </div>
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                HTML
              </div>
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                CSS
              </div>
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                TailwindCSS
              </div>
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                Bootstrap
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-[10px] mb-[15px]">
              <FaBorderAll className="bg-[#81807e]  px-[4px] rounded-md w-[30px] h-[40px] text-white " />
              <p className="text-2xl font-[500] ">Frameworks</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] w-full">
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                ReactJS
              </div>
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                NextJS
              </div>
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                NodeJS
              </div>
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                Express
              </div>
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                NestJS
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-[20px] w-full mb-[20px]">
          <div className="w-full">
            <div className="flex items-center gap-[10px] mb-[15px]">
              <BsTools className="bg-[#81807e]  px-[4px] rounded-md w-[30px] h-[40px] text-white " />
              <p className="text-2xl font-[500] ">Developer Tools</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] w-full">
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                Git
              </div>
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                Github
              </div>
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                VS Code
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-[10px] mb-[15px]">
              <IoReorderThreeOutline className="bg-[#81807e]  px-[4px] rounded-md w-[30px] h-[40px] text-white " />
              <p className="text-2xl font-[500] ">Others</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] w-full">
              <div className="text-center w-full py-[13px] px-[30px] rounded-lg border-2 border-[#cdd0d2] hover:bg-slate-400 hover:text-white transition duration-300 cursor-pointer">
                Toeic 595
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import {
  MdMailOutline,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      id="contact"
      className="md:ml-[300px] py-[20px] "
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-[90%] mx-auto">
        <div className="mb-[20px] ">
          <h2 className="font-semibold text-[30px] border-b-4 border-[#1497de] inline-block pb-[10px] mb-[20px] ">
            Contact
          </h2>
          <p>Here is my contact information. Feel free to reach out if you have any questions.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[20px]">
          <div className="shadow-md p-[20px] w-full">
            <div className="flex items-center gap-[20px] mb-[30px]">
              <div>
                <MdOutlineLocationOn className="w-[45px] h-[45px] bg-[#95cdec]  rounded-full p-[10px]" />
              </div>
              <div>
                <p className="font-semibold text-lg">Address</p>
                <p className="text-md">
                  Neighborhood No. 23, Dong Anh Town
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px] mb-[30px]">
              <div>
                <MdOutlineLocalPhone className="w-[45px] h-[45px] bg-[#95cdec]  rounded-full p-[10px]" />
              </div>
              <div>
                <p className="font-semibold text-lg">Call Me</p>
                <p className="text-md">0982183703</p>
              </div>
            </div>
            <div className="flex items-center gap-[20px] mb-[30px]">
              <div>
                <MdMailOutline className="w-[45px] h-[45px] bg-[#95cdec]  rounded-full p-[10px]" />
              </div>
              <div>
                <p className="font-semibold text-lg">Email Me</p>
                <p className="text-md">thanhdinhtien@gmail.com</p>
              </div>
            </div>
            <div>
              <iframe
                width="400"
                height="250"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=T%E1%BB%95%20D%C3%A2n%20Ph%E1%BB%91%20S%E1%BB%91%2023%20Th%E1%BB%8B%20Tr%E1%BA%A5n%20%C4%90%C3%B4ng%20Anh&zoom=10&maptype=roadmap"
                style={{
                  border: 0,
                  position: "relative",
                  zIndex: 2,
                }}
              ></iframe>
            </div>
          </div>
          <div className="shadow-md p-[20px] w-full">
            <p className="font-semibold text-xl mb-[20px]">Send me a message, I will reply soon &lt;3</p>
            <div>
              <form action="">
                <div className="flex flex-col md:flex-row gap-[20px] w-full mb-[20px]">
                  <div className="w-full">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" className="border-2 mt-[10px] border-black outline-none block p-2 w-full focus:border-[#1497de] focus:placeholder:text-[black] transition duration-300" placeholder="Your name" />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email">Your Email</label>
                    <input type="text" id="email" className="border-2 mt-[10px] border-black outline-none block p-2 w-full focus:border-[#1497de] focus:placeholder:text-[black] transition duration-300" placeholder="Your email" />
                  </div>
                </div>
                <div className="mb-[20px]">
                  <label htmlFor="name">Subject</label>
                  <input type="text" id="name" className="border-2 mt-[10px] border-black outline-none block p-2 w-full focus:border-[#1497de] focus:placeholder:text-[black] transition duration-300" placeholder="Subject" />
                </div>
                <div className="mb-[20px]">
                  <label htmlFor="name">Message</label>
                  <textarea type="text" id="name" className="border-2 mt-[10px] border-black outline-none block p-2 w-full focus:border-[#1497de] focus:placeholder:text-[black] transition duration-300 h-[200px] resize-none" placeholder="Message" />
                </div>
                <div className="mx-auto w-full flex items-center justify-center">
                  <button className="capitalize text-md bg-[#1497de] text-white py-[10px] px-[20px] rounded-full hover:bg-[#90cbec] transition duration-300 ">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

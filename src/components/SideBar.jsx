import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegUser,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoImagesOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import BarClick from "./BarClick";

export default function SideBar() {
  const [selected, setSelected] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (id) => {
    setSelected(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`w-[300px] bg-[#040b15] text-[#fff] px-[5px] fixed left-0 top-0 h-screen transform ${isOpen ? "translate-x-[0]" : "-translate-x-[100%]"
          } md:translate-x-[0] transition-transform duration-300 z-[999]`}
      >
        <div className="profile-img w-full py-[15px]">
          <img
            src="/img/avatar.jpg"
            alt="avatar"
            className="w-[120px] h-[120px] object-cover rounded-full border-[4px] border-green-[#292e39] mx-auto"
          />
        </div>
        <p className="font-bold text-2xl text-center mb-[15px]">
          Dinh Tien Thanh
        </p>
        <div className="flex items-center justify-center gap-[10px]">
          <a
            href="https://www.facebook.com/profile.php?id=100014969408246"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#292e39] hover:bg-[#1497de] p-[10px] rounded-full transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#292e39] hover:bg-[#1497de] p-[10px] rounded-full transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/kirothanh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#292e39] hover:bg-[#1497de] p-[10px] rounded-full transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#292e39] hover:bg-[#1497de] p-[10px] rounded-full transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
        <ul className="flex items-start flex-col my-[20px] ml-[15px]">
          <li
            className={`group flex items-center gap-[10px] w-full py-[15px] px-[10px] cursor-pointer transition duration-300 ${selected === "home" ? "bg-[#1497de]" : ""
              }`}
            onClick={() => handleScrollToSection("home")}
          >
            <IoHomeOutline
              className={`transition duration-300 ${selected === "home"
                ? "text-white"
                : "group-hover:text-[#1497de]"
                }`}
            />
            <span
              className={`capitalize font-semibold ${selected === "home" ? "text-white" : "text-[#90919c]"
                } group-hover:text-[#fff] transition duration-300`}
            >
              home
            </span>
          </li>
          <li
            className={`group flex items-center gap-[10px] w-full py-[15px] px-[10px] cursor-pointer transition duration-300 ${selected === "about" ? "bg-[#1497de]" : ""
              }`}
            onClick={() => handleScrollToSection("about")}
          >
            <FaRegUser
              className={`transition duration-300 ${selected === "about"
                ? "text-white"
                : "group-hover:text-[#1497de]"
                }`}
            />
            <span
              className={`capitalize font-semibold ${selected === "about" ? "text-white" : "text-[#90919c]"
                } group-hover:text-[#fff] transition duration-300`}
            >
              about
            </span>
          </li>
          <li
            className={`group flex items-center gap-[10px] w-full py-[15px] px-[10px] cursor-pointer transition duration-300 ${selected === "resume" ? "bg-[#1497de]" : ""
              }`}
            onClick={() => handleScrollToSection("resume")}
          >
            <IoDocumentTextOutline
              className={`transition duration-300 ${selected === "resume"
                ? "text-white"
                : "group-hover:text-[#1497de]"
                }`}
            />
            <span
              className={`capitalize font-semibold ${selected === "resume" ? "text-white" : "text-[#90919c]"
                } group-hover:text-[#fff] transition duration-300`}
            >
              resume
            </span>
          </li>
          <li
            className={`group flex items-center gap-[10px] w-full py-[15px] px-[10px] cursor-pointer transition duration-300 ${selected === "portfolio" ? "bg-[#1497de]" : ""
              }`}
            onClick={() => handleScrollToSection("portfolio")}
          >
            <IoImagesOutline
              className={`transition duration-300 ${selected === "portfolio"
                ? "text-white"
                : "group-hover:text-[#1497de]"
                }`}
            />
            <span
              className={`capitalize font-semibold ${selected === "portfolio" ? "text-white" : "text-[#90919c]"
                } group-hover:text-[#fff] transition duration-300`}
            >
              portfolio
            </span>
          </li>
          <li
            className={`group flex items-center gap-[10px] w-full py-[15px] px-[10px] cursor-pointer transition duration-300 ${selected === "contact" ? "bg-[#1497de]" : ""
              }`}
            onClick={() => handleScrollToSection("contact")}
          >
            <MdOutlineMailOutline
              className={`transition duration-300 ${selected === "contact"
                ? "text-white"
                : "group-hover:text-[#1497de]"
                }`}
            />
            <span
              className={`capitalize font-semibold ${selected === "contact" ? "text-white" : "text-[#90919c]"
                } group-hover:text-[#fff] transition duration-300`}
            >
              contact
            </span>
          </li>
        </ul>
      </div>
      <BarClick toggleMenu={toggleMenu} isOpen={isOpen} />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Portfolio() {
  const images = [
    {
      img: "/img/port_1.jpg",
      title: "Second prize in student science at the sub-committee level",
    },
    {
      img: "/img/port_2.jpg",
      title: "Excellent students for the first semester of 2023-2024",
    },
    {
      img: "/img/port_3.jpg",
      title: "Highest GPA for the 2023-2024 school year",
    },
    {
      img: "/img/port_4.jpg",
      title: "Consolation prize for English Olympiad at school level",
    },
    {
      img: "/img/port_5.png",
      title: "Mindmap Project",
      githubLink: "Git: https://github.com/kirothanh/Mindmap-Project-F8",
      deployLink: "Deploy: https://mindmap-project-f8.vercel.app/"
    },
    {
      img: "/img/port_6.png",
      title: "Cart Project Using Redux Toolkit",
      githubLink: "Git: https://github.com/kirothanh/Cart_ECommerce_F8",
      deployLink: "Deploy: https://cart-e-commerce-f8.vercel.app/"
    },
    {
      img: "/img/port_7.png",
      title: "Guess Number Game",
      githubLink: "Git: https://github.com/kirothanh/Homework45-Ref",
      deployLink: "Deploy: https://homework45-ref.vercel.app/"
    },
  ];

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(min-width:601px) and (max-width:900px)");
  const columns = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  return (
    <motion.div
      id="portfolio"
      className="md:ml-[300px] py-[20px] bg-[#f5fafe]"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-[90%] mx-auto">
        <div className="mb-[20px]">
          <h2 className="font-semibold text-[30px] border-b-4 border-[#1497de] inline-block pb-[10px] mb-[10px]">
            Portfolio
          </h2>
        </div>
        <p className="text-lg mb-[20px]">
          Awards, certificates I have achieved and projects I have participated
          in.
        </p>
        <PhotoProvider>
          <ImageList variant="quilted" cols={columns} gap={8}>
            {images.map((item, index) => (
              <ImageListItem
                key={index}
                className="relative group overflow-hidden h-full"
              >
                <PhotoView src={item.img}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="rounded-lg w-full cursor-pointer object-cover h-full"
                    style={{ display: "block" }}
                  />
                </PhotoView>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex flex-col transition-opacity duration-300">
                  <span className="text-md font-semibold py-[10px] text-center p-2">{item.title} </span>
                  <span className="text-[12px] text-left p-2">{item.githubLink}</span>
                  <span className="text-[12px] text-left p-2">{item.deployLink}</span>
                </div>
              </ImageListItem>
            ))}
          </ImageList>
        </PhotoProvider>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Typewriter from "@/utils/Typewriter";
import React from "react";

export default function Home() {
  return (
    <div
      id="home"
      className="overflow-hidden md:ml-[300px] relative  h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/img/background.jpg')" }}
    >
      <div className="absolute inset-0 flex flex-col items-start justify-center px-[10px]">
        <motion.div
          className="animate-slide-in-out flex gap-2 mb-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-white text-[70px] font-semibold">
            Dinh Tien Thanh
          </h1>
        </motion.div>

        <motion.div
          className="flex gap-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h1 className="text-white text-3xl font-semibold">I&apos;m</h1>
          <h1 className="text-white text-3xl font-semibold border-b-2 border-[#1497de]">
            <Typewriter text="Intern Web Developer" speed={150} loop={true} />
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

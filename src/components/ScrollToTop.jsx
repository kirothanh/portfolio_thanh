"use client";

import { useEffect, useState } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > +100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div onClick={handleScrollToTop}>
        <HiArrowNarrowUp className="fixed w-[45px] h-[45px] bg-[#1497de] rounded-full p-[10px] right-[15px] z-[999] bottom-[15px] text-white cursor-pointer hover:bg-[#8cafcb] transition duration-300" />
      </div>
    )
  );
}

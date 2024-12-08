import { HiOutlineBars3 } from "react-icons/hi2";

export default function BarClick({ toggleMenu, isOpen }) {
  return (
    <div>
      <HiOutlineBars3 onClick={toggleMenu} className="md:hidden fixed w-[45px] h-[45px] bg-[#1497de] rounded-full p-[10px] right-[15px] z-[999] top-[15px] text-white cursor-pointer hover:bg-[#8cafcb] transition duration-300" />
    </div>
  )
}

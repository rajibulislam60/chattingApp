import React from 'react';
import ProfileImage from "../assets/profile.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { ImExit } from "react-icons/im";

const Sidebar = () => {
  return (
    <div className=" h-screen px-8 py-9 ">
      <div className="w-[186px] h-full bg-primary rounded-[20px] text-center">
        <div className="mx-auto pt-9">
          <img
            className="w-[100px] h-[100px] rounded-full  inline-block"
            src={ProfileImage}
            alt="profile Image"
          />
        </div>
        <div className="w-full h-[88px] relative mt-[78px] ">
          <div className="w-[161px] h-[88px] bg-white ml-auto flex items-center rounded-s-[20px] after:w-[8px] after:h-full after:top-0 after:right-0 after:absolute after:bg-primary after:rounded-s-[20px] after:shadow-red-900 after:shadow-2xl"></div>
          <IoHomeOutline className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-primary" />
        </div>
        <div className="w-full h-[88px] relative mt-[57px] ">
          <div className="hidden w-[161px] h-[88px] bg-white ml-auto items-center rounded-s-[20px] after:w-[8px] after:h-full after:top-0 after:right-0 after:absolute after:bg-primary after:rounded-s-[20px] after:shadow-red-900 after:shadow-2xl"></div>
          <AiFillMessage className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-slate-200" />
        </div>
        <div className="w-full h-[88px] relative mt-[57px] ">
          <div className="hidden w-[161px] h-[88px] bg-white ml-auto items-center rounded-s-[20px] after:w-[8px] after:h-full after:top-0 after:right-0 after:absolute after:bg-primary after:rounded-s-[20px] after:shadow-red-900 after:shadow-2xl"></div>
          <FaRegBell className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-slate-200" />
        </div>
        <div className="w-full h-[88px] relative mt-[57px] ">
          <div className="hidden w-[161px] h-[88px] bg-white ml-auto items-center rounded-s-[20px] after:w-[8px] after:h-full after:top-0 after:right-0 after:absolute after:bg-primary after:rounded-s-[20px] after:shadow-red-900 after:shadow-2xl"></div>
          <GoGear className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-slate-200" />
        </div>
        <div className="w-full h-[88px] relative mt-[187px] ">
          <div className="hidden w-[161px] h-[88px] bg-white ml-auto items-center rounded-s-[20px] after:w-[8px] after:h-full after:top-0 after:right-0 after:absolute after:bg-primary after:rounded-s-[20px] after:shadow-red-900 after:shadow-2xl"></div>
          <ImExit className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-white" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar
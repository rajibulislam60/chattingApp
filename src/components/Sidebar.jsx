import React from 'react';
import ProfileImage from "../assets/profile.jpg";
import { IoHomeOutline } from "react-icons/io5";

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
        <div className="w-full h-[88px] relative ">
          <div className="w-[161px] h-[88px] bg-white ml-auto flex items-center"></div>
          <IoHomeOutline className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-primary" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar
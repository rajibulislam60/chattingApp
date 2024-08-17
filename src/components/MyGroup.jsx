import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import PersonImg from "../assets/personImg.png";

const MyGroup = () => {
  return (
    <div className="w-[427px] shadow-xl rounded-[20px] px-[20px] mt-[43px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">My Groups</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[462px] overflow-y-scroll">
        <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
          <div className="flex gap-[14px] items-center">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={PersonImg}
              alt="Images"
            />
            <div>
              <h3 className="text-[18px] font-semibold text-black">Kiran</h3>
              <p className="text-[14px] font-medium text-[#4D4D4D]">
                Hi...., Wassup!
              </p>
            </div>
          </div>
          <button className="font-normal text-[10px]">Today, 8:56pm</button>
        </div>
        <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
          <div className="flex gap-[14px] items-center">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={PersonImg}
              alt="Images"
            />
            <div>
              <h3 className="text-[18px] font-semibold text-black">Kiran</h3>
              <p className="text-[14px] font-medium text-[#4D4D4D]">
                Hi...., Wassup!
              </p>
            </div>
          </div>
          <button className="font-normal text-[10px]">Today, 8:56pm</button>
        </div>
        <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
          <div className="flex gap-[14px] items-center">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={PersonImg}
              alt="Images"
            />
            <div>
              <h3 className="text-[18px] font-semibold text-black">Kiran</h3>
              <p className="text-[14px] font-medium text-[#4D4D4D]">
                Hi...., Wassup!
              </p>
            </div>
          </div>
          <button className="font-normal text-[10px]">Today, 8:56pm</button>
        </div>
        <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
          <div className="flex gap-[14px] items-center">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={PersonImg}
              alt="Images"
            />
            <div>
              <h3 className="text-[18px] font-semibold text-black">Kiran</h3>
              <p className="text-[14px] font-medium text-[#4D4D4D]">
                Hi...., Wassup!
              </p>
            </div>
          </div>
          <button className="font-normal text-[10px]">Today, 8:56pm</button>
        </div>
        <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
          <div className="flex gap-[14px] items-center">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={PersonImg}
              alt="Images"
            />
            <div>
              <h3 className="text-[18px] font-semibold text-black">Kiran</h3>
              <p className="text-[14px] font-medium text-[#4D4D4D]">
                Hi...., Wassup!
              </p>
            </div>
          </div>
          <button className="font-normal text-[10px]">Today, 8:56pm</button>
        </div>
        <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
          <div className="flex gap-[14px] items-center">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={PersonImg}
              alt="Images"
            />
            <div>
              <h3 className="text-[18px] font-semibold text-black">Kiran</h3>
              <p className="text-[14px] font-medium text-[#4D4D4D]">
                Hi...., Wassup!
              </p>
            </div>
          </div>
          <button className="font-normal text-[10px]">Today, 8:56pm</button>
        </div>
        <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
          <div className="flex gap-[14px] items-center">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={PersonImg}
              alt="Images"
            />
            <div>
              <h3 className="text-[18px] font-semibold text-black">Kiran</h3>
              <p className="text-[14px] font-medium text-[#4D4D4D]">
                Hi...., Wassup!
              </p>
            </div>
          </div>
          <button className="font-normal text-[10px]">Today, 8:56pm</button>
        </div>
      </div>
    </div>
  );
};

export default MyGroup;

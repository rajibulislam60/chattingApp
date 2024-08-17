import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import PersonImg from "../assets/personImg.png";

const UserList = () => {
  return (
    <div className="w-[427px] shadow-xl rounded-[20px] px-[20px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">User List</h2>
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
                Yesterday, 6:22pm
              </p>
            </div>
          </div>
          <button className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]">
            +
          </button>
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
                Yesterday, 6:22pm
              </p>
            </div>
          </div>
          <button className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]">
            +
          </button>
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
                Yesterday, 6:22pm
              </p>
            </div>
          </div>
          <button className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]">
            +
          </button>
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
                Yesterday, 6:22pm
              </p>
            </div>
          </div>
          <button className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]">
            +
          </button>
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
                Yesterday, 6:22pm
              </p>
            </div>
          </div>
          <button className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]">
            +
          </button>
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
                Yesterday, 6:22pm
              </p>
            </div>
          </div>
          <button className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]">
            +
          </button>
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
                Yesterday, 6:22pm
              </p>
            </div>
          </div>
          <button className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;

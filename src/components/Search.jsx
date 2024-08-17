import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="w-[427px] h-[59px] shadow-xl rounded-[20px] relative">
      <input
        className="border w-full h-full rounded-[20px] px-[78px] text-[20px] font-semibold relative"
        type="text"
        placeholder="search"
      />
      <IoSearch className="absolute top-2/4 translate-y-[-50%] left-[22px] text-[19px]" />
      <BsThreeDotsVertical className="absolute top-2/4 translate-y-[-50%] right-[22px]" />
    </div>
  );
}

export default Search
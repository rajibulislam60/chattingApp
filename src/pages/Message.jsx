import React from 'react'
import Search from '../components/Search';
import GroupList from '../components/GroupList';
import Friends from '../components/Friends';
import UserImage from './../../public/fortest.png';
import { BsThreeDotsVertical } from "react-icons/bs";

const Message = () => {
  return (
    <div className="w-screen h-screen flex justify-around py-9">
      <section>
        <div>
          <Search />
          <GroupList />
          <Friends className="mt-[43px]" />
        </div>
      </section>

      <div className=" w-[100%] shadow-xl rounded-[20px] ml-5 mr-5 px-[20px]">
        <div className=" w-full ">
          <div className="mt-3 flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={UserImage}
                alt="userprofile photo"
              />
              <div>
                <h2 className="text-[18px] font-semibold text-black">Kelvin</h2>
                <p>Online</p>
              </div>
            </div>
            <BsThreeDotsVertical className='text-[40px]'/>
          </div>
          <div className='w-full h-[2px] bg-black/50 mt-[20px] mb-[20px]'></div>
        </div>
      </div>
    </div>
  );
}

export default Message
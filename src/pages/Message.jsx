import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import GroupList from "../components/GroupList";
import Friends from "../components/Friends";
import UserImage from "./../../public/fortest.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { push, ref, set, getDatabase, onValue } from "firebase/database";

const Message = () => {
  let db = getDatabase();
  let [msgText, setMsgText] = useState("");
  let [msgList, setMsgList] = useState([]);
  let chatdata = useSelector((state) => state.chatuserInfo.value);
  let data = useSelector((state) => state.userInfo.value);

  let handlemsgInput = (e) => {
    setMsgText(e.target.value);
  };

  let handlemsgSubmit = () => {
    set(push(ref(db, "msg/")), {
      senderid: data.uid,
      sender: data.displayName,
      reciverid: chatdata.id,
      reciver: chatdata.name,
      msg: msgText,
      date: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
    });
  };

  useEffect(() => {
    const friendRef = ref(db, "msg/");
    onValue(friendRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (
          (data.uid == item.val().senderid &&
            chatdata.id == item.val().reciverid) ||
          (data.uid == item.val().reciverid &&
            chatdata.id == item.val().senderid)
        ) {
          array.push({ ...item.val(), key: item.key });
        }
      });

      setMsgList(array);
    });
  }, []);
  return (
    <div className="w-screen h-screen flex justify-around py-9">
      <section>
        <div>
          <Search />
          <GroupList />
          <Friends className="mt-[43px]" />
        </div>
      </section>

      {chatdata && (
        <div className=" w-[100%] h-full shadow-xl rounded-[20px] ml-5 mr-5 px-[20px] ">
          <div className=" w-full h-full relative">
            <div className="mt-3 flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <img
                  className="w-[100px] h-[100px] rounded-full"
                  src={UserImage}
                  alt="userprofile photo"
                />
                <div>
                  <h2 className="text-[18px] font-semibold text-black">
                    {chatdata && chatdata.name}
                  </h2>
                  <p>Online</p>
                </div>
              </div>
              <BsThreeDotsVertical className="text-[40px]" />
            </div>
            <div className="w-full h-[2px] bg-black/50 mt-[20px] mb-[20px]"></div>
            <div className="">
              {msgList.map((item) =>
                data.uid == item.senderid ? (
                  <div className="flex items-end flex-col mt-[10px] mr-2 text-end">
                    <div className="w-[45%]">
                      <p className="text-[16px] font-medium  px-4 py-2 bg-primary text-white rounded-md">
                        {item.msg}
                      </p>
                      <p className="text-[14px] font-medium mt-2">
                        Today, 2.01pm
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start flex-col mt-[10px] ml-2">
                    <div className="w-[45%]">
                      <p className="text-[16px] font-medium px-4 py-2 bg-black text-white rounded-md">
                        {item.msg}
                      </p>
                      <p className="text-[14px] font-medium mt-2">
                        Today, 2.01pm
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="w-[100%] absolute bottom-14">
              <div className="w-full h-[3px] bg-black/25 "></div>
              <div className="mt-5 flex gap-5 items-center">
                <div className="w-[95%] h-[45px] relative">
                  <input
                    value={msgText}
                    onChange={handlemsgInput}
                    className="w-full border h-full rounded-md relative px-3"
                    type="text"
                  />
                  <div className="flex gap-3 text-[20px] absolute top-[50%] right-[40px] translate-y-[-50%] text-black/25 ">
                    <MdOutlineEmojiEmotions />
                    <IoCameraOutline />
                  </div>
                </div>

                <button
                  onClick={handlemsgSubmit}
                  className="bg-primary h-[45px] w-[45px] flex items-center justify-center rounded-md"
                >
                  <IoIosSend className="text-[#ffff] text-[20px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;

import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import PersonImg from "../assets/personImg.png";
import { useSelector, useDispatch } from "react-redux";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useLocation } from "react-router-dom";
import { chatingInfo } from "../slices/chatSlice";

const Friends = ({ className }) => {
  let dispatch = useDispatch();
  let location = useLocation();

  let data = useSelector((state) => state.userInfo.value);
  let db = getDatabase();
  let [friends, setFriends] = useState([]);

  useEffect(() => {
    const friendRef = ref(db, "friends/");
    onValue(friendRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().senderid || item.val().reciverid) {
          array.push({ ...item.val(), key: item.key });
        }
      });

      setFriends(array);
    });
  }, []);

  let handleBlock = (item) => {
    if (data.uid == item.senderid) {
      set(push(ref(db, "blocklist/")), {
        blockbyid: data.uid,
        blockby: data.displayName,
        blockeduserid: item.reciverid,
        blockeduser: item.recivername,
      }).then(() => {
        remove(ref(db, "friends/" + item.key));
      });
    } else {
      set(push(ref(db, "blocklist/")), {
        blockbyid: data.uid,
        blockby: data.displayName,
        blockeduserid: item.senderid,
        blockeduser: item.sendername,
      }).then(() => {
        remove(ref(db, "friends/" + item.key));
      });
    }
  };

  let handleChat = (item) => {
    console.log(item);
    if (data.uid == item.senderid) {
      dispatch(chatingInfo({ name: item.recivername, id: item.reciverid }));
    }else{
      dispatch(chatingInfo({ name: item.sendername, id: item.senderid }));
    }
  };

  return (
    <div
      className={`w-[427px] shadow-xl rounded-[20px] px-[20px] ${className}`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">Friends</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[462px] overflow-y-scroll">
        {friends.map((item) => (
          <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
            <div className="flex gap-[14px] items-center">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={PersonImg}
                alt="Images"
              />
              <div>
                {data.uid == item.senderid ? (
                  <h3 className="text-[18px] font-semibold text-black">
                    {item.recivername}
                  </h3>
                ) : (
                  <h3 className="text-[18px] font-semibold text-black">
                    {item.sendername}
                  </h3>
                )}

                <p className="text-[14px] font-medium text-[#4D4D4D]">
                  Hi...., Wassup!
                </p>
              </div>
            </div>
            {location.pathname == "/message" ? (
              <button
                onClick={() => handleChat(item)}
                className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-[5px]"
              >
                Msg
              </button>
            ) : (
              <button
                onClick={() => handleBlock(item)}
                className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-[5px]"
              >
                Block
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;

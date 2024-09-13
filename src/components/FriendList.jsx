import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import PersonImg from "../assets/personImg.png";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useSelector } from "react-redux";
import moment from "moment";

const FriendList = () => {
  let data = useSelector((state) => state.userInfo.value);
  let db = getDatabase();
  let [friendRequest, setFriendRequest] = useState([]);

  useEffect(() => {
    const friendrequestRef = ref(db, "friendrequest/");
    onValue(friendrequestRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().reciverid) {
          array.push({ ...item.val(), key: item.key });
        }
      });

      setFriendRequest(array);
    });
  }, []);

  let handleAcceptFriend = (item) => {
    set(push(ref(db, "friends/")), {
      ...item,
    }).then(() => {
      remove(ref(db, "friendrequest/" + item.key));
    });
  };

  return (
    <div className="w-[427px] shadow-xl rounded-[20px] px-[20px] mt-[43px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">Friend Request</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[462px] overflow-y-scroll">
        {friendRequest.map((item) => (
          <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
            <div className="flex gap-[14px] items-center">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={PersonImg}
                alt="Images"
              />
              <div>
                <h3 className="text-[18px] font-semibold text-black">
                  {item.sendername}
                </h3>
                <p className="text-[14px] font-medium text-[#4D4D4D]">
                  {moment(item.date, "YYYYMMDDhh:mm").fromNow()}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleAcceptFriend(item)}
              className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-[5px]"
            >
              Accept
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;

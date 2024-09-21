import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import moment from "moment";
import { useSelector } from "react-redux";

const UsersList = () => {
  let data = useSelector((state) => state.userInfo.value);

  let [userList, setUserList] = useState([]);

  let [requestList, setRequestList] = useState([]);
  let [friends, setFriends] = useState([]);
  let [blocklist, setBliocklist] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    const userListRef = ref(db, "users/");
    onValue(userListRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid != item.key) {
          array.push({ ...item.val(), uid: item.key });
        }
      });
      setUserList(array);
    });
  }, []);

  useEffect(() => {
    const friendrequestRef = ref(db, "friendrequest/");
    onValue(friendrequestRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().senderid + item.val().reciverid)
      });
      setRequestList(array);
    });
  }, []);
   useEffect(() => {
     const friendrequestRef = ref(db, "friends/");
     onValue(friendrequestRef, (snapshot) => {
       let array = [];
       snapshot.forEach((item) => {
         array.push(item.val().senderid + item.val().reciverid);
       });
       setFriends(array);
     });
   }, []);
   useEffect(() => {
     const friendrequestRef = ref(db, "blocklist/");
     onValue(friendrequestRef, (snapshot) => {
       let array = [];
       snapshot.forEach((item) => {
         array.push(item.val().blockbyid + item.val().blockeduserid);
       });
       setBliocklist(array);
     });
   }, []);

  let handleFriendrequest = (item) => {

    set(push(ref(db, "friendrequest/")), {
      senderid: data.uid,
      sendername: data.displayName,
      senderemail: data.email,
      reciverid: item.uid,
      recivername: item.username,
      reciveremail: item.email,
      date: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
    })
  };

  return (
    <div className="w-[427px] shadow-xl rounded-[20px] px-[20px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">User List</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[462px] overflow-y-scroll">
        {userList.map((item) => (
          <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
            <div className="flex gap-[14px] items-center">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={item.image}
                alt="Images"
              />
              <div>
                <h3 className="text-[18px] font-semibold text-black">
                  {item.username}
                </h3>
                <p className="text-[14px] font-medium text-[#4D4D4D]">
                  {moment(item.date, "YYYYMMDDhh:mm").fromNow()}
                </p>
              </div>
            </div>
            {blocklist.includes(data.uid + item.uid) ||
            blocklist.includes(item.uid + data.uid) ? (
              <button className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]">
                Block
              </button>
            ) : friends.includes(data.uid + item.uid) ||
              friends.includes(item.uid + data.uid) ? (
              <button className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]">
                Friend
              </button>
            ) : requestList.includes(data.uid + item.uid) ||
              requestList.includes(item.uid + data.uid) ? (
              <button className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]">
                Pending
              </button>
            ) : (
              <button
                onClick={() => handleFriendrequest(item)}
                className="bg-primary px-3 py-2 text-white font-normal text-[20px] rounded-[5px]"
              >
                +
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;

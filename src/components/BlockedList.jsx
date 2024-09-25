import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import PersonImg from "../assets/personImg.png";
import { useSelector } from "react-redux";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const BlockedList = () => {
  let data = useSelector((state) => state.userInfo.value);
  let db = getDatabase();
  let [blockList, setBlockList] = useState([]);


  useEffect(() => {
    const friendRef = ref(db, "blocklist/");
    onValue(friendRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().blockby || item.val().blockeduser) {
          array.push({ ...item.val(), key: item.key });
        }
        // if (data.uid == item.val().blockbyid) {
        //   array.push({
        //     blockeduser: item.val().blockeduser,
        //     blockeduserid: item.val().blockeduserid,
        //   });
        // } else if (data.uid == item.val().blockeduserid) {
        //   array.push({
        //     blockby: item.val().blockby,
        //     blockbyid: item.val().blockbyid,
        //   });
        // }
      });

      setBlockList(array);
    });
  }, []);

  let handleUnBlock = (item) => {
    if(data.uid == item.blockbyid){
      set(push(ref(db, "friends/")), {
        senderid: item.blockbyid,
        sendername: item.blockby,
        reciverid: item.blockeduserid,
        recivername: item.blockeduser,
      }).then(() => {
        remove(ref(db, "blocklist/" + item.key));
        toast.success("UnBlock Successful", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
    }
  };

  return (
    <div className="w-[427px] shadow-xl rounded-[20px] px-[20px] mt-[43px]">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">Blocked Users</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[462px] overflow-y-scroll">
        {blockList.map((item) => (
          <div className="flex justify-between items-center border-b border-black/25 pb-6 mt-4">
            <div className="flex gap-[14px] items-center">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={PersonImg}
                alt="Images"
              />

              <div>
                {data.uid == item.blockbyid ? (
                  <h3 className="text-[18px] font-semibold text-black">
                    {item.blockeduser}
                  </h3>
                ) : (
                  <h3 className="text-[18px] font-semibold text-black">
                    {item.blockby}
                  </h3>
                )}
                {/* <h3 className="text-[18px] font-semibold text-black">
                  {item.blockeduser}
                </h3>

                <h3 className="text-[18px] font-semibold text-black">
                  {item.blockby}
                </h3> */}

                <p className="text-[14px] font-medium text-[#4D4D4D]">
                  Hi...., Wassup!
                </p>
              </div>
            </div>
            {data.uid == item.blockbyid && (
              <button
                onClick={() => handleUnBlock(item)}
                className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-[5px]"
              >
                UnBlock
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockedList;

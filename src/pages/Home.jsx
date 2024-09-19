import React, { useEffect, useState } from "react";
import GroupList from "../components/GroupList";
import FriendList from "../components/FriendList";
import Friends from "../components/Friends";
import MyGroup from "../components/MyGroup";
import UserList from "../components/UserList";
import BlockedList from "../components/BlockedList";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signinUserInfo } from "../slices/userSlice";

const Home = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const auth = getAuth();
  let [verify, setVerify] = useState(false);

  let data = useSelector((state) => state.userInfo.value);
 

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(signinUserInfo(user));
      // localStorage.setItem("user", JSON.stringify(user));
    } else {
      navigate("/signin");
      setVerify(false);
    }
  });

  useEffect(() => {
    if (!data) {
      navigate("/signin");
    } else if (!data.emailVerified) {
      setVerify(false);
    } else {
      setVerify(true);
    }
  });

  return (
    <>
      {verify ? (
        <section className="py-9 w-full flex justify-around">
          <div>
            <Search />
            <GroupList />
            <FriendList />
          </div>
          <div>
            <Friends />
            <MyGroup />
          </div>
          <div>
            <UserList />
            <BlockedList />
          </div>
        </section>
      ) : (
        <div className="w-full  h-screen bg-black/55 absolute top-0 left-0 flex justify-center items-center">
          <h2 className="text-2xl text-white font-semibold">
            Please verify your email
          </h2>
        </div>
      )}
    </>
  );
};

export default Home;

import React, { useEffect } from 'react'
import GroupList from '../components/GroupList'
import FriendList from '../components/FriendList'
import Friends from '../components/Friends';
import MyGroup from '../components/MyGroup';
import UserList from '../components/UserList';
import BlockedList from '../components/BlockedList';
import Search from '../components/Search';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate()

let data  = useSelector((state)=>state.userInfo.value)
useEffect(()=>{
  if (!data) {
    navigate("/signin");
  }
})


  return (
    <section className="py-9 w-full flex justify-around">
      <div>
        <Search/>
        <GroupList />
        <FriendList />
      </div>
      <div>
        <Friends/>
        <MyGroup/>
      </div>
      <div>
        <UserList/>
        <BlockedList/>
      </div>
    </section>
  );
}

export default Home
import React from 'react';
import Nav from './Nav';
import './ProfileScreen.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&usqp=CAU"
            alt=""
          />
          <div className="profileScreen_details">
            <h1>{user.email}</h1>
            <div className="profileScreen_plans">
              <h2>plan</h2>
              <button
                onClick={() => auth.signOut()}
                className="profileScrceen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;

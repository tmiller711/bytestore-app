import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';

import "./sidenav.css"

const SideNav = () => {
  const user = useSelector((state) => state.auth.currentUser)

  return (
    <div className="sidenav">
      <div className="sidenav-content">
        <div className="profile-section">
          <p className="username">{user.username}</p>
          <p className="email">{user.email}</p>
        </div>
        <hr></hr>
        <div className="files-section">
          <Link><i class='bx bxs-folder-open' ></i>My Files</Link>
          <Link>Other Stuff</Link>
        </div>
        <hr></hr>
        <div className="settings-section">
          <Link><i class='bx bx-user'></i>Account</Link>
          <Link><i class='bx bx-exit'></i>Logout</Link>
        </div>
        <div className="usage-info">
          <p>Tier: {user.tier}</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <p>5gb / 10gb</p>
        </div>
      </div>
    </div>
  )
}

export default SideNav;
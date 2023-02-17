import React from "react";
import "./sidenav.css"

const SideNav = () => {

  return (
    <div className="sidenav">
      <div className="sidenav-content">
        <div className="profile-section">
          <p className="username">Username</p>
          <p className="email">Email</p>
        </div>
      </div>
    </div>
  )
}

export default SideNav;
import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "antd";

function Header() {

    function logout(){
        localStorage.removeItem("userToken")
        window.location.pathname = "/"
    }

    const items = [
  {
    key: '1',
    label:(
        <span style={{color:"red",fontWeight:"bolder"}} onClick={()=>logout()}>Logout</span>
    )

  },
];
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="header-left">
        <img src="logo.webp" alt="logo" className="logo" />
        <h2>
          Event <span>Booking</span>
        </h2>
      </div>

      <div className="header-right">
        <button onClick={() => navigate("/home")} className="nav-button">
          Home
        </button>
        <button onClick={() => navigate("/about")} className="nav-button">
          About
        </button>
        <button onClick={() => navigate("/services")} className="nav-button">
          Services
        </button>
        <button onClick={() => navigate("/contact")} className="nav-button">
          Contact
        </button>

        <Dropdown menu={{ items }} placement="bottom">
          <img src="profile.webp" alt="profile" className="profile" />
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;

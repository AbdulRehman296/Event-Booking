import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const logout = () => {
  localStorage.removeItem("adminToken");
  window.location.pathname = "/login";
};

  const items = [
    {
      key: "1",
      label: (
        <span onClick={() => navigate("/admin/dashboard")}>
          Dashboard
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span onClick={() => navigate("/admin/users")}>
          Users
        </span>
      ),
    },
        {
      key: "3",
      label: (
        <span onClick={() => navigate("/admin/doctors")}>
          Doctors
        </span>
      ),
    },
    
    {
  key: "4",
  label: (
    <span onClick={logout}>
      Logout
    </span>
  ),
},
  ];

  return (
    <Menu
      style={{ width: "100%", height: "100%" }}
      defaultSelectedKeys={["1"]}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
};

export default SideBar;
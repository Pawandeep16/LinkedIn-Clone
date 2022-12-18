import React from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import {
  Search,
  LinkedIn,
  Home,
  Group,
  WorkOffOutlined,
  Send,
  NotificationsNone,
} from "@material-ui/icons";
import { auth } from "../Utils/Firebase";
import { logout } from "../features/userSlice";
import HeaderOptions from "./HeaderOptions";

export default function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <LinkedIn className="icon" />
        <div className="search">
          <Search className="icon" />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={Group} title="My Network" />
        <HeaderOptions Icon={WorkOffOutlined} title="Jobs" />
        <HeaderOptions Icon={Send} title="Messaging" />
        <HeaderOptions Icon={NotificationsNone} title="Notifications" />
        <HeaderOptions
          avatar="../Profile/pawan.jpg"
          title="Profile"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export default function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="srecentItems">
      <span className="shash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="stop">
        <img src="../profile/back.jpg" alt="" />
        <Avatar className="savatar" src={user.photoUrl}>
          {user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidestats">
        <div className="sstat">
          <p>who viewed you</p>
          <p className="ssnumber">1,456</p>
        </div>
        <div className="sstat">
          <p>views on post</p>
          <p className="ssnumber">156</p>
        </div>
      </div>

      <div className="sbottom">
        <p>Recent</p>
        {recentItems("Reactjs")}
        {recentItems("Programing")}
        {recentItems("NodeJS")}
        {recentItems("Adobe Illustrator & Photoshop")}
        {recentItems("Python")}
        {recentItems("Web-Developmet")}
      </div>
    </div>
  );
}

import React from "react";
import "./headerOptions.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Avatar } from "@material-ui/core";
export default function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="HeaderOptions">
      {Icon && <Icon className="hoicon" />}
      {avatar && (
        <Avatar className="hoicon" src={user?.photoUrl}>
          {user?.displayName[0].toUpperCase()}{" "}
        </Avatar>
      )}
      <h3 className="hotitle">{title}</h3>
    </div>
  );
}

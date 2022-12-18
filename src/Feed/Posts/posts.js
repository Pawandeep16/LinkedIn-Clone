import React, { forwardRef } from "react";
import "./posts.css";
import { Avatar } from "@material-ui/core";
import InputOptions from "../InputOptions";
import {
  ThumbUpAltOutlined,
  ChatOutlined,
  ShareOutlined,
  SendOutlined,
} from "@material-ui/icons";
const posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="posts">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOptions Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOptions Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOptions Icon={ShareOutlined} title="Share" color="gray" />
        <InputOptions Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
});
export default posts;

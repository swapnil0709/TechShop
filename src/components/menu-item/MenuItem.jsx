import React from "react";
import "./MenuItem.styles.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imageUrl, size, id, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
        console.log(`${match.url}${linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span>Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

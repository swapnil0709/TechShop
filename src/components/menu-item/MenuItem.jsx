import React from "react";
import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, id, linkUrl }) => {
  return (
    <div className={`${size} menu-item`}>
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

export default MenuItem;

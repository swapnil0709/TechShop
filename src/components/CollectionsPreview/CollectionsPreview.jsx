import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionsPreview.style.scss";

export default function CollectionsPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((e, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
}

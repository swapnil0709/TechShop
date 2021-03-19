import React from "react";
import CollectionsPreview from "../../components/CollectionsPreview/CollectionsPreview";
import ShopData from "./ShopData";
import "./ShopPage.styles.scss";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionsPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.styles.scss";

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fGphY2tldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&w=400&q=60",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmx8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl:
            "https://images.unsplash.com/photo-1602650231028-97f3f5c709c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, size, id, linkUrl }) => (
          <MenuItem
            key={id}
            title={title.toUpperCase()}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;

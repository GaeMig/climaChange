import React from "react";

import { Link } from "react-router-dom";
import "../components/Navbar/navbar.css"


const links = [
  {
    url: "/",
    text: "Home",
  },
  {
    url:"/statistics",
    text:"Statistics",
  },
  {
    url: "/contact",
    text: "Contact me",
    
  },

];

const LinkComponent = ({ classLink }) => {
  
  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <Link key={link.text} to={link.url} className="nav-item">
            <div className="nav-link">
              {link.icon}
              <h5 className="nav-text">{link.text}</h5>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};


export { LinkComponent };
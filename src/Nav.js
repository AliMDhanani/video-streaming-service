import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          className="nav__logo"
          alt=""
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default Nav;

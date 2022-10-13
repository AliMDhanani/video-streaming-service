import React from "react";
import "./Banner.css";

const Banner = () => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `this is a test description for the movie this is a test description for the movie this is a test description for the movie this is a test description for the movie this is a test description for the movie this is a test description for the movie this is a test description for the movie this is a test description for the movie this is a test description for the movie this is a test description for the movie this is a test description for the movie this is a test description for the movie this is a test description for the movie`, 200
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;

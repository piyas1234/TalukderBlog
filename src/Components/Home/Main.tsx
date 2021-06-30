import React from "react";
 
import {
  FcAddDatabase,
  FcPortraitMode,
  FcFinePrint,
  FcUnlock,
} from "react-icons/fc";

function Main() {
  const info = [
    {
      id: 1,
      title: "Downloads",
      count: "20k",
      icon: FcAddDatabase,
    },
    {
      id: 2,
      title: "Happy Students",
      count: "15k",
      icon: FcPortraitMode,
    },
    {
      id: 3,
      title: "Dubt Solved",
      count: "4k",
      icon: FcFinePrint,
    },
    {
      id: 4,
      title: "Classes Complete",
      count: "10k",
      icon: FcUnlock,
    },
  ];
  return (
    <div style={styes.main} className="container-fluid">
      <div
        style={styes.mainbox}
        className="row d-flex align-items-center bg-white"
      >
        <div style={styes.box} className="col-md-6   d-flex align-items-center">
          <div className="p-5">
            <h1 style={styes.title}>
              Learn Better With the best dubt clearing App
            </h1>
            <p style={styes.pragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut
              aliquam corporis illo tempore beatae, alias porro nulla obcaecati
              quo delectus nihil dolore quibusdam id explicabo mollitia, facere
            </p>
            <button className="btn btn-outline-primary" type="submit">
              INSTALL NOW
            </button>
          </div>
        </div>
        <div style={styes.box} className="col-md-6">
          <img
            width="100%"
            src="https://cdn.dribbble.com/users/2133678/screenshots/5445213/serious_study_illustration_rgb_4x.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="row d-flex">
        {info &&
          info.map((item) => {
            return (
              <div
                key={item.id}
                className="gx-3 col-md-6 col-lg-3 bg-white shadow-lg d-flex align-items-center text-center text-dark text-shadow"
              >
                <div className="p-3">
                  <item.icon size={35} />
                  <h5>{item.count}</h5>
                  <h4>{item.title}</h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Main;

const styes = {
  main: {
    // minHeight: "1000px",
    paddingBottom: "100px",
    fontFamily: "'Lobster', cursive",
  },
  mainbox: {
    minHeight: "500px",
    boxShadow: "110px 110px 1000px 110px #D92EC4",
    marginTop: "20px",
  },

  box: {
    width: "100%",
    minHeight: "400px",
    boxShadow: "0px 0px 100px 0px #8000ff",
  },
  title: {
    color: "#8000ff",
    textShadow: "2px 3px 5px gray",
  },
  pragraph: {
    color: "black",
    textShadow: "3px 4px 5px skyblue",
    fontWidth: "bold",
  },
};

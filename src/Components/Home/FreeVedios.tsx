import React, { useContext } from "react";
import { GoPlay } from "react-icons/go";
import { NavbarContext } from "./../../Global/Context";

function FreeVedios() {
  const { Modal, setModal, ModalData, setModalData } =
    useContext(NavbarContext);
  return (
    <div className="container-fluid mt-5 p-5 shadow">
      <h1> Free Concept Vedios</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        quae provident quis illo ex odio rerum molestiae doloribus minima, eos
        hic dolores error natus corporis repellendus debitis est officia ipsum.
      </p>
      <div className="row">
        {fakeData.map((item, index, array) => {
          return (
            <div
              onClick={() => {
                setModal(!Modal);
                setModalData([item, index, array]);
              }}
              className="gx-3 col-md-6 col-lg-3"
            >
              <div className="p-3">
                <img src="" alt="" />
                <p>{item.title}</p>
                <div className="border p-5 text-center bg-info">
                  <GoPlay size={50} />
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}

export default FreeVedios;

const fakeData = [
  {
    id: 1,
    title: "class10 - Introduction to real Number",
    image: GoPlay,
    vedio: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "class11 - Introduction to real Number",
    image: GoPlay,
    vedio: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    title: "class1 - Introduction to real Number",
    image: GoPlay,
    vedio: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    title: "class2 - Introduction to real Number",
    image: GoPlay,
    vedio: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 5,
    title: "class4 - Introduction to real Number",
    image: GoPlay,
    vedio: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    title: "class6 - Introduction to real Number",
    image: GoPlay,
    vedio: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 7,
    title: "class7 - Introduction to real Number",
    image: GoPlay,
    vedio: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 8,
    title: "class8 - Introduction to real Number",
    image: GoPlay,
    vedio: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

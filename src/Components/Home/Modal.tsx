import React, { useContext, useState } from "react";
import "./Style.css";
import { NavbarContext } from "./../../Global/Context";
function ShowModal() {
  const { Modal, setModal, ModalData } = useContext(NavbarContext);
  const [item, index, array] = ModalData;
  const [number, setNumber] = useState(index);

  return (
    <div className="container-fluid main-container d-flex align-items-center justify-content-center">
      <div className="main">
        <div className="d-flex">
          <h3 className="text-white m-3">{array[number].title}</h3>
          <h3
            onClick={() => array.length > number && setNumber(number+1)   }
            className="text-primary m-3"
          >
            Next - {array[number+1].title || item.title}
          </h3>
          <button
            onClick={() => setModal(!Modal)}
            className="btn btn-sm btn-danger m-3 ml-auto"
            type="submit"
          >
            Exit
          </button>
        </div>
        <div className="vedioAria">
          <video width="100%" height="50%" controls>
            <source src={array[number].vedio || item.vedio} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default ShowModal;

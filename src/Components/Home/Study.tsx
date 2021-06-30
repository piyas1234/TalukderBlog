import React from "react";
import { FcPortraitMode } from "react-icons/fc";
function Study() {
  const fakeData = [1, 2, 2];
  return (
    <div   className="container-fluid p-5 mt-5 shadow">
      <div className="row">
        <div className="col-md-6">
          <h1>Study Metarial</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            consectetur officia id nobis consequuntur similique nihil adipisci
            vel ab quae odit dignissimos amet placeat quo quibusdam maiores
            laborum eligendi labore.
          </p>
          <button className="btn btn-primary" type="submit">
            Download
          </button>
        </div>
        <div className="col-md-6">
          <img
            width="100%"
            src="https://www.kindpng.com/picc/m/769-7699528_learning-hd-png-download-vector-study-from-home.png"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        {fakeData &&
          fakeData.map((e) => (
            <div className="gx-3 col-md-6 col-lg-4">
              <div style={{backgroundColor:'#d02ed988'}} className="p-4 border text-white ">
                <div className="d-flex">
                  <div className="bg-warning rounded p-3 h-75">
                    <FcPortraitMode size={100} />
                  </div>
                  <div className="p-3">
                    <h4>Hello this </h4>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit
                </p>
                <div className="d-flex">
                  <div>
                    <a href="">Click Here...</a>
                    <br />
                    <a href="">Click Here...</a>
                    <br />
                   
                    <br />
                  </div>{" "}
                  <div className="ml-auto">
                    <a href="">Click Here..</a>
                    <br />
                    <a href="">Click Here...</a>
                    <br />
                    
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Study;

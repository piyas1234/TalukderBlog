import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillYoutube}  from 'react-icons/ai'
function Footer() {

    const fakearray = [
        1,1,1,1,
    ]
    return (
        <div className='container-fluid mt-5 p-5 shadow text-dark'>
            <div className="row pb-5">
            <div className="col-md-5">
                <h1>Mirror Scope</h1>
            </div>
            <div className="col-md-7">
              <div className="row">
              {fakearray && fakearray.map(id=>{
                  return <div className="gx-3 col-lg-3 col-md-6">
                      <div className="p-3">
                          <a href="">Quick Links</a><br />
                          <a href="">Quick Links</a><br />
                          <a href="">Quick Links</a><br />
                          <a href="">Quick Links</a><br />
                      </div>
                  </div>
              })}
              </div>
            </div>
            
            </div>
            <div className="row">
                <div className="col-md-4">CopyRight@ all right -piyas Talukder</div>
                <div className="col-md-4">Terms Privacy policy</div>
                <div className="col-md-4">
                    <div className="d-flex">
                        <div className="ml-auto">
                        <AiFillFacebook/>
                        <AiFillInstagram/>
                        <AiFillLinkedin/>
                        <AiFillYoutube/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

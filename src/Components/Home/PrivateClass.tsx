import React from 'react'
import { FcPortraitMode } from "react-icons/fc";

function PrivateClass() {
    const teacher = [
        {
            id:1,
            name:'Piyas Talukder',
            from:'IIT b Batch',
            image:FcPortraitMode

        },{
            id:1,
            name:'Junkar Mahabub',
            from:'IIT b Batch',
            image:FcPortraitMode

        },{
            id:1,
            name:'Liton Das',
            from:'IIT b Batch',
            image:FcPortraitMode

        },{
            id:1,
            name:'Sumit Shaha',
            from:'IIT b Batch',
            image:FcPortraitMode


        },
    ]
    return (
        <div className="container-fluid shadow p-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Get free One-On-One private Class</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur, tenetur quae totam accusantium, obcaecati nulla eos ex nesciunt necessitatibus, possimus natus cupiditate! Id delectus consequuntur ipsum saepe? Eveniet, molestiae.</p>
                    <button className="btn btn-outline-danger">Book Now</button>
                    <img width="100%" src="https://teach.outschool.com/content/images/2021/06/PNG-Web-Res-Recording-Classes.png" alt=""  />
                </div>
                <div className="col-md-6 text-center">
                    <h4>Learn from our best teacher</h4>
                     <div className="row">
                        {teacher && teacher.map(item=>{
                            return  <div className="gx-3 col-md-6 col-lg-6 ">
                                <div className="p-3 ">
                                    <item.image size={100}/>
                                    <p>{item.from}</p>
                                    <h4>{item.name}</h4>
                                </div>
                            </div>
                        })}
                     </div>
                </div>
            </div>
        </div>
    )
}

export default PrivateClass

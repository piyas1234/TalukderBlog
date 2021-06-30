import React from 'react'
import {FcBusinesswoman} from 'react-icons/fc'
import {AiOutlineStar}  from 'react-icons/ai'
function StudentsSay() {
    const fakeData = [1,1,1]
    return (
        <div className="container-fluid p-5 mt-5">
            <div className="p-4 shadow-lg">
            <h1>Whats out students says</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, expedita doloremque reiciendis necessitatibus iste error molestias eaque! Voluptatem doloremque, aut esse neque enim non at delectus quas iusto quasi laboriosam?</p>
           
            </div>
             <div className="row">
                {fakeData && fakeData.map(item=>{
                    return    <div className="gx-3 col-lg-4 col-md-6   text-center">
                    <div className="p-4 border">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                     <FcBusinesswoman size={100}/>
                     <div className="">
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                     </div>
                     <h4>Piyas Talukder</h4>
                     <p>Class 10 Student</p>
                    </div>
                </div>
         
                })}
                 </div>
        </div>
    )
}

export default StudentsSay

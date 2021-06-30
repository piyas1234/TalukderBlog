import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../../Global/Axios/Api'
import { NavbarContext } from '../../Global/Context'

const  BlogDetailsScreen=()=>{
    const [data, setData]:any = useState([])
    const id:any = useParams()
    
    useEffect(() => {
        ServerRequest()
    }, [])

    const ServerRequest = async ()=>{
        const Productdata = await Api.get(`/product/${id.id}`)
        setData(Productdata.data[0])
    }
    
    return (
        <div className="col-md-10 offset-md-1">
              <div className="m-auto shadow-lg p-5">
              <h1 className="">{data.title}</h1>
             <img src={data.image} alt=""   />
             <p>{data.description}</p>
              </div>
        </div>
    )
}

export default BlogDetailsScreen
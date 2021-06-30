import  { useContext } from 'react'
 
import Thumbnail from './Thumbnail'
 
import { NavbarContext } from '../../Global/Context'

 

export default function BlogScreen() {
     const {data} = useContext(NavbarContext)
 
    return (
        <div className="row">
            {data.map((result:any)=>(
                <Thumbnail   result={result}/>
            ))}
        </div>
    )
}
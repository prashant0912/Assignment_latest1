import { Navigate, useNavigate } from "react-router"
export const Homeuser = ({image,email,name,last_name})=>{
    return (
        
        <div className = "card">
            <div id = "img_div">
               <img id = "image" src={image} />
            </div>
            <div >{email}</div>
            <div > {name}</div>
            <div>{last_name}</div>
       </div>
        
  )
}
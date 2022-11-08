import { Navigate, useNavigate } from "react-router"
export const User = ({image,email,name,id})=>{
    const navigate = useNavigate();
    return (
        
        <div className = "card">
            <div id = "img_div">
               <img id = "image" src={image} />
            </div>
            <div id = "desc">{email}</div>
            <div id = "price">{name}</div>
            <button className="update" onClick = {()=>{
                navigate(`/profile/update/${id}`)
            }}>Update</button>
            <button className="update" onClick = {()=>{
                navigate(`/profile/delete/${id}`)
            }}>Delete</button>
       </div>
        
  )
}
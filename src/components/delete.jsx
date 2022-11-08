import { useState } from "react"
import { useNavigate, useParams } from "react-router";
export const Delete = ()=>{
    const {id} = useParams();
    const [formdata,setFormdata] = useState({});
    const handlechange = (e)=>{
        const {name,value} = e.target
        setFormdata({...formdata,
        [name]:value
    })
    }
    return <div id = "box2">
        <h1>Delete User</h1>
    <label htmlFor="">Email</label>
    <input type="email" name="email" class = "input"  onChange={handlechange}/><br />
    <label htmlFor="">First Name</label>
    <input type="text" name="first_name" class = "input" onChange={handlechange} /><br />
    <label htmlFor="">Last Name</label>
    <input type="text" name = "last_name" class = "input" onChange={handlechange} /><br/>
    <button id = "add_user" onClick = {async ()=>{
        let res = await fetch(`https://reqres.in/api/users/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(formdata),
          }
          );
          if(res.status == 204){
            alert("User Deleted")
          }
          else{
              alert("Error occured while deleting")
          }
    }}>Add</button>
</div>
    
}
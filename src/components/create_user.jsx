import { useState } from "react"
export const Createuser = ()=>{
    const [formdata,setFormdata] = useState({});
    const handlechange = (e)=>{
        const {name,value} = e.target
        setFormdata({...formdata,
        [name]:value
    })
    }
    return <div id = "box2">
        <h1>Add New User</h1>
    <label htmlFor="">Email</label>
    <input type="email" name="email" class = "input"  onChange={handlechange}/><br />
    <label htmlFor="">First Name</label>
    <input type="text" name="first_name" class = "input" onChange={handlechange} /><br />
    <label htmlFor="">Last Name</label>
    <input type="text" name = "last_name" class = "input" onChange={handlechange} /><br/>
    <button id = "add_user" onClick = {async ()=>{
        let res = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(formdata),
          },
          );
          if(res.status == 201){
            alert("new user created")
          }
          else{
            alert("invalid data")
          }
    }}>Add</button>
</div>
    
}
import { useState } from "react"
import { useNavigate } from "react-router";

export const Signup = ()=>{
    const [formdata,setFormdata] = useState({});
    const navigate = useNavigate()
    console.log(formdata)
    
     const handlechange = (e)=>{
        const {name,value} = e.target
        setFormdata({...formdata,
        [name]:value
    })
    }
    return <div className="signup_box">
        <h1>SIGN UP</h1>
        <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:   </label>
        <input className = "box" type="email" name = "email" placeholder="Email" onChange ={handlechange}  /><br/><br/>
        <label htmlFor="">Password:  </label>
        <input className = "box" type="password" name = "password" placeholder="Password" onChange ={handlechange} /><br/>
        <button className = "signup1" onClick = {async()=>{

                
    
       var res =  await fetch("https://reqres.in/api/register",{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify(formdata),
})
    var data = await res.json()
    if(data.token){
        alert("user registered")
    }
    else{
        alert("user not created")
    }  
        }}>Sign up</button>
        <button className = "signup" onClick={()=>{
            navigate("/login")
        }}>Login</button>
        
       
        
    </div>
}
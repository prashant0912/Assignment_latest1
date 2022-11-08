import { useState } from "react"
import { useNavigate } from "react-router";

export const Login = ()=>{
    const [formdata,setFormdata] = useState({});
    const navigate = useNavigate();
    
     const handlechange = (e)=>{
        const {name,value} = e.target
        setFormdata({...formdata,
        [name]:value
    })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
          let res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(formdata),
          });
    
          let data = await res.json();
        
          console.log(data.token);

          if (data.token) {
            navigate("/profile")
            
          }
    
          if (data.message) {
            return alert(data.message);
          }
    
        
      };
    return <div className="login_box">
        <h1>LOGIN</h1>
        <form action="" onSubmit ={handleSubmit}>
        <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:   </label>
        <input className = "box" type="email" name = "email" placeholder="Email" onChange ={handlechange}  /><br/><br/>
        <label htmlFor="">Password:  </label>
        <input className = "box" type="password" name = "password" placeholder="Password" onChange ={handlechange} /><br/>
        <button className = "signup">Login</button>
        </form>
    
        <a href = "/signup"><button className = "signup">Signup</button></a>
       
        
    </div>
}
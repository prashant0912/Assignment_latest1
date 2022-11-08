import { useState ,useEffect} from "react"
import { useNavigate } from "react-router";
import { Homeuser } from "./homepageuser";

export const Homepage = ()=>{
    const [data1,setData] = useState([]);
    const [text,setText] = useState("");
    const [data2,setData2] = useState([]);
    var check = data1.concat(data2);
    const show = Array.from(new Set(check));
    const navigate = useNavigate();
    useEffect(()=>{
        getdata();
        getdata1();
    },[])
    const getdata = async()=>{
        const data1 = await fetch("https://reqres.in/api/users?page=1").then((d)=>d.json())
        setData(data1.data)
        
    }
    const getdata1 = async()=>{
        const data1 = await fetch("https://reqres.in/api/users?page=2").then((d)=>d.json())
        setData2(data1.data)
        
    }
    const filter = ()=>{
        const filteredata = [...check].filter((e)=>{
          if(text == e.first_name){
            return e
          }
        })
        setData(filteredata)
        setData2(filteredata)//  
      }
    

    return <div>
        <h1>Homepage</h1>
        <label htmlFor="">Search Users</label>
        <input type="text" placeholder="Enter Name here" onChange ={(e)=>{
            setText(e.target.value)
        }}/>
        <button onClick = {()=>{
            filter();
        }}>Search</button>
        <button className ="move" onClick = {()=>{
            navigate("/login")
        }}>Admin Panel</button>
    <div id="box">
        {show.map((e) => {
          return (
           <Homeuser
              
              image={e.avatar}
              email={e.email}
              name={e.first_name}
              last_name = {e.last_name}
            />
            
          );
        })}
      </div>
      
    </div>
}
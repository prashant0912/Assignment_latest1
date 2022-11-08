import { useState ,useEffect} from "react"
import {User} from "./user";
import { useNavigate } from "react-router";

export const Dashboard = ()=>{
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const navigate = useNavigate();
    console.log(data)
    useEffect(()=>{
        getdata();
    },[page])
    const getdata = async()=>{
        const data = await fetch(`https://reqres.in/api/users?page=${page}`).then((d)=>d.json())
        setData(data.data)
    }

    return <div>
        <button className="pagi" onClick={()=>{
          if(page == 1){
              return
          }
            setPage(page-1)
        }}>Previous Page</button>
         <button className = "pagi2" onClick={()=>{
             if(page==2){
                 return 
             }
            setPage(page+1)
        }}>Next Page</button><br />
          <button id = "create" onClick = {()=>{
          navigate("/create")
            
        }}>Create New User</button>
    <div id="box">
        
        {data.map((e) => {
          return (
           <User
              
              image={e.avatar}
              email={e.email}
              name={e.first_name}
              id = {e.id}
            />
            
          );
        })}
      </div>
      
    </div>
}
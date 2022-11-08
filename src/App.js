import logo from './logo.svg';
import './App.css';
import { Signup } from './components/signup';
import {Routes,Route} from "react-router-dom"
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { Createuser } from './components/create_user';
import { Update } from './components/update';
import { Delete } from './components/delete';
import {Homepage} from "./components/homepage"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/signup" element ={<Signup/>}/>
      <Route path = "/login" element ={<Login/>}/>
      <Route path = "/profile" element ={<Dashboard/>}/>
      <Route path = "/create" element ={<Createuser/>}/>
      <Route path = "/profile/update/:id" element ={<Update/>}/>
      <Route path = "/profile/delete/:id" element ={<Delete/>}/>
      <Route path = "/homepage" element ={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;

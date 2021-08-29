import {Search} from "./components/Search";
import ReactDOM from 'react-dom';
import Result from "./components/Result"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BsSearch} from "react-icons/bs";
import {useState} from "react";

const App = () => {

  let data=Search();
  const [state,setState]=useState("");
  const handleClick=(val)=> { 
    // axios.post('http://localhost:8000/showall',val);
    data=data?.filter(item=>item.name===val).map(i=>(
      ReactDOM.render(<Result item={i}/>, document.getElementById("root"))
    ))

  }

const inputEvent=(event)=>{
    setState(event.target.value.toLowerCase());
}
if(state.length>0){
  data=data?.filter((i)=>{
    return i.name?.toLowerCase()?.match(state);
  });
}
  return (
    <div className="container">
      <div>  
        <BsSearch size="25px" style={{marginRight:"8px"}}/>   
      <input  className="box" type="text" value={state} name="name"  onChange={inputEvent} />
      {/* </div> */}
      </div>
      <div className="cs-1">
      {data?.map((item) => 
        <ul>
          <li key={item._id} onClick={()=>handleClick(item.name)} value={item.name}>{item.name}
          <span style={{backgroundColor:"#98FF98"}}className="dot"></span>
          <span style={{backgroundColor:"#1167b1"}}className="dot"></span>
          <span style={{backgroundColor:"#F9A602"}}className="dot"></span>
          <span style={{backgroundColor:"#E11584"}}className="dot"></span>
          <p>{item.website}</p>
          </li>
        </ul>
      )}
      </div>
    </div>
  )
}

export default App;
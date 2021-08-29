import {useState} from "react";
import {BsSearch} from "react-icons/bs";
import "./search.css"
const Search_Bar = () => {
const [state,setState]=useState("");

const inputEvent=(event)=>{
    setState(event.target.value);
}
    return (
        <div className="search" style={{marginBottom:"100px"}}>
            <input   className="input" type="text"
            value={state}
            name="name"
            onChange={inputEvent}
            >
                <BsSearch/>
            </input>
        </div>
    );
};
export default Search_Bar;
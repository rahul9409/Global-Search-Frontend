import {BsBoxArrowUpRight,BsFillPeopleFill} from "react-icons/bs";
import {MdLanguage} from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import './search.css'


const Result = (props) => {
    // let data=Search();
    const res=props.item;
    const link='https://'+res.website+'/'
    return (
        <div className="result" style={{marginLeft:"20px"}}>
          <span className="div1" style={{backgroundColor:"#3A3B3C", color:"white", marginLeft:"700px",marginBottom: "-15px",width:"12%"}}>Owner:{res.owner}</span>
          <span className="div1" style={{backgroundColor:"#2a9df4", color:"white", marginLeft:"940px",marginTop:"-24px",width:"10%"}}>Last Activity:A year ago</span>
          <span className="div1" style={{backgroundColor:"#F6BE00", color:"black", marginLeft:"1140px",marginTop:"-22px",width:"10%"}}>Is A Customer</span>
        <h4 style={{fontFamily:"inherit",color:"grey"}}>{res.name} <a  href={link} target='blank'>
        <BsBoxArrowUpRight/>
        </a></h4>
        <a target='blank' style={{textDecoration:"none"}} href={link}>{res.website}<MdLanguage style={{marginLeft:"5px"}}/></a><br/>
        <span style={{fontFamily:"sans-serif", color:"#808080"}}>Location {res.location}</span>
        <span className="emp"style={{fontFamily:"sans-serif", color:"#808080"}}><BsFillPeopleFill size="30px" style={{color:"silver"}}/> {res.established} Employees</span>
        <span className="occ" style={{fontFamily:"sans-serif", color:"#808080"}}><MdLanguage size="30px" color="silver"/> {res.description}</span><br/>
        <a href="https://linkedin.com" target='blank'><AiFillLinkedin color="blue"/></a>
        </div>
    );
};
export default Result;
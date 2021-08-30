import {BsBoxArrowUpRight,BsFillPeopleFill} from "react-icons/bs";
import {MdLanguage} from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import './search.css'


const Result = (props) => {
    // let data=Search();
    const res=props.item;
    const link='https://'+res.website+'/'
    return (
        <div className="result" style={{marginLeft:"20px",marginRight:"20px",marginTop:"90px", backgroundColor:"#c5c6d0",borderColor:"black"}}>
          <div>
         <img src="https://search-company-name-app.herokuapp.com/static/media/icon.1e551ec6.svg" alt="solanki" style={{width:"5%"}}/>
         </div>
         <div style={{marginLeft:"20px"}}>
          <span className="div1" style={{backgroundColor:"#3A3B3C", color:"white", marginLeft:"700px",marginTop:"-90px",width:"12%"}}>Owner:{res.owner}</span>
          <span className="div1" style={{backgroundColor:"#2a9df4", color:"white", marginLeft:"940px",marginTop:"-24px",width:"10%"}}>Last Activity:A year ago</span>
          <span className="div1" style={{backgroundColor:"#F6BE00", color:"black", marginLeft:"1140px",marginTop:"-25px",width:"10%"}}>Is A Customer</span>
          <span className="div1" style={{backgroundColor:"grey", color:"white", marginLeft:"1340px",marginTop:"-22px",width:"10%"}}>Not on Sales Left</span>
          <span className="div1" style={{backgroundColor:"#F6BE00", color:"black", marginLeft:"1540px",marginTop:"-25px",width:"10%"}}>Opportunities</span>
        <h4 style={{fontFamily:"inherit", marginLeft:"80px"}}>{res.name} <a  href={link} target='blank'>
        <BsBoxArrowUpRight/>
        </a></h4>
        <a target='blank' style={{textDecoration:"none",marginLeft:"80px"}} href={link}>{res.website}<MdLanguage style={{marginLeft:"5px"}}/></a><br/>
        <span style={{fontFamily:"sans-serif", marginLeft:"80px" }}>Location {res.location}</span>
        <span className="emp"style={{fontFamily:"sans-serif"}}><BsFillPeopleFill size="30px" /> {res.established} Employees</span>
        <span className="occ" style={{fontFamily:"sans-serif"}}><MdLanguage size="30px" /> {res.description}</span><br/>
        <a href="https://linkedin.com" target='blank' style={{marginLeft:"80px"}}><AiFillLinkedin color="blue"/></a>
        </div>
        </div>
    );
};
export default Result;
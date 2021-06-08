import './Header.css';
import Logo from "../logo.png";
import SearchIcon from '@material-ui/icons/Search';



const Header= ()=>{
    return (
        <>
        <div className="header">
             
            <div className="d-flex">
                <img alt="" style={{height:"6.5rem"}} src={Logo}></img>
                <div className="menudropdown2">
                    <button style={{border:"none",padding:"16px",backgroundColor:"transparent"}}>Welcome guest |</button>
                    <button style={{border:"none",padding:"16px",backgroundColor:"transparent"}}>Log in |</button>
                    <button style={{border:"none",padding:"16px",backgroundColor:"transparent"}}>Contact us |</button>
                    <button style={{border:"none",padding:"16px",marginRight:"10px",backgroundColor:"transparent"}}>Resourse center</button>
                    <div className="d-flex" style={{margin:"16px",border:"2px solid black"}}>
                        <div style={{backgroundColor:"white"}}><SearchIcon/></div>
                        <input style={{border:"none"}} placeholder="Search"></input>
                        <button style={{backgroundColor:"lightgray"}} className="dropdown-toggle" ></button>
                    </div>
                </div>
            </div>
             <div className="menudropdown1">
                 <ul>
                     <li >Home</li>
                     <li className="Overview" style={{backgroundColor:"white",color:"black",backgroundImage: "linear-gradient(#ffffff,#ffffff,#e6e6e6,#e6e6e6)",borderLeft:"2px solid black",borderRight:"2px solid black",borderBottom:"2px solid black"}}>Overview</li>
                     <li>Who we are</li>
                     <li>What We Do</li>
                     <li>How we Do it</li>
                     <li>Why digitasLBi</li>
                     <li>Global Reach</li>
                 </ul>

             </div>
        </div>
        
          </>
    )
}

export default Header;
import './Header.css';
import Logo from "../logo.png";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';


const Header= ()=>{
    return (
        <>
        <div className="header">
            <div className="menuBar">
                <input type="checkbox" id="check"></input>
                <label for="check">
                    <div>
                   <MenuIcon id="btn" fontSize="large"/>
                   </div>
                </label>
                <div className="menubarOptions">
                     <ol >
                        <li><a href="Home">Home</a></li>
                        <li ><a href="Overview">Overview</a></li>
                        <li><a href="who-we-are">Who we are</a></li>
                        <li><a href="what-we-do">What We Do</a></li>
                        <li><a href="how-we-do-it"> How we Do it</a></li>
                        <li><a href="why-digitaslbi">Why digitasLBi</a></li>
                        <li><a href="global-reach">Global Reach</a></li>
                        <li><a href="what-we-do">Welcome guest</a></li>
                        <li><a href="how-we-do-it">Login</a></li>
                        <li><a href="why-digitaslbi">Contact us</a></li>
                        <li><a href="global-reach">Resource center</a></li>
                    </ol>
                </div>
             </div>
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
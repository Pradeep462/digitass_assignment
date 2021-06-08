import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookIcon from '@material-ui/icons/Book';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const Footer = () =>{
    return (
        <>
        <div className="footer mt-3">
            <div className="about">
                <h5>About</h5>
                <a style={{color:"white"}} href="ab">Vision & Mission</a><br/>
                <a style={{color:"white"}} href="ab">Thought Leadership</a><br/>
                <a style={{color:"white"}} href="ab">Events</a><br/>
                <a style={{color:"white"}} href="ab">Press Rooom</a><br/>
                <a style={{color:"white"}} href="ab">Careers</a><br/>
                <a style={{color:"white"}} href="ab">Awards Recognition</a>
            </div>
            <div className="Training" >
                <h5>Training</h5>
                <a style={{color:"white"}} href="ab">Vision & Mission</a><br/>
                <a style={{color:"white"}} href="ab">Thought Leadership</a><br/>
                <a style={{color:"white"}} href="ab">Events</a><br/>
                <a style={{color:"white"}} href="ab">Press Rooom</a><br/>
                <a style={{color:"white"}} href="ab">Careers</a><br/>
                <a style={{color:"white"}} href="ab">Awards Recognition</a>
            </div>
            <div className="Resources">
                <h5>Resources</h5> 
                <a style={{color:"white"}} href="ab">Vision & Mission</a><br/>
                <a style={{color:"white"}} href="ab">Thought Leadership</a><br/>
                <a style={{color:"white"}} href="ab">Events</a><br/>
                <a style={{color:"white"}} href="ab">Press Rooom</a><br/>
                <a style={{color:"white"}} href="ab">Careers</a><br/>
                <a style={{color:"white"}} href="ab">Awards Recognition</a>
            </div>
            <div className="Global-Reach">
                <h5>Global Reach</h5>
                <a style={{color:"white"}} href="ab">Vision & Mission</a><br/>
                <a style={{color:"white"}} href="ab">Thought Leadership</a><br/>
                <a style={{color:"white"}} href="ab">Events</a><br/>
                <a style={{color:"white"}} href="ab">Press Rooom</a><br/>
                <a style={{color:"white"}} href="ab">Careers</a><br/>
                <a style={{color:"white"}} href="ab">Awards Recognition</a>
            </div>
          
            <div className="share" style={{paddingLeft:"20px"}}>
                <h5>share</h5>
                <a style={{color:"white"}} href="ab"><FacebookIcon fontSize="small" style={{color:"white",backgroundColor:"purple",border:"2px solid white"}}/>Facebook</a><br/>
                <a style={{color:"white"}} href="ab"><TwitterIcon fontSize="small" style={{color:"white",backgroundColor:"purple",border:"2px solid white"}}/>Twitter</a><br/>
                <a style={{color:"white"}} href="ab"><LinkedInIcon fontSize="small" style={{color:"white",backgroundColor:"purple",border:"2px solid white"}}/>Linkedin</a><br/>
                <a style={{color:"white"}} href="ab"><BookIcon fontSize="small" style={{color:"white",backgroundColor:"purple",border:"2px solid white"}}/> Blog</a><br/>
                <a style={{color:"white"}} href="ab"><MailOutlineIcon fontSize="small" style={{color:"white",backgroundColor:"purple",border:"2px solid white"}}/>E-mal</a><br/>
 
            </div>
        </div>
        <div className="footerDown">
            <div className="insideFoooterDown">
                    <button style={{border:"none",backgroundColor:"transparent"}}>Termes of use</button>
                    <button style={{border:"none",backgroundColor:"transparent",borderLeft:"2px solid gray"}}>Privacy Policy</button>
                    <button style={{border:"none",backgroundColor:"transparent",borderLeft:"2px solid gray"}}>Legal Notice</button>
                    <button style={{border:"none",marginRight:"10px",backgroundColor:"transparent",borderLeft:"2px solid gray"}}>Sitemap</button>
            </div>      
        </div>
        </>
    )
}

export default Footer;
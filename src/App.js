
import './App.css';
import ContentPart from './components/Content.js'
import Header from './components/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import TwitterIcon from '@material-ui/icons/Twitter';

import Footer from './components/Footer';
import FacebookIcon from '@material-ui/icons/Facebook';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
function App() {
  return (
    <div className="App">
       <div className="headerCom">
         <div className="upperOptions">
              <button style={{color:"#429bf5",border:"2px solid #429bf5",borderRadius:"0.2rem",backgroundImage:"linear-gradient(#ffffff,#ffffff,#c2f0ff)"}}><TwitterIcon style={{color:"#429bf5"}}/>Tweet</button>
              <button style={{paddingLeft:"1rem",paddingRight:"1rem",border:"2px solid skyblue",borderRadius:"0.2rem",marginLeft:"0.8rem",backgroundColor:"white"}}>1</button>
              <button style={{color:"blue",border:"2px solid blue",borderRadius:"0.2rem",marginLeft:"0.8rem",backgroundImage:"linear-gradient(#ffffff,#ffffff,#d6e0ff)"}}><FacebookIcon style={{color:"blue"}}/>Like</button>
              <button style={{paddingLeft:"1rem",paddingRight:"1rem",border:"2px solid lightgray",borderRadius:"0.2rem",marginLeft:"0.8rem"}}>8</button>
              <button style={{border:"2px solid skyblue",borderRadius:"0.2rem",marginLeft:"0.8rem"}}> +1</button>
              <button style={{paddingLeft:"1rem",paddingRight:"1rem",border:"2px solid skyblue",borderRadius:"0.2rem",marginLeft:"0.8rem",backgroundColor:"white"}}>1</button>
          </div>
          <Header/>            
       </div>
       <div className="contentCom">
         <div>
              <button style={{border:"none",backgroundColor:"transparent"}}>Home<KeyboardArrowRightIcon/></button>
              <button style={{border:"none",backgroundColor:"transparent"}}><h6>Overview</h6></button>
          </div>
        <ContentPart/>
        <Footer/>
       </div>
       
    </div>
  );
}

export default App;

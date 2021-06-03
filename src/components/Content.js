
import './Content.css';
import Office from "../office2.jpg"
import './Header.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const ContentPart = ()=>{
    return (
        <div className="contents" >
              <div className="Oimage" style={{backgroundImage:`url(${Office})`}} >
                <button className="OverView">OverView</button>
                <div className="description">Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit, sed do eiusmod tempor incididunt ut.</div>
              </div>
               <div className="insideContents">
                        <div className="desBlock-1 mt-5">
                           <div className="insidedesBlock-1">
                                <div className="insideBlock-1">
                                    <h3>Events</h3>
                                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                    <div className="d-flex ">
                                        <div style={{width:"70%"}}>
                                            <KeyboardArrowLeftIcon  className="" style={{backgroundColor:"lightgray"}}/>
                                            <KeyboardArrowRightIcon className=" ml-1" style={{backgroundColor:"#216ead"}}/>
                                        </div>
                                        <button style={{color:"#216ead",width:"30%",border:"none",backgroundColor:"transparent"}} className="">more   <KeyboardArrowRightIcon/></button>
                                    </div>
                                    <h3 className="mt-4">Speeches</h3>
                                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                     <div className="d-flex">
                                        <div style={{width:"70%"}}></div>
                                        <button style={{color:"#216ead",width:"30%",border:"none",backgroundColor:"transparent"}} className="">more   <KeyboardArrowRightIcon/></button>
                                    </div> 
                                   
                                </div>
                                <div className="insideBlock-2">
                                    <h3>Parthers</h3>
                                    <div className="d-flex pb-3">
                                        <div style={{backgroundColor:"lightgray"}}className="Parthers mt-2">
                                                image comes heres
                                        </div>
                                        <div className="ml-3">
                                            <a href="ab"><u>Learning</u></a><br/>
                                            <a href="ab"><u>Teaching</u></a><br/>
                                            <a href="ab"><u>Business</u></a><br/>
                                            <a href="ab"><u>Sales Resources</u></a>
                                        </div>
                                    </div>
                                    <h3 className="mt-5">Careers</h3>
                                    <div style={{width:"100%"}}>
                                        <div className="ml-2 mr-4">
                                            <div >
                                                <a href="ab"><u><FiberManualRecordIcon style={{height:"10px",color:"#216ead"}}/>Lorem ipsum dolor sit amet, constructor</u></a><br/>
                                                <a href="ab"><u><FiberManualRecordIcon style={{height:"10px",color:"#216ead"}}/>Sed do eiusmod tempor incididunt ut labore at,</u></a><br/>
                                                <a href="ab"><u><FiberManualRecordIcon style={{height:"10px",color:"#216ead"}}/>Dolore magna aliqua. Ut enim ad minim vaniam</u></a>
                                            </div>
                                            <button style={{color:"#216ead",float:"right",border:"none",backgroundColor:"transparent"}} className="mt-5">more   <KeyboardArrowRightIcon/></button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div >
                    </div>
                    <div >
                       <button className="pl-4 pr-4" style={{border:"none",backgroundColor:"#216ead",color:"white",height:"2.5rem"}}>Press Releases</button>
                       <button className="pl-4 pr-4" style={{height:"2.5rem",borderTopStyle:"dashed",borderRightStyle:"dashed",borderBottom:"none"}}>Media Coverage</button>
                       <div className="pressReleases pl-3 " style={{border:"1px solid black"}}>
                           <p style={{color:"#0683cc",fontSize:"1.1rem"}}> Ut enim minim veniam, quis nostrud exercit, sed do elusmod tempor incididunt ut babore et<br/><spn style={{color:"gray"}}>15 june 2011</spn></p>
                           <p style={{color:"#0683cc",fontSize:"1.1rem"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br/><spn style={{color:"gray"}}>15 june 2011</spn></p>
                           <p style={{color:"#0683cc",fontSize:"1.1rem"}}> Ut enim minim veniam, quis nostrud exercit, sed do elusmod tempor incididunt ut babore et<br/><spn style={{color:"gray"}}>15 june 2011</spn></p>
                       </div>
                    </div>
                </div>
                <div className="desBlock-2 border-left mt-5 pl-4 border-dark">
                    <div className="pb-3 ">
                        <h3 style={{color:"purple"}}>Our products</h3>
                        <div className="d-flex">
                           <div style={{backgroundColor:"lightgray"}} className="productPhoto">Image comes here</div>
                           <div className="ml-3" style={{marginTop:"3rem"}}>
                               <h6>Closing Time -</h6>
                               <h6>Closing in Any</h6>
                               <h6>Price: $XX.XX</h6>
                           </div>
                        </div>
                        <div className="d-flex">
                                        <div style={{width:"70%"}}>
                                            <KeyboardArrowLeftIcon  className="" style={{backgroundColor:"lightgray"}}/>
                                            <KeyboardArrowRightIcon className=" ml-1" style={{backgroundColor:"#216ead"}}/>
                                        </div>
                                        <button style={{color:"#216ead",width:"30%",border:"none",backgroundColor:"transparent"}} className="">more   <KeyboardArrowRightIcon/></button>
                        </div>
                    </div>
                    <div className="border-top border-dark">
                       <h3 style={{color:"purple"}}>Recognition</h3>
                       <div className="d-flex">
                           <div className="productPhoto">Image comes here</div>
                           <div className="ml-3"  style={{marginTop:"5rem"}}>
                               <h6>Sales Call Planner:</h6>
                               <h6>Top CRM Sales Tool</h6>  
                           </div>

                        </div>
                        <div className="d-flex ">
                                        <div style={{width:"70%"}}>
                                            <KeyboardArrowLeftIcon  className="" style={{backgroundColor:"lightgray"}}/>
                                            <KeyboardArrowRightIcon className=" ml-1" style={{backgroundColor:"#216ead"}}/>
                                        </div>
                                        <button style={{color:"#216ead",width:"30%",border:"none",backgroundColor:"transparent"}} className="">more   <KeyboardArrowRightIcon/></button>                        </div>
                    </div>
                  </div>
              </div>
        </div>

    )
}

export default ContentPart;
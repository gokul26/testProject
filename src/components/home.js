
import React from "react";
import { Appcontext } from "./context";
import "../css/home.css";
import Nav from "./nav";

import jwt from "jsonwebtoken";
import { useHistory } from "react-router";


function Home (){
    let history = useHistory()
    let token = window.localStorage.getItem("auth")
    let userData = jwt.decode(token)
    const{ setServiceType} = React.useContext(Appcontext)

    async function order(value){
        try{
            if( token  && userData.exp*1000 >= Date.now()){
                if(value===1){
                    setServiceType("BASIC WASH Rs.1999")
                    history.push("./appointment_form")
                }else if( value===2){
                    setServiceType("DELUX WASH Rs.2999")
                    history.push("./appointment_form")
                }else{
                    setServiceType("ULTIMATE WASH Rs.3999")
                    history.push("./appointment_form")
                }
                
            }else{
                history.push("/login")
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <Nav/>
        <div className="titleDiv" id="firstDiv">
            <div className="titleContent">
                <p className="t1">AFFORDABLE</p>
                <p className="t1">AND</p>
                <p className="t1">BEST</p>
                <p className="t1 t2">EQUIPMENT RENTAL</p>
                <button className="bookActionBtn" onClick={()=>{history.push("/appointment_form")}}>Book Now <i className="fas fa-arrow-right rightArw"></i></button>
            </div>
            <div className="imgDiv">
                <img src="https://thumbs.dreamstime.com/b/flat-lay-set-construction-hardware-tools-building-repair-p-flat-lay-set-construction-hardware-tools-building-repair-painting-117438011.jpg" alt="washImage" className="washImages"/>
            </div>
        </div>
        <div className="div2">
            <p className="p1">Why Choose Us</p>
            <p className="p2">FOR YOUR NEXT EQUIPMENT RENTAL </p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <div className="callIcon">
                            <i className="fas fa-phone-alt fa-3x ic1"></i>
                            </div>
                            <div>
                                <p className="d1">Easy Booking</p>
                                <p className="description">First thing first, you???ll need to either 
                                    book an rental with us </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <div  className="callIcon">
                            <i className="fas fa-cog fa-3x ic1"></i>
                            </div>
                            <div>
                                <p className="d1">Perfect Servicing</p>
                                <p className="description">Best service on the industry so far.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <div className="callIcon">
                            <i className="fas fa-hand-holding-usd fa-3x ic1"></i>
                            </div>
                            <div>
                                <p className="d1">Awesome Pricing</p>
                                <p className="description">Most Affordable for wide range of equipments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div className="priceingParent">
            <div className="priceingTitle">
                <div>
                    <p className="c1">AFFORDABLE PRICING FOR EVERYONE</p>
                </div>
                <div className="priceDescription">
                    <p className="c2">
                        Choosing Equipments is a constant process in the life of
                        every engineer. We try to give you Only positive emotions.
                    </p>
                </div>
            </div>
            <div className="orderParent" id="paisa">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 orderRow">
                        <div>
                            <div>
                                <p className="o1">Rs.199</p>
                                <p className="o2">TOOLS SET</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Screwdrivers</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Hammers</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Pliers</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Measurement Tape</p>
                                <p><i className="fas fa-check" style={{color:"green"  , marginRight:"15px"}}></i>Wrenches</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Hand Saw</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Utility Knife</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Axes</p>
                                <button className="bookBtn" onClick={()=>{order(1)}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 orderRow2">
                        <div>
                            <div>
                                <p className="o1">Rs.250</p>
                                <p className="o2">WRENCH SET</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Pedal Wrench</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Monkey wrench</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Pliers Wrench</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Strap wrench</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Plumber's Wrench</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Tap Wrench</p>
                                <p><i className="fas fa-check" style={{color:"green", marginRight:"15px"}}></i>Spud Wrench</p>
                                <p><i className="fas fa-check" style={{color:"green", marginRight:"15px"}}></i>Alligator Wrench</p>
                                <button className="bookBtn" onClick={()=>{order(2)}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 orderRow3">
                        <div>
                            <div>
                                <p className="o1">Rs.399</p>
                                <p className="o2">FORGE TOOLS SET</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Anvil</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Chisel</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Tong</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Fuller</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Hammer</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Flatter</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Swage</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Clamping vice</p>
                                <button className="bookBtn" onClick={()=>{order(3)}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="workedBrands">
            {/* <div className="servicBrands">
                <p className="sr1">WE'VE COVERED EVERY BRANDS</p>
            </div>
            <div>
            <div className="container-fluid">
                <div className="row" style={{marginBottom:"40px"}}>
                    <div className="col-lg-3 col-md-6" >
                        <div  className="brandName" >
                            <img src="./images/ferrari.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="brandName">
                            <img src="./images/jaguar.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="brandName">
                            <img src="./images/mini.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="brandName">
                            <img src="./images/tesla.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            </div> */}
        </div>
        <div className="footer" id="aboutUs_contactUs">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 aboutDiv">
                        <p className="footer1">ABOUT US</p>
                        <p className="c2 desp">Making cars clean, shiny and glossy is our main specialty! 
                            On par with dedicated and thorough exterior and interior washing services,
                            we also offer such detailing help as interior vacuuming, polishing, 
                            waxing and many others...</p>
                    </div>
                    <div className="col-lg-4 needHelpDiv" >
                        <p className="footer1">NEED HELP ?</p>
                        <p  className="footer1"> WE ARE HERE TO HELP YOU</p>
                       
                    </div>
                    <div  className="col-lg-4">
                        <div className="footerIcons">
                            <div>
                             <i className="far fa-clock fa-2x ficon"></i>
                            </div>
                            <div>
                                <p className="footer2">We are open</p>
                                <p className="footer2">Sun-sat 10:00 am - 8:00 pm</p>
                            </div> 
                        </div>
                        <div className="footerIcons">
                            <div>
                                <i className="fas fa-phone-square-alt fa-2x ficon"></i>
                            </div>
                            <div>
                                <p className="footer2">Contact</p>
                                <p className="footer2">(+91) 7865539088</p>
                            </div>               
                        </div>
                        <div className="footerIcons">
                            <div>
                                <i className="fas fa-map-marker-alt fa-2x ficon"></i>
                            </div>
                            <div>
                                <p className="footer2">We're HERE</p>
                                <p className="footer2">no.2/4 main road ,shop no-1 , Royal Chambers , Chennai - 600023 </p>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Home;
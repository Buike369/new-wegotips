import React,{useState} from "react"
import Footer from "./footer"
import "./style/about.css"
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const About=()=>{

    const [register,setRegister] = useState(false)
    return(
        <div className="About_Dive_Page" >
             <div className="About_Dive_Page1">

    <div style={{padding:"0 10px"}}>
             <div className="About_Us">
                 <div className="About_paragraph"> 
                 <div className="About_header">About Us</div>
                <p className="Set_A_Branch"> At Earnars.com, We set a benchmark of making provision of safe and accurate predictions you can trust! Earnars predictions, tips & analysis are based on algorithms, detailed analysis, betting tips, forms and statistics. We have dedicated experts that are passionate in ensuring you make profits!</p>

<p className="Set_A_Branch">We provide you with the most accurate and guaranteed football/trading tips everyday of the week. We are relentless in our drive to assist many bettors/traders make good use of the tips we provide to guarantee profits. </p>

<p className="Set_A_Branch">Our expers at Earnars offer predictions for various market. We are thorough in our work and have the success of our users in mind. We promise to aid you in your bets/trades! Wonder less we are considered the Home of Successful Predictions!</p>
                 </div>
             </div>
            </div>
                <div className="bkFR">
                    <div style={{ padding: "0 10px" }}>
                        <div className="MessageDivCov">
                            <div className="Package_Up">
                                <h1 className="alap">Don't miss out on Fantastic News</h1>
                                <p className="Each_Time_your">
                                    Subscribe to our newsletter and be the first to receive news.
                                </p>
                                <form>
                                    <div className="newsInput">
                                        <input type="email" placeholder="Enter Your Email" className="newsBro" />
                                        <FontAwesomeIcon icon={faPaperPlane} className="EmailSentIcon" />
                                        
                                    </div>
                                </form>
                                <img src="/img/news.svg" alt="" className="messageImg" />
                            </div>
                            <img src="/img/undrawWorld1.svg" alt="" className="papag" />
                            <img src="/img/undrawWorld1.svg" alt="" className="papag1" />

                        </div>
                    </div>
                </div>
            <div className="Foot_VH"><Footer /></div> 

            </div>
        </div>
    )
}

export default About;
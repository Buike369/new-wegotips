import React,{useState} from "react"
import Footer from "./footer"
import "./style/about.css"
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane} from '@fortawesome/free-solid-svg-icons'


const Disclaimer=()=>{

    const [register,setRegister] = useState(false)
    return(
        <div className="About_Dive_Page" >
             <div className="About_Dive_Page1">
         <div style={{padding:"0 10px"}}>
             <div className="About_Us">
                 <div className="About_paragraph"> 
                 <div className="About_header"> Disclaimer</div>
                <p className="Set_A_Branch"> Earnars.com is not a Forex Platform, bookmaker, betting and does not collect bets/trades. We provide predictions, techniques, guides, help and recommendations as we try to make them as accurate as possible and are subject to errors.</p>




<p className="Set_A_Branch">Predictions must be considered as recommendations and not incitement to bet/trade, Remember that trading in the financial market is very risky and gambling should be considered as entertainment. The visitor and Earnars user is solely responsible for his actions and his decisions and in no event shall the site and its employees be held responsible for the information included on Earnars.</p>
<p className="Set_A_Branch">Earnars will not be liable for any loss of money or anything else that may result from the use of the information on earnars. Also please note that in some countries there are restrictions on sports betting/digital asset trading and it is the sole responsibility of the user/visitor to see and learn about these regulations. We reserve the right to discretion, without prior notice, to do changes and corrections to this site. The images, except where otherwise indicated, are taken directly from the web, if some images were inserted by mistake violating the copyright, please contact the administrator for immediate removal.</p>
<p className="Set_A_Branch"> By opting to receive predictions and tips, you accept that all earnars predictions and tips are for informational purposes only and that Earnars take no responsibility for any losses incurred by you the subscriber, as a direct result of acting upon received earnars information. We do not encourage gambling in any sort of form. Users under 18 years old must seek parental consent.</p>
                 </div>
             </div>
             </div>
             <div className="bkFR">
       <div style={{padding:"0 10px"}}>
                <div className="MessageDivCov">
               <div className="Package_Up">
                   <h1 className="alap">Don't miss out on Fantastic News</h1>
                   <p className="Each_Time_your">
                       Subscribe to our newsletter and be the first to receive news.
                   </p>
                   <form>
                    <div className="newsInput">
                        <input type="email" placeholder="Enter Your Email"  className="newsBro"/>
                        <FontAwesomeIcon icon={faPaperPlane} className="EmailSentIcon" />
                    </div>
                   </form>
                   <img src="/img/news.svg" alt=""  className="messageImg"/>
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

export default Disclaimer;
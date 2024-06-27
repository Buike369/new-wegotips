import React,{useState} from "react"
import Footer from "./footer"
import "./style/about.css"
import "./style/contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'



const Contact =()=>{

    const [register,setRegister] = useState(false)

    return(
        <div className="About_Dive_Page" >
             <div className="About_Dive_Page1">

               <div style={{padding:"0 10px"}}>
             <div className="About_Us">
                 <div className="About_paragraph"> 
                 <div className="About_header">Contact Information</div>
               
                   <div>
                       <p className="We_areF">We are at the tip of your finger! Get in touch with us via our email addresses below.</p>
                       <div className="For_general_Advert">
                           <div className="For_General_Div">
                               <p className="contact_p_c">For General Enquiries:</p>
                               <p className="infoTrY">info@earnars.com</p>
                               <p className="infoTrY fontWW">Or</p>
                               <p> <FontAwesomeIcon icon={faWhatsapp} className="icon_brand_size foodI" /> <span className="WhattsZ"><a href="https://wa.me/08059279660" className="phoneNm">+234 805 927 9660</a></span></p>
                           </div> 
                           <div className="For_General_Div">
                               <p className="contact_p_c">For Advert and Sponsorship:</p>
                               <p className="infoTrY">advert@earnars.com</p>
                               <p className="infoTrY fontWW">Or</p>
                               <p><a href="#" className="ClickHereMe hereTo">Click here to Chat on Skype</a></p>
                           </div> 
                       </div>
                       <p className="monday" style={{fontWeight:"700",fontSize:"18px"}}>Working Hours :</p>
                       <p className="monday">Mondays to Saturdays (9am to 5pm) (WAT)  </p>
                     
                   </div>

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

export default Contact;
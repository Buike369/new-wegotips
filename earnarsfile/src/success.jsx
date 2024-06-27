import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import "./style/otp.css"
import {AuthContext}from "./context/authContext"



const Success =()=>{

    const {forgotEmail} = useContext(AuthContext);
    
    return(
        <div className="BgColor" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>
            <div className="Form_Divbb">
           <div className="Form_Div renttt">
               <form>
                  
                  <div className="welcome4">Password Reset Successfully</div>
                  <p className="codeSent fadaFara">Your password reset was successfully done,pls Click the button to login.</p>
                

                  <div className="OTPDIV1">
               
                 </div>
                  <a href="/login" className="sesetP"><div  className="loginn">Verify Account</div></a>
              
         
                     
               </form>
           </div>
           </div>
        </div>
    )
}

export default Success;
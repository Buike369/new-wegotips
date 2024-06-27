import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import "./style/otp.css"

import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {AuthContext}from "./context/authContext"



const Otp =()=>{
 const [err,setError]= useState(null)
    const {forgotEmail,forgotPassword} = useContext(AuthContext);
     const navigate = useNavigate()
     const [success,setSuccess] = useState("")

     const [email,setEmail] =useState({email:forgotEmail})

    
    const handleSumit1 = async (e) =>{
    e.preventDefault()

   try{
    // await axios.post("/auth/forgotpassword",email2)
    await forgotPassword(email)
    //  navigate('/otp')
     
     setSuccess("Send Successfully, check ur Email ")
     setTimeout(()=>{
          setSuccess("")
     },5000)
    
   }catch(err){
    setError(err.response.data.msg)
    // console.log(err.response.data.msg)
   } 
     
    
    }
    
    return(
        <div className="BgColor" style={{backgroundColor:"#0f0b34"}}>
            <div className="Form_Divbb">
                      <div style={{padding:"0 5px"}}>
           <div className="Form_Div renttt">
               <form>
                  
                  <div className="welcome4">Email Verification</div>
                  {success && <p style={{color:"#fff",textAlign:"center"}}>{success}</p>}
                  <p className="codeSent">We have sent a link to your Email {forgotEmail}</p>
                  {/* <p className="codeSent"> {forgotEmail}</p> */}

                  {/* <div className="OTPDIV1">
                 <div className="OTPDiv">
                    <input type="number" placeholder ="" className="codePP" name="num" min="1" max="1"/>
                    <input type="number" placeholder ="" className="codePP" />
                    <input type="number" placeholder ="" className="codePP"/>
                    <input type="number" placeholder ="" className="codePP"/>
                    

                 </div>
                 </div> */}
                  {/* <a href="/resetpassword" className="sesetP"><div  className="loginn">Verify Account</div></a> */}
                    <div className="sesetP" onClick={handleSumit1 }><div  className="loginn">Resend Link</div></div>
              
         
                     <p className="Have_An">Don't receive link?<a onClick={handleSumit1 } className="sesetP"><span className="p_LoGIn">Resend Link</span></a></p>
                     
               </form>
           </div>
           </div>
           </div>
        </div>
    )
}

export default Otp;


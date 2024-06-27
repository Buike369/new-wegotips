import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import "./style/forgotpassword.css"

import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {AuthContext}from "./context/authContext"
import validator from 'validator';





const ForgotPassword =()=>{

    const [OTP,setOtp]=useState("")
    const [email2,setEmail2]=useState({
        email:"",
        
    })
  
      const {forgotPassword}=useContext(AuthContext)


    
   
    const navigate = useNavigate()
    // const {login}=useContext(AuthContext)
    

    const [err,setError]= useState(null)
    // const [success,setSuccess]= useState("")

    const handleChange = e =>{
   setEmail2( prev=>({...prev,[e.target.name]:e.target.value}))

    }
  
      // const see =()=>{
      //    const Otp1 = Math.floor(Math.random()* 9000 + 1000);
      //   setOtp(Otp1)
      // }
   

    const handleSumit1 = async (e) =>{
    e.preventDefault()
    if(email2.email.length === 0){
           setError("input field is empty")
           setTimeout(()=>{
             setError("")
           },3000)
    }else
      if(validator.isEmail(email2.email) === true){
          try{
    // await axios.post("/auth/forgotpassword",email2)
    await forgotPassword(email2)
     navigate('/otp')

    
   }catch(err){
    setError(err.response.data.msg)
     setTimeout(()=>{
             setError("")
           },3000)

   } 
      }else{
           setError("invalid email")
            setTimeout(()=>{
             setError("")
           },3000)
      }
  
     
    
    }
    return(
        <div className="BgColor" >
            <div className="Form_Divbb">
              <div style={{padding:"0 5px"}} className="DivForming">
           <div className="Form_Div page mD">
               <form>
                   {err && <p style={{color:"#fff",textAlign:"center",padding:"6px 4px",background:"#6d7aa8",borderRadius:"5px"}}>{err}</p>}
                  <div className="welcome4">Email Address</div>
                  <div  className="forgotText">Enter Your Email Address </div>
                  <div> <input type="email" placeholder="Enter Your Email" className="Full_Name inpupage page10 page11" name="email" onChange={handleChange}/></div>
                  
                 <a className="otpLink" onClick={handleSumit1}> <div  className="loginn">Send Reset Link</div></a>

                 
                 
               </form>
           </div>
           </div>
           </div>
        </div>
    )
}

export default  ForgotPassword;
import React,{useState,useContext,useEffect} from "react";
import "./style/register.css";
import "./style/login.css";
import "./style/forgotpassword.css"

import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {AuthContext}from "./context/authContext"
import validator from 'validator';





const ForgotPassword =()=>{
  // const wegoUrl = 'https://wegotips.com/api';
  const wegoUrl = '/api';
  // const wegoUrl = 'http://localhost:5001/api';

    const [OTP,setOtp]=useState("")
    const [email,setEmail]=useState("")
  
      const {forgotPassword}=useContext(AuthContext)
   
    const navigate = useNavigate()
    // const {login}=useContext(AuthContext)
    
    const [err,setError]= useState(null)
    // const [success,setSuccess]= useState("")

    const handleChange = (e)=>{
      setEmail(
        e.target.value    
    )

}

    const handleSubmit1 = async (e) =>{
    e.preventDefault()
          try{
    // await axios.post("/auth/forgotpassword",email2)
    await forgotPassword({email:email})
     navigate('/otp')

    
   }catch(err){
    // setError(err.response.data.msg)
  //    setTimeout(()=>{
  //            setError("")
  //          },3000)

  //  


  } 
     
    }


    useEffect(() => {
    if (email) {
         const checkEmail = async () => {
      try{
const response = await axios.get(`${wegoUrl}/auth/check-email`,{ params: { email: email }});

  // If email already exists, set error message
        if (response.data.message === "User exists.") {
          setError('');
        } 
        
      }catch(err){
        setError('Email not found, please register');
 console.error('Error checking email:', err);
      }}
     

      checkEmail();
    } else {
      setError('');
    }
  }, [email]);
    return(
        <div className="BgColor" >
            <div className="Form_Divbb">
              <div style={{padding:"0 5px"}} className="DivForming">
           <div className="Form_Div page mD">
               <form>
                  
                  <div className="welcome4">Email Address</div>
                  <div  className="forgotText">Enter Your Email Address </div>
                  <div> <input type="email" placeholder="Enter Your Email" className="Full_Name inpupage page10 page11" name="email" onChange={handleChange }/></div>
                   {err && <p style={{color:"red",textAlign:"center",padding:"6px 4px",borderRadius:"5px",marginBottom:"10px"}}>{err}</p>}
                  {err ? <a className="otpLink" href="/register"> <div  className="loginn">Click to register</div></a>  :<a className="otpLink" onClick={handleSubmit1}> <div  className="loginn">Send Reset Link</div></a> }
                 {/* <a className="otpLink" onClick={handleSumit1}> <div  className="loginn">Send Reset Link</div></a> */}

                 
                 
               </form>
           </div>
           </div>
           </div>
        </div>
    )
}

export default  ForgotPassword;
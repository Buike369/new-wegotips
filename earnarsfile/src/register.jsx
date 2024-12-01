import React,{useState, useEffect} from "react";
import "./style/register.css"
import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import withTitle from './title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { faGooglePlusG}from '@fortawesome/free-brands-svg-icons'
import validator from 'validator';
import { passwordStrength } from 'check-password-strength'

import SuccessN from "./success1"
import "./style/admin.css"

const Register =()=>{
  const wegoUrl =  'https://wegotips.com/api';
    // const wegoUrl =  'http://localhost:5001/api';


    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:"",
        referralCode:"",
    })

      const [loading, setLoading] = useState(false);
    const [isValid,setIsValid] = useState(false)

    const [message,setMessage] = useState("")
    const [usernameMessage,setUsernameMessage] = useState("")
        const [emailMessage,setEmailMessage] = useState("")
    const [passwordMessage,setPasswordMessage] = useState("")
    const [message1,setMessage1] = useState("")
    const [inputs50,setInputs50]=useState({
         showPassword: false,
    })
    const navigate = useNavigate()
    const[over18,setOver18]=useState(false);
    const [term,setTerm]=useState(false)
    const [error,setError]= useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
    }

      const handleChange1 = (event) => {
    setOver18(event.target.checked);  
  }

       const handleChange2 = (event) => {
      setTerm(event.target.checked);
  }


       const handleSubmit = async(e)=>{
          e.preventDefault()
          setLoading(true);
           if(validator.isEmail(inputs.email) === false){
          setEmailMessage("invalid email ")
            setTimeout(()=>{
            setEmailMessage("")
           },3000)
          } else if(passwordStrength(inputs.password).value === "Too weak"){
      setPasswordMessage("password strength is too weak ")
            setTimeout(()=>{
            setPasswordMessage("")
           },3000)
     }else if(inputs.password.length === 0){
          setPasswordMessage("password field is empty") 
          setTimeout(()=>{
            setPasswordMessage("")
           },3000)
                }else if(inputs.email.length === 0) {
          setEmailMessage("email   field is empty") 
          setTimeout(()=>{
            setEmailMessage("")
           },3000)
                }else if (inputs.username.length === 0) {
          setUsernameMessage(" username   is empty") 
          setTimeout(()=>{
            setUsernameMessage("")
           },3000)
     }else if(passwordStrength(inputs.password).value === "Weak"){
       setPasswordMessage("password strength is weak ")
            setTimeout(()=>{
            setPasswordMessage("")
           },3000)
     }else if(passwordStrength(inputs.password).value === "Medium"){
       setPasswordMessage("password strength is medium and should be greater than 10")
            setTimeout(()=>{
            setPasswordMessage("")
           },3000)
     }
     else{
        await axios.post(`${wegoUrl}/auth/register`,inputs).then((response)=>{
          console.log(response.data.message)
      setMessage(response.data.message)
       setLoading(false); 
              setTimeout(()=>{
            setMessage("")
              navigate('/login')
           },10000)
       
           
         }).catch((err)=>{
           console.error('Error during registration:', error);
          setError(err.response.data.message)
           setTimeout(()=>{
      setError("")
            
           },3000)
      
           
         }) 
          }
    }

    const handleClickShowPassword = () => {
        setInputs50(prev=>({ ...prev, showPassword: !inputs50.showPassword }));
      };


       // Extract referral code from the URL on component mount
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const referralCode = urlParams.get('referralCode');
        if (referralCode) {
            setInputs(prevData => ({
                ...prevData,
                referralCode: referralCode,
            }));
        }
    }, []);
    
    return(
        <div className="BgColor" >

            <div className="formDivPAd">
            
      
              <div style={{padding:"0px 7px"}} className="DivForming">
            <div className="Form_Div page">
                <form>
      {/* {message && <div style={{color:"#fff",position:"absolute",zIndex:"500",left:"50%",right:"50%",top:"-5%",padding:"5px 10px",backgroundColor:"#20263a",width:"100%",transform:"translate(-50%,-50%)",textAlign:"center",borderRadius:"5px"}}>{message}</div>} */}
                     <p className="New_Account textAdmin">Create an account with wegotips</p>
                     {/* <p style={{textAlign:"center",marginBottom:'10px'}}>Create an account with us</p> */}
                     <label  className="KinL">Username :</label>
                    <div> <input type="text" placeholder="Username"  className="Full_Name inpupage page10 page11" onChange={handleChange} name="username" required/></div>
                                      {usernameMessage && <p className="errpage">{usernameMessage}</p>}
                                      <label  className="KinL">Email :</label>
                    <div> <input type="email" placeholder="Email" className="Full_Name inpupage page10 page11" onChange={handleChange} name="email" required/></div>
                                      {emailMessage && <p className="errpage">{emailMessage}</p>}
                
 <label htmlFor=""  className="KinL">Password :</label>
                    <div className="sers"> <input type={inputs50.showPassword ? "text":"password"} placeholder="Password" className="Full_Name inpupage page10 page11" onChange ={handleChange} name="password" value={inputs.password} required/>


                  {inputs50.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                  <label className="KinL" htmlFor="">Referral Code ( Optional ) :</label>
                                      <div> <input type="text" placeholder="referral_code" className="Full_Name inpupage page10 page11" onChange={handleChange} name="referralCode"  readOnly={!!inputs.referralCode} value={inputs.referralCode}/></div>
                                      {emailMessage && <p className="errpage">{emailMessage}</p>}
                  {error && <p className="errpage">{error}</p>}
                  {passwordMessage && <p className="errpage">{passwordMessage}</p>}
                  {message1 && <p className="errpage" style={{color:"#fff"}}>{message1}</p>}
                  

                     <div className="Checkbox_div"><input type="checkbox" name="over18" onChange={handleChange1} className="Bym"/> <label className="Over_18 adColor">By checking this box you declare that you are over 18yrs of age.</label></div>
                    
                    <div className="Checkbox_div"> <input type="checkbox" className="Bym" name="term" onChange={handleChange2}/><p className="Over_18 adColor">By checking this box you agree to all our Terms & Conditions.Click to  <a href="/termscondition" className="trems1">here</a> to read.</p></div>

                     <button disabled={!over18 || !term || (inputs.password.length === 0) || (inputs.password.length === 0) || (inputs.email.length === 0)} className={over18 && term && (inputs.password.length > 0) && (inputs.password.length > 0) && (inputs.email.length > 0) ? " RegisterM regmin":"RegisterM page10 page11"} onClick={handleSubmit}>{loading ? "Registering..." : "Register"}</button>
                     <div className="Or_with2">
                         <div className="Or_With"></div>
                         <p className="adColor">Or register with</p>
                        
                         <div className="Or_With"></div>
                     </div>
                     {/* <GoogleLogin clientId ="451426581815-ms0de6c6i4mk58d9k5d3e44q9ipqufq7.apps.googleusercontent.com" buttonText="Login with google" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy = {`single_host_origin`}/> */}
                     <div className="Googgle page10 page12"><FontAwesomeIcon icon={faGooglePlusG} className="gooleI" style={{width:"20%"}}/><div> Sign in with Google</div><div  style={{width:"20%"}}><FontAwesomeIcon  className="goole" /></div></div>
                     <p className="Already_Account adColor">Already have an account?</p>
                     <div className="LOGIN_HERE_NOW"><a href="/login" className="p_LoGIn trems1">Login Here</a></div>

                </form>
            </div>
            </div>
            </div>

            {message  &&  <SuccessN succ={message}/> }

        </div>
    )
}

export default withTitle(Register, 'Register with - Wegotips');

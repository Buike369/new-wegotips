import React,{useState} from "react";
import "./style/register.css"
import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { faGooglePlusG}from '@fortawesome/free-brands-svg-icons'
import validator from 'validator';
import { GoogleLogin } from "react-google-login"
import SuccessN from "./success1"

const Register =()=>{

  // const responseGoogle = async (response)=>{
  //   try{
  
  //     const res = await axios.post("http://localhost:8080/auth/google", {tokenId:response.tokenId})
  //     console.log(res.data)
  //   }catch(err){
  //      console.log(err)
  //   }
  // }

    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:"",
    })
    const [isValid,setIsValid] = useState(false)

    const [message,setMessage] = useState("")
    const [message1,setMessage1] = useState("")
    const [inputs50,setInputs50]=useState({
         showPassword: false,
    })
    const navigate = useNavigate()
    const[over18,setOver18]=useState(false);
    const [term,setTerm]=useState(false)
    const [err,setError]= useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

        // setIsValid(validator.isEmail(inputs.email) && (validator.isGmail(inputs.email) || validator.isYahoo(inputs.email)))
    }

      const handleChange1 = (event) => {
    setOver18(event.target.checked);  
  }

       const handleChange2 = (event) => {
      setTerm(event.target.checked);
  }


       const handleSumit =(e)=>{
          e.preventDefault()
     if(inputs.password.length <= 8){
      setError("password strength is poor ")
            setTimeout(()=>{
            setError("")
           },3000)
     }else if((inputs.password.length === 0) || (inputs.email.length === 0) || (inputs.username.length === 0) ){
          setError("password or email or username  field is empty") 
          setTimeout(()=>{
            setError("")
           },3000)
     }else if(inputs.password.length  > 20){
       setError("password length is too long ")
            setTimeout(()=>{
            setError("")
           },3000)
     }else if(validator.isEmail(inputs.email) === false){
          setError("invalid email ")
            setTimeout(()=>{
            setError("")
           },3000)
     }else{
         axios.post("https://tea.earnars.com/api/auth/register",inputs).then((response)=>{
            // console.log(response.data)
            // setMessage(response.data.msg)
            if(response.data === "User already exist"){
               setMessage1(response.data)
                 setTimeout(()=>{
            setMessage1("")
           },3000)  
            }else{
               setMessage(response.data)
              setTimeout(()=>{
            setMessage("")
              navigate('/login')
           },5000)
        // navigate('/login')
            }
       
             
         }).catch((err)=>{
          setError("internal server error")
           setTimeout(()=>{
      setError("")
            
           },3000)
           
         }) 
          }
    }

    const handleClickShowPassword = () => {
        setInputs50(previ=>({ ...previ, showPassword: !inputs50.showPassword }));
      };

    
    return(
        <div className="BgColor" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>

            <div className="formDivPAd">
            
      
              <div style={{padding:"0px 5px"}}>
            <div className="Form_Div">
                <form>
      {/* {message && <div style={{color:"#fff",position:"absolute",zIndex:"500",left:"50%",right:"50%",top:"-5%",padding:"5px 10px",backgroundColor:"#20263a",width:"100%",transform:"translate(-50%,-50%)",textAlign:"center",borderRadius:"5px"}}>{message}</div>} */}

                     <p className="New_Account">Register New Account</p>
                      {/* {message && <p style={{color:"#fff"}}>{message}</p>} */}
                    <div> <input type="text" placeholder="User_name"  className="Full_Name" onChange={handleChange} name="username"/></div>
                    <div> <input type="email" placeholder="Email" className="Full_Name" onChange={handleChange} name="email"/></div>
                  {/* {isValid ? "": <p style={{color:"#fff"}}>invalid email </p>} */}

                    <div className="sers"> <input type={inputs50.showPassword ? "text":"password"} placeholder="Password" className="Full_Name" onChange ={handleChange} name="password" value={inputs.password}
                  />
                  {inputs50.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                  {err && <p className="errpage">{err}</p>}
                  {message1 && <p className="errpage" style={{color:"#fff"}}>{message1}</p>}
                  

                     <div className="Checkbox_div"><input type="checkbox" name="over18" onChange={handleChange1} className="Bym"/> <label className="Over_18">By checking this box you declare that you are over 18yrs of age.</label></div>
                    
                    <div className="Checkbox_div"> <input type="checkbox" className="Bym" name="term" onChange={handleChange2}/><p className="Over_18">By checking this box you agree to all our Terms/Conditions.Click to  <a href="/termscondition" className="trems1">HERE</a> to read.</p></div>

                     <button disabled={!over18 || !term} className={over18 && term?" RegisterM regmin":"RegisterM"} onClick={handleSumit}>Register</button>
                     <div className="Or_with2">
                         <div className="Or_With"></div>
                         <p>Or register with</p>
                        
                         <div className="Or_With"></div>
                     </div>
                     {/* <GoogleLogin clientId ="451426581815-ms0de6c6i4mk58d9k5d3e44q9ipqufq7.apps.googleusercontent.com" buttonText="Login with google" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy = {`single_host_origin`}/> */}
                     <div className="Googgle"><FontAwesomeIcon icon={faGooglePlusG} className="gooleI" /><div>Google</div><FontAwesomeIcon icon={faGooglePlusG} className="goole" /></div>
                     <p className="Already_Account">Already have an account?</p>
                     <div className="LOGIN_HERE_NOW"><Link to="/login" className="p_LoGIn">LOGIN HERE</Link></div>

                </form>
            </div>
            </div>
            </div>

            {message  &&  <SuccessN succ={message}/> }

        </div>
    )
}

export default Register;

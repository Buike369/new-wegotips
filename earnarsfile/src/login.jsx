import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate} from "react-router-dom";
import {AuthContext}from "./context/authContext"
import validator from 'validator';
import SuccessN from "./success1"
import "./style/admin.css"

// import {GoogleLogin} from  'react-google-login'


const Login =()=>{

    // const responseGoogle=(response)=>{
    // console.log(response)
    // }

    const [inputs,setInputs]=useState({
        email:"",
        password:"",
       
    })
    const [inputs2,setInputs2]=useState({
        
        showPassword: false,
    })
    const navigate = useNavigate()
    const {login}=useContext(AuthContext)
    

    const [err,setError]= useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }

    const handleClickShowPassword = () => {
        setInputs2(previ=>({ ...previ, showPassword: !inputs2.showPassword }));
      };

    const handleSumit1 = async (e) =>{
    e.preventDefault()
    if(validator.isEmail(inputs.email) === false){
            setError("invalid Email")
      setTimeout(()=>{
            setError("")
           },3000)
 
    }else if((inputs.email.length === 0) || (inputs.password.length === 0 )){
        setError("email or password filed is empty")
      setTimeout(()=>{
            setError("")
           },3000)
    }else{
   try{
    await login(inputs)
     navigate('/')
    // await axios.post("http://localhost:8080/api/auth/login",inputs)
    // console.log("success")
   }catch(err){
    setError(err.response.data.msg)
      setTimeout(()=>{
            setError("")
           },3000)
   
   }  }   
    }
    return(
        <div className="BgColor" >
          
          
            <div className="Form_Divbb">
                <div style={{padding:"0px 5px"}} className="DivForming">
           <div className="Form_Div renttt page">
               <form>
                  
                  <div className="welcome4 textAdmin">Login to Earnars</div>
                  <div> <input type="email" placeholder="Email" className="Full_Name inpupage page10 page11" name="email" onChange={handleChange}/></div>
                  <div className="sers"> <input type={inputs2.showPassword ? "text":"password"} placeholder="Password" className="Full_Name inpupage page10 page11" onChange ={handleChange} name="password" 
                  />
                  {inputs2.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                  <div onClick={handleSumit1} className="loginn page10">Log In</div>
                  {err && <p className="errorP">{err}</p>}
                  <p className="FofD">Forget password ? <a href="/forgotpassword" className="sesetP"><span className="ClickMe">Click Here</span></a> </p>
                  <div className="Or_with2">
                         <div className="Or_With"></div>
                         <p className="adColor">Or login with</p>
                         <div className="Or_With"></div>
                     </div>
                     <div className="Googgle1 page10 page11" >Google</div>
                    
                     <p className="Have_An adColor">Don't have an account?</p>
                     <div className="LOGIN_HERE_NOW"><Link to="/register" className="p_LoGIn">Register Here</Link></div>
               </form>
           </div>
           </div>
           </div>
        
             
        </div>
    )
}

export default Login;
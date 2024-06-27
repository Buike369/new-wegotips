import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import "./style/resetpassword.css"
import {useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {AuthContext}from "./context/authContext"




const ResetPassword =()=>{

 const pa = useParams().id;

     
    const [inputs,setInputs]=useState({
        password:"",
        password1:"",
       
    })
    const [error1,setError1]=useState("")
   

    const [checkPassword,setCheckPassword] = useState("")
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
   try{
    await login(inputs)
     navigate('/')
    
   }catch(err){
    setError(err.response.data)
    console.log(err)
   }    
    }

 const checkSubmit = async()=>{
    if(inputs.password1 !== inputs.password){
        setError1("password do not match")
       setTimeout(()=>{
           setError1("")
       },3000)
    //   setError1("password do not match")
    }else if((inputs.password.length < 10) || (inputs.password1.length < 10)){
        setError1("Increase password strength")
           setTimeout(()=>{
           setError1("")
       },3000)
       
    }else{
        if(inputs.password1 === inputs.password){
           setCheckPassword(inputs.password) 
           const passWord = async()=>{
            try{
               await axios.put(`https://tea.earnars.com/api/auth/resetpass!45!@word/${pa}`,{password:checkPassword})
               navigate("/success")
            }catch(err){
                   console.log(err)
            }

           }

           passWord()
        }
    }

 }

    return(
        <div className="BgColor" style={{background:"#0f0b34"}}>
            <div className="Form_Divbb">
                <div style={{padding:"0 5px"}}>
           <div className="Form_Div renttt">
               <form>
                  
                  <div className="welcome4">Change Password</div>
                  {error1 && <p style={{color:"#fff"}}>{error1}</p>}
                  <p className="NewpAss">New Password</p>
                  <div style={{marginBottom:"10px"}}> <input type= {inputs2.showPassword ? "text":"password"} placeholder="password" className="Full_Name inpupage page" name="password" onChange={handleChange}/></div>
                   <p className="NewpAss">Confirm Password</p>
                  <div className="sers"> <input type={inputs2.showPassword ? "text":"password"} placeholder= "confirm_Password" className="Full_Name inpupage page" onChange ={handleChange} name="password1" 
                  />
                  {inputs2.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                   {/* <div className="Checkbox_div"><input type="checkbox" name="over18"  className="Bym"/> <label className="Over_18">I accept the Terms and Conditions</label></div> */}
                     <div className="sesetP marKing" onClick={checkSubmit}> <div  className="loginn">Reset Password</div></div>

                  
               </form>
           </div>
           </div>
           </div>
        </div>
    )
}

export default  ResetPassword;
import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import "./style/resetpassword.css"
import {useParams,useSearchParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {AuthContext}from "./context/authContext"




const ResetPassword =()=>{

 const pa = useParams().id;
 const [searchParams] = useSearchParams(); // Hook to read query parameters
    const token = searchParams.get('token'); // Extract the token
//   const { token } = useParams();// Fetch the token from the URL params
  

    const [inputs,setInputs]=useState({
        password:"",
        password1:"",
       
    })
     const [message, setMessage] = useState("");
    const [error1,setError1]=useState("")
   

    const [checkPassword,setCheckPassword] = useState("")
    const [inputs2,setInputs2]=useState({
        
        showPassword: false,
    })
    const navigate = useNavigate()
    const {login}=useContext(AuthContext)
    

    const [error,setError]= useState(false)

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }

    const handleClickShowPassword = () => {
        setInputs2(previ=>({ ...previ, showPassword: !inputs2.showPassword }));
      };

       const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            setError(true);
            setMessage("Invalid or missing token.");
             setTimeout(() => {
                setMessage(" ")
            }, 5000);
            return;
        }

        if (inputs.password !== inputs.password1) {
            setError(true);
            setMessage("Passwords do not match.");
             setTimeout(() => {
               setMessage(" ")
            }, 5000);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5001/api/auth/reset-password', {
                token,
                inputs
            });

            setError(false);
            setMessage(response.data.message);

            // Redirect to login page after successful reset
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (error) {
            setError(true);
            setMessage(error.response?.data?.message || "Failed to reset password. Please try again.");
        }
    };
  

 

    return(
        <div className="BgColor" >
            <div className="ttt">
                <div style={{padding:"0 5px" }} className="tty">
           <div className="Form_Div renttt">
               <form>
                  
                  <div className="welcome4">Reset Password</div>
                  {error1 && <p style={{color:"#fff"}}>{error1}</p>}
                  <p className="NewpAss">New Password</p>
                  <div style={{marginBottom:"10px"}}> <input type= {inputs2.showPassword ? "text":"password"} placeholder="password" className="Full_Name inpupage pageMNM" name="password" onChange={handleChange}/></div>
                   <p className="NewpAss">Confirm Password</p>
                  <div className="sers"> <input type={inputs2.showPassword ? "text":"password"} placeholder= "confirm_Password" className="Full_Name inpupage  pageMNM " onChange ={handleChange} name="password1" 
                  />
                  {inputs2.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                   {/* <div className="Checkbox_div"><input type="checkbox" name="over18"  className="Bym"/> <label className="Over_18">I accept the Terms and Conditions</label></div> */}
                     <div className="sesetP marKing" onClick={handleSubmit}> <div  className="loginn">Reset Password</div></div>
{message && <p style={{ color: error ? "red" : "green" }}>{message}</p>}
            {!error && message && <p>Redirecting to login page...</p>}
                  
               </form>

           </div>
           </div>
           </div>
        </div>
    )
}

export default  ResetPassword;
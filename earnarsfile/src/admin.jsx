import React,{useState} from "react";
import "./style/register.css"
import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { faGooglePlusG}from '@fortawesome/free-brands-svg-icons'
import "./style/admin.css"


const Admin =()=>{

    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:"",
      
    })
    const [inputs50,setInputs50]=useState({
         showPassword: false,
    })
    const navigate = useNavigate()
    const[over18,setOver18]=useState(false);
    const [term,setTerm]=useState(false)

    const [err,setError]= useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }

      const handleChange1 = (event) => {
    setOver18(event.target.checked);
      
  }

       const handleChange2 = (event) => {
    
      setTerm(event.target.checked);
  }
    const handleSumit = async (e)=>{
    e.preventDefault()
   try{
   
        await axios.post("myPort/auth/register",inputs)
        navigate('/login')

   }catch(err){
    setError(err.response.data.msg)
   }    
    }


    const handleClickShowPassword = () => {
        setInputs50(previ=>({ ...previ, showPassword: !inputs50.showPassword }));
      };

    
    return(
        <div className="BgColor" style={{backgroundImage: "linear-gradient(to right, rgb(4 7 22), rgb(10 9 22))"}}>

            <div className="formDivPAd">
      
              <div style={{padding:"0px 5px"}}>
            <div className="Form_Div page">
                <form>
                     <p className="New_Account textAdmin">Admin Register</p>
                    <div> <input type="text" placeholder="User_name" className="Full_Name inpupage page" onChange={handleChange} name="username" autoComplete="on"/></div>
                    <div> <input type="email" placeholder="Email" className="Full_Name inpupage page" onChange={handleChange} name="email"  autoComplete="on"/></div>
                  

                    <div className="sers"> <input type={inputs50.showPassword ? "text":"password"} placeholder="Password" className="Full_Name inpupage page" onChange ={handleChange} name="password" value={inputs.password}
                  />
                  {inputs50.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                  {err && <p className="errpage">{err}</p>}

                     {/* <div className="Checkbox_div"><input type="checkbox" name="over18" onChange={handleChange1} className="Bym"/> <label className="Over_18">By checking this box you declare that you are over 18yrs of age.</label></div> */}
                    
                    {/* <div className="Checkbox_div"> <input type="checkbox" className="Bym" name="term" onChange={handleChange2}/><p className="Over_18">By checking this box you agree to all our Terms/Conditions.Click to  <a href="/termscondition" className="trems1">HERE</a> to read.</p></div> */}

                     <button disabled={!over18 || !term} className="RegisterM page" onClick={handleSumit}>Register</button>
                     <div className="Or_with2">
                         <div className="Or_With"></div>
                         <p className="adColor">Or register with</p>
                        
                         <div className="Or_With"></div>
                     </div>
                     <div className="Googgle  page"><FontAwesomeIcon icon={faGooglePlusG} className="gooleI"  style={{width:"20%"}}/><div>Google</div><div  style={{width:"20%"}}><FontAwesomeIcon  className="goole" /></div></div>
                     <p className="Already_Account adColor">Already have an account?</p>
                     <div className="LOGIN_HERE_NOW"><Link to="/admin/login" className="p_LoGIn">LOGIN HERE</Link></div>

                </form>
            </div>
            </div>
            </div>

        </div>
    )
}

export default Admin;

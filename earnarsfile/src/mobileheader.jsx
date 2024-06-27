
import React, {useState,useContext} from 'react'
import "./style/mobileheader.css"
import "./style/footer.css"
import { Link,NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp,faBell} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from './context/authContext';

const MobileHeader = () => {

    const [show21, setShow21] = useState(false);
    const [show22, setShow22] = useState("Sapap");
    const [state1,setState1] = useState(true)
    const {currentUser,logout,isPaid} = useContext(AuthContext);
    const [open,setOpen]=useState("")
     const [open1,setOpen1]=useState(true)
 const [register,setRegister] = useState(false)
    const [showMe,setShowMe] = useState(false)
        const [showMe4,setShowMe4] = useState(false)
    const [showMe1,setShowMe1] = useState(false)

     const tr = window.location.pathname;
    
    const [feedBack,setFeedBack]=useState("")
    window.onscroll =()=>{
        scrollF()
      }

        setTimeout(() => {
            setRegister() 
              }, 5000);
  
      const scrollF =()=>{
          if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setFeedBack('Sapap1')
          }else{
            setFeedBack(' ')
          }
      }

      const seOpen =()=>{
        setOpen("opened");
        setShow21(!show21)
          setOpen1(!open1);
           document.body.classList.add('cac')

      }
       const seOpen4 =()=>{
        setOpen("opened");
        setShow21(!show21)
          setOpen1(!open1);
          document.body.classList.remove('cac') 

      }

      const mark =()=>{
        seOpen();
         setShow21(!show21)
         document.body.classList.remove('cac')

      }
  return (
    <div className={show22}>
     <div className={feedBack}>
        {/* <div className="special"></div> */}
      <div className="mobileH" style={{borderBottom:tr ==="/register" || tr ==="/login"  ? "1px solid #312d72":""}}>
        <div>
        <a href="/"  onClick={()=>setShow21(false)} >
                  <img src="/img/Earnars1@72x1.png" className="emanu"/>
                </a>
        </div>
         {(tr === "/register") || (tr === "/login") || (tr === "/otp") || (tr === "/resetpassword/:id") || (tr === "/forgotpassword") || (tr === "/referral/:id") ? " " :
         <>
         {/* <div style={{display:'flex',alignItems:'center',}}> */}
          <div>
          {/* <span><FontAwesomeIcon icon={faBell} className="bell" /></span> */}
        <div>

     
  
 <button className={open1?"menu bg":"opened bg"} onClick={ open1?seOpen : seOpen4} aria-label="Main Menu">
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
        </div>
        </div>
        </>
}


        
      </div>

      {/* mobile View*/}

      {show21 ? 

      <div className="Mobile_menu1">

        <div className="IfeY">
          <div>
          <ul className="Mobile_menu12">
          <li className="bgstyle"><div className="derr" onClick={()=>setShowMe(!showMe)}><span className="derpm"><span className="mackP">*</span> * Markets</span> <span>{showMe?<FontAwesomeIcon icon={faAngleUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faAngleDown} className="PlusIcon plusIcon2" />}</span></div>
          {showMe? 
            <div className="Forexmm">
                      <a  className="fit" href="/sport" onClick={mark}> <span className="mackP1">*</span> Sports</a>
                      <a  className="fit" href="/forex" onClick={mark}><span className="mackP1">*</span> Forex</a>
                      <a  className="fit" href="/cryptocurrency" onClick={mark}> <span className="mackP1">*</span> Cryptocurrency </a>
                      <a  className="fit" href="/binary" onClick={mark}><span className="mackP1">*</span> Binary</a> 
            </div>:""}
            </li>
              <li className="bgstyle"><div className="derr" onClick={()=>setShowMe4(!showMe4)}><span className="derpm"><span className="mackP">*</span> * Tipster</span> <span>{showMe4?<FontAwesomeIcon icon={faAngleUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faAngleDown} className="PlusIcon plusIcon2" />}</span></div>
          {showMe4? 
            <div className="Forexmm">
                      <a  className="fit" href="/become-tipster" onClick={mark}> <span className="mackP1">*</span> Become a Tipster</a>
                      <a  className="fit" href="/find-tipster" onClick={mark}><span className="mackP1">*</span> Find a Tipster</a>
                      <a  className="fit" href="/allTips" onClick={mark}> <span className="mackP1">*</span> All Tips</a>
                      
            </div>:""}
            </li>
          <li className="bgstyle"><a href="/premium" onClick={mark} className="derpm"> <span className="mackP">*</span> * Premium Prediction</a></li>
          <li className="bgstyle"><a href="/affliate" className="derpm" onClick={mark}> <span className="mackP">*</span> * Affiliate Program</a></li>
          <li className="dpM bgstyle"><a href="/exchange" className="derpm" onClick={mark}><span className="mackP">*</span> * Buy/Sell ENAR</a></li>
          <li>
            {currentUser ? <div>
            {/* <div className="derr" onClick={()=>setShowMe1(!showMe1)}><span className="derpm appjo">{currentUser?.username}</span> <span>{showMe1?<FontAwesomeIcon icon={faAngleUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faAngleDown} className="PlusIcon plusIcon2" />}</span></div> */}
          {/* {showMe1?  */}
            <div className="Forexmm">
                      <Link  className="fit" to="/user-dashboard" onClick={mark}> <span className="mackP">*</span> * My Dashboard</Link>
                   
                       {isPaid === 1? <a href="/tip" className="fit">  <span className="mackP">*</span> * My Tips(Premium)</a> :<Link onClick={()=>setRegister(!register)} className="fit" >Subscription</Link>}
                      <Link  className="fit appjo tef" to="" onClick={logout}>Log Out</Link> 
            </div>
             {/* :""} */}
            </div> :  <Link to="/register" className="LogIn" onClick={mark}>Login/Register</Link>}
           </li>
        </ul>
          </div>
        
       
        </div>
       

      </div>
      :""}

    </div>


 {register ? <div style={{position:'absolute',top:"50%",left:"50%",transform:"translate(-50%,-50%)",color:"red",zIndex:"500",fontSize:"20px",padding:"5px 10px",backgroundColor:"#fff"}}> Please subscribe to unlock</div>:""}
    </div>
  )
}

export default MobileHeader
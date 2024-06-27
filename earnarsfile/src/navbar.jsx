import React, {useState,useContext,useEffect} from 'react'
import "./style/home2.css"
import "./style/mobileheader.css"
import "./style/home.css";
import { Link} from "react-router-dom";
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from './context/authContext';

const Navbar= () => {
      //  const [scrollY, setScrollY] = useState(10);
    const [register,setRegister] = useState(false)
    const [feedBack4,setFeedBack4]=useState("")
    const {currentUser,logout,isPaid} = useContext(AuthContext);
    const tr = window.location.pathname;

     setTimeout(() => {
            setRegister() 
              }, 5000);
 

    //            useEffect(()=>{
    //   const getSubscriptionPay = async()=>{
    //     try{
    //     await axios.get(`/user/subscription-pay/${currentUser.id}`)
    //     }catch(err){
    //       console.log(err)
    //     }
        
    //   }


    //    getSubscriptionPay()

    //  })   window.onscroll =()=>{
    
  // window.onscroll=()=>{
  //       scrollM()
  //     }
    
const locationBy = ( (tr === "/register") || (tr === "/login") || (tr === "/forgotpassword"))

    //  const scrollM =()=>{
    //       if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
    //         setFeedBack4('sap60')
    //       }else{
    //        setFeedBack4('')
    //       }
    //   }
   

// useEffect(()=>{
//   window.onscroll=()=>{
//          scrollM()
//        }

// },[])
useEffect(() => {
const handleScroll = () => {
      if(window.scrollY > 10){

        setFeedBack4('sap60')
      }else{
         setFeedBack4('')
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
   

  return (
    <div>
    <div >
      {tr === "/dashboard" ? "":
     
        <div className={`Header_Div_New_Bg ${feedBack4}` } style={{borderBottom:tr ==="/register" || tr ==="/login"  ? "1px solid #312d72":""}}>
          {/* <div style={{color:"#fff",textAlign:'center'}}> Please be patient, as some of our pages are undergoing updates for improved functionality.</div> */}
          <div >
          <div className="header">
            <div >
              
                <a href="/" >
                  <img src="/img/Earnars1@72x1.png" className="imghy"/>
                </a>
              
            </div>
             {locationBy ? " " :<>
            <div>
              <ul className="header_list">
                 <li className="Affliate_Bet">
                  <a href="/token">Token</a>
                </li>
                <li className="Prediction_dropDown">
                  <a href="">Markets</a>
                  <div className="OverTime_View">
                    <div className="DoubleChancert">
                      <a className="cover_Div"></a>
                      <a href="/sport">Sports</a>
                      <a href="/forex">Forex</a>
                      <a href="/cryptocurrency">Crypto </a>
                      <a href="/binary">Binary</a> 
                    
                    </div>
                  </div>
                </li>
                 <li className="Prediction_dropDown">
                  <a href="">Tipster</a>
                  <div className="OverTime_View">
                    <div className="DoubleChancert">
                      <a className="cover_Div"></a>
                      <a href="/become-tipster">Become a Tipster</a>
                      <a href="/">Find a Tipster</a>
                      <a href="/allTips">All Tips </a>
                      
                    
                    </div>
                  </div>
                </li>
               
                <li className="Premium_Bet">
                  <a href="/premium">Premium Prediction</a>
                
                </li>
                <li className="Affliate_Bet">
                  <a href="/affliate">Affiliate Program</a>
                </li>
                <li className="Contact_Bet">
                  <a href="/exchange"> Buy/Sell ENAR </a>
                </li>
                {/* <li className="Contact_Bet vap">
                  {tr === "/" ?<a href="#Faqc">FAQ</a> :null}
                  
                </li> */}
                {/* <li className="FAQ_Bet">
                  <a href="#Faqc">FAQ</a>
                </li> */}
              </ul>
            </div>

            <div>
            { tr === "/user-dashboard" ? <FontAwesomeIcon icon={faBell} className="bell" /> :""}  
              {currentUser ? (
              <div>
              <ul>
                <li className="pauling">
                  <a >{currentUser ? <div><img src="/img/create.png" alt=""  style={{width:"35px",height:"35px",borderRadius:"50%", border:"2px solid #6156bd",padding:"3px"}}/></div> :""}</a>
                  <ul className="paulFr">
                      <li className="padup_Guide"></li>
                      <li className="paulmy_man">{currentUser?.username} </li>
                      <li className="Email_Like"><div className="Email_Like2">{currentUser?.email}</div></li>
                      <li className="paulmy_man">ID:00000{currentUser?.id}</li>
                      <a href="/user-dashboard" className="FeedDiv"><li className="LogOutDiv_UN">Dashboard</li></a>
                     
                      {isPaid === 1? <a href="/tip" className="FeedDiv"><li className="LogOutDiv_UN">Subscription</li></a> :<div onClick={()=>setRegister(!register)} className="FeedDiv" ><li className="LogOutDiv_UN">My Tips(Subscribe)</li></div>}
                     
                     
                      {currentUser?  <Link to="" className="FeedDiv"><li className="LogOutDiv_UN AMKING" onClick={logout}>Logout</li></Link>:""}
                     
                  </ul>
                </li>
              </ul>
            </div>
              ) : (

                <Link to="/register">
                <button className="Login">Login/Register</button>
              </Link>
               
              )}
            </div>
  </>
              }
          </div>
          </div>
        </div>
      
        }


         {register ? <div style={{position:'absolute',top:"50%",left:"50%",transform:"translate(-50%,-50%)",color:"red",zIndex:"500",fontSize:"20px",padding:"5px 10px",backgroundColor:"#fff"}}> Please subscribe to unlock</div>:""}
        {/* <div style={{position:'absolute',top:"400px",left:"50%",transform:"translate(-50%,-50%)",color:"red",zIndex:"500"}}> Please subscribe to unlock</div> */}
    </div>
    </div>
  )
}

export default Navbar;
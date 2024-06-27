import React ,{useState,useContext,useEffect} from 'react'
import Footer from "./footer";
import "./style/buyAndSell.css"
import AOS from 'aos';
import {AuthContext}from "./context/authContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faPlus,faMinus, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
const BuyEnar = () => {
    const [Enar ,setEnar] = useState(500)
     const [currency ,setCurrency] = useState("NGN")
      const [currencyAmount ,setCurrencyAmount] = useState(50)
        const {purchaseType}  = useContext(AuthContext)
        const {coin}  = useContext(AuthContext)
         const [show,setShow]= useState(false)
  const [show1,setShow1]= useState(false)
  const [show2,setShow2]= useState(false)
  const [show3,setShow3]= useState(false)
  const [show4,setShow4]= useState(false)
  const [accountCheckModal,setAccountCheckModal]= useState(false)

   const drop =()=>{
     setShow(!show)
     setShow1(false)
     setShow2(false)
     setShow3(false)
     setShow4(false)
    
  }
  const drop1 =()=>{
    setShow(false)
    setShow1(!show1)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    
    
  }
  const drop2 =()=>{

    setShow(false)
    setShow1(false)
    setShow2(!show2)
    setShow3(false)
    setShow4(false)
   
    
  }
  const drop3 =()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(!show3)
    setShow4(false)
    
  }
  const drop4 =()=>{

    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(!show4)
   
    
  }

  useEffect(()=>{
    AOS.init({once: true});
  },[])
  return (
    <div>

        <div className='AdDe'>
            <div className="AdDe1 ">
                <div className="Tail">
                <div className="Tail1">Advertisement Details</div>
                <div className="Tail2">
                    <div className="Tail3">{purchaseType === "Buy" ? "Buying From" :"Selling To"}</div>
                    <div className="Tail4"> Kingsley Chukwubuike</div>
                </div>
                <div className='laiT'></div>
                <div className="Tail2">
                    <div  className="Tail3">Price</div>
                    <div className="Tail4" style={{color:purchaseType === "Buy" ? "#0cf10c" :"red"}}>1,282.70 {coin}/ENAR</div>
                    </div>
                 <div className='laiT'></div>
                
                  <div className="Tail2">
                    <div className="Tail3">Amount Limit</div>
                    <div className="Tail4">0.24USDT - 254.34USDT</div>
                </div>
                 <div className='laiT'></div>
                   <div className="Tail2">
                    <div className="Tail3">Payment Method</div>
                    <div className="Tail4">Bank Transfer</div>
                </div>
                 <div className='laiT'></div>
                   <div className="Tail2">
                    <div className="Tail3">Location</div>
                    <div  className="Tail4">Nigeria</div>
                </div>
                 <div className='laiT'></div>
                 <div className="Tail2">
                    <div className="Tail3">Payment Window</div>
                    <div className="Tail4">15 minutes</div>
                </div>

                </div>
            </div>
            <div className="AdDe2">
                
            </div>
            <div className="AdDe1">
                <div className='Tail pof'>
                <div className='pof1'>
                    <div style={{width:"49%"}}>
                        <form>
                            <div className="aoE">Amount of {coin}</div>
                            <input type=""  placeholder ="" className="sarem" value={currencyAmount}  onChange={(e)=>setCurrencyAmount(e.target.value)}/>
                        </form>
                    </div>
                     <div style={{width:"49%"}}>
                         <form>
                            <div className="aoE">Amount of ENAR</div>
                            <input type=""  placeholder ="" className="sarem" value={Enar} onChange={(e)=>setEnar(e.target.value)}/>
                        </form>
                     </div>
                </div>
                <div className="clickBoxd">
                    <input type="checkbox" />
                    <label  className="clickBoxd1">By clicking Continue, you agree to Earnars P2P Terms of Service</label>
                </div>
                <div className="clickBoxd2" style={{color:purchaseType === "Buy" ? "#0cf10c" :"red"}}>{purchaseType} ENAR</div>
                </div>
            </div>
        </div>
                     <div className='IFAE'>
                 <div style={{padding:"0 10px"}}>
          <div id="Faqc" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="firstTom" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear" style={{color:"#fff"}}>FAQ</div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop}>
                <span>I have never traded the forex or crypto market before. How do I Start?</span>{" "}
                <span className="IconSpace">
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                  <div>
                    <div className="Qac"></div>
                <p className="ILOVEK">
                  {" "}
                  To start trading the forex or cryptocurrency market all you need to know is to understand the basics of trading like, how to Buy/Sell, How to set Stoploss and Takeprofit, How to spot support and Resistance. With this basic knowledge you can follow our Tipsters expert forecast and achieve success in the market.{" "}
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop1}>
                <span>I don't know how to bet on sports. How do I start?</span>
                <span className="IconSpace">
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 You don't need to understand much about sport betting to bet. Once you are registered with our recommended bookmaker, subscribe to any tipster membership and copy their coupon code to place your bet with the bookmaker specified by the tipster.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop2}>
                <span> I don't Have an account with any forex platform. Can I get any recommendations? </span>
                <span className="IconSpace">
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                Click the market button on the header and go through forex section to see recommended brokers
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop3}>
                <span> How much does it cost to subscribe monthly? </span>
                <span className="IconSpace">
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                Purchasing a membership Subscription from any tipster is flexible. You can either buy daily, weekly or monthly subscription
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            
          
          
          </div>
          </div>
          </div>

 <div className="bkFR">
       <div style={{padding:"0 10px"}}>
                <div className="MessageDivCov">
               <div className="Package_Up">
                   <h1 className="alap">Don't miss out on Fantastic News</h1>
                   <p className="Each_Time_your">
                       Subscribe to our newsletter and be the first to receive news.
                   </p>
                   <form>
                    <div className="newsInput">
                        <input type="email" placeholder="Enter Your Email"  className="newsBro"/>
                        <FontAwesomeIcon icon={faPaperPlane} className="EmailSentIcon" />
                    </div>
                   </form>
                   <img src="/img/news.svg" alt=""  className="messageImg"/>
               </div>
               <img src="/img/undrawWorld1.svg" alt="" className="papag" />
                <img src="/img/undrawWorld1.svg" alt="" className="papag1" />
               
               </div>
               </div>
               </div>


               {accountCheckModal ? <>
               <div>
                 <div>
                   <div>
                    <div>Confirmation</div>
                    <div>Your NGN balance is insuffient to start the trade. Do you want to deposit?</div>
                    <div>
                      <div>No</div>
                      <div>Yes</div>
                    </div>
                   </div>
                 </div>
               </div>
               </> : ""}
    <Footer/>

    </div>
  )
}

export default BuyEnar;
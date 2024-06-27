import React,{useState,useContext,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style/sportPage.css"
import {  faPlus,faMinus,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import "./style/home.css";
import "./style/home2.css"
import "./style/sportsP.css"
import "./style/slide.css"
import background from "./img/sample.PNG";
import AOS from 'aos';
import { AuthContext } from './context/authContext';

import { Link} from "react-router-dom";
import Footer from "./footer"


const ForexPage = () => {


    const [show,setShow]= useState(false)
    const [show1,setShow1]= useState(false)
    const [show2,setShow2]= useState(false)
    const [show3,setShow3]= useState(false)
    const [show4,setShow4]= useState(false)
    const [show5,setShow5]= useState(false)
  
    const {currentUser} = useContext(AuthContext);

  const drop=()=>{
     setShow(!show)
     setShow1(false)
     setShow2(false)
     setShow3(false)
     setShow4(false)
     setShow5(false)
  }

  const drop1=()=>{
    setShow(false)
    setShow1(!show1)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(false)
  }
  const drop2=()=>{
    setShow(false)
    setShow1(false)
    setShow2(!show2)
    setShow3(false)
    setShow4(false)
    setShow5(false)
    
  }
  const drop3=()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(!show3)
    setShow4(false)
    setShow5(false)
    
  }
  const drop4=()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(!show4)
    setShow5(false)
    
  }
  const drop5=()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(!show5)
  }
 
 useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div>
        <div >
        {/* <div>
          <img src="/img/earnarsBanner45.png" className="AffliateBanner" alt="Affliate Banner"/>
          </div> */}
          <div className="sportPa">
            <div className="affiliateImage" >
                    <div className="grace">
                        <h1 className="Aka">Forex Predictions</h1>
                        {/* <div><span className="homeSpan">Home</span> <span className="homeSpan">Affiliate program</span></div> */}
                       <p  className="weAre4">With Upto <span className="withUpto">85% accuracy<span>.</span></span></p>
                       <p className='everyWhere'>Buy low and sell high</p>
                       <div className='football'>FBS, Octafx, FXTM etc.</div>
                    </div>
                     <div className="grace"><img src="/img/affiliate-banner.png" className="gracePic" alt="affiliate_banner"/></div>
                     <img src="/img/StarsME.svg" className="headerAffiliateI" alt="affiliate_banner"/>
                      <img src="/img/StarsME.svg" className="headerAffiliate2" alt="affiliate_banner"/>
                 </div>
                 </div>

         <div className='sportsPageColorBg'> 
         <div className='yoofKin'>
        <div className="MakingMoney">
        Making Money Daily on <span className="forexy">FOREX</span> trading is as easy as following our daily expert forecast.
        </div>
{/*         
      <Link to="/login" className="ifi"> <div className="NowUpSign"> SIGN UP NOW
      </div></Link> */}
       {currentUser ? " " :  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Link to="/login" className="ifi"><button className="NowUpSign" >SIGN UP NOW</button></Link> </div>}  
        <div  >
        <p className="SportBetting">What Is Forex Trading</p>
        <div className="outcomeBeen1">
        <div className="outcomeBeen" >
       <span className="forexy1"> Forex </span>trading or FX trading (also known as foreign exchange) happens 
when you buy or sell one countries currencies against another 
(e.g GBP/USD) with the aim of making a profit from the changing 
value of the underlying asset. <span className="forexy1">Forex</span> markets is the largest and most 
liquid asset markets in the world.   
        </div>
        </div>
        </div>

        

        <div className="sportPa">
        <div >
        <p className="WhyStart">Why Start Forex Trading</p>
        <div className="ifNi"></div>
        <div className="EasyTi">
            <div className="EasyTim"  data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">Low Barriers To Entry</p>
                </div>
                <div className="everyDay">
                Getting Started with forex 
trading has one of the
 lowest barrier of entry. This 
means it won't cost you time 
and a tone of money to start 
trading forex. With as little as 
$10 dollars you can register 
an account with a broker and start making money. There are several high powered 
knowledge available online 
to get you started. 
We are here to help you start 
making money online by just 
following our expert forecast.</div>
 <div className='posTMa ad'></div>
  <div className='posTMa ab' ></div>
            </div>
            <div className="EasyTim" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">A 24-Hours Market</p>
                </div>
                <div className="everyDay">There is no waiting for the 
opening bell. From the 
Monday morning opening in 
Australia to the Friday 
afternoon close in 
New York, the forex market 
never sleeps.
This is 
awesome for those who 
want to trade on a part-time 
basis because you can 
choose when you want to 
trade: morning, noon, night,
 during breakfast, or in your 
sleep.

</div>
 <div className='posTMa ad'></div>
  <div className='posTMa ab' ></div>
            </div>
            <div className="EasyTim"  data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">Leverage</p>
                </div>
                <div className="everyDay">Leverage means using 
small amount to control 
larger amount of money.If 
you deposit $50 on forex 
platform you can decide to 
use that $50 and borrow 
$50,000 to trade the 
market in order to make 
serious profit and at the 
same time you can decide 
to keep your risk reward ratio to 
the bearest minimum.
While 
leverage attractive, we also like 
to remind you that leverage
 is a double-edged sword. 
Without proper risk 
management, this high degree
 of leverage can lead to large
 losses as well as gains.</div>
  <div className='posTMa ad'></div>
  <div className='posTMa ab' ></div>
            </div>
        </div>
        </div>
        </div>

        <div className='Ems Ems1'>
          <img src="/img/undrawgoal1.svg" alt="" className='imgFloatSport' />
        </div>
         <div className='Ems Ems2'>
           <img src="/img/soccer2.svg" alt="" className='imgFloatSport' />
         </div>
          <div className='Ems Ems3'>
           <img src="/img/soccer2.svg" alt="" className='imgFloatSport' />
         </div>
         <div className='Ems Ems4'>
           <img src="/img/soccer2.svg" alt="" className='imgFloatSport' />
         </div>
         </div>
        </div>

        <div className="AgenciesTy">Who  Are Forex Brokers</div>
        <div className="ifNi"></div>
        <p className="everyDay Dayword">A Forex brooker is a finacial services company that provides traders access to  a platform for buying and selling foreign currrencies.</p>
      


  

<div className="slider">
<div className="slide-track">
   <div className="slide">
      <div style={{height:"50px",width:"160px"}}>
    <img src="/img/apari.png" alt="" title="" className="marqueelogo" style={{width: "100%", height:"100%"}}/>
  </div>
    </div>
     <div className="slide">
       <div style={{height:"50px",width:"160px"}}>
   <img src="/img/fxtm.svg" alt="" title="" className="marqueelogo" style={{width: "100%",height:"100%"}}/>
   </div>
   </div>
    <div className="slide">
         <div style={{height:"50px",width:"160px"}}>
   <img src="/img/ex.svg" alt="" title="" className="marqueelogo" style={{width: "100%", height:"100%"}}/>
   </div>
   </div>
   <div className="slide">
       <div style={{height:"50px",width:"160px"}}>
    <img src="/img/oct.svg" alt="" title="" className="marqueelogo" style={{width: "100%", height:"100%"}}/>
   </div>
   </div>
    <div className="slide">
        <div style={{height:"50px",width:"160px"}}>
   <img src="/img/fbs.svg" alt="" title="" className="marqueelogo" style={{width: "100%",height:"100%"}}/>
   </div>
   </div>
    <div className="slide">
       <div style={{height:"50px",width:"160px"}}>
   <img src="/img/hfm.svg" alt="" title="" className="marqueelogo" style={{width: "100%",height:"100%"}}/>
   </div>
   </div>
       <div className="slide">
          <div style={{height:"50px",width:"160px"}}>
   <img src="/img/oct.svg" alt="" title="" className="marqueelogo" style={{width: "100%",height:"100%"}}/>
   </div>
   </div>
       <div className="slide">
         <div style={{height:"50px",width:"160px"}}>
           <img src="/img/fbs.svg" alt="" title="" className="marqueelogo" style={{width: "100%", height:"100%"}}/>
   </div>
   </div>
       <div className="slide">
          <div style={{height:"50px",width:"160px"}}>
   <img src="/img/ex.svg" alt="" title="" className="marqueelogo" style={{width: "100%", height:"100%"}}/>
   </div>
   </div>
       <div className="slide">
          <div style={{height:"50px",width:"160px"}}>
   <img src="/img/apari.png" alt="" title="" className="marqueelogo" style={{width: "100%",height:"100%"}}/>
   </div>
   </div>
       <div className="slide">
         <div style={{height:"50px",width:"160px"}}>
         <img src="/img/fxtm.svg" alt="" title="" className="marqueelogo" style={{width: "100%",height:"100%"}}/>
 </div>
   </div>
       <div className="slide">
        <div style={{height:"50px",width:"160px"}}>
        
   <img src="/img/hfm.svg" alt="" title="" className="marqueelogo" style={{width: "100%",height:"100%"}}/>
   </div>
   </div>
 
</div>
</div>

<div className="sportPa">

        <div className="BettingTu">Forex Trading Tutorial Videos</div>
       <div className="figma">
        <div className="firey how">
            <div className="firey1">
            <iframe className="pn"  width="100%" height="100%" src="https://www.youtube.com/embed/IUL29Vh6rF8" title="[ENGLISH] Tutorial - How to start trading with OctaTrader on your Android device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1">
            <iframe className="pn"  width="100%" height="100%" src="https://www.youtube.com/embed/kMey3FMxsnE" title="[ENGLISH] Tutorial - How to start trading with OctaTrader on web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1">
            <iframe className="pn"  width="100%" height="100%" src="https://www.youtube.com/embed/TgyisJAsGvE" title="How to make a deposit with Instant Bank Transfers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        </div>

        <div style={{padding:"0 10px"}} className='mainDe'>
          <div id="Faqc" className="faqSportMa" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="firstTom faqSports" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">FAQ</div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop}>
                <span>
How do I register  with a broker?</span>{" "}
                <span className="IconSpace">
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                <div>
                   <div className="Qac"></div>
                <p className="ILOVEK">
                  {" "}
                  To register with a forex broker,visit any forex broker of your choice and click on their sign up button to register with them. You can register with more than one broker.{" "}
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop1}>
                <span>I don't Know anything about Forex trading,What should i do?</span>
                <span className="IconSpace">
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <div>
                   <div className="Qac"></div>
                <p className="ILOVEK">
                 Not knowing about Forex Trading doesn't stops you from making money from Forex Market. All you need to know is to know how to buy/sell using our expert forecast daily. Watch our tutorial video on how to Buy/Sell to give you the required knowledge you need to start trading immediately.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop2}>
                <span>How can i fund my account? </span>
                <span className="IconSpace">
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <div>
                   <div className="Qac"></div>
                <p className="ILOVEK">
                 To fund your account on earnars.com after registration, go to "My Wallet" section and click on deposit and enter the amount you want to fund your account with, This will redirect you to flutter wave secure payment channel that gives you various payment options. To fund your account with a forex broker watch the tutorial video.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop3}>
                <span> Can your company Trade for me and pay me a percentage monthly? </span>
                <span className="IconSpace">
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <div>
                   <div className="Qac"></div>
                <p className="ILOVEK">
               We do not manage users funds or bet for any user, we only forecast wining trades. Users are responsible for for any amount of money they wish to stake with the trading platform they are registered with.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop4}>
                <span>How much do i stake in every trade? </span>
                <span className="IconSpace">
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <div>
                   <div className="Qac"></div>
                <p className="ILOVEK">
                Your are responsible for any amount you wish to stake on any trading portal but we advice users to risk between 1% to 5% of their capital on any trade forecasted.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop5}>
                <span>What is the guarantee am going to make money trading forex? </span>
                <span className="IconSpace">
                  {show5? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show5 ? (
                <div>
                   <div className="Qac"></div>
                <p className="ILOVEK">
                  We do not guarantee any trade forecast made by our experts, however we guarantee the refund of users subscription fees if at the end of any particular month they don't turn profit by following all our prediction. This refund policy is subject to our "Refund Policy Terms and Condition"
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
             
       
            </div>
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
        <Footer />
    </div>
  )
}

export default ForexPage
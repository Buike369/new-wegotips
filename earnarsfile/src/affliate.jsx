import React ,{useContext,useState,useEffect} from "react";
import "./style/home.css"
import "./style/affiliate.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import Footer from "./footer";
import AOS from 'aos';
import { Link} from "react-router-dom";
import { AuthContext } from './context/authContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus,faMinus, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faTwitter,faLinkedin,faTelegram,faYoutube,}from '@fortawesome/free-brands-svg-icons'

const Affiliate =()=>{

    const [show,setShow]= useState(false)
  const [show1,setShow1]= useState(false)
  const [show2,setShow2]= useState(false)
  const [show3,setShow3]= useState(false)
  const [show4,setShow4]= useState(false)
  const [show5,setShow5]= useState(false)
  const [show6,setShow6]= useState(false)
  const [show7,setShow7]= useState(false)

   const drop =()=>{
     setShow(!show)
     setShow1(false)
     setShow2(false)
     setShow3(false)
     setShow4(false)
     setShow5(false)
     setShow6(false)
     setShow7(false)
  }
  const drop1 =()=>{
    setShow(false)
    setShow1(!show1)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(false)
    setShow6(false)
    setShow7(false)
    
  }
  const drop2 =()=>{

    setShow(false)
    setShow1(false)
    setShow2(!show2)
    setShow3(false)
    setShow4(false)
    setShow5(false)
    setShow6(false)
    setShow7(false)
    
  }
  const drop3 =()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(!show3)
    setShow4(false)
    setShow5(false)
    setShow6(false)
    setShow7(false)
  }
  const drop4 =()=>{

    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(!show4)
    setShow5(false)
    setShow6(false)
    setShow7(false)
    
  }
  const drop5 =()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(!show5)
    setShow6(false)
    setShow7(false)
  }
  const drop6 =()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(false)
    setShow6(!show6)
    setShow7(false)
  }
  const drop7 =()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(false)
    setShow6(false)
    setShow7(!show7)
  }


 const {currentUser} = useContext(AuthContext);
     const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

   useEffect(()=>{
    AOS.init({once: true});
  },[])
    
    return(
        <div>
       

         <div >
            <div className="AffliateDiv34 AffDD">
                 <div className="affiliateImage" >
                    <div className="grace">
                        <h1 className="Aka">Affiliate</h1>
                        {/* <div><span className="homeSpan">Home</span> <span className="homeSpan">Affiliate program</span></div> */}
                       <p  className="weAre mainDe">We Are Excited to Share Our Revenue with you</p>
                    </div>
                     <div className="grace"><img src="/img/affiliate-banner.png" className="gracePic" alt="affiliate_banner"/></div>
                     <img src="/img/StarsME.svg" className="headerAffiliateI" alt="affiliate_banner"/>
                      <img src="/img/StarsME.svg" className="headerAffiliate2" alt="affiliate_banner"/>
                 </div>
                 </div>
                
             <div className="earnPMN">
                <div className="inviteFr">Get $8 - Invite Your Friends to Earnars</div>


                {/* <Link to="/login" className="ifi"> <div className="NowUpSign">Watch Now</div></Link> */}
                 {/* {currentUser? "": <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Link to="/login" className="ifi"> <button className="NowUpSign" >Watch Now</button></Link> </div> }  */}
               <div className="SimpleLet">It's easy and Simple .Lets get started with the following Steps.</div>

               <div className="Create_account_holder_Div">
                   <div className="who">
                       <div className="Create_account_Div"><img src="/img/login.png" className="Create_account_Div1"  alt="pics"/>
                       <p className="AccountPTag">1</p></div>
                       <div className="Create_AccountD">Create Account</div>
                   </div>
                   <div className="who">
                   <div className="Create_account_Div"><img src="/img/login2.png" className="Create_account_Div1"  alt="pics"/>
                   <p className="AccountPTag">2</p>
                   </div>
                       <div className="Create_AccountD">Invite Your friends</div>
                   </div>
                   <div className="who">
                   <div className="Create_account_Div"><img src="/img/login3.png" className="Create_account_Div1" alt="pics"/>
                   <p className="AccountPTag">3</p></div>
                       <div className="Create_AccountD">Start Earning</div>
                   </div>
               </div>


</div>

                  

                  <div className="goods1">
                    <div className="goods2">
                    <div className="inviteFr goods">Partners with great benefits</div>
           <div className='betStor ghFi'>
                  
                    <div className='bettors'>
                    <div className='bettorsDiv'>
                       <div className="ghFii13"><img src="/img/invite-friends1.png" alt=""  /></div>
                        <p className='bettors1' >01</p>
                    </div>
                    <div className='AddTip ghFii1'>Unlimited Earning Possibility</div>
                    <p className='itWell ghFii12'>Earn 75% of your referral affiliate wallet subscription and 20%  Each time they purchase a membership from any of our tipster.</p>
                    </div>
                
                 
                    <div className='bettors'>
                    <div className='bettorsDiv'>
                       <div className="ghFii13"><img src="/img/invite-friends2.png" alt=""  /></div>
                        <p className='bettors1' >02</p>
                    </div>
                    <div className='AddTip ghFii1'>Guaranteed & Instant Payment</div>
                    <p className='itWell ghFii12'>Earning and withdrawals are instant and can be paid directly to your bank account in minutes</p>
                    </div>
               
               
                    <div className='bettors'>
                    <div className='bettorsDiv'>
                       <div className="ghFii13"> <img src="/img/invite-friends3.png" alt="" /></div>
                        <p className='bettors1' >03</p>
                    </div>
                    <div className='AddTip ghFii1'>Residual Income for life</div>
                    <p className='itWell ghFii12'>You can build a lifetime income through our affiliate program. Each time your referrals renew their affiliate Subscription or tipster membership subscription you earn commission.</p>
                    </div>
               
            </div>
            </div>
            <div className="goods3  goods4"></div>
                 <div className="goods3 goods5"></div>
            </div>
             <div className="earnPMN">
                              <div className="InviteBI mainDe">
                    <div className="inviteFrs">
                        <p className="PInvite">invite</p>
                        <a href=""><FontAwesomeIcon icon={faFacebook} className="icon_brand_size bscY"/></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter} className="icon_brand_size bscY" /></a>
                         <a href=""><FontAwesomeIcon icon={faLinkedin} className="icon_brand_size bscY" /></a>
                          <a href=""><FontAwesomeIcon icon={faTelegram} className="icon_brand_size bscY" /></a>
                    </div>
                </div>
                <div className="goods6">

                       <div style={{padding:"0 10px"}}>
          <div id="Faqc" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="firstTom" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear" style={{color:"#fff"}}>FAQ</div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop}>
                <span> How do I join and subscribe to the  affiliate program?</span>{" "}
                <span className="IconSpace">
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                  <div>
                    <div className="Qac"></div>
                <p className="ILOVEK">
                  {" "}
                 To join our affiliate program, Register as a user, go to your dashboard and subscribe by unlocking your affiliate wallet.{" "}
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop1}>
                <span>How much is the subscription?</span>
                <span className="IconSpace">
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 Affiliate subscription is flexible. You can either subscribe for a monthly plan or yearly plan.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop2}>
                <span>  when I subscribe will I get daily tips? </span>
                <span className="IconSpace">
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
               No, Affiliate subscription only give you access to your affiliate dashboard and enable you to earn from your referrals when they unlock their affiliate wallet or subscribe to any Tipsters membership
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop3}>
                <span> what's my percentage share when when I refer an affiliate member? </span>
                <span className="IconSpace">
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                You can earn upto 75% when your referrals unlock their affiliate wallet and 20% each time they subscribe to any tipster membership.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop4}>
                <span>  If my referral renew their affiliate Subscription will I still earn? </span>
                <span className="IconSpace">
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                  Yes, you will continue to earn from any of your referral that renews his affiliate subscription.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop5}>
                <span>when I refer  users who buys membership subscription from  tipsters  without unlocking his affiliate wallet will I earn from their purchase? </span>
                <span className="IconSpace">
                  {show5? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show5 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 Yes, You earn upto 20% of their membership subscription to any tipster.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>

          </div>
          </div>
          </div>



             


</div>

              <div className="bkFR">
          

                <div className="Rtme">
                    <p className="TheyAre">They are talking about us</p>
                     <div className="DonTake" style={{color: "#fff"}}>Don't Take Our Word For It.</div>
                    <p className="seeWhat">See what our customers have to say.Find out what our clients are saying below</p>
         {/* <div className="divUnder1"></div> */}
         <div className=" marginMu fadama ">
         <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive2}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
>
 <div style={{padding:"4px 10px"}}>      
<div className="earnSayPp">
  <p className="partnerShip">"Through Earnars partnership program I made 250k in just two weeks by referring 20friends to the platform."</p>
  <div className="favourPath">
    <div><img src="/img/create.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Chukwubuike Amogu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div> 
 <div style={{padding:"4px 10px"}}>           
<div className="earnSayPp">
  <p className="partnerShip">"I made Over 1 Million in Less Than 30 Days by just following Earnars.com prediction on Sports and Forex Trading.I would recommend earnars to any body any time."</p>
  <div className="favourPath">
    <div><img src="/img/create.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Amaka Ngozi</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
<div style={{padding:"4px 10px"}}>
<div className="earnSayPp">
  <p className="partnerShip">"Your company is truly upstanding and is behind its product 100%. Keep up the excellent work. Earnars is the most valuable prediction portal i have EVER come across. I love your system."</p>
  <div className="favourPath">
    <div><img src="/img/create.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Amaka Amogu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
         
          </Carousel>
        </div>

                </div>


                               <div style={{padding:"0 10px"}}>
                <div className="MessageDivCov">
               <div className="Package_Up">
                   <h1 className="alap">Don't miss out on Fantastic News</h1>
                   <p className="Each_Time_your">
                       Subscribe to our newsletter and be the first to receive news.
                   </p>
                   <form>q-=9=
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

     
             


               


         </div>


        <Footer/>

        </div>
    )
}

export default Affiliate;
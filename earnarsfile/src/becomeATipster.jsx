import React,{useState} from 'react'
import "./style/becomeATipster.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Footer from "./footer"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

const BecomeATipster = () => {
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
 const valuesText = [{h2:"Add Tips",text:`Create your tip and it’ll immediately be added to our “today’s tips” database for buyers to purchase.`},{h2:"Bettors buy from you",text:"Once your tip is live we’ll promote it to over 10,000+ bettors.If they purchase tip then you will earn"},{h2:"Get Paid",text:"60% of every Sale is given directly to you. Assuming a bettor buys the minimum bronze membership."}]
  return (
    <div>
        <div className="becomeTipster">

           <div className='psp1'>
            <div className="aBe"></div>
            <div className="aBe1">
            </div>
              <img src="/img/iiisometric.svg" alt="" className='aBe2' />
            <div className='beTipster'>
            <div className='becomeTipster1'>
                <div className='becomeTipster2'>
                    <p className='keepAttract'>Keep attracting buyers and earn unlimited cash</p>
                    <div className='BecomeTipsterPerson'>Join us, share your expertise, and earn today</div>
                    <p className='earnMoneyBy'>Unlock your earning potential by sharing your winning tips with fellow bettors and traders! Your insights can help others make smarter bets and boost their trading profits.</p>
                    <div className='cancaV'> <div className='cic'></div> <p className='cancaV1'>Attract buyers, earn unlimited cash!</p></div>
                    <div className='cancaV'> <div className='cic'></div><p className='cancaV1'>Withdraw anytime, anywhere!</p></div>
                    <div className='cancaV'> <div className='cic'></div> <p className='cancaV1'>Earn a stable income with low risk</p></div>
                </div>
                 <div className='becomeTipster3'>
                    <form>
                        <div className='becomeTipster61'>
                            <div className='becomeRegister'>Register Now</div>
                            <p className='becomeRegister1'>Start Selling Your Tips In Less Than 30 Seconds</p>
                            <div className='PoNoV'><input type="email" className='becomeRegister2' placeholder="Enter Your email" />
                            <img src="/img/message-icon.png" alt="" className='iconDevH' /></div> 
                            <div className='PoNoV'><input type="text" className='becomeRegister2' placeholder="User Name" />
                            <img src="/img/user-icon.png" alt="" className='iconDevH' /></div> 
                            <div>
                              <p className="from3">Choose one from our market options</p>
                              <div className='from1'>
                              <div  className='from2'><input type="checkbox" /><label className='from4'>Sports</label></div>
                               <div  className='from2'><input type="checkbox" /><label className='from4'>Cryptocurrency</label></div>
                               </div>
                               <div className='from1'>
                                <div className='from2'><input type="checkbox" /><label className='from4'>Forex</label></div>
                                 <div className='from2'><input type="checkbox" /><label className='from4'>Binary</label></div>
                                 </div>
                            </div>
                            <div className=''><button className='iconDevH2'>Become a Tipster</button></div>
                            <p className='YouAgreeToF'>You agree to <a href="" className='smRet'>Tipster Terms </a> & <a href="" className='smRet'> Privacy Policy </a>.</p>
                        </div>
                    </form>
                 </div>
            </div>
             </div>
             <div className='psp2'></div>
             </div> 
         <div className ='psp' style={{backgroundImage:"url(/img/qqquad.svg)"}}>
        
          <div className='psp80'></div>
         <div className='beTipster90'>
            <div className='betStor'>
                  
                    <div className='bettors'>
                    <div className='bettorsDiv'>
                        <img src="/img/gain2.png" alt=""  />
                        <p className='bettors1' >01</p>
                    </div>
                    <div className='AddTip'>Add Tips</div>
                    <p className='itWell'>Create your tip and it’ll immediately be added to our “today’s tips” database for buyers to purchase.</p>
                    </div>
                
                 
                    <div className='bettors'>
                    <div className='bettorsDiv'>
                        <img src="/img/gain3.png" alt="" />
                        <p className='bettors1' >02</p>
                    </div>
                    <div className='AddTip'>Market players buy from you</div>
                    <p className='itWell'>Once your tip is live we’ll promote it to over 10,000+ market players.If they purchase tip then you will earn</p>
                    </div>
               
               
                    <div className='bettors'>
                    <div className='bettorsDiv'>
                        <img src="/img/gain4.png" alt="" />
                        <p className='bettors1' >03</p>
                    </div>
                    <div className='AddTip'>Get Paid</div>
                    <p className='itWell'>60% of every Sale is given directly to you. Assuming a market players buys the minimum bronze membership.</p>
                    </div>
               
            </div>

             <div>
                <div className='beb2'>
                    <div className='beb5'>
                        <div className='beb'><img src="/img/features.png" alt=""  className='beb1'/></div>
                    </div>
                    <div  className='beb6'>
                        <p className='SkilledBet'>Skilled market players earn money through selling tips</p>
                        <h2 className='SkilledBet2'>Serious Tips For Serious Market Players</h2>
                        <p className='SkilledBet3'>You can earn an unlimited amount. Earnars is full of serious market players. Market players who are happy to pay for tips because they know our tipsters provide a high return on investment for them. If you’re serious about your tips, you need to find the serious market players, and earnars is the place for you</p>
                    </div>
                </div>
            </div>


              <div>
                <div className='beb2 beb22'>
                    <div  className='beb6'>
                      <div >
                        <p className='SkilledBet'>Earn a stable income with low risk</p>
                        <h2 className='SkilledBet2'>We Want You To Succeed</h2>
                        <p className='SkilledBet3 aEarn'>Most tip sites don’t look after their tipsters Offering tipsters less than 50% of their earnings and no assistance.we do everything we can to help you get started and attract more market players.</p>
                        </div>
                    </div>
                    <div className='beb5'>
                        <div className='beb'><img src="/img/marketP.png" alt=""  className='beb1'/></div>
                    </div>
                </div>
            </div>
            </div>
            </div>

            
          
           
          
           
         
          
     
           
          
        </div>

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

export default BecomeATipster
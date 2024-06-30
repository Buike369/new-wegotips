import React ,{useState,useEffect}from "react";
import "./style/home.css";
import "./style/slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus,faMinus, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import "./style/home2.css"
import "./style/home.css"
import axios from "axios";
import { useLocation } from "react-router-dom"
import "./style/background.css"


const Home2=() =>{

  const [show,setShow]= useState(false)
  const [show1,setShow1]= useState(false)
  const [show2,setShow2]= useState(false)
  const [show3,setShow3]= useState(false)
  const [show4,setShow4]= useState(false)
  const [show5,setShow5]= useState(false)
  const [show6,setShow6]= useState(false)
  const [show7,setShow7]= useState(false)

  const [sports,setSports]= useState("Forex")
  const [loading,setLoading] = useState(true)
  const [prediction,setPrediction] = useState("sportsPre")
  const [currentPrediction,setCurrentPrediction] = useState("cuForexPre")
  

 // table  content
 const tableContent = ["content","content","content","content","content"]
 const tableContent1 = ["content","content","content","content","content"]
 const tableContent2 = ["content","content","content","content","content"]
 const tableContent3 = ["content","content","content","content","content"]






  const sportItem = [{game_no:1,profit:"20",odd:"2.5",action:"loss"},{game_no:2,profit:"35",odd:"4.5",action:"earned"},{game_no:3,profit:"55",odd:"0.5",action:"earned"},{game_no:4,profit:"70",odd:"4.5",action:"earned"}]
   const cryptoItem = [{c_trade_no:1,c_pair:"VBN/BTC",c_condition:"long",c_entry_point:"500",c_exit_point:"700",c_check:"loss",c_take_profit:"460"},{c_trade_no:2,c_pair:"AGRO/USDC",c_condition:"long",c_entry_point:"410",c_exit_point:"400",c_check:"earned",c_take_profit:"460"},{c_trade_no:3,c_pair:"UTC/USDT",c_condition:"long",c_entry_point:"300",c_exit_point:"400",c_check:"earned",c_take_profit:"460"},{c_trade_no:4,c_pair:"YTY/USDT",c_condition:"long",c_entry_point:"500",c_exit_point:"300",c_check:"loss",c_take_profit:"460"}]
    const forexItem = [{r_trade_no:1,r_pair:"BTC/USDT",r_condition:"long",r_entry_point:"500",r_exit_point:"700",r_take_profit:"460",r_check:"loss"},{r_trade_no:2,r_pair:"PAC/USDC",r_condition:"long",r_entry_point:"410",r_exit_point:"400",r_take_profit:1000,r_check:"earned"},{r_trade_no:3,r_pair:"EAR/BTC",r_condition:"long",r_entry_point:"300",r_exit_point:"400",r_take_profit:1000,r_check:"earned"},{r_trade_no:4,r_pair:"HTC/USDT",r_condition:"long",r_entry_point:"500",r_exit_point:"300",r_take_profit:1000,r_check:"loss"}]
     const binaryItem = [{b_trade_no:1,b_pair:"BTC/USDC",b_condition:"long",b_expire_time:"6:00",b_profit:"700",b_check:"loss"},{b_trade_no:2,b_pair:"YKC/USDC",b_condition:"short",b_expire_time:"3:35",b_profit:"800",b_check:"earned"},{b_trade_no:3,b_pair:"ADC/USDT",b_condition:"long",b_expire_time:"4:00",b_profit:"40",b_check:"loss"},{b_trade_no:4,b_pair:"KCK/USDC",b_condition:"long",b_expire_time:"5:00",b_profit:"800",b_check:"earned"}]
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
 const [error,setError]=useState("")
  const [post1,setPosts1] = useState([])
   const [post,setPosts] = useState([])
   const [post3,setPosts3] = useState([])
   const [post4,setPosts4] = useState([])
  const cat = useLocation().search
  



  const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date = `  ${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;

  // const tr = window.location.pathname;
  // if(tr === "/"){
  //   console.log("Mr kingsley is Good and nan")
  // }


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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






  const forf =()=>{
      setSports('Forex')
  }
  const crypto =()=>{
    setSports("cryptocurrency")

}
const bina =()=>{
  setSports('binary')
}
const Sports1 =()=>{
    setSports("sports")
}

// useEffect(()=>{
//   const fetchData4 = async ()=>{
//     try{
//  const res = await axios.get(`myPort/post/binary/tip3`)
//    setPosts4(res.data)

//     }catch(err){
//     setError(err)

//     }
//   }
//   fetchData4()
// },[post4])

useEffect(()=>{
  const fetchData4 = async ()=>{

  await axios.get(`/post/binary/tip3`).then((response)=>{
setPosts4(response.data)
setLoading(false)
  }).catch((err)=>{
  // setError(err)
  console.log(err)
  }) 
  }
  fetchData4()
},[post4])

// useEffect(()=>{
//   const fetchData3 = async ()=>{
//     try{
//  const res = await axios.get(`https://tea.earnars.com/api/post/crypto/tip3`)
//    setPosts3(res.data)
 
//     }catch(err){
//     setError(err)

//     }
//   }
//   fetchData3()
// },[post3])

useEffect(()=>{
  const fetchData3 = async ()=>{
  await axios.get(`/post/crypto/tip3`).then((response)=>{
  setPosts3(response.data)
  setLoading(false)
  }).catch((err)=>{
      //  setError(err)
      console.log(err)
  })
  
  }
  fetchData3()
},[post3])


useEffect(()=>{
  const fetchData2 = async ()=>{
 
 await axios.get(`/post/forex/tip3`).then((response)=>{
  setPosts(response.data)
 }).catch((err)=>{
//  setError(err)
 console.log(err)
 })
    
  }

   fetchData2()
 },[post])

// useEffect(()=>{
//   const fetchData1 = async ()=>{
//     try{
//  const res = await axios.get(`https://tea.earnars.com/api/post/sports/tip3`)
//    setPosts1(res.data)
//     }catch(err){
//        setError(err)

//     }
//   }
//   fetchData1()
// },[post1])


useEffect(()=>{
  const fetchData1 = async ()=>{
 
 await axios.get(`/post/sports/tip3`).then((response)=>{
   setPosts1(response.data)
   setLoading(false)
 }).catch((err)=>{
  // setError(err)
  console.log(err)
 }) 
  }
  fetchData1()
},[post1])

  useEffect(()=>{
    AOS.init({once: true});
  },[])
  

    return (
      <div  className="HomPageBg">
        <div className="ahh"></div>
      <div className="Home_Bg_Bg" >
  
         <div className="carousel_Div honeDivGuide lovePa">
              <img src="/img/tom.png" className="ImgDiv" />
            </div>
            <div className="Lg">
              <div className="sportPa"  >
            <div className="affiliateImage" >
                    <div className="grace">
                        <h1 className="Aka">Navigate the market</h1>
                        {/* <div><span className="homeSpan">Home</span> <span className="homeSpan">Affiliate program</span></div> */}
                       <p  className="weAre4">confidently with our  <span className="withUpto">premium forecasts</span></p>
                       <p className='everyWhere' style={{marginBottom:"10px"}}>and unlock your earning potential.</p>
                       {/* <div className='football'>Football, Tennis, Basketball ETC</div> */}
                    </div>
                     <div className="grace"><img src="/img/predictions2.svg" className="gracePic WEW" alt="affiliate_banner"/></div>
                     <img src="/img/StarsME.svg" className="headerAffiliateI" alt="affiliate_banner"/>
                      <img src="/img/StarsME.svg" className="headerAffiliate2" alt="affiliate_banner"/>
                 </div>
                 </div>
                 </div>


        {/*======  section3========*/}

        <div  className="fareWo" >
      <div className="him"> 
      <div className="Rtme ">
          <div className="Free">
            <div><p className="EarnP">How It works </p>
            <div className="divUnder"></div></div>
          
          </div>
          {/*======  section4 ========*/}

          
                  <div className="goods1">
                    <div className="goods2">
                    <div className="inviteFr goods liom">Get Started with Easiest Steps</div>
                    <p className="proF">
Get accurate winning tips from professional betting tipsters across sports, forex and cryptocurrency.</p>
           <div className='betStor ghFi likl'>
                  
                    <div className='bettors wanNy'>
                    <div className='bettorsDiv'>
                       <div className="ghFii13 cvcvcnc"><img src="/img/light.png" alt=""  className="withTyb"/></div>
                        <p className='bettors1' >01</p>
                    </div>
                    <div className='AddTip ghFii1 amGet'>Find your tipster</div>
                    <p className='itWell ghFii12'>Explore thousands of exprienced tipsters with verified picks and statistics.</p>
                    </div>
                
                 
                    <div className='bettors wanNy'>
                    <div className='bettorsDiv'>
                       <div className="ghFii13 cvcvcnc"><img src="/img/light1.png" alt="" className="withTyb"  /></div>
                        <p className='bettors1' >02</p>
                    </div>
                    <div className='AddTip ghFii1 amGet'>Get your tips in your dashboard</div>
                    <p className='itWell ghFii12'>Select your tipsters and subscribe to get betting and trading tips on your dashboard.</p>
                    </div>
               
               
                    <div className='bettors wanNy'>
                    <div className='bettorsDiv'>
                       <div className="ghFii13 cvcvcnc"> <img src="/img/light3.png" alt="" className="withTyb"/></div>
                        <p className='bettors1' >03</p>
                    </div>
                    <div className='AddTip ghFii1 amGet'>Place a bet & win</div>
                    <p className='itWell ghFii12'>When you receive a tip, open your favourite bookmaker's website or trading platform and place the bet or trade.</p>
                    </div>
               
            </div>
            </div>
            <div className="goods3  goods4"></div>
                 <div className="goods3 goods5"></div>
            </div>
            
   
          {/* secton5   */}

        

        {/* <div className="divRatT">
           <div className="teleCom turu">
               
               <div className="commT bg-yellow-box" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
                   <div className="FreeComm">Cryptocurrency Trading</div>
                   <div style={{padding:"0 40px"}}><div style={{width:"100%",borderBottom:"1px solid rgb(99 91 146)",margin:"0 auto 10px auto"}}></div></div>
                   <img src="/img/crypto.png" alt="not found" className="ballSport1 ffoo"/>
                   <img src="/img/crypto1.png" alt="not found" className="ballSport ffoo"/>
                   <p className="Saving">Earn</p>
                   <p className="perceT">65 - 100%</p>
                   <p className="dailyOn">Profits</p>
                   <p className="AirTime">Monthly</p>
                   <div className="successRate100">
                       <p className="RateSuccess">85% Success Rate</p>
                   </div>
               </div>
               <div className="commT dese bg-blue-box" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
                   <div className="FreeComm">Binary Option Trading</div>
                   <div style={{padding:"0 40px"}}><div style={{width:"100%",borderBottom:"1px solid rgb(99 91 146)",margin:"0 auto 10px auto"}}></div></div>
                   <img src="/img/binary.png" alt="not found" className="ballSport1 ffoo"/>
                   <img src="/img/binary1.png" alt="not found" className="ballSport ffoo"/>
                   <p className="Saving">Earn</p>
                   <p className="perceT">50-100%</p>
                   <p className="dailyOn">Profits</p>
                   <p className="AirTime">Monthly</p>
                  <div className="successRate100"><p className="RateSuccess">65% Success Rate</p></div>
               </div>
               <img src="/img/undrawWorld1.svg" alt="" className="papag3 nub" />
                <img src="/img/undrawWorld1.svg" alt="" className="papag4 nub1" />
           </div>
           </div> */}

           
          
           </div>

           <div className="glow glowLeft"></div>
            <div className="glow glowRight"></div>
           </div> 

           {/*  */}
           </div>
<div >
   <div className="limba">
<div className="gos">
  <div className="gos7">
    <div className="gos2"><img src="/img/earnar.PNG" alt="" className="gos5" /></div>
     <div className="gos3">
      <div className="limba2">
      <div className="ET">Earnars Token</div>
      <p className="gos4"><span className="goemJK">$ENAR</span> allows you to pay for services within the platform with ease or leverage on the ever increasing price for arbitrage purposes.</p>
        <div className="earnarC1"><button  className="earnarC" >Buy Enar</button></div>
      </div></div>
  </div>
</div>
</div>
</div>


         <div style={{paddingBottom:"20px",position:"relative"}}>
        

           <div className="Rtme">
               <div className="loud" style={{color: "#d5b405"}}>Top Tipsters</div>
               <div className="ye"></div>
               <div  className="GetP">See our professional  tipsters across all markets. Sports, Crypto, & Forex.</div>
               <div >
               <div className="faith" >
               <div className="Forex1">
                   <div className={sports==="Forex"?"Forex12 pin":"Forex12"} onClick={forf}>Forex</div>
                   <div className={sports === "sports"?"Forex12 pin":"Forex12"} onClick={Sports1}>Sports</div>
                   
                   <div className={sports === "cryptocurrency"?"Forex12 pin":"Forex12"} onClick={crypto}>Crypto</div>
                   <div className={sports === "binary"?"Forex12 pin":"Forex12"} onClick={bina}>Binary</div>
               </div>
               </div>
               </div>

           {sports === "sports" ? 
             <div style={{padding:"0 10px"}} >
               <Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive1}
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
   className="king"
 
>
               { (loading) ?  sportItem.map((app,id)=>(
              //  <div className="sport2 cappin yellowD" key={id}>
              //          <div className="divS"><span className="Nog rere">Game No: </span>SP-{date}/{app.game_no}</div>
              //          <p className="dailyP21">Daily Profit</p>
              //          <p className="Dyc">{app.profit}%</p>
              //          <p className="addErn">odd:{app.odd}</p>
              //          <div className={app.action === "earned"?"EarnLoss":"EarnLoss losscolor"}>{app.action === "earned"?"Earned":"Loss"}</div>

              //      </div> 
                <div style={{padding:"10px 0 25px 0"}}>
                          <div className="cardProfileDiv" key={id} style={{border:"1px solid #3c2f8b"}}>
          <div className="catImgDivProfile"><img src="/img/sportsBall.jpg" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
          <div className="donKing">Samuel453</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
            <div className="typing">
            <div className='ROILING'>
            <div className="pork1">+4,345</div>
            <p className='ROIL'>ROI</p>
            </div>
            <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Profit</p>
            </div>
             <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Win Rate</p>
            </div>
          </div>
       

          <a href="/view-profile" className="profileLink"><div className="houseRuMM WonB">View Profile</div></a>
        </div>
                       </div>
                   )): post1.map((app,id)=>(
                  //  <div className="sport2 cappin yellowD" key={id}>
                  //      <div className="divS"><span className="Nog rere">Game No: </span>SP-{date}/{app.game_no}</div>
                  //      <p className="dailyP21">Daily Profit</p>
                  //      <p className="Dyc">{app.daily_profit}%</p>
                  //      <p className="addErn">odd:{app.odd}</p>
                  //      <div className={app.action === "earned"?"EarnLoss":"EarnLoss losscolor"}>{app.action === "earned"?"Earned":"Loss"}</div>

                  //  </div>
                    <div style={{padding:"10px 0 25px 0"}}>
                          <div className="cardProfileDiv" key={id} style={{border:"1px solid #3c2f8b"}}>
          <div className="catImgDivProfile"><img src="/img/sportsBall.jpg" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
          <div className="donKing">Samuel453</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
            <div className="typing">
            <div className='ROILING'>
            <div className="pork1">+4,345</div>
            <p className='ROIL'>ROI</p>
            </div>
            <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Profit</p>
            </div>
             <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Win Rate</p>
            </div>
          </div>
        

          <a href="/view-profile" className="profileLink"><div className="houseRuMM WonB">View Profile</div></a>
        </div>
                       </div>
                   ))
  
                 }

               




       
</Carousel>
</div>
:""}


               { sports ==="Forex"? 
               <div style={{padding:"0 10px"}}>
                       
                                 <Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive1}
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
  className="king"
>


  {(loading) ? forexItem.map((app,id)=>(
                        // <div className="sport2 cappin yellowC " key={id}>
                        //     <div className="divS"><span className="Nog">Trade No: </span>FX-{date}/{app.r_trade_no}</div>

                        //     <div className="busyer">
                        //     <div className="pairs">
                        //         <p className="Usdj ">Pair: <span className="upcase">{app.r_pair}</span></p>
                        //         <p className="Usdj">Condition: <span className="lowcase">{app.r_condition}</span></p>
                        //     </div>
                        //    <div className="pairs">
                        //        <div>
                        //            <p className="Usdj">Entry point-{app.r_entry_point}</p>
                        //            <p className="Usdj">Exit point-{app.r_exit_point}</p>
                        //        </div>
                        //        <div className="Fitwem">
                        //            <p className="Usdj addpo">Take Profit</p>
                        //            <p className="Usdj addpo1" >{app.r_take_profit} pips</p>
                        //        </div>
                        //    </div>

                        //    </div>
                           
                          
                        //     <div className= {app.r_check === "earned"?"EarnLoss":"EarnLoss losscolor"}><FontAwesomeIcon icon={faCheckDouble} className="icon_brand_size"/>{app.r_check === "earned"?"Earned":"Loss"}</div>
     
                        // </div>
                        <div style={{padding:"10px 0 25px 0"}}>
                          <div className="cardProfileDiv" key={id} style={{border:"1px solid #3c2f8b"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
          <div className="donKing">Samuel453</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
            <div className="typing">
            <div className='ROILING'>
            <div className="pork1">+4,345</div>
            <p className='ROIL'>ROI</p>
            </div>
            <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Profit</p>
            </div>
             <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Win Rate</p>
            </div>
          </div>
        

          <a href="/view-profile" className="profileLink"><div className="houseRuMM WonB">View Profile</div></a>
        </div>
                       </div> )) :post.map((app,id)=>(
                        // <div className="sport2 cappin yellowC" key={id}>
                        //     <div className="divS"><span className="Nog">Trade No: </span>FX-{date}/{app.r_trade_no}</div>

                        //     <div className="busyer">
                        //     <div className="pairs">
                        //         <p className="Usdj ">Pair: <span className="upcase">{app.r_pair}</span></p>
                        //         <p className="Usdj">Condition: <span className="lowcase">{app.r_condition}</span></p>
                        //     </div>
                        //    <div className="pairs">
                        //        <div>
                        //            <p className="Usdj">Entry point-{app.r_entry_point}</p>
                        //            <p className="Usdj">Exit point-{app.r_exit_point}</p>
                        //        </div>
                        //        <div className="Fitwem">
                        //            <p className="Usdj addpo">Take Profit</p>
                        //            <p className="Usdj addpo1" >{app.r_take_profit} pips</p>
                        //        </div>
                        //    </div>

                        //    </div>
                           
                          
                        //     <div className= {app.r_check === "earned"?"EarnLoss":"EarnLoss losscolor"}><FontAwesomeIcon icon={faCheckDouble} className="icon_brand_size"/>{app.r_check === "earned"?"Earned":"Loss"}</div>
     
                        // </div>
                        <div style={{padding:"10px 0 25px 0"}}>
                          <div className="cardProfileDiv" key={id} style={{border:"1px solid #3c2f8b"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
          <div className="donKing">Samuel453</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
           <div className="typing">
            <div className='ROILING'>
            <div className="pork1">+4,345</div>
            <p className='ROIL'>ROI</p>
            </div>
            <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Profit</p>
            </div>
             <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Win Rate</p>
            </div>
          </div>
        

         <a href="/view-profile" className="profileLink"> <div className="houseRuMM WonB">View Profile</div></a>
        </div></div>
                        ))}

                        </Carousel>
                        </div>

                  
               :""}
             

               { sports === "cryptocurrency"? 
                 <div style={{padding:"0 10px"}}>
                 <Carousel
                 swipeable={true}
                 draggable={false}
                 showDots={true}
                 responsive={responsive1}
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
                  className="king"
               >

                   {(loading) ? cryptoItem.map((app,id)=>(
                    // <div className="sport2 cappin yellowA" key={id}>
                    //     <div className="divS"><span className="Nog Nog4">Trade No: </span>CT-{date}/{app.c_trade_no}</div>

                    //     <div className="busyer">
                    //     <div className="pairs">
                    //         <p className="Usdj">Pair:<span className="upcase">{app.c_pair}</span></p>
                    //         <p className="Usdj">Condition:<span className="lowcase">{app.c_condition}</span></p>
                    //     </div>
                    //    <div className="pairs">
                    //        <div>
                    //            <p className="Usdj">Entry point-{app.c_entry_point}</p>
                    //            <p className="Usdj">Exit point-{app.c_exit_point}</p>
                    //        </div>
                    //        <div className="Fitwem">
                    //            <p className="Usdj Nog4">Take Profit</p>
                    //            <p className="Usdj Nog4fade">{app.c_take_profit}%</p>
                    //        </div>
                    //    </div>

                    //    </div>
                       
                      
                    //     <div className={app.c_check === "earned"?"EarnLoss":"EarnLoss losscolor"}>{app.c_check === "earned"?"Earned":"Loss"}</div>
 
                    // </div>
                      <div style={{padding:"10px 0 25px 0"}}>
                          <div className="cardProfileDiv" key={id} style={{border:"1px solid #3c2f8b"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
          <div className="donKing">Samuel453</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
             <div className="typing">
            <div className='ROILING'>
            <div className="pork1">+4,345</div>
            <p className='ROIL'>ROI</p>
            </div>
            <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Profit</p>
            </div>
             <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Win Rate</p>
            </div>
          </div>
          

         <a href="/view-profile"  className="profileLink"> <div className="houseRuMM  WonB">View Profile</div> </a>
        </div>
                       </div>
                    )):post3.map((app,id)=>(
                    // <div className="sport2 cappin yellowA" key={id}>
                    //     <div className="divS"><span className="Nog Nog4">Trade No: </span>CT-{date}/{app.c_trade_no}</div>

                    //     <div className="busyer">
                    //     <div className="pairs">
                    //         <p className="Usdj">Pair:<span className="upcase">{app.c_pair}</span></p>
                    //         <p className="Usdj">Condition:<span className="lowcase">{app.c_condition}</span></p>
                    //     </div>
                    //    <div className="pairs">
                    //        <div>
                    //            <p className="Usdj">Entry point-{app.c_entry_point}</p>
                    //            <p className="Usdj">Exit point-{app.c_exit_point}</p>
                    //        </div>
                    //        <div className="Fitwem">
                    //            <p className="Usdj Nog4">Take Profit</p>
                    //            <p className="Usdj Nog4fade">{app.c_take_profit}%</p>
                    //        </div>
                    //    </div>

                    //    </div>
                       
                      
                    //     <div className={app.c_check === "earned"?"EarnLoss":"EarnLos losscolor"}>{app.c_check === "earned"?"Earned":"Loss"}</div>
 
                    // </div>
                      <div style={{padding:"10px 0 25px 0"}}>
                          <div className="cardProfileDiv" key={id} style={{border:"1px solid #3c2f8b"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
          <div className="donKing">Samuel453</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
          <div className="typing">
            <div className='ROILING'>
            <div className="pork1">+4,345</div>
            <p className='ROIL'>ROI</p>
            </div>
            <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Profit</p>
            </div>
             <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Win Rate</p>
            </div>
          </div>
          

          <a href="/view-profile"  className="profileLink"><div className="houseRuMM  WonB">View Profile</div></a>
        </div>
                       </div>
                    ))}
                    </Carousel>
                    </div>
                    :""}

 { sports=== "binary"? 
            <div style={{padding:"0 10px"}}>
                   <Carousel
                   swipeable={true}
                   draggable={false}
                   showDots={true}
                   responsive={responsive1}
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
                    className="king"
                 >
                 

                {(loading)? binaryItem.map((app,id)=>(
                 
                    // <div className="sport2 cappin yellowB" key={id}>
                    //     <div className="divS"><span className="Nog Nog5">Trade No: </span>BN-{date}/{app.b_trade_no}</div>

                    //     <div className="busyer">
                    //     <div className="pairs">
                    //         <p className="Usdj">Pair: {app.b_pair}</p>
                    //         <p className="Usdj">Condition: {app.b_condition}</p>
                    //     </div>
                    //    <div className="pairs">
                    //        <div>
                    //            <p className="Usdj">TIME : {app.b_expire_time}</p>
                             
                    //        </div>
                    //        <div className="Fitwem">
                    //            <p className="Usdj Nog5">Take Profit</p>
                    //            <p className="Usdj Nog5fade">{app.b_profit}%</p>
                    //        </div>
                    //    </div>

                    //    </div>
                       
                      
                    //     <div className={app.b_check === "earned"?"EarnLoss":"EarnLoss losscolor"}> {app.b_check === "earned"?"Earned":"Loss"}</div>
 
                    // </div>
                      <div style={{padding:"10px 0 25px 0"}}>
                          <div className="cardProfileDiv" key={id} style={{border:"1px solid #3c2f8b"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
          <div className="donKing">Samuel453</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
           <div className="typing">
            <div className='ROILING'>
            <div className="pork1">+4,345</div>
            <p className='ROIL'>ROI</p>
            </div>
            <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Profit</p>
            </div>
             <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Win Rate</p>
            </div>
          </div>
          

         <a href="/view-profile"  className="profileLink "><div className="houseRuMM WonB">View Profile</div></a>
        </div>
                       </div>
                    )):post4.map((app,id)=>(
                    // <div className="sport2 cappin yellowB" key={id}>
                    //     <div className="divS"><span className="Nog Nog5">Trade No: </span>BN-{date}/{app.b_trade_no}</div>

                    //     <div className="busyer">
                    //     <div className="pairs">
                    //         <p className="Usdj">Pair: {app.b_pair}</p>
                    //         <p className="Usdj">Condition: {app.b_condition}</p>
                    //     </div>
                    //    <div className="pairs">
                    //        <div>
                    //            <p className="Usdj">TIME : {app.b_expire_time}</p>
                             
                    //        </div>
                    //        <div className="Fitwem">
                    //            <p className="Usdj Nog5">Take Profit</p>
                    //            <p className="Usdj Nog5fade">{app.b_profit}%</p>
                    //        </div>
                    //    </div>

                    //    </div>
                       
                      
                    //     <div className={app.b_check === "earned"?"EarnLoss":"EarnLoss losscolor"}> {app.b_check === "earned"?"Earned":"Loss"}</div>
 
                    // </div>
                      <div style={{padding:"10px 0 25px 0"}}>
                          <div className="cardProfileDiv" key={id} style={{border:"1px solid #3c2f8b"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
          <div className="donKing">Samuel453</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
            <div className="typing">
            <div className='ROILING'>
            <div className="pork1">+4,345</div>
            <p className='ROIL'>ROI</p>
            </div>
            <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Profit</p>
            </div>
             <div className='ROILING'>
            <div className="pork">+2,434</div>
            <p className='ROIL'>Win Rate</p>
            </div>
          </div>
         

         <a href="/view-profile"  className="profileLink"> <div className="houseRuMM  WonB">View Profile</div></a>
        </div>
                       </div>
                  
                    ))}
                  
                    </Carousel>
                    </div>
               :""} 




      
           </div>
         
           </div>

           {/* end section6 */}


           {/*section7 */}

           <div className="home5">

              {/* <div class="sky"> */}
    
    {/* <div className="stars"></div>
    <div className="stars1"></div>
    <div className="stars2"></div> */}
   

            <div className="containerT">

               <div className="youpin carU ">

              
                 <div className="topPrediction">Top Predictions</div>
                  <div  className="GetP">Discover the top predictions predicted by our expert tipsters.</div>
                 <div style={{padding: "1px  5px"}}>
              <div className="UponT" >
                    <div  className="market">
               <div className="faith" >
               <div className="Forex1">
                   <div className={prediction==="forexPre"?"Forex12 pin":"Forex12"} onClick={()=>setPrediction("forexPre")}>Forex</div>
                   <div className={prediction === "sportsPre"?"Forex12 pin":"Forex12"} onClick={()=>setPrediction("sportsPre")}>Sports</div>
                   
                   <div className={prediction === "cryptoPre"?"Forex12 pin":"Forex12"} onClick={()=>setPrediction("cryptoPre")}>Crypto</div>
                   <div className={prediction === "binaryPre"?"Forex12 pin":"Forex12"} onClick={()=>setPrediction("binaryPre")}>Binary</div>
               </div>
               </div>
               </div>
                {/* <div className="sportPetNe">Sports Predictions</div> */}
               
               {prediction === "sportsPre" ? <>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        <th style={{width:"70px"}}>Time</th>
         <th style={{width:"150px"}}>League</th>
        <th style={{width:"180px"}}>Team</th>
        <th style={{width:"180px"}}>Tips</th>
        <th style={{width:"60px"}}>Odd</th>
        <th style={{width:"80px"}}>Stake</th>
        <th style={{width:"80px"}}>Results</th>
           <th style={{width:"80px"}}>Tipster</th>

                
      </tr>
    </thead>
    <tbody>
       
       
     
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>13:00pm</td>
          <td>Champions league</td>
        <td>Chealse vs AsRoma</td>
        <td>x2</td>
        <td>1.72</td>
        <td>10,000</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
    
        
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>13:00am</td>
          <td>France League1</td>
        <td>PSG Vs Strasbourg</td>
        <td>1x</td>
        <td>1.56</td>
        <td>5,000</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
      </tr>

            <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>13:00am</td>
          <td>France League1</td>
        <td>PSG Vs Strasbourg</td>
        <td>1x</td>
        <td>1.56</td>
        <td>5,000</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
      </tr>

            <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>13:00am</td>
          <td>France League1</td>
        <td>PSG Vs Strasbourg</td>
        <td>1x</td>
        <td>1.56</td>
        <td>5,000</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
      </tr>
            <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>13:00am</td>
          <td>France League1</td>
        <td>PSG Vs Strasbourg</td>
        <td>1x</td>
        <td>1.56</td>
        <td>5,000</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 
</> :""}
      
       {prediction === "forexPre" ? <>
           <div className="adaba">
      <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema' style={{borderCollapse: "collapse"}}>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        <th style={{width:"100px"}}>Pair</th>
         <th style={{width:"100px"}}>Condition</th>
        <th style={{width:"80px"}}>Entry</th>
        <th style={{width:"80px"}}>Take Profit</th>
        <th style={{width:"80px"}}>Stop Loss</th>
         <th style={{width:"80px"}}>Result</th>
         <th style={{width:"80px"}}>Tipster</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>NGN/USD</td>
          <td>Long(buy)</td>
        <td>1.678787</td>
        <td>1.899765</td>
        <td>1.456378</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
      <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>CED/USD</td>
          <td>Short(buy)</td>
        <td>1.678787</td>
        <td>1.678787</td>
        <td>1.678787</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
         <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>CED/USD</td>
          <td>Short(buy)</td>
        <td>1.678787</td>
        <td>1.678787</td>
        <td>1.678787</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
         <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>CED/USD</td>
          <td>Short(buy)</td>
        <td>1.678787</td>
        <td>1.678787</td>
        <td>1.678787</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
         <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>CED/USD</td>
          <td>Short(buy)</td>
        <td>1.678787</td>
        <td>1.678787</td>
        <td>1.678787</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div>
</> : ""}

 {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}

   {prediction === "cryptoPre" ? <>
 <div className="adaba">
      <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema' style={{borderCollapse: "collapse"}} >
   
    <thead>
      <tr>
        <th style={{width:"100px"}} className="emeka">Date</th>
        <th style={{width:"100px"}}>Pair</th>
         <th style={{width:"100px"}}>Condition</th>
        <th style={{width:"80px"}}>Entry</th>
        <th style={{width:"80px"}}>Take Profit</th>
        <th style={{width:"80px"}}>Stop Loss</th>
          <th style={{width:"80px"}}>Result</th>
         
        <th style={{width:"80px"}}>Tipster</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>BTC/USD</td>
          <td>Long(buy)</td>
        <td>30000.05</td>
        <td>76000.00</td>
        <td>29500.00</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
        <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>BTC/USD</td>
          <td>Long(buy)</td>
        <td>30000.05</td>
        <td>76000.00</td>
        <td>29500.00</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
        <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>BTC/USD</td>
          <td>Long(buy)</td>
        <td>30000.05</td>
        <td>76000.00</td>
        <td>29500.00</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
        <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>BTC/USD</td>
          <td>Long(buy)</td>
        <td>30000.05</td>
        <td>76000.00</td>
        <td>29500.00</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
      <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>ETH/USD</td>
          <td>Long(buy)</td>
        <td>1750.05</td>
        <td>15000.00</td>
        <td>1650.00</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div>
</>  : "" }
    {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}

 {prediction === "binaryPre" ? <>
 <div className="adaba">
      <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema' style={{borderCollapse: "collapse"}} >
   
    <thead>
      <tr>
        <th style={{width:"80px"}}>Date</th>
        <th style={{width:"80px"}}>Pair</th>
         <th style={{width:"80px"}}>Condition</th>
          <th style={{width:"80px"}}>Result</th>
         <th style={{width:"80px"}}>Tipster</th>
       
                
      </tr>
    </thead>
    <tbody>
       
       
      
         <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
          <td>Long(buy)</td>
          <td><img src="/img/good.png" alt="" /></td>
           <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
       
        
      </tr>
      <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
          <td>Short(buy)</td>
          <td><img src="/img/good.png" alt="" /></td>
           <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
       
        
      </tr>
  <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
          <td>Short(buy)</td>
          <td><img src="/img/good.png" alt="" /></td>
           <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
       
        
      </tr>
      <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
          <td>Short(buy)</td>
          <td><img src="/img/good.png" alt="" /></td>
           <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
       
        
      </tr>
  <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
          <td>Short(buy)</td>
          <td><img src="/img/good.png" alt="" /></td>
           <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
       
        
      </tr>
  
  <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
          <td>Short(buy)</td>
          <td><img src="/img/good.png" alt="" /></td>
           <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
       
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div>
</> : "" }
 {/* <div className="seeMoreDivLink"><a href="/market-predictions"><button className="SeeMoreInfo">See More</button></a></div> */}

                </div>
                </div>

              
               </div>

             
{/* <div className="limba">
<div className="gos">
  <div className="gos1">
    <div className="gos2"><div className="jimk"><img src="/img/earnv.jpeg" alt="" className="gos5" /></div></div>
     <div className="gos3"><div className="limba2">
      <div className="ET">Earnars Token</div>
      <p className="gos4"><span className="goemJK">$ENAR</span> allows you to pay for services within the platform with ease or leverage on the ever increasing price for arbitrage purposes.</p></div></div>
  </div>
</div>
</div> */}




          <div className="youpin carU">

              
                 <div className="topPrediction">Recent Tips From Tipsters</div>
                 <div style={{padding: "1px  5px"}}>
              <div className="UponT" >
                     <div className="market">
               <div className="faith" >
               <div className="Forex1">
                   <div className={currentPrediction ==="cuForexPre"?"Forex12 pin":"Forex12"} onClick={()=>setCurrentPrediction("cuForexPre")}>Forex</div>
                   <div className={currentPrediction === "cuSportsPre"?"Forex12 pin":"Forex12"} onClick={()=>setCurrentPrediction("cuSportsPre")}>Sports</div>
                   
                   <div className={currentPrediction === "cuCryptoPre"?"Forex12 pin":"Forex12"} onClick={()=>setCurrentPrediction("cuCryptoPre")}>Crypto</div>
                   <div className={currentPrediction === "cuBinaryPre"?"Forex12 pin":"Forex12"} onClick={()=>setCurrentPrediction("cuBinaryPre")}>Binary</div>
               </div>
               </div>
               </div>
                
             {currentPrediction  ===  "cuSportsPre" ? <> 
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"80px"}}>Time</th>
         <th style={{width:"150px"}}>League</th>
        <th style={{width:"180px"}}>Team</th>
        <th style={{width:"80px"}}>Odd</th>
        <th style={{width:"80px"}}>Stake</th>
        <th style={{width:"80px"}}>Yeild</th>
        <th style={{width:"80px"}}>Tipster</th>
                
      </tr>
    </thead>
    <tbody>
       
       
      
       {tableContent.map((app,id)=>(
    
        <tr  className="ADDTimeDbg " key={id}>
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>1.72</td>
        <td>+20.45</td>
        <td>+3%</td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
      </tr>
      ))} 
      
        
      
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 
</> : ""} 
 {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}
          
           {currentPrediction  ===  "cuForexPre" ? <> 
           <div className="adaba">
      <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema' style={{borderCollapse: "collapse"}}>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
       
         <th style={{width:"100px"}}>Condition</th>
        <th style={{width:"100px"}}>Entry</th>
        <th style={{width:"100px"}}>Take Profit</th>
        <th style={{width:"100px"}}>Stop Loss</th>
        <th style={{width:"100px"}}>Tipster</th>
        
        
                
      </tr>
    </thead>
    <tbody>
       
     {tableContent1.map((app,id)=>( 
      <tr  className="ADDTimeDbg ADDTimeDbg22" key={id}>
        <th className=" ADDTimeDbg">09/11/2023</th>
        
          <td>Long(buy)</td>
        <td>1.678787</td>
        <td>1.899765</td>
        <td>1.456378</td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
      ))} 
     
    </tbody>
  </table>
</div>
</div>
</> : ""}
 {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}

 {currentPrediction  ===  "cuCryptoPre" ? <> 
 <div className="adaba">
      <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema' style={{borderCollapse: "collapse"}} >
   
    <thead>
      <tr>
        <th style={{width:"100px"}} className="emeka">Date</th>
       
         <th style={{width:"100px"}}>Condition</th>
        <th style={{width:"100px"}}>Entry</th>
        <th style={{width:"100px"}}>Take Profit</th>
        <th style={{width:"100px"}}>Stop Loss</th>
        <th style={{width:"100px"}}>Tipster</th>

        
                
      </tr>
    </thead>
    <tbody>
       
        
     {tableContent2.map((app,id)=>( 
      <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
       
          <td>Long(buy)</td>
        <td>9.0615</td>
        <td>12.0500</td>
        <td>8.5000</td>
       
          <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
       ))} 
     
    </tbody>
  </table>
</div>
</div>
</> :""}
    {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}

 {currentPrediction  ===  "cuBinaryPre" ? <> 
 <div className="adaba">
      <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema' style={{borderCollapse: "collapse"}} >
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
       
         <th style={{width:"100px"}}>Condition</th>

           <th style={{width:"70px"}}>Tipster</th>
       
                
      </tr>
    </thead>
    <tbody>
       
       
        {tableContent2.map((app,id)=>( 
         <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
       
          <td>Long(buy)</td>
           <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
       
        
      </tr>
          ))}
     
    </tbody>
  </table>
</div>
</div>
</> : ""}
 {/* <div className="seeMoreDivLink"><a href="/recent-predictions"><button className="SeeMoreInfo">See More</button></a></div> */}

                </div>
                </div>

              
               </div>



              


           <div className="Rtme">
             <div style={{padding:"0px 10px"}}>
           <div  className="Great" >
             <div className="with">Partners With Great Benefits  </div>
            <div className="ye"></div>
           <div className="Make15">
               <div>
                   <div>
                       <p className="millionM"  style={{color: "#7b7ee2" }} >Make $1,000 on referral commission monthly </p>
                       {/* <p className="OnRef">On Referral Commission</p> */}
                        <div className="visitMe"><a href="/affliate"><button className="visitMe3">See More</button></a></div>
                   </div>
               </div>
               <div>
                 <div className="yuri2">
                 <div className="yuri"></div>
                 <p className="Onref1">75%  Commission</p>
                 </div>
                  
                  <div className="yuri2">
                  <div className="yuri"></div>
                   <p className="Onref1">Daily payout</p>
                   </div>

                   <div className="yuri2">
                   <div className="yuri"></div>
                   <p className="Onref1">Instant withdrawal to Account</p>
                   </div>

                   <div className="yuri2">
                   <div className="yuri"></div>
                   <p className="Onref1">Residual Income For Life</p>
                   </div>
               </div>
           </div>
           <img src="/img/pgf.svg" alt="image"  className="emWike"/>
          
           </div>
           </div>
           </div>
               {/* </div> */}
               </div>

           </div>

              

               
               </div>

               {/*  */}



    

          {/*======  section5 ========*/}

      <div className="WhatD">
         <div className="Rtme">
        <div className='TheyAre'>They are talking about us</div>
          <div className='DonTake'>Don't Take Our Word For It.</div>
          <div className='seeWhat'>See what our customers have to say.Find out what our clients are saying below</div>
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
  autoPlay={false}
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
            {/* <div className="homeChange">
              <div className="HowFarBro" onClick={drop4}>
                <span> How much does it cost to subscribe monthly? </span>
                <span className="IconSpace">
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                  It cost only $50 or ₦25,000 to subscribe monthly
                </p>
                </div>
              ) : (
                ""
              )}
            </div> */}
          
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop6}>
                <span> If my referral subscribes every month will I still get paid my referral commission? </span>
                <span className="IconSpace">
                  {show6? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show6 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                  Yes, you earn upto 75% commission on any user your refer to our plaform.e.g if Tola refers Emeka and Emeka subscribe to our yearly affiliate program, Tola will recieve 75%( ₦7,500) and if it's a monthly subscription Tola will receive ₦750. if Emeka continue renewing his subscrption every mont or year Tola will keep earning his referral bonus for life.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop7}>
                <span>  Can i invest my money with your company so you trade & bet for me and pay me percentage monthly?</span>
                <span className="IconSpace">
                  {show7? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show7 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 We or our Tipsters do not accept or manage users trading/ betting funds, trade or bet for any user. We only forecast the forex, crypto, binary market & predicts games. Users are responsible for managing their money with any brokers or bookies of their choice.
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
    );
}

export default Home2;

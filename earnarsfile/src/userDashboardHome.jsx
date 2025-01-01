import React, {useState,useEffect} from 'react'
import "./style/home.css";
import "./style/userDashboardHome.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus,faMinus, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import "./style/home2.css"
import {faArrowRight,faArrowLeft} from "@fortawesome/free-solid-svg-icons"

const UserDashboardHome = () => {
    const [sports,setSports]= useState("Forex")
      const [loading,setLoading] = useState(true)
      const [prediction,setPrediction] = useState("sportsPre")
      const [currentPrediction,setCurrentPrediction] = useState("cuForexPre")
        const [posts1,setPosts1] = useState([])
         const [post,setPosts] = useState([])
         const [post3,setPosts3] = useState([])
         const [post4,setPosts4] = useState([])
           const [show,setShow]= useState(false)
           const [show1,setShow1]= useState(false)
           const [show2,setShow2]= useState(false)
           const [show3,setShow3]= useState(false)
           const [show4,setShow4]= useState(false)
           const [show5,setShow5]= useState(false)
           const [show6,setShow6]= useState(false)
           const [show7,setShow7]= useState(false)
         

      
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

     const topPredictedMarket = ["emeka","emeka","emeka","emeka","emeka"]
  const topPredictedMarket1 = ["emeka","emeka","emeka","emeka","emeka"]
  const topPredictedMarket2 = ["emeka","emeka","emeka","emeka","emeka"]
  const topPredictedMarket3 = ["emeka","emeka","emeka","emeka","emeka"]
 
   const tableContent = ["content","content","content","content","content"]
 const tableContent1 = ["content","content","content","content","content"]
 const tableContent2 = ["content","content","content","content","content"]

const  horizontalScroll = ["Overview", "About", "Contact", "Join Affiliate", "Become a Tipster"]
    const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 70,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 70,
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

   const ButtonOne =({onClick})=>{
    return(
      <div className='postKin' onClick={onClick}><FontAwesomeIcon icon={faArrowLeft}   style={{fontSize:"15px"}} /></div>
    )
  }
  
  const ButtonTwo =({onClick})=>{
    return(
      <div className='postKin' onClick={onClick}><FontAwesomeIcon icon={faArrowRight}   style={{fontSize:"15px"}} /></div>
    )
  };
  
      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group"> 
        <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <ButtonTwo onClick={() => next()} />
       
      </div>
    );
  };

    const forf =()=>{
      setSports('Forex')
  }

  const bina =()=>{
  setSports('binary')
}
const Sports1 =()=>{
    setSports("sports")
}

    useEffect(()=>{
      AOS.init({once: true});
    },[])
  return (
    <div>
         <div className="carousel_Div honeDivGuide lovePa">
              <img src="/img/tom.png" className="ImgDiv" />
            </div>
      <div style={{position:"relative"}} className="paddingTip" >
              
      
                 <div className="Rtme topPL">
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
        arrows={false} 
         renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={false}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
         className="king"
       
      >
                     { (loading) ?  sportItem.map((app,id)=>(
                   
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
                         )): posts1.map((app,id)=>(
                       
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
                     <div style={{padding:"0 0px 0 0px"}}>
                             
                                       <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive1}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        arrows={false} 
         renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
          partialVisible={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={false}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="king"
      >
      
      
        {(loading) ? forexItem.map((app,id)=>(
                             
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


                  <div className="home5">

        
   

            <div className="containerT">

               <div className="youpin carU " >

              
                 <div className="topPrediction">Top Predicted Markets</div>
                  <div  className="GetP">Discover the top predictions predicted by our expert tipsters.</div>
                 <div style={{padding: "1px  10px"}}>
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
       
       
     {topPredictedMarket.map((app,id)=>(
        <tr  className="ADDTimeDbg " key={id}>
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>13:00pm</td>
          <td>Champions league</td>
        <td>Chealse vs AsRoma</td>
        <td>x2</td>
        <td>1.72</td>
        <td>10,000</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile" style={{color:"#fff",display:"flex",flexDirection:"column",alignItems:"center"}}><img src="/img/create.png" alt="" className="tipImage"/><p>View</p></a></td>
      
      </tr>
      ))}

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
         
     {topPredictedMarket1.map((app,id)=>(
      <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>NGN/USD</td>
          <td>Long(buy)</td>
        <td>1.678787</td>
        <td>1.899765</td>
        <td>1.456378</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile" style={{color:"#fff",display:"flex",flexDirection:"column",alignItems:"center"}}><img src="/img/create.png" alt="" className="tipImage"/><p>View</p></a></td>
       
        
      </tr>
     ))}
    
    </tbody>
  </table>
</div>
</div>
</> : ""}



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
       
       
     {topPredictedMarket2.map((app,id)=>(
      <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>BTC/USD</td>
          <td>Long(buy)</td>
        <td>30000.05</td>
        <td>76000.00</td>
        <td>29500.00</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile" style={{color:"#fff",display:"flex",flexDirection:"column",alignItems:"center"}}><img src="/img/create.png" alt="" className="tipImage"/><p>View</p></a></td>
       
        
      </tr>
     ))}
      
    </tbody>
  </table>
</div>
</div>
</>  : "" }
    

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
       
       
      {topPredictedMarket3.map((app,id)=>(
         <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className=" ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
          <td>Long(buy)</td>
          <td><img src="/img/good.png" alt="" /></td>
           <td><a href="/view-profile" style={{color:"#fff",display:"flex",flexDirection:"column",alignItems:"center"}}><img src="/img/create.png" alt="" className="tipImage"/><p>View</p></a></td>
        
      </tr>
      ))}
   
    </tbody>
  </table>
</div>
</div>
</> : "" }
 

                </div>
                </div>

              
               </div>






          <div className="youpin carU" >

              
                 <div className="topPrediction">Recent Tips From Tipsters</div>
                 <div style={{padding: "1px  10px"}}>
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
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/><p>View</p></a></td>
        
      </tr>
      ))} 
      
        
      
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 
</> : ""} 
 
          
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
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/><p>View</p></a></td>
       
        
      </tr>
      ))} 
     
    </tbody>
  </table>
</div>
</div>
</> : ""}

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
       
          <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/><p>View</p></a></td>
       
        
      </tr>
       ))} 
     
    </tbody>
  </table>
</div>
</div>
</> :""}
    
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
           <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/><p>View</p></a></td>
        
       
        
      </tr>
          ))}
     
    </tbody>
  </table>
</div>
</div>
</> : ""}
 
                </div>
                </div>

              
               </div>



              


           
              
               </div>

           </div>

           <div className="horizontal-scroll-container">
      {horizontalScroll.map((item, index) => (
        <div key={index} className="scroll-item" style={{borderBottom:item === item ?"1px solid #fff":""}}>
          {item}
        </div>
      ))}
    </div>
           <div className="Rtme" >
             <div style={{padding:"0px 10px"}}>
           <div  className="Great" >
             <div className="with">Partners With Great Benefits  </div>
            <div className="ye"></div>
           <div className="Make15">
               <div>
                   <div>
                       <p className="millionM"  style={{color: "#7b7ee2" }} >Make ₦3500 on referral commission monthly </p>
                      
                        <div className="visitMe"><a href="/affiliate"><button className="visitMe3">join Affiliate</button></a></div>
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
            <div >
            <div className="Rtme">
             <div style={{padding:"0px 10px"}}>
           <div  className="Great great1" >
             <div className="with">Become A Tipster  </div>
            <div className="ye"></div>
           <div className="Make15">
               <div>
                   <div>
                       <p className="millionM ggmj"  style={{color: "#7b7ee2" }} >Join Tipsters across the world to give tip </p>
                       {/* <p className="OnRef">On Referral Commission</p> */}

                   </div>
               </div>
               <div>
                 <div className="yuri2">
                 <div className="getstart"><a href="/become-tipster" className="hmr">Get started</a></div>
                 </div>
                  
                  

                   

                  
               </div>
           </div>
         
          
           </div>
           </div>
           </div>
           </div>
            <div className="WhatD">
                    <div className="Rtme">
                   <div className='TheyAre' >They are talking about us</div>
                     <div className='DonTake' >Don't Take Our Word For It.</div>
                     <div className='seeWhat' >See what our customers have to say.Find out what our clients are saying below</div>
                    {/* <div className="divUnder1"></div> */}
                    <div className=" marginMu fadama " >
                    <Carousel
             swipeable={true}
             draggable={false}
             showDots={false}
             responsive={responsive2}
              arrows={false} 
              renderButtonGroupOutside={true}
               customButtonGroup={<ButtonGroup />}
             ssr={true} // means to render carousel on server-side.
             infinite={true}
             // autoPlay={this.props.deviceType !== "mobile" ? true : false}
             autoPlay={true}
             autoPlaySpeed={2000}
             keyBoardControl={true}
             customTransition="all .5"
             transitionDuration={500}
             containerClass="carousel-container"
             removeArrowOnDeviceType={false}
             // deviceType={this.props.deviceType}
             dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px"
             
           >
            <div style={{padding:"4px 10px"}}>      
           <div className="earnSayPp">
             <p className="partnerShip">"Through Wegotips partnership program I made 250k in just two weeks by referring 20friends to the platform."</p>
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
             <p className="partnerShip">"I made Over 1 Million in Less Than 30 Days by just following Wegotips.com prediction on Sports and Forex Trading.I would recommend wegotips to any body any time."</p>
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
             <p className="partnerShip">"Your company is truly upstanding and is behind its product 100%. Keep up the excellent work. Wegotips is the most valuable prediction portal i have ever come across. I love your system."</p>
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
                     <div id="Faqc" >
                       <div className="firstTom"  style={{color:"#fff"}}>FAQ</div>
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

    </div>
  )
}

export default UserDashboardHome;
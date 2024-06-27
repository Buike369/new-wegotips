import React,{useState} from "react"
import "./style/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faTwitter,faLinkedin,faTelegram,faYoutube,}from '@fortawesome/free-brands-svg-icons'

const Footer =()=>{

     const [footerShow,setFooterShow]=useState(false)
     const [footerShow1,setFooterShow1]=useState(false)

      const dropdown =()=>{
           
        setFooterShow1(!footerShow1)
         setFooterShow(false)
      }
      const dropdown1 =()=>{  
        setFooterShow1(false)
        setFooterShow(!footerShow)
      }
    return(
        <div className="Footer_Bg_Color" style={{backgroundImage:"url(/img/comesK.svg)"}}>
            <div className="FootBike"></div>
              
          <div className="Footer_Div">
              <div className="Footer_Div_item">
                  <div>
                      <ul className="MobileFooter">
                          <li className="Footer_header_title   titleFott" onClick={dropdown1}><span>NAVIGATION </span><span>{footerShow?<FontAwesomeIcon icon={faAngleUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faAngleDown} className="PlusIcon plusIcon2" />}</span></li>
                          {footerShow ? (<div>
                          <li className="Footer_list_space"><a href="#">CoinMarketCap</a></li>
                          <li className="Footer_list_space"><a href="https://www.livescore.com/en/" target="_blank" rel="noopener noreferrer">LiveScores</a></li>
                          <li className="Footer_list_space"><a href="https://www.forexfactory.com/calendar" target="_blank" rel="noopener noreferrer">Forex Calender</a></li>
                          <li className="Footer_list_space"><a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">Coingecko</a></li>
                          </div>) : ("")}
                      </ul>

                      <ul className="DesktopFooter">
                          <li className="Footer_header_title" >NAVIGATION</li>
                          
                          <li className="Footer_list_space"><a href="#">CoinMarketCap</a></li>
                          <li className="Footer_list_space"><a href="https://www.livescore.com/en/" target="_blank" rel="noopener noreferrer">LiveScores</a></li>
                          <li className="Footer_list_space"><a href="https://www.forexfactory.com/calendar" target="_blank" rel="noopener noreferrer">Forex Calender</a></li>
                          <li className="Footer_list_space"><a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">Coingecko</a></li>
                          
                      </ul>
                  </div>
                  <div>
                  <ul className="MobileFooter">
                          <li className="Footer_header_title titleFott" onClick={dropdown}><span>COMPANY </span><span>{footerShow1?<FontAwesomeIcon icon={faAngleUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faAngleDown} className="PlusIcon plusIcon2" />}</span></li>
                          {footerShow1 ? (<div>
                          <li className="Footer_list_space"><a href="/termscondition">Terms & Conditions</a></li>
                          <li className="Footer_list_space"><a href="/disclaimer">Disclaimer</a></li>
                          <li className="Footer_list_space"><a href="/about">About Us</a></li>
                          <li className="Footer_list_space"><a href="/contact">Contact Us</a></li>
                          </div>) : ("")}
                      </ul>

                      <ul className="DesktopFooter">
                          <li className="Footer_header_title">About Us</li>
                          <li className="Footer_list_space"><a href="/termscondition">Terms & Conditions</a></li>
                          <li className="Footer_list_space"><a href="/disclaimer">Disclaimer</a></li>
                          <li className="Footer_list_space"><a href="/about">About Us</a></li>
                          <li className="Footer_list_space"><a href="/contact">Contact Us</a></li>
                      </ul>
                  </div>
                  <div>
                     <ul>
                          <li className="Footer_header_title">RESOURCES</li>
                          {/* <li className="Footer_list_space"><a href="#">Terms & Conditions</a></li> */}
                          {/* <li className="Footer_list_space"><p className="FooterColor"> WhatsApp:<a href="https://wa.me/08059279660">+234 805 927 9660</a></p></li>
                          <li className="Footer_list_space"><p className="FooterColor">Email Us: <a href="mailto:service@earnars.com">service@earnars.com</a></p></li>
                          <li className="Footer_list_space"><p className="FooterColor">Advert: <a href="mailto:advert@earnars.com">advert@earnars.com</a></p></li> */}
                                  <li className="Footer_list_space"><a href="#">Blog</a></li>
                          <li className="Footer_list_space"><a href="/exchange">Exchange</a></li>
                                                    {/* <li className="Footer_list_space"><a href="/">Support</a></li> */}
                                  <li className="Footer_list_space"><a href="#">Help Center</a></li>
                          <li className="Footer_list_space"><a href="#">Supports</a></li>
                      </ul>
                  </div>
                  <div>
                  <ul>
                          <li className="Footer_header_title">LEGAL</li>
                                  <li className="Footer_list_space"><a href="#">Terms</a></li>
                          <li className="Footer_list_space"><a href="#">Privacy</a></li>
                          <li><div className ="visitUs">Visit Our Social Handles</div>
                          <i className="fa fa-facebook footerGo"></i>
                          </li>
                          <li><ul className="footer_brand_icon">
                              <li><a href="https://www.facebook.com/Earnarshub?mibextid=ZbWKwL" className="twww"><FontAwesomeIcon icon={faFacebook} className="icon_brand_size"/></a></li>
                              <li><a href="https://twitter.com/EranarsC?t=PS1iorx90FTh_zG6FMqHVg&s=09" className="twww"><FontAwesomeIcon icon={faTwitter} className="icon_brand_size" /></a></li>
                            
                              {/* <li><a href="https://t.me/earnarshub" className="twww"><FontAwesomeIcon icon={faTelegram} className="icon_brand_size" /></a></li> */}
                              <li><a href="https://www.youtube.com/@Earnars" className="twww"><FontAwesomeIcon icon={faYoutube} className="icon_brand_size" /></a></li>
                              </ul></li>
                      </ul>
                  </div>
              </div>
              
              <div className="Footer_Copyright">© 2023 <a href="/" className="footerHomeLink">Earnars</a>. All rights reserved.</div>
          </div>
        </div>
    )
}

export default Footer;
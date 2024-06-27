import React,{useContext,useState,useEffect} from 'react'
import "./style/premium.css"
import Footer from "./footer"
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import { AuthContext } from './context/authContext';







const Premium = () => {
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const [itemsPerPage,setItemsPerPage] = useState(6)
const [itemOffset, setItemOffset] = useState(0);

const [changeState,setChangeState] = useState("Tips")

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


   const  onChangeHandler =(e)=>{

    const val = e.target.value;
   

    switch(val) {
      case "Forex":
        // code block
        setChangeState("Tips")

        break;
      case "Sports":
        // code block
        setChangeState("Tips1")
        break;
      case "Cryptocurrency":
          // code block
          setChangeState("Tips2")
        break;
      case "Binary":
            // code block
            setChangeState("Tips3")
        break;
    
      default:
        // code block
         setChangeState("Tips")
    }
    

  }
  
  const card = ["sport","binary","forex","crytptocurrency","sport","binary","forex","crytptocurrency"]

  const {currentUser,login,logout} = useContext(AuthContext);
  return (
    <div>
       <div className="PrmiumBanner" >
          <img src="/img/EarnarsBanner16.png" className="AffliateBannertt" alt=""/>
          </div>
        <div className="ApplyFor">
          <p className="unlock">Premium Membership Unlocks A Tipster Predictions</p>
            <p className="pageRisk">When you Subscribe to any of our verified tipster membership you get access to the tipster 
                                            daily, weekly & monthly prediction   </p>
        </div>
       

<div className='PGuideE'>
<div className="tenT">
  <div className='mikeW' style={{backgroundColor:changeState === "Tips" ? "#3d3491" :""}} onClick={()=>setChangeState("Tips")}>Forex</div>
  <div  className='mikeW' style={{backgroundColor:changeState === "Tips1" ? "#3d3491" :""}} onClick={()=>setChangeState("Tips1")}>Sports</div>
  <div  className='mikeW' style={{backgroundColor:changeState === "Tips2" ? "#3d3491" :""}} onClick={()=>setChangeState("Tips2")}>Cryptocurrency</div>
  <div  className='mikeW' style={{backgroundColor:changeState === "Tips3" ? "#3d3491" :""}} onClick={()=>setChangeState("Tips3")}>Binary</div>
</div>
<div className='carTy'>
  <div className="Car">
      <select  className="Car2"  onChange={onChangeHandler} >
           <option value="Forex" id={1}>Forex</option>
          
           <option value="Sports" id={2}>Sports</option>
           <option value="Cryptocurrency" id={3}>Cryptocurrency</option>
           <option value="Binary" id={4}>Binary</option>
         
           
  </select>
      </div>
      </div>
      {changeState === "Tips" ? (
        <div style={{padding:"10px 15px 25px 15px"}} >
    <div className="TY9">
         {card.map((app,id)=>(
                          <div className="cardProfileDiv TY30"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1 TY38"/></div>
          <div className="donKing">Don Knight</div>
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
          <div className='weNeed'>
       <div className='weNeed1'>
         <p className='weNeed2'>Choose Membership period</p>
         <div>
           <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>1 Day <span className='moneyColor'></span></div>
                            </div>
                             <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>7 Days <span className='moneyColor'>$2</span></div>
                            </div>
                             <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>30 Days <span className='moneyColor'>$4</span></div>
                            </div>
         
         </div>
         <div className="houseRuMM WonB  mainMa">Subscribe Now</div>
       </div>
       </div>
       <div className="tips34h"> 
         <a href=""><div className="tips33h">+33 Tips</div></a>
         <a href="/view-profile"><div className="tips33h">view profile</div></a> 
       </div>
        </div>
                       ))}
                       </div>
                      

     </div>
     )
      : ""}

      {changeState === "Tips1" ? (
        <div style={{padding:"10px 15px 25px 15px"}} >
    <div className="TY9">
         {card.map((app,id)=>(
                          <div className="cardProfileDiv TY30"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1  TY38"/></div>
          <div className="donKing">Don Knight</div>
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
          <div className='weNeed'>
       <div className='weNeed1'>
         <p className='weNeed2'>Choose Membership period</p>
         <div>
           <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>1 Day <span className='moneyColor'>$1</span></div>
                            </div>
                             <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>7 Days <span className='moneyColor'>$2</span></div>
                            </div>
                             <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>30 Days <span className='moneyColor'>$4</span></div>
                            </div>
         
         </div>
         <div className="houseRuMM WonB  mainMa">Subscribe Now</div>
       </div>
       </div>
        <div className="tips34h"> 
         <a href=""><div className="tips33h">+33 Tips</div></a>
         <a href="/view-profile"><div className="tips33h">view profile</div></a> 
       </div>

         
        </div>
                       ))}
                       </div>
                      

     </div>
     )
      : ""}

      {changeState === "Tips2" ? (
        <div style={{padding:"10px 15px 25px 15px"}} >
    <div className="TY9">
         {card.map((app,id)=>(
                          <div className="cardProfileDiv TY30"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1 TY38"/></div>
          <div className="donKing">Don Knight</div>
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
          <div className='weNeed'>
       <div className='weNeed1'>
         <p className='weNeed2'>Choose Membership period</p>
         <div>
           <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>1 Day <span className='moneyColor'>$100</span></div>
                            </div>
                             <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>7 Days <span className='moneyColor'>$150</span></div>
                            </div>
                             <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>30 Days <span className='moneyColor'>$200</span></div>
                            </div>
         
         </div>
         <div className="houseRuMM WonB  mainMa">Subscribe Now</div>
       </div>
       </div>
        <div className="tips34h"> 
         <a href=""><div className="tips33h">+33 Tips</div></a>
         <a href="/view-profile"><div className="tips33h">view profile</div></a> 
       </div>
        </div>
                       ))}
                       </div>
                      

     </div>
     )
      : ""}

      {changeState === "Tips3" ? (
        <div style={{padding:"10px 15px 25px 15px"}} >
    <div className="TY9">
         {card.map((app,id)=>(
                          <div className="cardProfileDiv TY30"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1 TY38"/></div>
          <div className="donKing">Don Knight</div>
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
          <div className='weNeed'>
       <div className='weNeed1'>
         <p className='weNeed2'>Choose Membership period</p>
         <div>
           <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>1 Day <span className='moneyColor'>$1</span></div>
                            </div>
                             <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>7 Days <span className='moneyColor'>$2</span></div>
                            </div>
                             <div className='paw1 weNeed6'>
                                <div className='cic'></div>
                                <div className='bkInT'>30 Days <span className='moneyColor'>$4</span></div>
                            </div>
         
         </div>
         <div className="houseRuMM WonB mainMa">Subscribe Now</div>
       </div>
       </div>
        <div className="tips34h"> 
         <a href=""><div className="tips33h">+33 Tips</div></a>
         <a href="/view-profile"><div className="tips33h">view profile</div></a> 
       </div>
        </div>
                       ))}
                       </div>
                      

     </div>
     )
      : ""}
  
  <div className='mainDe'>

    <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`previous`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
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
        <Footer/>
    </div>
  )
}

export default Premium
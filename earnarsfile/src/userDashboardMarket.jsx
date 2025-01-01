import React,{useState,useEffect,useContext} from 'react'
import "./style/premium.css"
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import { AuthContext } from './context/authContext';

const UserDashboardMarket = () => {
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
          <p className="unlock">Buy Tips  From Tipsters</p>
            <p className="pageRisk">Subscribe to our tipster service and enjoy daily, weekly, and monthly predictions.</p>
        </div>
        <div>
        <div className="tenT">
  <div className='mikeW' style={{backgroundColor:changeState === "Tips" ? "#3d3491" :""}} onClick={()=>setChangeState("Tips")}>Forex</div>
  <div  className='mikeW' style={{backgroundColor:changeState === "Tips1" ? "#3d3491" :""}} onClick={()=>setChangeState("Tips1")}>Sports</div>
  <div  className='mikeW' style={{backgroundColor:changeState === "Tips2" ? "#3d3491" :""}} onClick={()=>setChangeState("Tips2")}>Cryptocurrency</div>
  <div  className='mikeW' style={{backgroundColor:changeState === "Tips3" ? "#3d3491" :""}} onClick={()=>setChangeState("Tips3")}>Binary</div>
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

    </div>
  )
}

export default UserDashboardMarket
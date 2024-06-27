import React,{useState} from 'react'
import "./style/newProfile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Footer from "./footer"
import ReactPaginate from 'react-paginate';

const ProfilePage = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const [itemsPerPage,setItemsPerPage] = useState(6)
const [itemOffset, setItemOffset] = useState(0);
 const [sectionChange,setSectionChange] = useState("tips")
    const  tipDetails = [{name:"Tips",value:"2,633"},{name:"Wins",value:"1,740"},{name:"Profit",value:"+575.06"},{name:"Draw",value:"99"},{name:"Win Rate",value:"66%"},{name:"ROI",value:"21.8%"}]

 const card = ["sport","binary","forex","crytptocurrency","sport","binary","forex","crytptocurrency"]
 const [tipsLevel,setTipsLever] = useState("ActiveTips")

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

  return (
    <div className='lookUp'>
<div className='ParentDivNewHod'>
    <div className='tipsterProfile'>
        Tipster Profile
    </div>


 
  <div style={{padding:"6px 8px"}}>
        <div className='profileCoverDiv'>
            <div><img src="/img/tom.png" alt="" className='Kn1'/></div>
            {/* <div className="point">
                <img src="/img/picMan.png" alt="" className="ImgPicMan"/>
                <img src="/img/picManImg.png" alt="" className="ImgPicMan1"/>
            </div> */}
            <div className='holder7'> 
                <div className='holder2'>
                    <div className="point">
                        <img src="/img/picMan.png" alt="" className="ImgPicMan"/>
                         <img src="/img/picManImg.png" alt="" className="ImgPicMan1"/>
                    </div>
                    <div className='kingManU'>
                        <div className='AmosD'>
                            <p className='namePad'>Amos Rios</p>
                            <img src="/img/iconGuide.png" alt="" className='holder3' />
                              <img src="/img/usaFlag.png" alt="" className='holder3'/>
                        </div>
                         <div className='AmosD'>
                            <img src="/img/calendar.png" alt="" className='holder4'/>
                            <p className='holder5'>Joined Jan, 2017</p>
                         </div>
                     
                    </div>
                </div>
                <div className='AmosD holder8' >
                    <div><button className='holder6 holder5 Um'>Subscribe From <span>$10</span> </button></div> 
                       <div><button  className='holder6 holder5' style={{color:"gold"}}>Follow</button></div>
                </div>
            </div>

            <div className='holder7 holder8 msg1 mikeTin' >
                {tipDetails.map((app,id)=>(
                <div key={id} className="msg">
                    <p className='msg3'>{app.value}</p>
                    <p className='msg4'>{app.name}</p>
                </div>
                ))}
            </div>
            <div className='AmosD'>
                <div className='AmosD IP1' style={{borderBottom:sectionChange === "tips" ? "1px solid #00ff66" :""}}>
                  <img src="/img/tips.png" alt="" onClick={()=>setSectionChange("tips")}/>
                  <p className='IP holder3' onClick={()=>setSectionChange("tips")}>Tips</p>
                </div>
                  <div className='AmosD IP1'  style={{borderBottom:sectionChange === "tips3" ?  "1px solid #00ff66" :""}}>
                  <img src="/img/statistics.png" alt="" onClick={()=>setSectionChange("tips3")}/>
                  <p className='IP holder3' onClick={()=>setSectionChange("tips3")}>Statistics</p>
                  
                </div>
                  <div className='AmosD IP1' style={{borderBottom:sectionChange === "tips1" ?  "1px solid  #00ff66" :""}}>
                  <img src="/img/followerSecond.png" alt="" onClick={()=>setSectionChange("tips1")}/>
                  <p className='IP holder3' onClick={()=>setSectionChange("tips1")}>Followers (2400)</p>
               
                </div>
                  <div className='AmosD IP1' style={{borderBottom:sectionChange === "tips2" ?  "1px solid  #00ff66" :""}}>
                  <img src="/img/followingSecond.png" alt="" onClick={()=>setSectionChange("tips2")}/>
                  <p className='IP holder3' onClick={()=>setSectionChange("tips2")}>Following (240) </p>
           
                </div>
            </div>
        </div>
        </div>
 {/* section for tips */}

    <div className="Above">
        {/* //change here */}

        <div className='myDivb1'>

        {/* // sect 1 change */}
        {(sectionChange === "tips") ? 
        <div>
            <div className='AmosD'>
                <div><button className=' holder6 AC' onClick={()=>setTipsLever("ActiveTips")}>Active Tips</button></div>
                   <div><button className=' holder6 AC' onClick={()=>setTipsLever("FinishTips")}>Finished Tips</button></div>
            </div>
            {tipsLevel === "ActiveTips"? 
            <div>
            <p className='Oct'>28th Oct 2021</p>
            <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                  </div>
            </div>
             <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                  </div>
            </div>
             <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                  </div>
            </div>
             <p className='Oct'>28th Oct 2021</p>
            <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                  </div>
            </div>
             <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                  </div>
            </div>
             <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                    <div><button className='TipsActiveBu'>Active Tip</button></div>
                  </div>
            </div>
            </div>
            :""}

             {tipsLevel === "FinishTips"? 
            <div>
            <p className='Oct'>28th Oct 2022</p>
            <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                   <p style={{marginTop:"6px"}}><span className='oddNum80'>Odd:1.5</span><span></span></p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu Bubuking'>Middlesbrough</button></div>
                    <div><button className='TipsActiveBu'><div style={{display:"flex",alignItems:'center'}}><img src ="/img/good.png" alt=""  style={{width:"20px"}}/><span style={{marginLeft:"4px"}}>FT 1:1</span></div></button></div>
                  </div>
            </div>
             <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                 <p style={{marginTop:"6px"}}><span className='oddNum80'>Odd:1.5</span><span></span></p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu Bubuking'>Middlesbrough</button></div>
                    <div><button className='TipsActiveBu'><div style={{display:"flex",alignItems:'center'}}><img src ="/img/fail.png" alt=""  style={{width:"20px"}}/><span style={{marginLeft:"4px"}}>FT 1:1</span></div></button></div>
                  </div>
            </div>
             <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                 <p style={{marginTop:"6px"}}><span className='oddNum80'>Odd:1.5</span><span></span></p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu Bubuking'>Middlesbrough</button></div>
                    <div><button className='TipsActiveBu'><div style={{display:"flex",alignItems:'center'}}><img src ="/img/good.png" alt=""  style={{width:"20px"}}/><span style={{marginLeft:"4px"}}>FT 1:1</span></div></button></div>
                  </div>
            </div>
             <p className='Oct'>28th Oct 2021</p>
            <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                 <p style={{marginTop:"6px"}}><span className='oddNum80'>Odd:1.5</span><span></span></p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu Bubuking'>Middlesbrough</button></div>
                    <div><button className='TipsActiveBu'><div style={{display:"flex",alignItems:'center'}}><img src ="/img/fail.png" alt=""  style={{width:"20px"}}/><span style={{marginLeft:"4px"}}>FT 1:1</span></div></button></div>
                  </div>
            </div>
             <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                 <p style={{marginTop:"6px"}}><span className='oddNum80'>Odd:1.5</span><span></span></p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu Bubuking'>Middlesbrough</button></div>
                    <div><button className='TipsActiveBu'><div style={{display:"flex",alignItems:'center'}}><img src ="/img/good.png" alt=""  style={{width:"20px"}}/><span style={{marginLeft:"4px"}}>FT 1:1</span></div></button></div>
                  </div>
            </div>
             <div className='divDEDE'>
                <div>
                    <div className='AmosD' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'><span className="ENGLand">ENGLAND </span>Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IPYT'>Middlesbrough FC vs Peterborough United</p>
                 <p style={{marginTop:"6px"}}><span className='oddNum80'>Odd:1.5</span><span></span></p>
                </div>
                  <div className='ImageTip'>
                    <div><button className='TipsActiveBu Bubuking'>Middlesbrough</button></div>
                    <div><button className='TipsActiveBu'><div style={{display:"flex",alignItems:'center'}}><img src ="/img/fail.png" alt=""  style={{width:"20px"}}/><span style={{marginLeft:"4px"}}>FT 1:1</span></div></button></div>
                  </div>
            </div>
            </div>
            :""}
        </div> 
        :""}

        {/* // sect 2 change */}
         {(sectionChange === "tips1") ? 
        <div>
                  <div className="TY9">
         {card.map((app,id)=>(
                          <div className="cardProfileDiv TY33"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
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
         

          <div className="houseRuMM MMM">View Profile</div>
        </div>
                       ))}
                       </div>
                        <div className='IfUNA'>

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
          :""}
     
               {(sectionChange === "tips2") ? 
        <div>

           <div className="TY9">
         {card.map((app,id)=>(
                          <div className="cardProfileDiv TY33"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1"/></div>
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
         

          <div className="houseRuMM MMM" >View Profile</div>
        </div>
                       ))}
                       </div>
                        <div className='IfUNA'>

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
            :""}

            </div>

    
          <div className='myDivb2'>
          <div className='fireMan'>
            <div>
                <form>
                    <div>
                        <p className='subscribeToThis'>Subscribe To This Tipster</p>
                        <div className='paw'>
                            <div className='paw1'>
                                <div className='cic'></div>
                                <div className='bkInT'>1 Day <span className='moneyColor'>$10</span></div>
                            </div>
                             <div className='paw1'>
                                <div className='cic'></div>
                                <div className='bkInT'>7 Days <span  className='moneyColor'>$50</span></div>
                            </div>
                             <div className='paw1'>
                                <div className='cic'></div>
                                <div className='bkInT'>7 Days <span  className='moneyColor'>$50</span></div>
                            </div>
                            
                        </div>
                        <div className='pY'></div>
                        <p className='name1'>Payment method</p>


                        <div className='ppinkl'>
                            <div className='cicK'>
                                <div className='cic'></div>
                                <p className='cicK1'>Card</p>
                            </div>
                             <div>
                                <img src="/img/dow1.png" alt="" className='tuya' />
                                 <img src="/img/dow2.png" alt="" className='tuya'/>
                                  <img src="/img/dow3.png" alt="" className='tuya' />
                             </div>
                        </div>
                          <div className='ppinkl'>
                            <div className='cicK'>
                                <div className='cic'></div>
                                <p className='cicK1'>Paypal</p>
                            </div>
                             <div>
                              
                                  <img src="/img/dow4.png" alt="" />
                             </div>
                        </div>
                          <div className='ppinkl'>
                            <div className='cicK'>
                                <div className='cic'></div>
                                <p className='cicK1'>Bitcoin</p>
                            </div>
                             <div>
                               
                                  <img src="/img/dow5.png" alt="" />
                             </div>
                        </div>
                      
                     

                      
                        <div className='buttonBu'>
                            Buy Now
                        </div>
                    </div>
                </form>
            </div>
          
            </div>
            <div className='circleTT1'>
                <div className="circleTT"><img src="/img/dow7.png" alt="" /></div>
                  <div className='SubMan'>
                    <p className='SubMan1'>2400</p>
                     <p className='subSubC'>Subscribers</p>
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

export default ProfilePage
import React,{useState,useContext,useEffect} from 'react'
import "./style/exchange.css"
import AOS from 'aos';
import Footer from "./footer";
import "./style/premium.css"
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faPlus,faMinus,faXmark, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from "react-router-dom";

// import { faPaperPlane,faXmark} from '@fortawesome/free-solid-svg-icons'
import {AuthContext}from "./context/authContext"

const Exchange = () => {
    const [process,setProcess] = useState("buy")
    // const [coin,setCoin] = useState("NGN")
    const TableData =["amaka","john","Stanley"]
     const navigate = useNavigate()
    const {purchaseType,setPurchaseType}  = useContext(AuthContext)
    const {coin,setCoin}  = useContext(AuthContext)
     const [pipDeposit, setPipDeposit] = useState("deposit")
     const [modal, setModal] = useState(false)
      const [pipTransfer, setPipTransfer] = useState(false)
  const [wallets,setWallets] = useState("main")




   const [show,setShow]= useState(false)
    const [show1,setShow1]= useState(false)
  const [show2,setShow2]= useState(false)
  const [show3,setShow3]= useState(false)
  const [show4,setShow4]= useState(false)





  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const [itemsPerPage,setItemsPerPage] = useState(6)
const [itemOffset, setItemOffset] = useState(0);



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
     const wentTo = ()=>{
       setPurchaseType("Sell")
       navigate('/buy-and-sell-enar')
         setCoin(coin)
     }
     const wentTo1 = ()=>{
       setPurchaseType("Buy")

       setCoin(coin)
       navigate('/buy-and-sell-enar')
     }

     const open =()=>{
       setModal(!modal)
       document.body.classList.add("houne")
       setPipDeposit("deposit")
     }
      const open1 =()=>{
       setModal(!modal)
       document.body.classList.add("houne");
       setPipDeposit("transfer")
     }
       const open2 =()=>{
       setModal(!modal)
       document.body.classList.add("houne");
        setPipDeposit("withdrawal")
     }
      const reOpen =()=>{
       setModal(!modal)
       document.body.classList.remove("houne")
     }

      useEffect(()=>{
    AOS.init({once: true});
  },[])

  return (
    <div>

<div className="Am1nAd">
<div className="Am1n">
    <div className="Am1n1">
         <div  className="nimni13 kate1">
            <p className="nimni2" >30k+ </p>
            <p className="nimni3">Total Locked</p>
        </div>
         <div  className="nimni12 kate1">
            <p className="nimni2" >2.2M+</p>
            <p className="nimni3">Market size</p>
        </div>
    </div>
    <div className="Am1n2"></div>
    <div className="Am1n1">
        <div  className="nimni kate1">
            <p className="nimni2" >2K</p>
            <p className="nimni3">Transaction</p>
        </div>
          <div  className="nimni1 kate1">
            <p className="nimni2" >22K+</p>
            <p className="nimni3">Awards</p>
        </div>
    </div>
</div>
<div className="Ena21">
    <div className='Ena1'>
        <div className='cncnc'>
            <div className="cncnc1">
                Exchange Wallet
            </div>
             <div className="cncnc2">
                <p className='cncnc3'>Total Asset value</p>
                <div className='cncnc34'> 107.45 <span className="remot"> enar</span> <span className="cccmn"> ~ $490.46</span></div>
             </div>
        </div>
        <div className="pode23">
            <div  className="pode pode2" onClick={open}>Deposit</div>
             <div className="pode pode3" onClick={open2}>Withdraw</div>
              <div className="pode pode4" onClick={open1}>Transfer</div>
        </div>

    </div>
    <div  className='Ena1'>
        <p className="bbAs">Asset Balance</p>
        <div className="bbAs1"></div>
        <div className="bbAs2">
            <div className="earnarsCoin earnarsCoin1 ">ENAR</div>
             <div className="kikiay">107.65 <span className="cccmn"> ~ </span> <span className="cccmn">$490.83</span></div>
        </div>
          <div className=" bbAs2">
              <div className="earnarsCoin earnarsCoin2 ">USDT</div>
             <div className="kikiay">1700.65 <span className="cccmn"> ~ </span> <span className="cccmn">$1700.65</span></div>
          </div>
    </div>
</div>

</div>
<div className="popoUy">
<div className="detailInfo">
    <div className="buySELL">Buy and Sell ENAR</div>
    <div className=" dfdff">
        <div className="dfdff1 dfdff">
            <div className={process === "buy" ? "BuyEn BuyEn22" :"BuyEn"} onClick={()=>setProcess("buy")}>Buy</div>
            <div className={process === "sell" ? "BuyEn BuyEn20" :"BuyEn"} onClick={()=>setProcess("sell")}>Sell</div>
        </div>
        <div className="dfdff2">
            <div className='dfde1'>Click to select your coin</div>
            <div className="lifMm">
            <ul  className="dfdff22">
                <li  id="bk" className={coin ==="USDT" ? "AsasL dfde" :"AsasL"} onClick={()=>setCoin("USDT")}>USDT</li>
                <li   id="bk1" className={coin ==="NGN" ? "AsasL dfde" :"AsasL"} onClick={()=>setCoin("NGN")}>NGN</li>
                <li id="bk2" className={coin ==="GHS" ? "AsasL dfde" :"AsasL"} onClick={()=>setCoin("GHS")}>GHS</li>
                <li id="bk3" className={coin ==="CFA" ? "AsasL dfde" :"AsasL"} onClick={()=>setCoin("CFA")}>CFA</li>
                <li id="bk4" className={coin ==="ZAR" ? "AsasL dfde" :"AsasL"} onClick={()=>setCoin("ZAR")}>ZAR</li>
            </ul>
            </div>
        </div>
    </div>
<div>
    {process === "buy" ?<>
      <div className="letsGo">

              
                
              <div className="UponT">
            
               

 {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}
          
           <div className="adaba">
      <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema' style={{borderCollapse: "collapse"}}>
   
    <thead>
      <tr>
        <th style={{width:"140px"}}>Advertiser</th>
       
         <th style={{width:"220px"}}>Price/Limit Available</th>
        <th style={{width:"220px"}}>Payment</th>
        <th style={{width:"120px"}}>Action</th>
       
        
        
                
      </tr>
    </thead>
    <tbody>
       
       {TableData.map((app,id)=>(
      <tr  className="ADDTimeDbg ADDTimeDbg22" key={id}>
        <th className=" ADDTimeDbg">Paul Micheal</th>
        
          <td>
            <div>
                <div className="LLLM earnarsCoin1">1,305.45 <span className="LLLM2">{coin}</span>/<span className="LLLM1">ENAR</span></div>
                  <div className="LLLM">Maximum : 7000 <span className="LLLM1"> ENAR</span></div>
            </div>
            </td>
        <td>
            <div>
                <div className="LLLM">Access Bank</div>
                <div className="LLLM">Completion time ~ <span className="LLLM3"> 4m - 10m</span></div>
            </div>
            </td>
        <td><a  onClick={wentTo1}><div className="BuyNUME">Buy ENAR</div></a></td>
      
        
      </tr>
      ))}
   
  
       
    
  
        
      
   
     
    </tbody>
  </table>
</div>
<div className='mainDe eTi'>

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

              
               </div>
               </> :""}
               {process === "sell" ?
               <div className="letsGo">

              
                
              <div className="UponT">
            
               

 {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}
          
           <div className="adaba">
      <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema' style={{borderCollapse: "collapse"}}>
   
    <thead>
      <tr>
        <th style={{width:"140px"}}>Advertiser</th>
       
         <th style={{width:"220px"}}>Price/Limit Available</th>
        <th style={{width:"220px"}}>Payment</th>
        <th style={{width:"120px"}}>Action</th>
       
        
        
                
      </tr>
    </thead>
    <tbody>
       
       {TableData.map((app,id)=>(
      <tr  className="ADDTimeDbg ADDTimeDbg22" key={id}>
        <th className=" ADDTimeDbg">Mr Paul</th>
        
          <td>
            <div>
                <div className="LLLM bubuA">1,305.45 <span className="LLLM2">{coin}</span> / <span className="LLLM1 ">ENAR</span></div>
                  <div className="LLLM">Maximum : 7000 <span className="LLLM1 "> ENAR</span></div>
            </div>
            </td>
        <td>
            <div>
                <div className="LLLM">Access Bank</div>
                <div className="LLLM">Completion time ~ <span className="LLLM3"> 4m - 10m</span></div>
            </div>
            </td>
        <td><a  onClick={wentTo}><div className="BuyNUME BuyEn20">Sell ENAR</div></a></td>
      
        
      </tr>
      ))}
   
  
       
    
  
        
      
   
     
    </tbody>
  </table>
</div>

 <div className='mainDe eTi'>

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

              
               </div>
               :""}
               
</div>
</div>
</div>
{modal ? 
<>
 {pipDeposit === "deposit"? 
   <div className="dep">
    <div className='epv'>
     <div className="epv1">
      <div className="vipn">
      <div className="epv2"></div>
      <FontAwesomeIcon icon={faXmark} className="ravs" onClick={reOpen} />
      </div>
             <div className="epv3">Select Token</div>
             <div className="">
               <select className="epv4">
                <option>ENAR</option>
                 <option>USDT</option>
                  <option>NGN</option>
                   <option>CFA</option>
                    <option>GHS</option>
                     <option>ZAR</option>
               </select>
             </div>
             <div className="epv3">
               Select Network
             </div>
             <div className="">
              <select className="epv4">
                <option>Binance Smart Chain</option>
              </select>
             </div>
             <div className="epv3">
              Amount
             </div>
             <div className="">
              <form>
                <input type=""  placeholder ="" className="epv4" />
              </form>
             </div>
             <div  className="epv5" >
              Proceed
             </div>

     </div>
     </div>

   </div>
:" " }

{
  pipDeposit === "transfer"? 
  <div className='dep' >
    <div className='epv' >
  <div className="epv1">
     <div className="vipn">
      <div className="epv2"></div>
      <FontAwesomeIcon icon={faXmark} className="ravs" onClick={reOpen} />
      </div>
    <div className="vipn">
      <div onClick={()=>setWallets("main")} className="epv5 vipn1" style={{color:wallets === "main" ?"gold":"#fff", border:wallets === "main" ? "1px solid #8f8346": null}} >MainWallet</div>
       <div onClick={()=>setWallets("user")} className="epv5 vipn1" style={{color:wallets === "user" ?"gold":"#fff",border: wallets === "user" ? "1px solid #8f8346" : null}}> user</div>
    </div>
    {wallets === "main" ?
    <div>
   <div className="epv3">Amount</div>
   <div>
    <form>
      <input type="" placeholder ="" className="epv4"/>
    </form>
   </div>
   <div className="epv5">Proceed</div>
    </div>: ""}
     {wallets === "user" ?
    <div>
      <div className="epv3">Email/Username</div>
      <div>
    <form>
      <input type="" placeholder ="" className="epv4"/>
    </form>
   </div>
     <div className="epv3">Amount</div>
   <div>
    <form>
      <input type="" placeholder =""  className="epv4"/>
    </form>
   </div>
   <div className="epv5">Proceed</div>

    </div>: ""}

  </div>
  </div>
  </div>
  : ""
}


{
 pipDeposit  === "withdrawal"? <>
  <div className="dep" >
    <div className='epv'>
     <div  className="epv1">
      <div className="vipn">
      <div className="epv2"></div>
      <FontAwesomeIcon icon={faXmark} className="ravs" onClick={reOpen} />
      </div>
             <div className="epv3">Select Token</div>
             <div>
               <select className="epv4">
                <option>ENAR</option>
                 <option>USDT</option>
                  <option>NGN</option>
                   <option>CFA</option>
                    <option>GHS</option>
                     <option>ZAR</option>
               </select>
             </div>
             <div className="epv3">
               Select Network
             </div>
             <div>
              <select className="epv4">
                <option>Binance Smart Chain</option>
              </select>
             </div>
             <div  className="epv3">
              Amount
             </div>
             <div>
              <form>
                <input type=""  placeholder =""  className="epv4"/>
              </form>
             </div>
              <div className="epv3">
              Wallet Address
             </div>
             <div>
              <form>
                <input type=""  placeholder ="" className="epv4" />
              </form>
             </div>
             <p className="warnE"><span className='ning'>Warning!</span> make sure your put 
   the write address or you 
   token will be lost forever.</p>
             <div className="epv5">
              Proceed
             </div>

     </div>
     </div>


  </div>
  </>: ""
}

</>
: ""}


          <div className='IFAE'>
                 <div style={{padding:"0 10px"}}>
          <div id="Faqc" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="firstTom" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear" style={{color:"#fff"}}>FAQ</div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop}>
                <span>What is a  Peer to peer (p2p)  exchange?</span>{" "}
                <span className="IconSpace">
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                  <div>
                    <div className="Qac"></div>
                <p className="ILOVEK">
                  {" "}
                 Cryptocurrency peer to peer (p2p) exchange is a digital marketplace that enable users to buy and sell cryptocurrencies like ENAR and Tether directly from each other. 
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop1}>
                <span>How do I buy USDT or ENAR ? </span>
                <span className="IconSpace">
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 To buy USDT or ENAR Just click the buy button and follow the procedure and make sure you have cash to transfer to the seller who you want to buy from.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop2}>
                <span>  Can I Sell my ENAR On the exchange immediately?</span>
                <span className="IconSpace">
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 Yes, You can sell your ENARS instantly through the exchange.
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
     <Footer/>
    </div>
  )
}

export default Exchange
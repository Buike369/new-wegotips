import React, {useState} from 'react'
import Footer from "./footer"
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus,faMinus, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'

const MarketPrediction = () => {


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
  return (
    <div>

         <div >
          <div className='allNewTips MAA'>
             
             <div className="containerT">

               <div className="youpin">

              
                 <div className="topPrediction">Top Predictions</div>
              <div className="UponT">
                <div className="sportPetNe">Sports Predictions</div>
               
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        <th style={{width:"70px"}}>Time</th>
         <th style={{width:"150px"}}>League</th>
        <th style={{width:"180px"}}>Match</th>
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
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
        <td>+30.45</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
    
        
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>13:00am</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
        <td>+45.50</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
      </tr>
        <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>13:00am</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
        <td>+45.50</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
      </tr>
        <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>13:00am</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
        <td>+45.50</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
      </tr>
        <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>13:00am</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
        <td>+45.50</td>
         <td><img src="/img/good.png" alt="" /></td>
         <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 
       <div className="sportPetNe gapUp">Forex Predictions</div>
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
 {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}
<div className="sportPetNe gapUp">Cryptocurrency Predictions</div>
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
        <td>GBP/USD</td>
          <td>Long(buy)</td>
        <td>1.678787</td>
        <td>1.899765</td>
        <td>1.456378</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
      <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
          <td>Short(buy)</td>
        <td>1.678787</td>
        <td>1.678787</td>
        <td>1.678787</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
        <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
          <td>Short(buy)</td>
        <td>1.678787</td>
        <td>1.678787</td>
        <td>1.678787</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
        <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
          <td>Short(buy)</td>
        <td>1.678787</td>
        <td>1.678787</td>
        <td>1.678787</td>
         <td><img src="/img/good.png" alt="" /></td>
        <td><a href="/view-profile"><img src="/img/create.png" alt="" className="tipImage"/></a></td>
       
        
      </tr>
        <tr  className="ADDTimeDbg ADDTimeDbg22">
        <th className="ADDTimeDbg">09/11/2023</th>
        <td>GBP/USD</td>
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
    {/* <div className="seeMoreDivLink"><button className="SeeMoreInfo">See More</button></div> */}
<div className="sportPetNe gapUp">Binary Predictions</div>
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
  
        
      
   
     
    </tbody>
  </table>
</div>
</div>
 <div className="seeMoreDivLink"><a href="/market-predictions"><button className="SeeMoreInfo">See More</button></a></div>

                </div>

              
               </div>

             




                                <div className="fear">
              
               </div> 


           
               {/* </div> */}
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

export default MarketPrediction;
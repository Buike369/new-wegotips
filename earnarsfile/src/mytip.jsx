import React,{useState,useEffect,useRef} from "react"
import "./style/mytip.css"
import { Link} from "react-router-dom";
import Footer from "./footer"
import axios from "axios";



const Mytip =()=>{

    const [register,setRegister] = useState(false)
    const [sportInfo,setSportInfo]=useState([])
     const [sportInfoM,setSportInfoM]=useState([])
    const [forexInfo,setForexInfo]=useState([])
    const [cryptoInfo,setCryptoInfo]=useState([])
        const [cryptoInfoD,setCryptoInfoD]=useState([])
         const [cryptoInfoM,setCryptoInfoM]=useState([])
    const [coupon,setCoupon]=useState([])
    const [odd,setOdd] = useState([])
    const [text,setText]= useState("3#$%!#DFGG")

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5); 
     const [currentPage1, setCurrentPage1] = useState(1);
    const [itemsPerPage1, setItemsPerPage1] = useState(5); 
    const [currentPage2, setCurrentPage2] = useState(1);
    const [itemsPerPage2, setItemsPerPage2] = useState(5); 
     const [currentPage3, setCurrentPage3] = useState(1);
    const [itemsPerPage3, setItemsPerPage3] = useState(5); 
     const [currentPage4, setCurrentPage4] = useState(1);
    const [itemsPerPage4, setItemsPerPage4] = useState(5); 



    const myDiv = useRef(null);


//     const tr = window.location.pathname;
//   if(tr === "/tip"){
//     console.log("Mr kingsley is Good and nan")
//   }

       const [tip,setTip] = useState("Tip")
   
       const forexChange =()=>{
           setTip("forex")
       }
       const cryptoChange = ()=>{
           setTip('crypto')
       }



       useEffect(()=>{
        const userInfom = async ()=>{
          try{
            const res = await axios.get('https://tea.earnars.com/api/post/sports/tip/daily')
     
            setSportInfo(res.data)
            // console.log(res.data)
            // setOdd(res.data)
           
          }catch(err){
            console.log(err)
          }
        }
        userInfom()
    
      },[sportInfo])

       useEffect(()=>{
        const userInfomM = async ()=>{
          try{
            const res = await axios.get('https://tea.earnars.com/api/post/sports/tip/mid')
     
            setSportInfoM(res.data)
            // console.log(res.data)
            // setOdd(res.data)
           
          }catch(err){
            console.log(err)
          }
        }
        userInfomM()
    
      },[sportInfoM])


       useEffect(()=>{
        const userInfom1 = async ()=>{
          try{
            const res = await axios.get('https://tea.earnars.com/api/post/forex/tip')
     
            setForexInfo(res.data)
            // console.log(res.data)
            // setOdd(res.data)
           
          }catch(err){
            console.log(err)
          }
        }
        userInfom1()
    
      },[forexInfo])


        useEffect(()=>{
        const userInfom2 = async ()=>{
          try{
            const res = await axios.get('https://tea.earnars.com/api/post/crypto/tip')
     
            setCryptoInfo(res.data)
            console.log(res.data)
            // setOdd(res.data)
           
          }catch(err){
            console.log(err)
          }
        }
        userInfom2()
    
      },[cryptoInfo])

       useEffect(()=>{
        const userInfom6 = async ()=>{
          try{
            const res = await axios.get('https://tea.earnars.com/api/post/crypto/tip/d')
     
            setCryptoInfoD(res.data)
            console.log(res.data)
            // setOdd(res.data)
           
          }catch(err){
            console.log(err)
          }
        }
        userInfom6()
    
      },[cryptoInfoD])

      useEffect(()=>{
        const userInfom9 = async ()=>{
          try{
            const res = await axios.get('https://tea.earnars.com/api/post/crypto/tip/m')
     
            setCryptoInfoM(res.data)
            console.log(res.data)
            // setOdd(res.data)
           
          }catch(err){
            console.log(err)
          }
        }
        userInfom9()
    
      },[cryptoInfoM])

   


      // useEffect(()=>{
      //   const userCoupon = async ()=>{
      //     try{
      //       const res = await axios.get('https://tea.earnars.com/api/post/coupon')
      //       setCoupon(res.data)
      //     }catch(err){
      //       console.log(err)
      //     }
      //   }
      //   userCoupon()
    
      // },[coupon])

      const copytext =()=>{
              const sade = document.getElementById("foren").innerText;
              
    }

    const indexOfLastPost = currentPage * itemsPerPage; 
const indexOfFirstPost = indexOfLastPost - itemsPerPage;
const  currentPosts = sportInfo.slice(indexOfFirstPost,indexOfLastPost);
const pageNumber = [];

 for(let i = 1; i <= Math.ceil(sportInfo.length / itemsPerPage ); i++ ){
  pageNumber.push(i)
 }

 const indexOfLastPost1 = currentPage1 * itemsPerPage1; 
const indexOfFirstPost1 = indexOfLastPost1 - itemsPerPage1;
const  currentPosts1 = sportInfoM.slice(indexOfFirstPost1,indexOfLastPost1);
const pageNumber1 = [];

 for(let i = 1; i <= Math.ceil(sportInfoM.length / itemsPerPage1 ); i++ ){
  pageNumber1.push(i)
 }

 const indexOfLastPost2 = currentPage2 * itemsPerPage2; 
const indexOfFirstPost2 = indexOfLastPost2 - itemsPerPage2;
const  currentPosts2 = cryptoInfoD.slice(indexOfFirstPost2,indexOfLastPost2);
const pageNumber2 = [];

 for(let i = 1; i <= Math.ceil(cryptoInfoD.length / itemsPerPage2 ); i++ ){
  pageNumber2.push(i)
 }


 const indexOfLastPost4 = currentPage4 * itemsPerPage4; 
const indexOfFirstPost4 = indexOfLastPost4 - itemsPerPage4;
const  currentPosts4 = cryptoInfo.slice(indexOfFirstPost4,indexOfLastPost4);
const pageNumber4 = [];

 for(let i = 1; i <= Math.ceil(cryptoInfo.length / itemsPerPage4 ); i++ ){
  pageNumber4.push(i)
 }

 const indexOfLastPost3 = currentPage3 * itemsPerPage3; 
const indexOfFirstPost3 = indexOfLastPost3 - itemsPerPage3;
const  currentPosts3 = cryptoInfoM.slice(indexOfFirstPost3,indexOfLastPost3);
const pageNumber3 = [];

 for(let i = 1; i <= Math.ceil(cryptoInfoM.length / itemsPerPage3 ); i++ ){
  pageNumber3.push(i)
 }

 const changePage=(pageNumber)=>setCurrentPage(pageNumber);
 const changePage1=(pageNumber1)=>setCurrentPage1(pageNumber1);
  const changePage2=(pageNumber2)=>setCurrentPage2(pageNumber2);
  const changePage3=(pageNumber3)=>setCurrentPage2(pageNumber3);
  const changePage4=(pageNumber4)=>setCurrentPage2(pageNumber4);
 



    return(
   <div className="Mysee" style={{ backgroundImage: "linear-gradient(to right, rgb(106 116 167 / 34%), rgb(119 135 182 / 95%))"}} >

        
<div className="Sports23 MyTipUp">
             <div className={tip === "Tip"?"sportsAt people2 gamings":"sportsAt people2"} onClick ={()=>setTip("Tip")}>Sports</div>
             <div className={tip === "forex"?"sportsAt people2 gamings":"sportsAt people2"} onClick ={forexChange}>Forex</div>
             <div className={tip === "crypto"?"sportsAt people2 gamings":"sportsAt people2"} onClick={cryptoChange}><span className="Name">Cryptocurrency</span><span className="Name1">Crypto</span></div>
             <div className={tip === "binary"?"sportsAt people2 gamings":"sportsAt people2"} onClick={()=>setTip("binary")}>Binary</div>
         </div>
         
         {tip === "Tip"? 
         <div>
       <div className="MyTip ">
       
         
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Daily</p>
          </div>
        
     </div>

     <div className="TimeDiv12 ">
                      <div>
                        <ul className="GameN">
                          <li className="NoGame">Game No</li>
                          <li className="NoGame">Sp/2022/10/7</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           TIME
                       </li>
                       <li className="EngLan">
                        LEAGUE
                       </li>
                       <li>
                         TEAM
                       </li>
                       <li>
                           TIP
                       </li>
                       <li>
                           ODD
                       </li>
                   
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">

     
            {currentPosts.map((user,id)=>(
                   <div key={id}>
            <ul className={(user.id %2 == 0)?"TimeDiv1 ADDTimeDbg":"TimeDiv1 ADDTimeDbg1"}>
                <li>{user.time}</li>
                <li className="EngLan">{user.league}</li>
                <li>{`${user.team_a} vs ${user.team_b}`}</li>
                <li>{user.tip}</li>
                <li>{user.odd}</li>
             
                
            </ul>
        </div>
        ))}
          <div className="tomh67"> 
       <ul className="tomh">
        { pageNumber.map((number,index)=>(
          <li key={index} onClick={()=>changePage(number)} className="">
           <a href="#" className="tomh1">
             {number}
           </a>
          </li>
        ))}
        </ul>
        

        </div>
     
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd">TOTAL ODD</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">9 : 9</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>
               <div className="TimeDiv12 ">
                   <div className="TimeDiv4 spaceMargiN pipi ">
                
                  
                       <p>
                       Coupon Codes
                       </p>
                   
                   
                     
                     
                   </div>
               </div> 
               <div className="Leaque tipHeightDiv">
                   
                

    {/* {coupon.map((app,id)=>(
                   <div key ={id}>
            <ul className={(app.id %2 == 0)? "TimeDiv1 ADDTimeDbg":"TimeDiv1 ADDTimeDbg1"}>
                <li>{app.betName}</li>
                <li className="EngLan"><div id="foren">{app.couponCode}</div></li>
                <li><div className="CopyCode90" onClick={copytext}>Copy Code</div> </li>
               
             
                
            </ul>
        </div>
        ))} */}
       
       
       
       
        
        
  
               </div>

            
               <div className="finding">GOOD LUCK</div>


               </div>
               </div>

            

     
               </div>

               <div className="MyTip">
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Midweek</p>
          </div>
       
     </div>

     <div className="TimeDiv12 ">
     <div>
                        <ul className="GameN">
                          <li className="NoGame">Game No</li>
                          <li className="NoGame">Sp/2022/10/7</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           TIME
                       </li>
                       <li className="EngLan">
                        LEAGUE
                       </li>
                       <li>
                         TEAM
                       </li>
                       <li>
                           TIP
                       </li>
                       <li>
                           ODD
                       </li>
                  
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                
               {currentPosts1.map((users,id)=>(
                   <div key={id}>
            <ul className={(users.id %2 == 0)?"TimeDiv1 ADDTimeDbg":"TimeDiv1 ADDTimeDbg1"}>
                <li>{users.time}</li>
                <li className="EngLan">{users.league}</li>
                <li>{`${users.teamA} vs ${users.teamB}`}</li>
                <li>{users.tip}</li>
                <li>{users.odd}</li>
              
                
            </ul>
        </div>
        ))}

   <div className="tomh67"> 
       <ul className="tomh">
        { pageNumber.map((numb,index)=>(
          <li key={index} onClick={()=>changePage1(numb)} className="">
           <a href="#" className="tomh1">
             {numb}
           </a>
          </li>
        ))}
        </ul>
        

        </div>
     
       
      
        
      
        
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd">TOTAL ODD</li>
                
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">9 : 9</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>

            
               <div className="TimeDiv12 ">
                   <div className="TimeDiv4 spaceMargiN pipi">
                
                  
                       <p >
                           Coupon Codes
                       </p>
                   
                   
                     
                     
                   </div>
               </div> 
               <div className="Leaque tipHeightDiv">
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>Bet9ja</li>
                <li className="EngLan">7XU-TUG-UITO-RYI</li>
                <li>Copy Code </li>
               
             
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>Bet9ja</li>
                <li className="EngLan">7XU-TUG-UITO-RYI</li>
                <li>Copy Code</li>
            
             
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>Bet9ja</li>
                <li className="EngLan">7XU-TUG-UITO-RYI</li>
                <li>Copy Code</li>
                
           
                
            </ul>
        </div>
       
       
        
        
  
               </div>
               <div className="finding">GOOD LUCK</div>

               <div className="pays">
                 <div className="Clas">Warning</div>
                 <p className="domt">Don't be a Gambler,Be an Investor. </p>
                 <p className="riskin">Do not risk more than what you can bear.<span className="eachG">We recommend you risk bewteen <span className="ifiy">1-5% </span>of your Capital on each game.</span></p>
               </div>

               </div>
               </div>

     
               </div>
               </div>
               :""}
               {tip === "forex" ? 
            <div  >



            <div className="MyTip">
            <div className="Free">
               <div>
                   <p className="Free_ExportTT Dop">Hourly</p>
               </div>
             
          </div>
     
          <div className="TimeDiv12 ">
                           <div>
                             <ul className="GameN">
                               <li className="NoGame">Trade No</li>
                               <li className="NoGame">Fx/2022/10/7/1</li>
                             </ul>
                           </div>
                        <ul className="TimeDiv spaceMargiN">
                            <li>
                                PAIR
                            </li>
                            <li className="EngLan">
                             CONDITION
                            </li>
                            <li>
                              ENTRY
                            </li>
                            <li>
                                TAKE PROFIT
                            </li>
                            <li>
                                STOP LOSS
                            </li>
                        
                          
                          
                        </ul>
                    </div> 
     
                    <div className="bigManDiv">
                        <div className="FOR">
                    <div className="Leaque tipHeightDiv">
                        
                     
     
                        <div>
                 <ul className="TimeDiv1 ADDTimeDbg1">
                     <li>GBPUSD</li>
                     <li className="EngLan">Long(buy)</li>
                     <li>1.687894 </li>
                     <li>1.896540</li>
                     <li>1.567123</li>
                  
                     
                 </ul>
             </div>

             {forexInfo.map((app2,id)=>(
                    <div key={id}>
                 <ul className="TimeDiv1 ADDTimeDbg1">
                     <li>{app2.pair}</li>
                     <li className="EngLan">{app2.condition}</li>
                     <li>{app2.entry}</li>
                     <li>{app2.take_profit}</li>
                     <li>{app2.stop_loss}</li>
                  
                     
                 </ul>
             </div>
             ))}
           
           
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ggLive">
                     <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ggLive">
                     <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">40</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                     <li className="Total_Odd">RESULT</li>
                    
                     <li></li>
                     <li></li>
                     <li>
                     <div >
                       <form>
                         <div className="sped ">
                           <div>Lost</div>
                           <div className="greenDiv gt"></div>
                         </div>
                         </form>
                         </div>
                     </li>
                     <li className="tippo">
                       <div>
                       <form>
                         <div className="sped">
                           <div>Won</div>
                           <div className="greenDiv"></div>
                         </div>
                         </form>
                         </div>
                         </li>
                     
                 </ul>
             </div>
             
             
       
                    </div>
                 
                   
     
                 
                    <div className="finding">GOOD LUCK</div>
     
     
                    </div>
                    </div>
     
                 
     
          
                    </div>
     
                    <div className="MyTip MyTipUp MyPity">
            <div className="Free">
               <div>
                   <p className="Free_ExportTT Dop">Daily</p>
               </div>
             
          </div>
     
          <div className="TimeDiv12 ">
                           <div>
                             <ul className="GameN">
                               <li className="NoGame">Trade No</li>
                               <li className="NoGame">Fx/2022/10/7/2</li>
                             </ul>
                           </div>
                        <ul className="TimeDiv spaceMargiN">
                            <li>
                                PAIR
                            </li>
                            <li className="EngLan">
                             CONDITION
                            </li>
                            <li>
                              ENTRY
                            </li>
                            <li>
                                TAKE PROFIT
                            </li>
                            <li>
                                STOP LOSS
                            </li>
                        
                          
                          
                        </ul>
                    </div> 
     
                    <div className="bigManDiv">
                        <div className="FOR">
                    <div className="Leaque tipHeightDiv">
                        
                     
     
                        <div>
                 <ul className="TimeDiv1 ADDTimeDbg1">
                     <li>GBPUSD</li>
                     <li className="EngLan">Long(buy)</li>
                     <li>1.687894 </li>
                     <li>1.896540</li>
                     <li>1.567123</li>
                  
                     
                 </ul>
             </div>
              {forexInfo.map((app2,id)=>(
                    <div key={id}>
                 <ul className="TimeDiv1 ADDTimeDbg1">
                     <li>{app2.pair}</li>
                     <li className="EngLan">{app2.condition}</li>
                     <li>{app2.entry}</li>
                     <li>{app2.take_profit}</li>
                     <li>{app2.stop_loss}</li>
                 </ul>
             </div>
             ))}
           
           
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ggLive">
                     <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ggLive">
                     <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">40</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                     <li className="Total_Odd">RESULT</li>
                    
                     <li></li>
                     <li></li>
                     <li>
                     <div >
                       <form>
                         <div className="sped ">
                           <div>Lost</div>
                           <div className="greenDiv gt"></div>
                         </div>
                         </form>
                         </div>
                     </li>
                     <li className="tippo">
                       <div>
                       <form>
                         <div className="sped">
                           <div>Won</div>
                           <div className="greenDiv"></div>
                         </div>
                         </form>
                         </div>
                         </li>
                     
                 </ul>
             </div>
                    </div> 
                    <div className="finding">GOOD LUCK</div>
                    </div>
                    </div>
                    </div>
     
      
     
                    <div className="MyTip">
            <div className="Free">
               <div>
                   <p className="Free_ExportTT Dop">Weekly</p>
               </div>
            
          </div>
     
          <div className="TimeDiv12 ">
          <div>
                             <ul className="GameN">
                               <li className="NoGame">Trade No</li>
                               <li className="NoGame">FX/2022/10/7/1</li>
                             </ul>
                           </div>
                        <ul className="TimeDiv spaceMargiN">
                            <li>
                                PAIR
                            </li>
                            <li className="EngLan">
                             CONDITION
                            </li>
                            <li>
                              ENTRY
                            </li>
                            <li>
                                TRADE PROFIT
                            </li>
                            <li>
                                STOP LOSS
                            </li>
                       
                          
                          
                        </ul>
                    </div> 
     
                    <div className="bigManDiv">
                        <div className="FOR">
                    <div className="Leaque tipHeightDiv">
                        
                     
     
                        <div>
                 <ul className="TimeDiv1 ADDTimeDbg1">
                     <li>GBPUSD</li>
                     <li className="EngLan">Long (Buy)</li>
                     <li>1.66678</li>
                     <li>1.86753</li>
                     <li>1.54321</li>
                   
                     
                 </ul>
             </div>
              {forexInfo.map((app2,id)=>(
                    <div key={id}>
                 <ul className="TimeDiv1 ADDTimeDbg1">
                     <li>{app2.pair}</li>
                     <li className="EngLan">{app2.condition}</li>
                     <li>{app2.entry}</li>
                     <li>{app2.take_profit}</li>
                     <li>{app2.stop_loss}</li>
                  
                     
                 </ul>
             </div>
             ))}
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ">
                     <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
                     
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">800</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                     <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
                     
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                     <li className="Total_Odd">RESULT</li>
                    
                     <li></li>
                     <li></li>
                     <li>
                     <div >
                       <form>
                         <div className="sped ">
                           <div>Lost</div>
                           <div className="greenDiv gt"></div>
                         </div>
                         </form>
                         </div>
                     </li>
                     <li className="tippo">
                       <div>
                       <form>
                         <div className="sped">
                           <div>Won</div>
                           <div className="greenDiv"></div>
                         </div>
                         </form>
                         </div>
                         </li>
                     
                 </ul>
             </div>
             
             
       
                    </div>
     
                 
                 
                  
                    <div className="finding">GOOD LUCK</div>
     
                    <div className="pays">
                      <div className="Clas">Warning</div>
                      <p className="domt">Don't be a Gambler,Be an Investor. </p>
                      <p className="riskin">Do not risk more than what you can bear.<span className="eachG">We recommend you risk bewteen <span className="ifiy">1-2% </span>of your Capital on each Trade.</span></p>
                    </div>
     
                    </div>
                    </div>
     
          
                    </div>
     
             
            </div>
               :""}

               {
                   tip === "crypto"? 
                   <div  >



       <div className="MyTip ">
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Hourly</p>
          </div>
        
     </div>

     <div className="TimeDiv12 ">
                      <div>
                        <ul className="GameN">
                          <li className="NoGame">Trade No</li>
                          <li className="NoGame">CT/2022/10/7/1</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           PAIR
                       </li>
                       <li className="EngLan">
                        CONDITION
                       </li>
                       <li>
                         ENTRY
                       </li>
                       <li>
                           TAKE PROFIT
                       </li>
                       <li>
                           STOP LOSS
                       </li>
                   
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>GBPUSD</li>
                <li className="EngLan">Long(buy)</li>
                <li>1.687894 </li>
                <li>1.896540</li>
                <li>1.567123</li>
             
                
            </ul>
        </div>

        {currentPosts4.map((app4,id)=>(
             <div key={id}>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>{app4.c_pair}</li>
                <li className="EngLan">{app4.c_condition}</li>
                <li>{app4.c_entry}</li>
                <li>{app4.c_take_profit}</li>
                <li>{app4.c_stop_loss}</li>
                
            </ul>
        </div>
        ))}

        <div className="tomh67"> 
       <ul className="tomh">
        { pageNumber4.map((numb,index)=>(
          <li key={index} onClick={()=>changePage4(numb)} className="">
           <a href="#" className="tomh1">
             {numb}
           </a>
          </li>
        ))}
        </ul>
        

        </div>
      
       {currentPosts4.map((app4,id)=>(
        <div key={id} style={{background:(app4.id %2 == 0)? "#5e5eb794" :""}}>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">{app4.c_take_profit_no}</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">{app4.c_stop_loss_no}</li>
                
            </ul>
        </div>
        </div>
            ))}


        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>
            
              

            
               <div className="finding">GOOD LUCK</div>


               </div>
               </div>

            

     
               </div>

               <div className="MyTip MyTipUp MyPity">
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Daily</p>
          </div>
        
     </div>

     <div className="TimeDiv12 ">
                      <div>
                        <ul className="GameN">
                          <li className="NoGame">Trade No</li>
                          <li className="NoGame">CT/2022/10/7/2</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           PAIR
                       </li>
                       <li className="EngLan">
                        CONDITION
                       </li>
                       <li>
                         ENTRY
                       </li>
                       <li>
                           TAKE PROFIT
                       </li>
                       <li>
                           STOP LOSS
                       </li>
                   
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
      
                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>GBPUSD</li>
                <li className="EngLan">Long(buy)</li>
                <li>1.687894 </li>
                <li>1.896540</li>
                <li>1.567123</li>
            </ul>
        </div>

         {currentPosts2.map((app4,id)=>(
             <div key={id}>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>{app4.c_pair}</li>
                <li className="EngLan">{app4.c_condition}</li>
                <li>{app4.c_entry}</li>
                <li>{app4.c_take_profit}</li>
                <li>{app4.c_stop_loss}</li>
            </ul>
        </div>
        ))}


          <div className="tomh67"> 
       <ul className="tomh">
        { pageNumber2.map((numb,index)=>(
          <li key={index} onClick={()=>changePage2(numb)} className="">
           <a href="#" className="tomh1">
             {numb}
           </a>
          </li>
        ))}
        </ul>
        

        </div>
      
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">60</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggl
                live">Stop Loss: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">40</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
            </ul>
        </div>
               </div>
               <div className="finding">GOOD LUCK</div>


               </div>
               </div>
               </div>
               <div className="MyTip">
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Weekly</p>
          </div>
       
     </div>

     <div className="TimeDiv12 ">
     <div>
                        <ul className="GameN">
                          <li className="NoGame">Trade No</li>
                          <li className="NoGame">CT/2022/10/7/1</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           PAIR
                       </li>
                       <li className="EngLan">
                        CONDITION
                       </li>
                       <li>
                         ENTRY
                       </li>
                       <li>
                           TRADE PROFIT
                       </li>
                       <li>
                           STOP LOSS
                       </li>
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>GBPUSD</li>
                <li className="EngLan">Long (Buy)</li>
                <li>1.66678</li>
                <li>1.86753</li>
                <li>1.54321</li>
            </ul>
        </div>

         {currentPosts3.map((app4,id)=>(
             <div key={id}>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>{app4.c_pair}</li>
                <li className="EngLan">{app4.c_condition}</li>
                <li>{app4.c_entry}</li>
                <li>{app4.c_take_profit}</li>
                <li>{app4.c_stop_loss}</li>
                
            </ul>
        </div>
        ))}

          <div className="tomh67"> 
       <ul className="tomh">
        { pageNumber3.map((numb,index)=>(
          <li key={index} onClick={()=>changePage3(numb)} className="">
           <a href="#" className="tomh1">
             {numb}
           </a>
          </li>
        ))}
        </ul>
        

        </div>
      
        
       
       
       
       
        
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
                
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">800</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
                
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">60</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>

            
            
             
               <div className="finding">GOOD LUCK</div>

               <div className="pays">
                 <div className="Clas">Warning</div>
                 <p className="domt">Don't be a Gambler,Be an Investor. </p>
                 <p className="riskin">Do not risk more than what you can bear.<span className="eachG">We recommend you risk bewteen <span className="ifiy">1-2% </span>of your Capital on each Trade.</span></p>
               </div>

               </div>
               </div>

     
               </div>

            
  </div>
                   :""
               }

{
                   tip === "binary"? 
                   <div  >



       <div className="MyTip ">
      

     <div className="TimeDiv12 ">
                      <div>
                        <ul className="GameN kim">
                          <li className="NoGame">Trade No :</li>
                          <li className="NoGame">BN/2022/10/7/1</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="GameN">
                          <li className="NoGame">Market Type :</li>
                          <li className="NoGame">Forex</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           PAIR
                       </li>
                       <li className="EngLan">
                        CONDITION
                       </li>
                      
                       
                       
                   
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>GBPUSD</li>
                <li className="EngLan">Buy(Cell)</li>
                
             
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>Expiration Time</li>
                <li className="EngLan">30 Minutes</li>
                
             
                
            </ul>
        </div>
      
      
  
       
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>
            
              

            
               <div className="finding">GOOD LUCK</div>


               </div>
               </div>

            

     
               </div>

         
            

          

            
  </div>
                   :""
               }

               <Footer/>
  </div>
    )
}
export default Mytip;

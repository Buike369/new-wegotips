import React,{useState,useEffect} from 'react'
import "../style/dashboardStyles/dashboardSport.css"
import axios from "axios"


const DashboardSports = () => {
    const [trade,setTrade]=useState("sports")
    const [err,setError]= useState(null)
    const [userInfo1,setUserInfo1]=useState([])
    const [userFind,setUserFind]=useState([])
    const [type,setType]= useState('hourly')
    const [type1,setType1]= useState('daily')
    const [type2,setType2]= useState('hourly')
    const [type3,setType3]= useState('hourly')
    const [gameType,setGameType]=useState("")

    const [inputs,setInputs]=useState({
        id:"",
     
        time:"",
        league:"",
        teamA:"",
        teamB:"",
        tip:"",
        odd:""
    })



    const [inputs1,setInputs1]=useState({
        pair:"",
        condition:"",
        entry:"",
        takeProfit:"",
        stopLoss:"",
        TP_no_Of_Pips:"",
        SL_no_Of_Pips:""
        
    })
    const [inputs2,setInputs2]=useState({
      
        pair:"",
        condition:"",
        entry:"",
        takeProfit:"",
        stopLoss:"",
        Tp_No_Of_Pips:"",
        Sl_No_Of_Pips:""
        
    })
    const [inputs3,setInputs3]=useState({
      
        pair:"",
        condition:"",
        expireTime:"",
       
        
    })

    const [coupons,setCoupons]=useState({
        betName:"",
        couponCode:""
    })

    const[list,setList]=useState([])
    const[list1,setList1]=useState([])
    const[list2,setList2]=useState([])
    const[list3,setList3]=useState([])
    const [success,setSuccess]=useState("")
    const [success1,setSuccess1]=useState("")
     const [success2,setSuccess2]=useState("")
      const [success3,setSuccess3]=useState("")
    const [notsuccess,setNotSuccess]=useState("")

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }
    const handleChange1 = e =>{
        setInputs1(prev=>({...prev,[e.target.name]:e.target.value}))

    }
    const handleChange2 = e =>{
        setInputs2(prev=>({...prev,[e.target.name]:e.target.value}))

    }
    const handleChange3 = e =>{
        setInputs3(prev=>({...prev,[e.target.name]:e.target.value}))

    }
    const handleChange40 = e =>{
        setCoupons(prev=>({...prev,[e.target.name]:e.target.value}))

    }

    const addList=(todo)=>{
 
        const newTodo = {
            id:Math.random()+ 1,
            todo:todo

        }
        setList([...list,newTodo])
       

        setInputs2({
            pair:"",
            condition:"",
            entry:"",
            takeProfit:"",
            stopLoss:"",
            Tp_No_Of_Pips:"",
            Sl_No_Of_Pips:""
        });
    }


    
    const addList1=(todo)=>{
 
        const newTodo = {
            id:Math.random()+ 1,
            todo:todo

        }
        setList1([...list1,newTodo])
        console.log(inputs1)
       

        setInputs1({
            pair:"",
            condition:"",
            entry:"",
            takeProfit:"",
            stopLoss:"",
            TP_no_Of_Pips:"",
            SL_no_Of_Pips:""
        });

   
       
    }

  
    const addList2=(todo)=>{
 
        const newTodo = {
            id:Math.random() + 1,
            todo:todo

        }
        setList2([...list2,newTodo])

        console.log(inputs)
       

        setInputs({
            id:"",
            time:"",
            league:"",
            teamA:"",
            teamB:"",
            tip:"",
            odd:""
        });

   
       
    }
    const addList3=(todo)=>{
 
        const newTodo = {
            id:Math.random() + 1,
            todo:todo

        }
        setList3([...list3,newTodo])
       

        setInputs3({
            pair:"",
            condition:"",
            expireTime:"",
        });
       
    }


const onChangeHanler =(e)=>{
    const vale = e.target.value;

    switch(vale){
        case "hourly":
            setType("hourly");
            // console.log("hourly")
        break;
        case  "daily":
            setType("daily");
        break;
        case "weekly":
            setType("weekly");
        break;
        default:
            setType("hourly");
    }

}
const onChangeHanler1 =(e)=>{
    const vale = e.target.value;

    switch(vale){
        case "hourly":
            setType2("hourly");
            // console.log("hourly")
        break;
        case  "daily":
            setType2("daily");
        break;
        case "weekly":
            setType2("weekly");
        break;
        default:
            setType2("hourly");
    }

}

const onChangeHanler2 =(e)=>{
    const vale = e.target.value;

    switch(vale){
        case "hourly":
            setType3("hourly");
            // console.log("hourly")
        break;
        case  "daily":
            setType3("daily");
        break;
        case "weekly":
            setType3("weekly");
        break;
        default:
            setType3("hourly");
    }

}


const onChangeSport =(e)=>{
    let valle = e.target.value;

    // console.log(valle)
    switch(valle){
        case  "daily":
            setType1("daily");
            // console.log("bike")
            break;
        case "midweek":
            setType1("midweek");
            break;
        default:
            setType1("daily");
    }

}


const files =[list2,{gameType:type1}]

    const handleSumit = async (e) =>{
        e.preventDefault()
 
       try{
            await axios.post("https://tea.earnars.com/api/post/sports", files)
            setSuccess('Succesful upload')
            setTimeout(() => {
                setSuccess('')
              }, 5000);
              
       }catch(err){
        setNotSuccess("files was not uploaded")
        setTimeout(() => {
            setNotSuccess('')
          }, 5000);
       
       }    
        }


        const handleSumit9 = async e =>{
            e.preventDefault()
           try{
             await axios.post("https://tea.earnars.com/api/post/forex",list1)
             console.log(list1) 
           }catch(err){
            console.log(err)
           }    
            }


            const file2 =[list,{tradeType:type2}]
            // console.log(file2)
            const handleSumit8 = async (e) =>{
                e.preventDefault()
         
               try{
                 await axios.post("https://tea.earnars.com/api/post/crypto",file2)
                //  console.log(list2)
                setSuccess2('Succesful upload')
            setTimeout(() => {
                setSuccess2('')
              }, 5000);
                 
                 
               }catch(err){
              setError(err.response.data)
        setNotSuccess("files was not uploaded")
        setTimeout(() => {
            setNotSuccess('')
          }, 5000);
               
               }    
                }

const fill =[list3,{tradeType:type3}]

                const handleSumit7 = async e =>{
                    e.preventDefault()
             
                   try{
                     await axios.post("https://tea.earnars.com/api/post/binary",fill)
                    //  console.log(list2)
                      setSuccess3('Succesful upload')
            setTimeout(() => {
                setSuccess3('')
              }, 5000);
                     
                     
                   }catch(err){
                    // setError(err.response.data)
                    setNotSuccess("files was not uploaded")
        setTimeout(() => {
            setNotSuccess('')
          }, 5000);
                   
                   }    
                    }



        const handleSumit5 = async e =>{
            e.preventDefault()
     
           try{
             await axios.post("https://tea.earnars.com/api/post/coupon",coupons)
             console.log(coupons)
             
           }catch(err){
            setError(err.response.data)
           
           }    
            }


        
const files1 =[list1,{tradeType:type}]


    const handleSumit1 = async (e) =>{
        e.preventDefault()
       try{
         await axios.post("https://tea.earnars.com/api/post/forex",files1)
         setSuccess('Succesful upload')
            setTimeout(() => {
                setSuccess('')
              }, 5000);
         
        
       }catch(err){
       
        setError(err.response.data)
        setNotSuccess("files was not uploaded")
        setTimeout(() => {
            setNotSuccess('')
          }, 5000);
        
       }    
        }

        useEffect(()=>{
            const userInfoma = async ()=>{
                try{
                  const res = await axios.get('https://tea.earnars.com/api/post/register')
            
                  setUserInfo1(res.data)
                }catch(err){
                  console.log(err)
                }
              }
              userInfoma()

        },[userInfo1])



        const deleteTodo = (id)=>{
            const newList = list.filter((todo)=> todo.id !== id)

            setList(newList)
            

        }
        const deleteTodo1 = (id)=>{
            const newList1 = list1.filter((todo)=> todo.id !== id)

            setList1(newList1)
            

        }
        const deleteTodo2 = (id)=>{
            const newList2 = list2.filter((todo)=> todo.id !== id)

            setList2(newList2)
            

        }
        const deleteTodo3 = (id)=>{
            const newList3 = list3.filter((todo)=> todo.id !== id)

            setList3(newList3)
            

        }

        const free =()=>{
            console.log(coupons)
        }

    //   const handleChange90 =(e)=>{
    //     const val4 = e.target.value;

    //     switch(val4){

    //         case "daily":
    //            setGameType("daily")
    //            break;
    //            case "weekly":
    //              setGameType("weekly")
    //              default:
    //                  setGameType("daily")
               
    //     }

    //   }
            

        

  return (
    <div>
        <div className="coverPan">
      <div className="Sporthead">
          <div className={trade === "sports"?"Sport12 activeBg" :"Sport12" } onClick={()=>{setTrade("sports")}}>Sports</div>
          <div className={trade === "forex"?"Sport12 activeBg" :"Sport12" } onClick={()=>{
              setTrade("forex")
          }}>Forex</div>
          <div className={trade === "crypto"?"Sport12 activeBg" :"Sport12" } onClick={()=>{setTrade("crypto")}}>Crypto</div>
          <div className={trade === "binary"?"Sport12 activeBg" :"Sport12" } onClick={()=>{setTrade("binary")}}>Binary</div>
      </div>
      </div>

       {/* {success && <div className="chuksInput"><p style={{fontSize:'18px'}}>{success}</p></div> } */}
     
      {trade === "sports" ?  
      <div className="GamEType">
          <div className="GamEType1 daro">
              <div className="GamEType2">Game Type</div>
              <div className="GamEType3 juji">
                <select id="gameType" name="gameType" className="selectDiv" onChange={onChangeSport}>
                  <option value="daily" id={1}>Daily</option>
                  <option value="midweek" id={2}>MidWeek</option></select></div>
          </div>
         
          <div className="GamEType1">
              <div className="GamEType2">Time</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" onChange={handleChange} name="time" value={inputs.time}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">League</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange} name="league"  value={inputs.league}/>
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Team A</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange} name="teamA" value={inputs.teamA}/>
              </div>
            
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Team B</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange} name="teamB" value={inputs.teamB}/>
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Tip</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange} name="tip" value={inputs.tip}/>
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Odd</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange} name="odd" value={inputs.odd}/>
              </div>
          </div>


          {success && <div className="SuccessInfoM suc1">{success}</div>} 
          {notsuccess && <div className="SuccessInfoM suc1">{notsuccess}</div>} 
          {err && <div className="SuccessInfoM suc1">{err}</div>} 


          <div>
              <div className="dashboardAdd" onClick={()=>addList2(inputs)} >Add</div>
              <div></div>
          </div>
          <div className="amaF">
              {list2.map((self,idx)=>(
          <div className ={(self.id % 2 == 0)?"RomaDAs spaf" :"RomaDAs" }key={idx}>
              <div style={{width:"80%"}}>
                  <ul className="GEoniPad">
                 
                      <li>{self.todo.time}</li>
                      <li>{self.todo.league}</li>
                      <li>{`${self.todo.teamA} vs ${self.todo.teamB}`}</li>
                      <li>{self.todo.tip}</li>
                      <li>{self.todo.odd}</li>
                  </ul>
              </div>
              <div style={{width:"20%",textAlign:"center",color:"#fff",display:""}}><div className="Asaa" onClick={()=>deleteTodo2(self.id)}>Remove</div></div>
          </div>
          ))}
       
        
          <div className ="RomaDAs">
          <div style={{width:"80%"}}>
              <div className="GEoniPad">
               <div>Total Odd</div>
               <div>2.56</div>
               </div>
          </div>
          <div style={{width:"20%"}}>

          </div>
          </div>
          </div>
       
       <div className="opst" onClick={handleSumit}>Post</div>
       <div className="coderm">Enter Coupon Code</div>
          <div className="Entre">

              <div className="format"><input type="text"  className="inputAdd" placeholder="Enter ur Bet name eg Betja" name="betName" onChange={handleChange40} value={coupons.betName}/></div>
              <div className="format"><input type="text"  className="inputAdd" placeholder=" Enter coupon code" name="couponCode" onChange={handleChange40} value={coupons.couponCode}/></div>
              <div className="format kiglim" onClick={handleSumit5}>ADD</div>
          </div>
      </div>
     : ""}

{trade === "forex"? 
      <div className="GamEType">
          <div className="GamEType1 daro">
              <div className="GamEType2">Trade Type</div>
              <div className="GamEType3 juji"><select className="selectDiv" onChange={onChangeHanler}>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option></select></div>
          </div>
          
       
          <div className="GamEType1">
              <div className="GamEType2">Pair</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="pair" onChange={handleChange1} value={inputs1.pair}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Condition</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="condition"
              onChange={handleChange1} value={inputs1.condition} /></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Entry</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="entry"
              onChange={handleChange1} value={inputs1.entry}/></div>
            
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Take Profit</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="takeProfit" onChange={handleChange1} value={inputs1.takeProfit}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Stop Loss</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="stopLoss" onChange={handleChange1} value={inputs1.stopLoss} /></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Tp No of Pips  </div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" name="TP_no_Of_Pips" onChange={handleChange1} value={inputs1.TP_no_Of_Pips} />
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">SL No of Pips  </div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" name="SL_no_Of_Pips" onChange={handleChange1} value={inputs1.SL_no_Of_Pips} />
              </div>
          </div>
          {success && <div className="SuccessInfoM suc1">{success}</div>} 
          {notsuccess && <div className="SuccessInfoM suc1">{notsuccess}</div>} 
          {/* {err && <div className="SuccessInfoM suc1">{err}</div>}  */}
          <div>
              <div className="dashboardAdd" onClick={()=>addList1(inputs1)
              }>Add</div>
              <div></div>
          </div>
          <div className="amaF">
              {list1.map((app1)=>(
          <div className ="RomaDAs" key={app1.id}>
              <div style={{width:"80%"}}>
                  <ul className="GEoniPad">
                    
                      <li>{app1.todo.pair}</li>
                      <li>{app1.todo.condition}</li>
                      <li>{app1.todo.entry}</li>
                      <li>{app1.todo.takeProfit}</li>
                      <li>{app1.todo.stopLoss}</li>
                      <li>{app1.todo.TP_no_Of_Pips}</li>
                      <li>{app1.todo.SL_no_Of_Pips}</li>
                  </ul>
              </div>
              <div style={{width:"20%",textAlign:"center",color:"#fff",display:""}}><div className="Asaa" onClick={()=>deleteTodo1(app1.id)}>Remove</div></div>
          </div>
          ))}
       
        
       
          <div className ="RomaDAs">
          <div style={{width:"80%"}}>
              <div className="GEoniPad">
               <div>Total Odd</div>
               <div>2.56</div>
               </div>
          </div>
          <div style={{width:"20%"}}>

          </div>
          </div>
          </div>
       
       <div className="opst" onClick={handleSumit1}>Post</div>
       
      
      </div>
      :""}
      {trade === "crypto"? 
      <div className="GamEType">
          <div className="GamEType1 daro">
              <div className="GamEType2">Trade Type</div>
              <div className="GamEType3 juji"><select className="selectDiv" onChange={onChangeHanler1}>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option></select></div>
          </div>
          {/* <div className="GamEType1 daro">
              <div className="GamEType2">Trade No</div>
              <div className="GamEType3"></div>
          </div> */}
          <div className="GamEType1">
              <div className="GamEType2">Pair</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange2} name="pair"  value={inputs2.pair}/>
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Condition</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange2} name="condition" value={inputs2.condition}/>
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Entry</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange2} name="entry" value={inputs2.entry}/>
              </div>
            
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Take Profit</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange2} name="takeProfit" value={inputs2.takeProfit}/>
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Stop Loss</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange2} name="stopLoss" value={inputs2.stopLoss}/>
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Tp No of Pips  </div>
              <div className="GamEType3">
                 <input type="text" placeholder="Enter" className="pade" onChange={handleChange2} name="Tp_No_Of_Pips" value={inputs2.Tp_No_Of_Pips}/>
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">SL No of Pips  </div>
              <div className="GamEType3">
                 <input type="text" placeholder="Enter" className="pade" onChange={handleChange2} name="Sl_No_Of_Pips" value={inputs2.Sl_No_Of_Pips}/>
              </div>
          </div>

           {success2 && <div className="SuccessInfoM suc1">{success2}</div>} 
          {notsuccess && <div className="SuccessInfoM suc1">{notsuccess}</div>} 
          <div>
              <div className="dashboardAdd" onClick={()=>addList(inputs2)}>Add</div>
              <div></div>
          </div>

          
          <div className="amaF">
              {list.map((app)=>(
          <div className ="RomaDAs" key={app.todo.id}>
              <div style={{width:"80%"}}>
                  <ul className="GEoniPad">
                  {/* <li>{app.id}</li> */}
                      <li>{app.todo.pair}</li>
                      <li>{app.todo.condition}</li>
                      <li>{app.todo.entry}</li>
                      <li>{app.todo.takeProfit}</li>
                      <li>{app.todo.stopLoss}</li>
                      <li>{app.todo.Tp_No_Of_Pips}</li>
                      <li>{app.todo.Sl_No_Of_Pips}</li>
                  </ul>
              </div>
              <div style={{width:"20%",textAlign:"center",color:"#fff",display:""}}><div className="Asaa" onClick={()=>deleteTodo(app.id)}>Remove</div></div>
          </div>
         
               ))} 


          
      
     
         
      
          </div>
       
       <div className="opst" onClick={handleSumit8}>Post</div>
       
      
      </div>
      :""}
     
     {trade === "binary"? 
      <div className="GamEType">
          <div className="GamEType1 daro">
              <div className="GamEType2">Trade Type</div>
              <div className="GamEType3 juji"><select className="selectDiv" onChange={onChangeHanler2}>
                  <option>Hourly</option>
                  <option>Daily</option>
                  <option>Weekly</option></select></div>
          </div>
         
          <div className="GamEType1">
              <div className="GamEType2">Pair</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange3} name="pair" value={inputs3.pair}/>
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Condition</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange3} name="condition" value={inputs3.condition}/>
              </div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Expire Time</div>
              <div className="GamEType3">
              <input type="text" placeholder="Enter" className="pade" onChange={handleChange3} name="expireTime" value={inputs3.expireTime}/>
              </div>
            
          </div>
         
          {success3 && <div className="SuccessInfoM suc1">{success3}</div>} 
          {notsuccess && <div className="SuccessInfoM suc1">{notsuccess}</div>} 
        
          <div>
              <div className="dashboardAdd" onClick={()=>addList3(inputs3)}>Add</div>
              <div></div>
          </div>
          <div className="amaF">
              {list3.map((app)=>(
          <div className ="RomaDAs" key={app.id}>
              <div style={{width:"80%"}}>
                  <ul className="GEoniPad">
                      <li>{app.todo.pair}</li>
                      <li>{app.todo.condition}</li>
                      <li>{app.todo.expireTime}</li>
                  </ul>
              </div>
              <div style={{width:"20%",textAlign:"center",color:"#fff",display:""}}><div className="Asaa" onClick={()=>deleteTodo3(app.id)}>Remove</div></div>
          </div>
               ))} 
          
        <div></div>
     
         
      
          </div>
       
       <div className="opst" onClick={handleSumit7}>Post</div>
       
      
      </div>
      :""}
  

    </div>
  )
}

export default DashboardSports

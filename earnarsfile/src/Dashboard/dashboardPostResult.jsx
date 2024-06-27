import React,{useState} from 'react'
import "../style/dashboardStyles/dashboardSport.css"
import axios from "axios"

const DashboardPostResult = () => {
    const [trade,setTrade]=useState("sports")
    const [err,setError]= useState(null)
    const [earned,setEarned] = useState("")

    const [isChecked,setIsChecked]=useState(false)
    const [isChecked1,setIsChecked1]=useState(false)
     const [isChecked2,setIsChecked2]=useState(false)
    const [isChecked21,setIsChecked21]=useState(false)
     const [isChecked3,setIsChecked3]=useState(false)
    const [isChecked31,setIsChecked31]=useState(false)
     const [isChecked4,setIsChecked4]=useState(false)
    const [isChecked41,setIsChecked41]=useState(false)
    const [loss,setLoss] = useState("")
    const [success,setSuccess] = useState('')
    const [notSuccessful,setNotSuccessful] = useState('')
  

    const [inputsIn,setInputsIn]=useState({
        gameNo:"",
        dailyProfit:"",
        odd:""
    })

    const [inputsIn1,setInputsIn1]=useState({
        tradeNo:"",
        pair:"",
        condition:"",
        entryPoint:"",
        exitPoint:"",
        takeProfit:""
    })
    const [inputsIn2,setInputsIn2]=useState({
        tradeNo:"",
        pair:"",
        condition:"",
        entryPoint:"",
        exitPoint:"",
        takeProfit:""
    })
    const [inputsIn3,setInputsIn3]=useState({
        tradeNo:"",
        pair:"",
        condition:"",
        expireTime:"",
        profit:""
    })

const feed =[inputsIn,{earned:earned},{loss:loss}]
const feed1 =[inputsIn1,{earned:earned},{loss:loss}]
const feed2 =[inputsIn2,{earned:earned},{loss:loss}]
const feed3 =[inputsIn3,{earned:earned},{loss:loss}]




    const handleChange = e =>{
        setInputsIn(prev =>({...prev,[e.target.name]:e.target.value }))  
    }
    const handleChange1 = e =>{
        setInputsIn1(prev =>({...prev,[e.target.name]:e.target.value}))
    }
    const handleChange2 = e =>{
        setInputsIn2(prev =>({...prev,[e.target.name]:e.target.value}))
    }
    const handleChange3 = e =>{
        setInputsIn3(prev =>({...prev,[e.target.name]:e.target.value}))
    }

    const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setEarned("earned")
  };
     const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
    setLoss("loss")
  };


   const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    setEarned("earned")
  };
     const handleCheckboxChange21 = () => {
    setIsChecked21(!isChecked21);
    setLoss("loss")
  };


   const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
    setEarned("earned")
  };
     const handleCheckboxChange31 = () => {
    setIsChecked31(!isChecked31);
    setLoss("loss")
  };

   const handleCheckboxChange4 = () => {
    setIsChecked4(!isChecked4);
    setEarned("earned")
  };
     const handleCheckboxChange41 = () => {
    setIsChecked41(!isChecked41);
    setLoss("loss")
  };


    const handleSumit1 = async (e)=>{
        e.preventDefault()
       try{
           if((inputsIn.gameNo === "")|| (inputsIn.dailyProfit==="") || (inputsIn.odd ==="")){
            setNotSuccessful('files not upload, please check input field') 
            setTimeout(() => {
                setNotSuccessful('')
              }, 5000);
           }
           else{
         await axios.post("https://tea.earnars.com/api/post/postResult",feed)

         setSuccess('Succesful upload')
          setTimeout(() => {
            setSuccess('')
          }, 5000);
          setInputsIn({
            gameNo:"",
            dailyProfit:"",
            odd:""
            
          
        })
    }
       }catch(err){
        setError("error connection please retry")
        
       }    
        }

        const handleSumit2 = async (e) =>{
            e.preventDefault()
           try{
             await axios.post("https://tea.earnars.com/api/post/postResultForex",feed1)
              setSuccess('Succesful upload')
          setTimeout(() => {
            setSuccess('')
          }, 5000);
          setInputsIn1({
           tradeNo:"",
        pair:"",
        condition:"",
        entryPoint:"",
        exitPoint:"",
        takeProfit:""  
        })
           }catch(err){
            setError("internal server error") 
           }    
            }

            const handleSumit3 = async (e) =>{
                e.preventDefault()
               try{
                 await axios.post("https://tea.earnars.com/api/post/postResultCrypto",feed2)
                 
               }catch(err){
                setError("internal server error") 
               }    
                }

                const handleSumit4 = async (e) =>{
                    e.preventDefault()
                   try{
                     await axios.post("https://tea.earnars.com/api/post/postResultBinary",feed3)
                     
                    
                   }catch(err){
                    setError("Internal server error")
                    
                   }    
                    }
        

  return (
    <div>
        <div className="coverPan">
      <div className="Sporthead for">
          <div className={trade === "sports"?"Sport12 packsa":"Sport12"} onClick={()=>setTrade("sports")}>Sports</div>
          <div className={trade === "forex"?"Sport12 packsa":"Sport12"}onClick={()=>
              setTrade("forex")
          }>Forex</div>
          <div className={trade === "crypto"?"Sport12 packsa":"Sport12"} onClick={()=>setTrade("crypto")}>Crypto</div>
          <div className={trade === "binary"?"Sport12 packsa":"Sport12"} onClick={()=>setTrade("binary")}>Binary</div>
      </div>
      </div>
      {trade === "sports" ?  
      <div className="GamEType">
          <div className="GamEType1">
              <div className="GamEType2">Game Type</div>
              <div className="GamEType3"></div>
          </div>
          <div className="GamEType1 daro">
              <div className="GamEType2">Game No</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" name="gameNo" onChange={handleChange} className="pade" value={inputsIn.gameNo}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Daily Profit</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="dailyProfit" onChange={handleChange}  value={inputsIn.dailyProfit}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Odd</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="odd" onChange={handleChange}  value={inputsIn.odd}/></div>
          </div>
        
          {success && <div className="SuccessInfoM suc1">{success}</div>} 
          {notSuccessful && <div className="SuccessInfoM suc2">{notSuccessful}</div>}
          {err && <div className="SuccessInfoM suc2">{err}</div>}

          
       
       <div>

       </div>
            
       <div className="resultClass" >
           <div>
               <div className="resultCla">
                  <label className="ResultTa" for="earned">Earned :</label>
                 <div><input type="checkbox" checked={isChecked}   className="amm" onChange={handleCheckboxChange}  /></div>
               </div>
           </div>
           <div>
               <div className="resultCla">
                 <label className="ResultTa" for="loss">Loss:</label>
                 <div><input type="checkbox" check={isChecked1}   className="amm" onChange={ handleCheckboxChange1}  /></div>
               </div>
              
           </div>
       </div>

      
    
       
       <div className="opst" onClick={handleSumit1 }>Post</div>
       
       
      </div>
     : ""}

{trade === "forex"? 
      <div className="GamEType">
          <div className="GamEType1">
              <div className="GamEType2">Trade Type</div>
              <div className="GamEType3"></div>
          </div>
          <div className="GamEType1 daro">
              <div className="GamEType2">Trade No</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="tradeNo" onChange={handleChange1}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Pair</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="pair" onChange={handleChange1}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Condition</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="condition" onChange={handleChange1}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Entry Point</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="entryPoint" onChange={handleChange1}/></div>
            
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Exit Point</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="exitPoint" onChange={handleChange1}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Take Profit</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="takeProfit" onChange={handleChange1}/></div>
          </div>
   
     
          
          <div className="resultClass" >
           <div>
               <div className="resultCla">
                  <label className="ResultTa">Earned:</label>
                  <div><input type="checkbox" checked={isChecked2}   className="amm" onChange={handleCheckboxChange2}  /></div>
               </div>
           </div>
           <div>
               <div className="resultCla">
                 <label className="ResultTa">Loss:</label>
                 <div><input type="checkbox" check={isChecked21}   className="amm" onChange={ handleCheckboxChange21}  /></div>
               </div>
           </div>
       </div>
      
       
       
       <div className="opst" onClick={handleSumit2}>Post</div>
     
       
      
      </div>
      :""}
      {trade === "crypto"? 
      <div className="GamEType">
          <div className="GamEType1">
              <div className="GamEType2">Trade Type</div>
              <div className="GamEType3"></div>
          </div>
          <div className="GamEType1 daro">
              <div className="GamEType2">Trade No</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="tradeNo"
              className="pade" onChange={handleChange2}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Pair</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="pair"
              className="pade" onChange={handleChange2}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Condition</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="condition"
              className="pade" onChange={handleChange2}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Entry Point</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="entryPoint" className="pade" onChange={handleChange2}/></div>
            
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Exit Point</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade"
              name="exitPoint" onChange={handleChange2}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Take Profit </div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="takeProfit"
              className="pade" onChange={handleChange2}/></div>
          </div>
        
       <div className="resultClass" >
           <div>
               <div className="resultCla">
                  <label className="ResultTa">Earned:</label>
                 <div><input type="checkbox" checked={isChecked3}   className="amm" onChange={handleCheckboxChange3}  /></div>
               </div>
           </div>
           <div>
               <div className="resultCla">
                 <label className="ResultTa">Loss:</label>
                  <div><input type="checkbox" check={isChecked31}   className="amm" onChange={ handleCheckboxChange31}  /></div>
               </div>
           </div>
       </div>
       
       
       
       <div className="opst" onClick={handleSumit3}>Post</div>
       
      
      </div>
      :""}

{trade === "binary"? 
      <div className="GamEType">
          <div className="GamEType1">
              <div className="GamEType2">Trade Type</div>
              <div className="GamEType3"></div>
          </div>
          <div className="GamEType1 daro">
              <div className="GamEType2">Trade No</div>
              <div className="GamEType3"><input type="text" placeholder="Enter"
              name="tradeNo" 
              onChange={handleChange3}
              className="pade"/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Pair</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="pair"
              onChange={handleChange3}className="pade"/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Condition</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              onChange={handleChange3}
              name="condition"
              className="pade"/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Expire Time</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="expireTime"
              onChange={handleChange3}
              className="pade"/></div>
            
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Profit</div>
              <div className="GamEType3"><input type="text" placeholder="Enter"
              name="profit"
              onChange={handleChange3} className="pade"/></div>
          </div>
     
        
       <div className="resultClass" >
           <div>
               <div className="resultCla">
                  <label className="ResultTa">Earned:</label>
                  <div><input type="checkbox" checked={isChecked4}   className="amm" onChange={handleCheckboxChange4}  /></div>
               </div>
           </div>
           <div>
               <div className="resultCla">
                 <label className="ResultTa">Loss:</label>
                  <div><input type="checkbox" check={isChecked41}   className="amm" onChange={ handleCheckboxChange41}  /></div>
               </div>
           </div>
       </div>
       
       
       
       <div className="opst" onClick={handleSumit4}>Post</div>
       
      
      </div>
      :""}
     
  

    </div>
  )
}

export default DashboardPostResult;

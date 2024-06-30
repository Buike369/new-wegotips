import React,{useEffect,useState} from 'react'
import "../style/dashboardStyles/dashboardSport.css"
import "../style/dashboardStyles/dashboardDelete.css"
import axios from "axios"

const DashboardDeleteUser = () => {
  const [gameNo,setGameNo]= useState([])
  const [gameNo1,setGameNo1]= useState([])
  const [gameNo2,setGameNo2]= useState([])
    const [gameNo3,setGameNo3]= useState([])


  const deleteGame1 = async(id)=>{
     try{
    await axios.delete(`/user/sports/game-no/${id}`)
     console.log("files deleted")
     }catch(err){
       console.log(err)
     }
  }

  
  const deleteGame2 = async(id)=>{
     try{
    await axios.delete(`/user/forex/game-no/${id}`)
     console.log("files deleted")
     }catch(err){
       console.log(err)
     }
  }

  
  const deleteGame3 = async(id)=>{
     try{
    await axios.delete(`/user/crypto/game-no/${id}`)
     console.log("files deleted")
     }catch(err){
       console.log(err)
     }
  }


  
  const deleteGame4 = async(id)=>{
     try{
    await axios.delete(`/user/binary/game-no/${id}`)
     console.log("files deleted")
     }catch(err){
       console.log(err)
     }
  }

useEffect(()=>{
    const getGameNo =async()=>{
    try{    
       const res = await axios.get("/user/sports/game-no")
     setGameNo(res.data)
    // console.log(res.data)
    }catch(err){
     console.log(err)
    } 
}

getGameNo()
},[gameNo])

useEffect(()=>{
    const getGameNo1 =async()=>{
    try{    
       const res = await axios.get("/user/forex/game-no")
     setGameNo1(res.data)
    // console.log(res.data)
    }catch(err){
     console.log(err)
    } 
}

getGameNo1()
},[gameNo1])

useEffect(()=>{
    const getGameNo2 =async()=>{
    try{    
       const res = await axios.get("/user/crypto/game-no")
     setGameNo2(res.data)
    // console.log(res.data)
    }catch(err){
     console.log(err)
    } 
}

getGameNo2()
},[gameNo2])

useEffect(()=>{
    const getGameNo3 =async()=>{
    try{    
       const res = await axios.get("/user/binary/game-no")
     setGameNo3(res.data)
    // console.log(res.data)
    }catch(err){
     console.log(err)
    } 
}

getGameNo3()
},[gameNo3])

  return (
    <div>
           <div className="GamEType tigh">
               <div className="AGIT">Sports Tips</div>

               {gameNo.map((app,id)=>(
          <div className="GamEType1" key={id}>
              <div className="GamEType2 tigh2" >Game No</div>
              <div className="GamEType2 tigh4">{app.game_no}</div>
              <div className="GamEType2 tigh2 tigh3" onClick={()=> deleteGame1(app.game_no)} >Delete</div>
          </div>
          ))}
        
          
       
        
          <div className="AGIT">Forex Tips</div>
          

               {gameNo1.map((app,id)=>(
          <div className="GamEType1" key={id}>
              <div className="GamEType2 tigh2" >Trade No</div>
              <div className="GamEType2 tigh4">{app.r_trade_no}</div>
              <div className="GamEType2 tigh2 tigh3" onClick={()=> deleteGame2(app.r_trade_no)} >Delete</div>
          </div>
          ))}
        
        
         
         
          <div className="AGIT">Crypto Tips</div>
        

            {gameNo2.map((app,id)=>(
          <div className="GamEType1" key={id}>
              <div className="GamEType2 tigh2" >Trade No</div>
              <div className="GamEType2 tigh4">{app.c_trade_no}</div>
              <div className="GamEType2 tigh2 tigh3" onClick={()=> deleteGame3(app.c_trade_no)} >Delete</div>
          </div>
          ))}
         
         
          

          <div className="AGIT">Binary Tips</div>
        


              {gameNo3.map((app,id)=>(
          <div className="GamEType1" key={id}>
              <div className="GamEType2 tigh2" >Trade No</div>
              <div className="GamEType2 tigh4">{app.b_trade_no}</div>
              <div className="GamEType2 tigh2 tigh3" onClick={()=> deleteGame4(app.b_trade_no)} >Delete</div>
          </div>
          ))}
         
          
      
       
       <div>

       </div>
            

    
      
       
       
      </div>
    </div>
  )
}

export default DashboardDeleteUser

import React, {useEffect,useState} from 'react'
import "../style/home.css";
import "../style/dashboardStyles/dashboardUser.css"
import axios from "axios"

const DashboardWithdrawal = () => {

  const [withdrawalList,setWithdrawalList] = useState([])

  useEffect(()=>{

    const fetchWithdrawal = async ()=>{
    
       try{ 
        const res =   await axios.get("/user/withdrawal")

         setWithdrawalList(res.data)
       }catch(err){
         console.log(err)
       }
    }
    fetchWithdrawal()

  },[])

  return (
    <div className="PHONENUM">
         <div className="TimeDiv12 kim">
          <div className='kim1'>
              <ul className="TimeDiv do">
               
                <li>BANK NAME</li>
                <li>BANK ACCOUNT</li>
                <li>MAIN WALLET</li>
                <li>WITHDRAWAL AMOUNT </li>
                <li>USER ID</li>
                <li>STATUS</li>
               
              </ul>
              </div>
            </div>
            <div className="bigManDiv">
              <div className="FOR">
                <div className="Leaque lagak">
              
                  {withdrawalList.map((user,id)=>(
                  <div >
                    <ul className="TimeDiv1 ADDTimeDbg work" >
                  
                      <li>{user.account_name}</li>
                      <li>{user.account_no}</li>
                       <li>{user.main_amount}</li>
                      <li>{user.withdrawal_amount}</li>
                       <li>{user.withdrawal_user_id}</li>
                      <li><div className="ApprovedButton"><span>Approved</span><div className="yesp">yes</div><div className="yesp Nop">NO</div>
                          </div></li>
                   
                    </ul>
                  </div>
                   ))} 


          
                </div>
              </div>
            </div>
           
      
    </div>
  )
}

export default DashboardWithdrawal

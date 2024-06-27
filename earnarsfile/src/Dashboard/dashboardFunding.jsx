import React,{useState} from 'react'
import "../style/dashboardStyles/dashboardFunding.css"
import Withdrawal from "./dashboardWithdrawal"

const DashboardFunding = () => {

    const [funds,setFunds]=useState("credit")



  return (
    <div>
        <div className="fortCredit">
        <div className="Sporthead headSport">
            <div className="Sport12 credit fort" onClick={()=>setFunds("credit")}>Credit User</div>
            <div className="Sport12 credit fort" onClick={()=>setFunds("Withdrawal")}>Withdrawal Request</div>
        </div>
        </div>


        {funds === "credit"? 
        <div className="GamEType">
            <div className="remey">
                <div className="TexT">
                    <form>
                        <div className="timimg">
                        <input type="text" placeholder="Enter Username or Id Number" className="Infomat"/>
                        </div>
                    </form>
                </div>
                <div className="TexT">
                <form>
                    <div className="timimg">
                        <input type="number" placeholder="Enter Amount" className="Infomat"/>
                    </div>
                    </form>
                </div>
            </div>
            <div className="Sport12 SeconT">Credit</div>
        </div>
        :""}
        {funds === "Withdrawal"?<Withdrawal/>:""}
    
    </div>
  )
}

export default DashboardFunding
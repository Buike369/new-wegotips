import React,{useState} from "react"
import Footer from "./footer"
import "./style/about.css"
import { Link} from "react-router-dom";


const REfund=()=>{

    const [register,setRegister] = useState(false)
    return(
        <div className="About_Dive_Page" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))",paddingTop:'10px',height:"100Vh"}}>
             <div className="About_Dive_Page1">


             <div className="About_Us">
                 <div className="About_paragraph"> 
                 <div className="About_header">Refund Policy</div>
                <p className="Set_A_Branch"> The information transmitted is intended only for the persons or entity above the age of 18. Preditbet do not refund money paid for subscription and not liable to any money lost or gained. Countries that betting is not legal should not subscribe to our plans. You can read through Our Terms and Conditions for more information on preditbet.</p>


                 </div>
             </div>
            <div className="Foot_VH"><Footer /></div> 

            </div>
        </div>
    )
}

export default REfund;
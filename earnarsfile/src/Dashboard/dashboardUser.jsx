import React,{useState,useEffect} from 'react'
import "../style/home.css";
import "../style/dashboardStyles/dashboardUser.css"
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const DashboardUser = () => {
  const [userInfo,setUserInfo]=useState([])
  const [sap,setSap] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
 

  function handleInputChange(event){
    setSearchQuery(event.target.value);
  }
  function filterData(data){
    return data.filter(item => item.username.toLowerCase().includes(searchQuery.toLowerCase()) 
    );
  }

  

 
   
  useEffect(()=>{
    const userInfom = async ()=>{
      try{
        const res = await axios.get('https://tea.earnars.com/api/post')
 
        setUserInfo(res.data)
      
      }catch(err){
        console.log(err)
      }
    }
    userInfom()

  },[])

   useEffect(()=>{
        const activeUserCount5 = async()=>{
            try{
   const res = await axios.get(`https://tea.earnars.com/api/user/active-count`)
   
     setSap(res.data[0].active_count)
   
            }catch(err){
          console.log(err)
            }

        }
        activeUserCount5()
    },[sap])



  const filteredData = filterData(userInfo);
  return (
    <div>

      <div className="userRo">
        <div className="helpin posit">
            <input type="text"  placeholder="Search for username" className="forr" onChange={handleInputChange}    />

          <FontAwesomeIcon icon={faSearch} className="positIcon" />
        </div>
        <div className="helpin1"><div className="ikeli">Active: <span style={{color:"#00ff00"}}>{sap}</span></div></div>
        {/* <div className="helpin1"><div className="Searchh" >Search</div></div> */}
      </div>

         {/* <div className="TimeDiv12">
              <ul className="TimeDiv">
                <li className="phone">S/N</li>
                <li className="phoneNu">PHONENUMER</li>
                <li className="phoneNu">USERNAME</li>
                <li className="phoneNu">EMAIL</li>
                <li className="phoneNu">STATUS</li>
                <li className="phone">ACTION</li>
              </ul>
            </div>
            <div className="bigManDiv">
              <div className="FOR">
                <div className="Leaque lagak">
                

                 
            

                  {filteredData.map((user,id)=>(
                                     
                  <div key={id}>
                    <ul className={(user.id %2 === 0)?"TimeDiv1 ADDTimeDbg":"TimeDiv1 ADDTimeDbg1"} >
                    <li className="phone">{user.id}</li>
                      <li className="phoneNu">{user.phone_number}</li>
                      <li className="phoneNu">{user.username}</li>
                      <li className="phoneNu">{user.email}</li>
                      <li className="phoneNu">{user.active?"Active":"Inactive"}</li>
                      <li className="phone">|||</li>
                    </ul>
                  </div>
                  ))}


          
                </div>
              </div>
            </div> */}


            <div role="region" aria-labelledby="caption" tabindex="0">
  <table className='linema'>
   
    <thead>
      <tr>
        <th style={{width:"50px"}}>S/N</th>
        <th style={{width:"100px"}}>PHONENUMBER</th>
        <th style={{width:"150px"}}>USERNAME</th>
        <th style={{width:"300px"}}>EMAIL</th>
        <th>STATUS</th>
        <th>ACTION</th>
        
      </tr>
    </thead>
    <tbody>
       {filteredData.map((user,id)=>(
       
      <tr key={id} className={(user.id %2 === 0)?" ADDTimeDbg":"ADDTimeDbg1"}>
        <th className={(user.id %2 === 0)?" ADDTimeDbg":"ADDTimeDbg1"}>{user.id}</th>
        <td>{user.phone_number}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.active?"Active":"Inactive"}</td>
        <td>4</td>
        
      </tr>
  
         ))}
      
   
     
    </tbody>
  </table>
</div>
           
      
    </div>
  )
}

export default DashboardUser

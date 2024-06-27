import React, {useState,useEffect,useContext} from  'react'
import Footer from "./footer"
import "./style/userDashboard.css"
import "./style/walletOverView.css"
import "./style/exchange.css"
import axios from "axios"
import Mytip from "./mytip"
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { AuthContext } from './context/authContext';
import ReactPaginate from 'react-paginate';
import Demo1 from "./Dashboard/dashboardSports"
import Demo2 from "./Dashboard/dashboardPostResult"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faPlus,faMinus, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck,faXmark} from '@fortawesome/free-solid-svg-icons'


const UserDashboard = () => {
  const [wallets,setWallets] = useState("main")
    const [wallet,setWallet]=useState('wallets')
    const [subscription,setSubscription]=useState('')
    const [refferal,setRefferal]=useState('')
    const [modal,setModal]= useState(false)
    const [deposit,setDeposit]= useState("")
    const [subAmount,setSubAmount]=useState(25000)
    const [withdraw,setWithdraw]= useState("")
    const [transfer,setTransfer]= useState("")
     const [message5,setMessage5]= useState("")
    const [pinAmount,setPinAmount]=useState("Enter Amount")
    const [move,setMove] = useState(true)
    const [active,setActive] = useState(true)
    const [affliateWallet,setAffliateWallet]=useState(0)
    const [affliateAcount,setAffliateAccount]=useState("000")
    const [amount,setAmount] =useState(0)
     const [amount1,setAmount1] =useState(0)
    const {currentUser,setIsPaid} = useContext(AuthContext);
    const[divFlex,setDivFlex]=useState("")
        let pars = 0;
      const [moneyDeposit,setMoneyDeposit] = useState([])
    const [duration,setDuration] = useState();
    const [mainWallet,setMainWallet] = useState(0)
    const [visit,setVisit] = useState()
    const [subscriptionAmount,setSubscriptionAmount] = useState(2500)
     const [error,setError]= useState("")
   
     const [walletOverview,setWalletOverview] = useState([])
    const [depositCash,setDepositCash]= useState([])
    const [referrals2,setReferrals2] = useState([])
    
    const [subActive,setSubActive]=useState("inActive")
    const [message,setMessage]=useState("")
    const [withdrawalInfo,setWithdrawalInfo] = useState({
        withdrawalAmount:"",
       accountName:"",
        accountNo:""
    })
    
    const [iconShow,setIconShow]=useState('circleDisplay')
      const [network,setNetwork]=useState('airtel')

      const [airtimeInfo,setAirtimeInfo]=useState({
        mobileNumber:"",
        amount:"",
        network:network
      })
const [section1, setSection1] = useState("userSection")
const [accountSetting, setAccountSetting] = useState("edit")
const [section2, setSection2] = useState("AffiliateSection")
const [section3, setSection3] = useState("tipsterOver")
     const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const [itemsPerPage,setItemsPerPage] = useState(6)
const [itemOffset, setItemOffset] = useState(0);
const [isTipster,setIsTipster] = useState(true)
const [dashboardMenu,setDashboardMenu] = useState(false)
 const [pipDeposit, setPipDeposit] = useState("depositL")
     const [modal5, setModal5] = useState(false)

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


 const Goma =()=>{
  setSection1('userSection')
  setDashboardMenu(!dashboardMenu)
 }
 const Goma1 =()=>{
  setSection1('userSection2')
  setDashboardMenu(!dashboardMenu)
 }
 const Goma2 =()=>{
  setSection1('userSection3')
  setDashboardMenu(!dashboardMenu)
 }
  const Goma3 =()=>{
  setSection1('userSection1')
  setDashboardMenu(!dashboardMenu)
 }
  const Goma4 =()=>{
  setSection1('userSection4')
  setDashboardMenu(!dashboardMenu)
 }
  const Goma5 =()=>{
  setSection1('userSection5')
  setDashboardMenu(!dashboardMenu)
 }
  const Goma6 =()=>{
  setSection1('userSection6')
  setDashboardMenu(!dashboardMenu)
 }
  const Goma7 =()=>{
  setSection1('userSection7')
  setDashboardMenu(!dashboardMenu)
 }
  const Goma8 =()=>{
  setSection1('userSection')
  setDashboardMenu(!dashboardMenu)
 }
  const iconD2 =()=>{
    setIconShow('circleDisplay')
    setNetwork("airtel")
    setAirtimeInfo({
        mobileNumber:"",
        amount:""
     })
 } 
 const setGo=()=>{
        setSubscription('going');
        setWallet("")
        setRefferal("")
        setDivFlex("Amam")
    }
   const setGo1=()=>{
        setSubscription('');
        setWallet("wallets")
        setRefferal("")
        setDivFlex("")
    }
 const setGo2=()=>{
        setSubscription('');
        setWallet("")
        setRefferal("fort")
        setDivFlex("")
    }

  const iconD1 =()=>{
    setIconShow("circleDisplay")
     setNetwork("MTN")
     setAirtimeInfo({
        mobileNumber:"",
        amount:""
     })
 } 


  const lan =()=>{
       setModal5(!modal5)
       document.body.classList.add("houne")
       setPipDeposit("depositL")
     }
      const lan1 =()=>{
       setModal5(!modal5)
       document.body.classList.add("houne");
       setPipDeposit("transferL")
     }
       const lan2 =()=>{
       setModal5(!modal5)
       document.body.classList.add("houne");
        setPipDeposit("withdrawalL")
     }
      const reLpen =()=>{
       setModal5(!modal5)
       document.body.classList.remove("houne")
     }





     const handleChanges4 =(e)=>{
        setAirtimeInfo(prev =>({...prev,[e.target.name]:e.target.value,network:network}))
    }
 const iconD =()=>{
    setIconShow("circleDisplay")
     setNetwork("Glo");
     setAirtimeInfo({
        mobileNumber:"",
        amount:""
     })
 } 
 const ego = [{amount:depositCash.amount,id:currentUser.id,mainA:mainWallet},depositCash.customer]

  const depositT =()=>{
     setDeposit('depositMe')
     setWithdraw('')
     setModal(!modal)
     setTransfer("")
      document.body.classList.add('hou')

 }
  const subscript =()=>{
    setDeposit('subScriptionP')
    setWithdraw('')
    setModal(!modal)
    setTransfer("")
     document.body.classList.add('hou')
}
 const transferT =()=>{
    setWithdraw('')
    setDeposit('')
    setTransfer("transferMe")
    setModal(!modal)
    document.body.classList.add('hou')
}

 const withdrawT =()=>{
    setWithdraw('withdrawMe')
    setDeposit('')
    setModal(!modal)
    setTransfer("")
    document.body.classList.add('hou')
}
const airtimePurchase =()=>{
    setWithdraw('airtime')
    setDeposit('')
    setModal(!modal)
    setTransfer("")
    document.body.classList.add('hou')
}
 const dataPurchase =()=>{
    setWithdraw('data')
    setDeposit('')
    setModal(!modal)
    setTransfer("")
    document.body.classList.add('hou')
}

const trig =()=>{
    setPinAmount("Enter Amount")
    setMove(false)
    setActive(!active)
}
const reOpen =()=>{
    setModal(!modal);
    document.body.classList.remove('hou')
}
const handleChanges =(e)=>{
        setWithdrawalInfo(prev =>({...prev,[e.target.name]:e.target.value}))
    }
const airtimePurchase2=(e)=>{
    e.preventDefault()
   console.log(airtimeInfo)
    
   const pass =[airtimeInfo,{main:mainWallet,id:currentUser.id}]

   if((airtimeInfo.amount === "") || (airtimeInfo. mobileNumber === "")){
      console.log("amount or phone_number field is empty")
   }

   if(parseInt(mainWallet) > parseInt(airtimeInfo.amount)){
 
     axios.post("https://tea.earnars.com/api/flutterwave/airtime",pass).then((response)=>{

     }).catch((err)=>{
        console.log(err)
     })

 
  
   }else{
   console.log("insufficient fund for airtime purchase")
   }
 
}

  const handleWithdrawal =(e) =>{
                    e.preventDefault()
                  
                    if(parseInt(mainWallet) > parseInt(withdrawalInfo.withdrawalAmount )){
                        const mainWallet1 = mainWallet;
                        const mon1 = [withdrawalInfo,{main:mainWallet1,id:currentUser.id}]   
         
                   axios.post("https://tea.earnars.com/api/user/withdrawal",mon1).then((response)=>{
                              setMessage5(response.data.msg)
                    setTimeout(()=>{
                         setMessage5("")
                         setModal(!modal);
                    },8000)
                   }).catch((err)=>{
                    //  setError(err)
                    console.log(err)
                   })

                   }else{
                    setMessage5("your main wallet is low for transaction")
                     setTimeout(()=>{
                         setMessage5("")
                        
                    },3000)
                   }
                    }
                       const handleTransfer =(e) =>{
                    e.preventDefault()

                    if(parseInt(affliateWallet) === 0){
                        setError("Insuffient Fund")
                        setTimeout(()=>{
                          setError("")
                        },3000)
                    }else if(parseInt(affliateWallet) < parseInt(amount1)){
                        setError("low balance for transaction")
                         setTimeout(()=>{
                          setError("")
                        },3000)
                    }else{
                       
                    axios.post("https://tea.earnars.com/api/user/transfer",{amountTransferred:amount1,main:mainWallet,affliateAmount:affliateWallet,id:currentUser.id}).then((response)=>{

                    }).catch((err)=>{
                            console.log(err)
                            // setError(err)
                     setTimeout(()=>{
                          setError("")
                        },3000)
                    })
                    }
      
                    }

                       const handleSubscription = (e)=>{
 
     if(parseInt(subscriptionAmount) > parseInt(mainWallet)){
        setMessage("Low Balance pls deposit")
          setTimeout(()=>{
             setMessage("")
        },5000)
    
         console.log("Low Balance pls deposit")
     }else if(parseInt(mainWallet) <= parseInt(subscriptionAmount)){
        setMessage("main Wallet cannot be empty")
        setTimeout(()=>{
             setMessage("")
        },5000)
        
             console.log("main Wallet cannot be empty")
     }else{
          
            axios.post("https://tea.earnars.com/api/user/subscription",{
            id:currentUser.id,amount:subscriptionAmount,mainWallet:mainWallet
           }).then((response)=>{
             setMessage("Subscription was successful")
              setTimeout(()=>{
            setMessage("")
         setModal(!modal)
           },3000)
         
           }).catch((err)=>{
            //   setError(err)
              console.log(err)
           })
      
     }

     }

     const config = {
    public_key: 'FLWPUBK-a2e5c30edf925c9bfb96e5c540c22fb9-X',
    tx_ref: Date.now(),
    amount: parseInt(amount),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: currentUser.email,
       phone_number:currentUser.phone_number,
      name: currentUser.username,
    },
    customizations: {
      title: 'Deposit',
      description: 'Payment to fund ur main wallet',
      logo: 'https://earnars.com/public/img/Earnars1@72x1.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);


  const flut =()=>{
     handleFlutterPayment({
            callback: (response) => {
                // console.log(response)
              setDepositCash(response)
                closePaymentModal()
                 setTimeout(()=>{
                     setModal(!modal)
                      },1000) // this will close the modal programmatically
            },
            onClose: () => {
                
            },
          });
  }

    useEffect(()=>{
    const handleDeposit = () =>{
                      axios.post("https://tea.earnars.com/api/user/deposit-money",ego ).then((response)=>{

                      }).catch((err)=>{
                          console.log(err)
                      })
                    }
           if(depositCash.length > 0){
            handleDeposit()
           }

  },[depositCash])

   useEffect(()=>{
    const pala = ()=>{
  axios.get(`https://tea.earnars.com/api/user/main-wallet/${currentUser?.id}`).then((response)=>{
     setMainWallet(response.data[0].amount)
  }).catch((err)=>{
    // setError(err)
    console.log(err)
  })   
    }
    pala()
  },[mainWallet])

     useEffect(()=>{
    const pala1 =()=>{
   
  axios.get(`https://tea.earnars.com/api/user/affiliate-wallet/${currentUser?.id}`).then((response)=>{
   setAffliateWallet(response.data[0].amount)
  }).catch((err)=>{
//   setError(err)
  console.log(err)
  })      
    }
    pala1()
  },[affliateWallet])

   useEffect(()=>{
    const pala2 = ()=>{
  axios.get(`https://tea.earnars.com/api/user/referral-user/${currentUser?.id}`).then((response)=>{
   setReferrals2(response.data)
  }).catch((err)=>{
     setError(err)
     console.log(err)
  })
   }
    pala2()
  },[referrals2])

  useEffect(()=>{
    const pala3 = ()=>{
      
    axios.get(`https://tea.earnars.com/api/user/wallet-overview/${currentUser.id}`).then((response)=>{
     setWalletOverview(response.data)
    }).catch((err)=>{
 setError(err)
 console.log(err)
    })  
    }
    pala3()
  },[walletOverview])

  useEffect(()=>{
      const getSubscriptionStatus =()=>{
    axios.get(`https://tea.earnars.com/api/user/subscription-status/${currentUser.id}`).then((response)=>{
   setSubActive(response.data.pop().status)
    }).catch((err)=>{
 console.log(err)
    })
     }
      getSubscriptionStatus()

   },[])


     const card = ["sport","binary","forex","crytptocurrency","sport","binary","forex","crytptocurrency"]
  return (
    <div className='vimvi'>

  <div className='userD uderDD '>
    <div className='userD3'>
              <div className='userD5'>
                <div className=''>
                    <div className='userD50'>
                    <div className='dvd2 dvd23'>
                    <div className='userD6'><img src="/img/dashboard-profile3.png" alt="" className='profileDImg'/></div>
                    <div className='JohnKen1'>Samuel245</div>
                    <div className='JohnKen2'> <img src="/img/map-icon.png" alt=""/><span className='JohnKen3'>Nigeria</span></div>
                    <div  className='JohnKen2'><img src="/img/calendar-icon2.png" alt=""/><span className='JohnKen3'>Joined Oct, 2021</span></div>
                    <button className='EMMAN y45' onClick={()=>setSection1('userSection5')}><div className=' JohnKen5'><img src="/img/edit-icon.png" alt=""/><span className='JohnKen7'>Edit Your Profile</span></div></button> 
                    <div className='JohnKen4 JohnKen8'> <div className='JohnKen5'><img src="/img/followers.png" alt=""/><span className='JohnKen7 JohnKen6'>Followers</span></div><div className='JohnKen6'>2400</div></div>
                     <div className='JohnKen4 JohnKen8'> <div className='JohnKen5'><img src="/img/following.png" alt=""/><span className='JohnKen7 JohnKen6'>Following</span></div><div className='JohnKen6'>2600</div></div>
                    
                     </div>
                     </div>
                     {isTipster ? 
                    <>
                    <div className='userD50'>
                      <div className=' dvd1 JohnKen5' onClick={()=>setSection1('userSection')} style={{backgroundColor:section1 === "userSection" ? "#0d0740": "", borderLeft: section1 === "userSection" ? "2px solid #5157ab":"" }}><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Dashboard</span></div>
                      <div className='dvd1 JohnKen5' onClick={()=>setSection1('userSection2')}  style={{backgroundColor:section1 === "userSection2" ? "#0d0740": "", borderLeft: section1 === "userSection2" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Tipster Wallet</span></div>
                       <div className='dvd1 JohnKen5' onClick={()=>setSection1('userSection3')}  style={{backgroundColor:section1 === "userSection3" ? "#0d0740": "", borderLeft: section1 === "userSection3" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Affiliate Wallet</span></div>
                         <div className='dvd1 JohnKen5 ' onClick={()=>setSection1('userSection6')}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Post Tip</span></div>
                           <div className='dvd1 JohnKen5 ' onClick={()=>setSection1('userSection7')}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Post Result</span></div>
                           
                             <div className='dvd1 JohnKen5 ' onClick={()=>setSection1('userSection1')}  style={{backgroundColor:section1 === "userSection1" ? "#0d0740": "", borderLeft: section1 === "userSection1" ? "2px solid #5157ab":"" }}><img src="/img/subscriptions.png" alt=""/> <span className='JohnKen7' >My Tips</span></div>
                        <div className='dvd1 JohnKen5'  onClick={()=>setSection1('userSection4')}  style={{backgroundColor:section1 === "userSection4" ? "#0d0740": "", borderLeft: section1 === "userSection4" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Pricing</span></div>
                          <div className='dvd1 JohnKen5 ' onClick={()=>setSection1('userSection5')}  style={{backgroundColor:section1 === "userSection5" ? "#0d0740": "", borderLeft: section1 === "userSection5" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Setting</span></div>
                          </div>
                          </>
                          :
                          <>
                          <div className='userD50'>
                      <div className='dvd1 JohnKen5' onClick={()=>setSection1('userSection')}><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen5'> Dashboard</span></div>
                      <div className='dvd1 JohnKen5 '><img src="" alt=""/> <span className='JohnKen5'> Main Wallet</span></div>
                       <div className='dvd1 JohnKen5 'onClick={()=>setSection1('userSection3')}><img src="" alt=""/> <span className='JohnKen5' > Affiliate Wallet</span></div>
            
                             <div className='dvd1 JohnKen5 '><img src="/img/subscriptions.png" alt=""/> <span className='JohnKen5'>My Tips</span></div>
                          <div className='dvd1 JohnKen5 '><img src="/img/settings.png" alt=""/> <span className='JohnKen5'>Setting</span></div>
                          <div className='dvd1 JohnKen5 '><img src="" alt=""/> <span className='JohnKen5'>Become a Tipster</span></div>
                           </div>
                          </>}
                    
                </div>
                <div className='dvd3'>
                <div  className='dvd2'>
                     <div className='HelpMe' ><img src="/img/experts.png" alt=""/></div>
                <div className="helpMe1">Need Help?</div>
                <div className='helpMe1'>We’re here to help</div>
                <div className='helpMe1'>Our experts are here to help!</div>
               <a href="/contact"> <div className='usContact'>Contact Us</div></a> 
                </div>
                </div>
                </div>
    </div>
    <div className='userD4'>
      <div className='emekaUs'>
      <div>
        <div className='Fa1'>
          <div className="prIconCl" onClick={()=>setDashboardMenu(!dashboardMenu)}>BK</div>
           <div className='Fa2'><input type="" placeholder="Search"  className='Fa4'/></div>
           <div className='Fa3'><a href="/" style={{color:"#fff", textDecoration:"none",fontSize:'18px',fontWeight:'700'}}>Earnars</a></div>
        </div>
      </div>
      <div className='Fa10'>

        {section1 === "userSection"? 
        <>
        <div className="ManB">
           <div  className="ManB1 ManB30">
             <div className='mainVm34'>
              <div className='likeYou'>
               <div className='MainVm'>Total Tips Posted</div>
               <div className='MainVm1'>500</div>
               </div>
            </div>
           </div>
           <div  className="ManB1 ManB30">
             <div className='mainVm34'>
              <div className='likeYou'>
               <div className='MainVm'>Successful Rating</div>
               <div className='MainVm1'>75%</div>
               </div>
            </div>
           </div>
           <div  className="ManB1">
            <div className='ManB ManB5'>
              <div className='ManB2'>
                <div className='EarningBolo' >Active Tips</div>
                 <div className='EarningBolo1'>120</div>
              </div>
               <div className='ManB2'>
                <div className='EarningBolo' >Inactive Tips</div>
                 <div className='EarningBolo1'>20</div>
               </div>
            </div>
           </div>
            <div  className="ManB1">
               <div className='ManB ManB5'>
              <div className='ManB2'>
                <div className='EarningBolo' >Successful Tip</div>
                 <div className='EarningBolo1'>120</div>
              </div>
               <div className='ManB2'>
                <div className='EarningBolo' >Failed Tips</div>
                 <div className='EarningBolo1'>20</div>
               </div>
            </div>

            </div>
          
        </div>

    <div className='ManUm'>

      <div className="subsub">Active Subscriber</div>
        <div className="wereAre AreWere">
          {card.map((app,id)=>(
                                <div className="cardProfileDiv TY44 eretYem"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1 TY38"/></div>
          <div className="donKing">Don Knight</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
            <div className='jd1'></div>
          <div className='weNeed'>
       <div className='weNeed1 jd3'>
         <p className='weNeed2'>Active Membership</p>
         <div>
           <div className='paw1 weNeed6 jd'>
                                <div className='cic'></div>
                                <div className='bkInT'>1 Day <span className='moneyColor'>₦100</span></div>
                            </div>
                           <div className="StartDate">Start Date: 03/02/2022</div>
                           <div className="StartDate">End Date: 03/02/2022</div>
                           <div>Tips Received:1</div>
                           <div className="StartDate">Payment Method:Balance</div>
         
         </div>
         <div className="houseRuMM WonB  mainMa">Renew</div>
       </div>
       </div>
       
        </div>
        ))}
        </div>
        </div>
        </>
        :""}
        {section1 === "userSection1" ?
        <>
        <div className='ManUm'>
          <div className='allNewTips ManUm1'>

            <div className="youpin">

              
                 
              <div className="UponT">
                <div>
                  <div>Total Number of Subscription </div>
                  <div></div>
                  <div></div>
                </div>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"70px"}}>Name</th>
         <th style={{width:"150px"}}>UserId</th>
        <th style={{width:"180px"}}>Type</th>
        <th style={{width:"180px"}}>Commission</th>
        <th style={{width:"60px"}}>Status</th>
        
                
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
      
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
           
        <td>13:00am</td>
          <td>English</td>
        <td>Eng v Ban Asia Cup T20</td>
        <td>Ban to win</td>
        <td>1.72</td>
        
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 

 <div className='mainDe allNewPaginate'>

    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`<pre`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
  </div>




 

                </div>

              
               </div>

        </div>
        </div>
        </> :""}
           {section1 === "userSection2"? 
    
    <>
    <div className="BKOver2">
    <div className='BKOver'>
      <div className="BkOver1"  style={{backgroundColor: section3 === "tipsterOver" ? "#fff" :"#0d0740", color: section3 === "tipsterOver" ? "#000" :"gold"}}  onClick={()=>setSection3("tipsterOver")}>Wallet Overview</div>
       <div className="BkOver1"  style={{backgroundColor: section3 === "tipsterOver1" ? "#fff" :"#0d0740", color: section3 === "tipsterOver1" ? "#000" :"gold"}} onClick={()=>setSection3("tipsterOver1")}>Membership Subscription</div>
    </div>
    </div>
        <div className="ManB">
           <div  className="ManB1 ManB30">
            <div className="Firet">
                      <div className="Main_WALL1">
                          <p className="Is_KB">Main Wallet</p>
                          <p className="Is_KB1">₦70.00</p>
                      </div>
                      <div className="Depost">
                          <p className="dep1 add1" onClick={lan} >Deposit</p>
                          <p className="dep1 add2"  onClick={lan2}>Withdraw</p>
                      </div>
                      </div>
           </div>
           <div  className="ManB1 ManB30">
             <div className='DataBoundle2'>
              <div  className='DataTo tipUp'>Tipster Wallet</div>
              <div className='tipWall tipUp'>₦2000</div>

             <div className='TransferTip' onClick={lan1}>Transfer</div>
             </div>
           </div>
           <div  className="ManB1 ManB30">
            <div >
                          <div className="With_upto">
                          <div className="Pay_Bills">Pay bills with upto 5% discount</div>
                          <div className="Data"> 
                            <div className="Betting1">
                                <div className="AIR_I"   onClick={airtimePurchase}>Airtime</div>
                                <div className="AIR_I" onClick={dataPurchase}>Data</div>
                                <div className="AIR_I">Bills</div>
                              </div>
                          </div>
                          </div>
                      </div>
          
           </div>
           
          
        </div>
        <div className='ManB Fa110'>
           <div className='ManB2'>
                 <div className='EarningBolo' >Daily Earning</div>
                 <div className='EarningBolo1'>₦120</div>
               </div>
               <div className='ManB2'>
                <div className='EarningBolo'>Weekly Earning</div>
                 <div className='EarningBolo1'>₦200</div>
              </div>
              <div className='ManB2'>
                      <div className='EarningBolo'>Monthly Earning</div>
                 <div className='EarningBolo1'>₦200</div>
               </div>
        </div>
         

    <div className='ManUm'>
           {section3 === "tipsterOver" ? <>
          <div className='allNewTips ManUm1'>

            <div className="youpin youpinTete">

              
                 
              <div className="UponT">
                <div>
                  <div className="sactions">Transactions </div>
                  <div></div>
                  <div></div>
                </div>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"70px"}}>Name</th>
         <th style={{width:"100px"}}>Type</th>
        <th style={{width:"100px"}}>Amount</th>
        <th style={{width:"180px"}}>Recipient</th>
        <th style={{width:"60px"}}>Status</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
           
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
      
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
           
        <td>13:00am</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
        
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 

 <div className='mainDe allNewPaginate'>

    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`<pre`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
  </div>




 

                </div>

              
               </div>

        </div>
        </> :""}
           {section3 === "tipsterOver1" ? <>
          <div className='allNewTips ManUm1'>

            <div className="youpin youpinTete">

              
                 
              <div className="UponT ">
                <div>
                  <div className="sactions">Transactions </div>
                  <div></div>
                  <div></div>
                </div>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"70px"}}>Name</th>
         <th style={{width:"100px"}}>Type</th>
        <th style={{width:"100px"}}>Amount</th>
        <th style={{width:"180px"}}>Recipient</th>
        <th style={{width:"60px"}}>Status</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
           
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
      
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>13:00pm</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
       
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
           
        <td>13:00am</td>
          <td>English</td>
        <td>Eng v Ban </td>
        <td>Ban to win</td>
        <td>1.72</td>
        
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 

 <div className='mainDe allNewPaginate'>

    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`<pre`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
  </div>




 

                </div>

              
               </div>

        </div>
        </> :""}
        </div>
        </>
        :""}

         {section1 === "userSection3"? 
        <>
          <div className="BKOver2">
    <div className='BKOver'>
      <div className="BkOver1" style={{backgroundColor: section2 === "AffiliateSection" ? "#fff" :"#0d0740", color: section2 === "AffiliateSection" ? "#000" :"#fff"}} onClick={()=>setSection2('AffiliateSection')}>Affiliate Overview</div>
       <div className="BkOver1" style={{backgroundColor: section2 === "AffiliateSection1" ? "#fff" :"#0d0740", color: section2 === "AffiliateSection1" ? "#000" :"#fff"}} onClick={()=>setSection2('AffiliateSection1')}>Transmission/Referral Subscription</div>
    </div>
    </div>
     <div className="ManB">
           <div  className="ManB1 ManB30">
            <div className="Firet">
                      <div className="Main_WALL1">
                          <p className="Is_KB">Main Wallet</p>
                          <p className="Is_KB1">₦70.00</p>
                      </div>
                      <div className="Depost">
                          <p className="dep1 add1"  >Deposit</p>
                          <p className="dep1 add2"  >Withdraw</p>
                      </div>
                      </div>
           </div>
           <div  className="ManB1 ManB30">
             <div className='DataBoundle2'>
              <div  className='DataTo tipUp'>Affiliate Wallet</div>
              <div className='tipWall tipUp'>₦2000</div>

             <div className='TransferTip' >Transfer</div>
             </div>
           </div>
           <div  className="ManB1 ManB30">
            <div >
                            <div className='ManMMb2'>
                 <div className='UnLockAff'>Unlock Your Affiliate wallet and get access to tons of opportunity to make money  </div>
                 <div className='UnlockAff1'> Click to Unlock Now</div>
              </div>
                      </div>
          
           </div>
           
          
        </div>
       
            

            {section2 === "AffiliateSection" ? 
            <>
    <div className='ManUm'>
          <div className='allNewTips ManUm1'>

            <div className="youpin">

              
                 
              <div className="UponT">
                <div className='UponT35'>
                  <div className='OfReferral2'>Total Number of Referrals:<span>250</span> </div>
                  <div className='OfReferral2'>active: <span>200</span></div>
                  <div className='OfReferral2'>inActive : <span>50</span></div>
                </div>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"180px"}}>Name</th>
         <th style={{width:"70px"}}>Referral Id</th>
    
        <th style={{width:"70px"}}>Commission</th>
        <th style={{width:"60px"}}>Status</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
           
        <td>Chukwubuike kingsley</td>
          <td>002</td>
   
        <td>30%</td>
        <td>1.72</td>
      
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>Chukwubuike kingsley</td>
          <td>004</td>
        
        <td>25%</td>
        <td>1.72</td>
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>Chukwubuike kingsley</td>
          <td>0056</td>
       
        <td>45%</td>
        <td>1.72</td>
       
      </tr>
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>Chukwubuike kingsley</td>
          <td>0045</td>
       
        <td>60%</td>
        <td>1.72</td>
       
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
           
        <td>chukwubuike kingsley</td>
          <td>0024</td>
   
        <td>20%</td>
        <td>1.72</td>
        
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 

 <div className='mainDe allNewPaginate'>

    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`<pre`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
  </div>




 

                </div>

              
               </div>

        </div>
        </div>
        </>

         :""}
              {section2 === "AffiliateSection1" ? 
            <>
    <div className='ManUm'>
          <div className='allNewTips ManUm1'>

            <div className="youpin">

              
                 
              <div className="UponT">
                <div className='UponT35'>
                  <div className='OfReferral2'>Total Number of Referrals:<span>250</span> </div>
                  <div className='OfReferral2'>active: <span>200</span></div>
                  <div className='OfReferral2'>inActive : <span>50</span></div>
                </div>
           <div className="adaba"> 
       <div role="region" aria-labelledby="caption" tabindex="0">
  <table   style={{borderCollapse: "collapse"}}  className='linema '>
   
    <thead>
      <tr>
        <th style={{width:"100px"}}>Date</th>
        
        <th style={{width:"70px"}}>Type</th>
         <th style={{width:"80px"}}>Amount</th>
        <th style={{width:"80px"}}>UserId</th>
      
        <th style={{width:"60px"}}>Status</th>
        
                
      </tr>
    </thead>
    <tbody>
       
       
     
      
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
           
        <td>7 days</td>
          <td>#2000</td>
        <td>004</td>
     
        <td>1.72</td>
      
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
        
        <td>1 day</td>
          <td>#4000</td>
        <td>0056</td>

        <td>1.72</td>
        
      </tr>
       <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>30 days</td>
          <td>#5000</td>
        <td>0089</td>

        <td>1.72</td>
       
      </tr>
        <tr  className="ADDTimeDbg " >
        <th className=" ADDTimeDbg">09/11/2023</th>
          
        <td>1 day</td>
          <td>#70000</td>
        <td>0012</td>

        <td>1.72</td>
       
      </tr>
      <tr  className="ADDTimeDbg ">
        <th className="ADDTimeDbg">09/11/2023</th>
           
        <td>7 days</td>
          <td>#20000</td>
        <td>0029</td>

        <td>1.72</td>
        
        
      </tr>
  
        
      
   
     
    </tbody>
  </table>
</div>
</div> 

 <div className='mainDe allNewPaginate'>

    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`<pre`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />
  
  </div>




 

                </div>

              
               </div>

        </div>
        </div>
        </>

         :""}
        </>
        :""}
        {section1 === "userSection4"? <>
        <div className="pricing">
          <div className='MembershipP'>
            Set Your Membership Price Tag
          </div>
           <div className='PR17'>
              <select className='Sel'>
                <option>
                  daily
                </option>
                  <option>
                  weekly
                </option>
                  <option>
                  Monthly
                </option>
              </select>
            </div>
          <div className="pricingL PR">
            <div className='PR1'>
              <select className='Sel'>
                <option>
                  daily
                </option>
                  <option>
                  weekly
                </option>
                  <option>
                  Monthly
                </option>
              </select>
            </div>
           <div className='PR2'><input type="number" placeholder="Enter  Amount" className="PriceN"/></div>
           <div className='PR3'>
            <button className='PriceButton'>Enter</button>
           </div>
          </div>
          <div className="pricingL pricingL12">
            <div className="pricingL1"><span className='gameDay'> 1 day</span> <span className='gameDay ffDay'> ₦500</span> <button className="RemoveButton">Remove</button></div>
            <div className="pricingL1"> <span className='gameDay'> 7 days</span><span className='gameDay  ffDay'> ₦1000</span> <button className="RemoveButton">Remove</button></div>
            <div className="pricingL1"><span className='gameDay'> 30 days</span> <span className='gameDay ffDay'>₦1500</span> <button className="RemoveButton">Remove</button></div>
          </div>
        </div>
        </>:""}
             {section1 === "userSection5"? <>
                   <div className='bAcount'>
                    <div className="goms40">
             <div className='Mu1 goms'>
                     <div className=' dvd1 JohnKen5 minYU'  onClick={()=>setAccountSetting("edit")}><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Edit Profile</span></div>
                      <div className=' dvd1 JohnKen5 minYU' onClick={()=>setAccountSetting("Notification")} ><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Notification</span></div>
                      
                        <div className=' dvd1 JohnKen5 minYU' onClick={()=>setAccountSetting("MemberShip")} ><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Membership</span></div>
                       
                    
             </div>
             </div>
                  {accountSetting === "edit" ? <>
                  <div>
                    <div className='SetAE'>Account Settings</div>
                    <div className='bAcount SetAE1'>
                       <div className='ddE'>Email Address</div>
                       <div className=''><input type="email" placeholder='enter your email' className='ddE1'/></div>
                       <div><button className='Ch'>Save Changes</button></div>
                    </div>
                  </div>
                   <div>
                    <div className='SetAE'>Change Password</div>
                    <div className='bAcount SetAE1'>
                       <div className='ddE'>New Password</div>
                       <div className=''><input type="email" placeholder='enter your email' className='ddE1'/></div>
                       <div className='ddE'>Confirm Password</div>
                       <div className=''><input type="email" placeholder='enter your email' className='ddE1'/></div>
                       <div><button className='Ch'>Confirm</button></div>
                    </div>
                  </div>
                   <div>
                    <div className='SetAE'>Change Profile Photo</div>
                    <div className='bAcount SetAE1'>
                        
                       <div className="WonDiv Ch45">
                        <div><img src="/img/upload3.png" alt="" className="ch21"/></div>
                          <div>
                            <div className="uploadText uploadText1">Upload profile photo via:</div>
                           <div><input type ="file" /></div>
                           <div  style={{marginTop:"10px",color:"#acadd3"}}>Choose a photo from your personal computer. 3MB max.</div>
                          </div>
                       </div>
                    </div>
                  </div>
                     <div>
                    <div className='SetAE'>Personal Information</div>
                    <div className='bAcount SetAE1'>
                      <div className='WonDiv'>
                        <div className="jum">
                       <div className='ddE'>Full name</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       <div className="jum">
                       <div className='ddE'>Phone number</div>
                       <div className=''><input type="number" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       </div>
                        <div className='WonDiv'>
                        <div className="jum">
                       <div className='ddE'>Country</div>
                       <div className=''><input type="email" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       <div className="jum">
                       <div className='ddE'>Address</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       </div>
                        <div className='WonDiv'>
                        <div className="jum">
                       <div className='ddE'>State/Province</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       <div className="jum">
                       <div className='ddE'>City</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       </div>
                        <div className='WonDiv'>
                        <div className="jum">
                       <div className='ddE'>ZIP or postal code</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                      
                       </div>
                       <div><button className='Ch'>Save Changes</button></div>
                    </div>
                    <div className='SetAE'>Add Bank Information</div>
                    <div className='bAcount SetAE1'>
                       <div className='ddE'>Bank Name</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       <div className='ddE'>Account Name</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       <div className='ddE'>Account Number</div>
                       <div className=''><input type="number" placeholder='enter your email' className='ddE1'/></div>
                       <div><button className='Ch'>Confirm</button></div>
                    </div>
                  </div>
                  </> :""}

   {accountSetting === "Notification" ? <>
     <div>
                    <div className='SetAE'>Mobile Notifications / Text Messaging</div>
                    <div className='bAcount SetAE1'>
                      <div className='WonDiv'>
                        <div className="jum">
                       <div className='ddE'>Country</div>
                       <div className=''><input type="text" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       <div className="jum">
                       <div className='ddE'>Phone number</div>
                       <div className=''><input type="number" placeholder='enter your email' className='ddE1'/></div>
                       </div>
                       </div>
                       
                      
                      
                       <div><button className='Ch'>Verify via SMS</button></div>
                    </div>
                  </div>
                   <div>
                    <div className='SetAE'>Email Notifications</div>
                    <div className='bAcount SetAE1'>
                       <div className='ddE'>Email Address</div>
                       <div className=''><input type="email" placeholder='enter your email' className='ddE1'/></div>
                       <div><button className='Ch'>Save Changes</button></div>
                       <div className="Pnum">This phone number is not shared with anyone. It will be used only to receive sms notifications.</div>
                    </div>
                  </div>
                  </> :""}

                     {accountSetting === "deposit" ? <>
                  </> :""}

                     {accountSetting === "MemberShip" ? <>
                        <div className="wereAre AreWere">
          {card.map((app,id)=>(
                                <div className="cardProfileDiv TY44 eretYem"  style={{border:"1px solid rgb(61 62 126)"}}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1 TY38"/></div>
          <div className="donKing">Don Knight</div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
            <div className='jd1'></div>
          <div className='weNeed'>
       <div className='weNeed1 jd3'>
         <p className='weNeed2'>Active Membership</p>
         <div>
           <div className='paw1 weNeed6 jd'>
                                <div className='cic'></div>
                                <div className='bkInT'>1 Day <span className='moneyColor'>₦100</span></div>
                            </div>
                           <div className="StartDate">Start Date: 03/02/2022</div>
                           <div className="StartDate">End Date: 03/02/2022</div>
                           <div>Tips Received:1</div>
                           <div className="StartDate">Payment Method:Balance</div>
         
         </div>
         <div className="houseRuMM WonB  mainMa">Renew</div>
       </div>
       </div>
       
        </div>
        ))}
        </div>
                  </> :""}
   {accountSetting === "transaction" ? <>
                  </> :""}

                         </div> </>: ""}
                         {section1 === "userSection6" ?<>
                         <Demo1/>
                         </>:""}
                           {section1 === "userSection7" ?<>
                         <Demo2/>
                         </>:""}
      </div>
    </div>
    </div>

  </div>

{dashboardMenu ?
<div className="pKFin">
        <div className="kingYOU">
   <div className='Fa4'>
    <div  className="Fa41">
          <div className="prIconCl" onClick={()=>setDashboardMenu(!dashboardMenu)}>BK</div>
          <p className='NameBB'>samuel345</p>
          </div>
           <div className='Fa'>
             <div className='JohnKen4 KOMKN'> <div className='JohnKen5'><img src="/img/followers.png" alt=""/><span className='JohnKen7 JohnKMKM '>Followers</span></div><div className='JohnKen6 figi'>2400</div></div>
                     <div className='JohnKen4 KOMKN'> <div className='JohnKen5'><img src="/img/following.png" alt=""/><span className='JohnKen7 JohnKMKM '>Following</span></div><div className='JohnKen6 figi'>2600</div></div>
                     </div>
           
        </div>

        
         {isTipster ? 
                    <>
                    <div className='userD50'>
                      <div className=' dvd1 JohnKen5' onClick={Goma} style={{backgroundColor:section1 === "userSection" ? "#0d0740": "", borderLeft: section1 === "userSection" ? "2px solid #5157ab":"" }}><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen7'>Dashboard</span></div>
                      <div className='dvd1 JohnKen5' onClick={Goma1}  style={{backgroundColor:section1 === "userSection2" ? "#0d0740": "", borderLeft: section1 === "userSection2" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Tipster Wallet</span></div>
                       <div className='dvd1 JohnKen5' onClick={Goma2}  style={{backgroundColor:section1 === "userSection3" ? "#0d0740": "", borderLeft: section1 === "userSection3" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Affiliate Wallet</span></div>
                         <div className='dvd1 JohnKen5 ' onClick={Goma6}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Post Tip</span></div>
                           <div className='dvd1 JohnKen5 ' onClick={Goma7}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Post Result</span></div>
                           
                             <div className='dvd1 JohnKen5 ' onClick={Goma3}  style={{backgroundColor:section1 === "userSection1" ? "#0d0740": "", borderLeft: section1 === "userSection1" ? "2px solid #5157ab":"" }}><img src="/img/subscriptions.png" alt=""/> <span className='JohnKen7' >My Tips</span></div>
                        <div className='dvd1 JohnKen5'  onClick={Goma4}  style={{backgroundColor:section1 === "userSection4" ? "#0d0740": "", borderLeft: section1 === "userSection4" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Pricing</span></div>
                          <div className='dvd1 JohnKen5 ' onClick={Goma5}  style={{backgroundColor:section1 === "userSection5" ? "#0d0740": "", borderLeft: section1 === "userSection5" ? "2px solid #5157ab":"" }}><img src="/img/settings.png" alt=""/> <span className='JohnKen7'>Setting</span></div>
                          </div>
                          </>
                          :
                          <>
                          <div className='userD50'>
                      <div className='dvd1 JohnKen5' onClick={()=>setSection1('userSection')}><img src="/img/dashboard-icon1.png" alt=""/> <span className='JohnKen5'> Dashboard</span></div>
                      <div className='dvd1 JohnKen5 '><img src="" alt=""/> <span className='JohnKen5'> Main Wallet</span></div>
                       <div className='dvd1 JohnKen5 'onClick={()=>setSection1('userSection3')}><img src="" alt=""/> <span className='JohnKen5' > Affiliate Wallet</span></div>
            
                             <div className='dvd1 JohnKen5 '><img src="/img/subscriptions.png" alt=""/> <span className='JohnKen5'>Subscription</span></div>
                          <div className='dvd1 JohnKen5 '><img src="/img/settings.png" alt=""/> <span className='JohnKen5'>Setting</span></div>
                          <div className='dvd1 JohnKen5 '><img src="" alt=""/> <span className='JohnKen5'>Become a Tipster</span></div>
                           </div>
                          </>}
                          </div>
</div>
 :""}
     


             {modal ? 
            <div>

            <div className="Deposit_Modal" onClick={reOpen}>
            </div>
                <div className="Deposit_Modal_Div_Div">
                  
                    {(deposit === "depositMe") ||(deposit ==="subScriptionP")? 
                    <div className="FirstDivFolder">
                        <div className="popo">
                    <div className="DepositY">{deposit === "depositMe"? "Deposit" :deposit === "subScriptionP" ? "Subscrpition Payment" :"" }</div>
                     {message && <p className="popo1">{message}</p>}
                    <p className="AnyPay">{deposit === "depositMe"?"Convinient payment method for You.":""}</p>
                    {deposit === "depositMe"? 
                    <div className="DivflutterWave">
                        <div className="Wave1">
                            <p className="PinW">Flutterwave Secured Payment.</p>
                            <div className="Wave2" onClick={trig}>
                                <p className="payWithY">Pay with</p>
                                <p className="CardBankTM">Card,Bank Transfer,Bank Deposit,USSD Code Mobile Money,Paga,Paypal</p>
                            </div>
                        </div>
                    
                    </div>
                    :<div>
<p className="PinW">Available Balance</p>
                        <p className="WidrawMoney">₦{mainWallet}.00</p>
                        </div>}
                    <form>
                      

                        <div className="ProccedRent">
                            <input type="number" placeholder={pinAmount} className={move? "ProccedRent1":"ProccedRent1 addFine"} value={ deposit === "subScriptionP"? subscriptionAmount:amount} onChange={(e)=>setAmount(e.target.value)}/></div>

                        <div className="MMMYE"   onClick={ deposit === "subScriptionP"? handleSubscription : flut}>Proceed</div>
                    </form>
                    </div>
                    </div>
                    :" "}

                    {withdraw === 'withdrawMe' ? 
                    <div className="SecondDivFolder">
                        <div className="popo">
                        <p className="DepositY">Withdraw</p>
                        {message5 && <p className="popo1">{message5}</p>}
                        <p className="PinW">Available Balance</p>
                        <p className="WidrawMoney">₦{mainWallet}.00</p>
                        <form>
                            <p>Amount to withdraw</p>
                            <div className="ProccedRent fback"><input type="number" placeholder="EnterAmount"
                            className="ProccedRent1 loo"  name="withdrawalAmount" onChange={handleChanges}/></div>
                            <p style={{textAlign:"center",margin:"5px 2px"}}>to</p>
                            <p>Account name</p>
                            <div className="ProccedRent fback"><input type="text" placeholder="Account name"
                            className="ProccedRent1 loo" name="accountName" onChange={handleChanges}/></div>
                            <p style={{marginTop:"4px"}}>Account no</p>
                            <div className="ProccedRent fback"><input type="number" placeholder="Account no"
                            className="ProccedRent1 loo" name="accountNo" onChange={handleChanges}/></div>
                            <div className="MMMYE" onClick={handleWithdrawal}>Withdraw</div>
                            <p className="WithdrawTextIn">Note : All withdrawals are processed authomatically within 24hrs.</p>
                        </form>
                     </div>
                    </div>

                    : ""}

                     {withdraw === 'airtime' ? 
                    <div className="SecondDivFolder">
                        <div className="popo">
                        <p className="DepositY">Airtime Recharge</p>
                        {message && <p className="popo1">{message}</p>}
                        <p className="PinW">Available Balance:<span style={{color:"#26b991",fontSize:"19px",fontWeight:"600"}}>Main Wallet</span></p>
                        <p className="WidrawMoney">₦{mainWallet}.00</p>
                        <form>
                              <div className="OTPDIV1">
                                <p style={{color:"gray",fontSize:"14px",marginBottom:"5px"}}>Choose your network:</p>
                 <div className="OTPDiv">
                   <div className="codePP" onClick={iconD2}> <img src="/img/Airtel-logo.jpg" alt="" style={{width:"100%",borderRadius:"10px",height:"100%"}} /> <FontAwesomeIcon icon={faCircleCheck} className={network === "airtel"? `circleCheck ${iconShow}`:"circleCheck"}/> </div> 
                    <div className="codePP" onClick={iconD1}> <img src="/img/New-mtn-logo.jpg" alt="" style={{width:"100%",borderRadius:"10px",height:"100%"}} /><FontAwesomeIcon icon={faCircleCheck} className={network === "MTN"? `circleCheck ${iconShow}`:"circleCheck"} /> </div> 
                     <div className="codePP" onClick={iconD}><img src="/img/Glo2.jpg" alt="" style={{width:"100%",borderRadius:"10px",height:"100%"}} />
                     <FontAwesomeIcon icon={faCircleCheck} className={network === "Glo"? `circleCheck ${iconShow}`:"circleCheck"} /> </div> 
                    

                 </div>
                 </div>
                           
                            <p>Mobile Number</p>
                            <div className="ProccedRent fback"><input type="number" placeholder="Mobile Number"
                            className="ProccedRent1 loo" name="mobileNumber" value={airtimeInfo.mobileNumber} onChange={handleChanges4}/></div>
                            <p style={{marginTop:"8px"}}>Amount</p>
                            <div className="ProccedRent fback"><input type="number" placeholder="₦  0.00"
                            className="ProccedRent1 loo" name="amount" value={airtimeInfo.amount} onChange={handleChanges4}/></div>
                            <div className="MMMYE" onClick={airtimePurchase2}>Continue</div>
                        
                        </form>
                     </div>
                    </div>

                    : ""}

                     {withdraw === 'data' ? 
                    <div className="SecondDivFolder">
                        <div className="popo">
                        <p className="DepositY">Data Bundles</p>
                        {message && <p className="popo1">{message}</p>}
                        <p className="PinW">Available Balance:<span style={{color:"#26b991",fontSize:"19px",fontWeight:"600"}}>Main Wallet</span></p>
                        <p className="WidrawMoney">₦{mainWallet}.00</p>
                        <form>
                              <div className="OTPDIV1">
                                <p style={{color:"gray",fontSize:"14px",marginBottom:"5px"}}>Choose your network:</p>
                 <div className="OTPDiv">
                   <div className="codePP" onClick={iconD2}> <img src="/img/Airtel-logo.jpg" alt="" style={{width:"100%",borderRadius:"10px",height:"100%"}} /> <FontAwesomeIcon icon={faCircleCheck} className={network === "airtel"? `circleCheck ${iconShow}`:"circleCheck"}/> </div> 
                    <div className="codePP" onClick={iconD1} > <img src="/img/New-mtn-logo.jpg" alt="" style={{width:"100%",borderRadius:"10px",height:"100%"}} /><FontAwesomeIcon icon={faCircleCheck} className={network === "MTN"? `circleCheck ${iconShow}`:"circleCheck"} /> </div> 
                     <div className="codePP" onClick={iconD}><img src="/img/Glo2.jpg" alt="" style={{width:"100%",borderRadius:"10px",height:"100%"}} />
                     <FontAwesomeIcon icon={faCircleCheck} className={network === "Glo"? `circleCheck ${iconShow}`:"circleCheck"} /> </div> 
                    

                 </div>
                 </div>
                           <select style={{width:"100%",padding:"8px 2px"}}>
                            <option>MTN</option>
                             <option>Glo</option>
                              <option>Airtel</option>
                           </select>
                            <p>Mobile Number</p>
                            <div className="ProccedRent fback"><input type="number" placeholder="Mobile Number"
                            className="ProccedRent1 loo" name="mobileNumber" value={airtimeInfo.mobileNumber} onChange={handleChanges4}/></div>
                            <p style={{marginTop:"8px"}}>Amount</p>
                            <div className="ProccedRent fback"><input type="number" placeholder="₦  0.00"
                            className="ProccedRent1 loo" name="amount" value={airtimeInfo.amount} onChange={handleChanges4}/></div>
                            <div className="MMMYE" onClick={airtimePurchase2}>Continue</div>
                        
                        </form>
                     </div>
                    </div>

                    : ""}

                    {transfer === "transferMe"? 
                    <div className="ThirdDivFolder">
                        <p className="DepositY">Transfer</p>
                        {error && <p className="popo1">{error}</p>}
                        <p className="PinW">Affliaite Balance</p>
                        <p className="WidrawMoney">₦{affliateWallet}</p>
                        <form>
                            <div className="ProccedRent"><input type="text" placeholder="EnterAmount"
                            className="ProccedRent1"
                            value={amount1}
                            onChange={(e)=>setAmount1(e.target.value)}/></div>
                            <div className="MMMYE" onClick={handleTransfer}>Proceed</div>
                            
                        </form>

                    </div>
                    :""}
                </div>

                <div>

                </div>
            </div>
           :"" } 


           {modal5 ? 
<>
 {pipDeposit === "depositL"? 
   <div className="dep">
    <div className='epv'>
     <div className="epv1">
      <div className="vipn">
      <div className="epv2">Deposit To MainWallet</div>
      <FontAwesomeIcon icon={faXmark} className="ravs" onClick={reLpen} />
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
  pipDeposit === "transferL"? 
  <div className='dep' >
    <div className='epv' >
  <div className="epv1">
     <div className="vipn">
      <div className="epv2">P2p Transfer</div>
      <FontAwesomeIcon icon={faXmark} className="ravs" onClick={reLpen} />
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
 pipDeposit  === "withdrawalL"? <>
  <div className="dep" >
    <div className='epv'>
     <div  className="epv1">
      <div className="vipn">
      <div className="epv2"> Withdrawal From MainWallet</div>
      <FontAwesomeIcon icon={faXmark} className="ravs" onClick={reLpen} />
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

    </div>
  )
}

export default UserDashboard
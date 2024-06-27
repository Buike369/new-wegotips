import React,{useState,useContext, useEffect} from "react";
import "./style/walletOverView.css"
import { Link} from "react-router-dom";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { AuthContext } from './context/authContext';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'


const WalletOverView =()=>{

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
    //  const [successSub,setSuccessSub] = useState()
    // const [referralId,setRefferalId] = useState(0)
    //  const [referredId,setRefferedId] = useState(1)
     const [walletOverview,setWalletOverview] = useState([])
    const [depositCash,setDepositCash]= useState([])
    const [referrals2,setReferrals2] = useState([])
    // const [Active,setActivem] = useState("active")
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
    //  const [transferInfo,setTransferInfo] = useState({
    //     referralAmount:""
       
    // })
    const [responseInfo,setResponseInfo] = useState([])


    const handleChanges =(e)=>{
        setWithdrawalInfo(prev =>({...prev,[e.target.name]:e.target.value}))
    }
    const handleChanges4 =(e)=>{
        setAirtimeInfo(prev =>({...prev,[e.target.name]:e.target.value,network:network}))
    }
    //   const handleChanges1 =(e)=>{
    //     setTransferInfo(prev =>({...prev,[e.target.name]:e.target.value}))
    // }

   const mon = [withdrawalInfo,{main:mainWallet}]
    const date = new Date();
 
 

    const showTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();




    // To set two dates to two variables
    const date4 = new Date("06/30/2019");
    const date5 = new Date("06/31/2019");

        // To calculate the time difference of two dates
        const Difference_In_Time = date5.getTime() - date4.getTime();

        // To calculate the no. of days between two dates
     const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // console.log(showTime)


    const dayBy = new Date();
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
  
    const day = Date.now;
   
 const iconD =()=>{
    setIconShow("circleDisplay")
     setNetwork("Glo");
     setAirtimeInfo({
        mobileNumber:"",
        amount:""
     })
 } 

  const iconD1 =()=>{
    setIconShow("circleDisplay")
     setNetwork("MTN")
     setAirtimeInfo({
        mobileNumber:"",
        amount:""
     })
 } 

  const iconD2 =()=>{
    setIconShow('circleDisplay')
    setNetwork("airtel")
    setAirtimeInfo({
        mobileNumber:"",
        amount:""
     })
 } 

    
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
const transferT =()=>{
    setWithdraw('')
    setDeposit('')
    setTransfer("transferMe")
    setModal(!modal)
    document.body.classList.add('hou')
}

const reOpen =()=>{
    setModal(!modal);
    document.body.classList.remove('hou')
}

const trig =()=>{
    setPinAmount("Enter Amount")
    setMove(false)
    setActive(!active)
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


    //  const getSubscriptionStatus =async()=>{
    //     try{
    //   await axios.get(`/user/subscription-status/${currentUser.id}`)
    //     }catch(err){
    //      console.log(err)
    //     }

    //  }
              
    
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

const ego = [{amount:depositCash.amount,id:currentUser.id,mainA:mainWallet},depositCash.customer]

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

//   const milk =walletOverview.map((app)=>([
//   {type:'deposit',date:app.created_at, amount:app.d_amount,Id:app.user_deposit_id},{type:"transfer",date:app.pep,amount:app.transfer_amount,id:app.user_transfer_id},{type:"withdrawal",date:app.withdrawal_date,amount:app.withdrawal_amount,id:app.withdrawal_user_id}
//   ]))
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
  

    return(
        <div className="Parent_Over_File_Bg BgColorT"   style={{backgroundImage: "linear-gradient(to right, rgb(4, 7, 22), rgb(10, 9, 22))"}}>


<div style={{padding:"0 5px"}}>
    <div className="WallForm">
       {error && <p style={{position:"absolute",top:"18%",left:"50%",color:"#fff",textAlign:"center",background:"red",padding:"10px 5px"}}>{error}</p>}
            <div className="Wallet_P_Div Wallet_Up_Div">
                <div className="Pmain">
                <div className="P_P">
                    <div className={wallet === "wallets" ?"overView gbg" : "overView" } onClick={setGo1}>Wallet Overview</div>
                    <div className={subscription === "going" ?"overView gbg" : "overView" }
                    onClick={setGo}>Subscription</div>
                    <div className={refferal === "fort" ?"overView gbg" : "overView" } onClick={setGo2}>My Referrals</div>
                </div>
                </div>

                <p className="Status_Active">Account Status <span className="Actn" style={{backgroundColor:subActive==="active"?"greenyellow":"#080816"}}>{subActive}</span></p>
                

                <div className={divFlex}>

              


                <div>
                <div className="LikeSed">
              <div className="TREEH">
                  <div className="Main_WALL">
                      <div className="Firet">
                      <div className="Main_WALL1">
                          <p className="Is_KB">Main Wallet</p>
                          <p className="Is_KB1">₦{mainWallet}.00</p>
                      </div>
                      <div className="Depost">
                          <p className="dep1 add1" onClick={ depositT}>Deposit</p>
                          <p className="dep1 add2" onClick={withdrawT}>Withdraw</p>
                      </div>
                      </div>
                  </div>
                  <div className="Main_WALL">
                      <div className="Main_WALL1">
                          <p className="Is_KB">Tipster Wallet</p>
                          <p className="Is_KB1">₦{affliateWallet}.00</p>
                      </div>
                      <div className="Trans" onClick={transferT}>Transfer</div>
                  </div>
                  <div className="Main_WALL">
                      <div >
                          <div className="With_upto">
                          <div className="Pay_Bills">Pay bills with upto 5% discount</div>
                          <div className="Data"> 
                            <div className="Betting1">
                                <div className="AIR_I" onClick={airtimePurchase}>Airtime</div>
                                <div className="AIR_I" onClick={dataPurchase}>Data</div>
                                <div className="AIR_I">Betting</div>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="TREEH" style={{marginTop:"20px"}}>
                  <div className="Main_WALL">
                      <div className="Firet">
                      <div className="Main_WALL1">
                          <p className="Is_KB">Main Wallet</p>
                          <p className="Is_KB1">₦{mainWallet}.00</p>
                      </div>
                      <div className="Depost">
                          <p className="dep1 add1" onClick={ depositT}>Deposit</p>
                          <p className="dep1 add2" onClick={withdrawT}>Withdraw</p>
                      </div>
                      </div>
                  </div>
                  <div className="Main_WALL">
                      <div className="Main_WALL1">
                          <p className="Is_KB">Tipster Wallet</p>
                          <p className="Is_KB1">₦{affliateWallet}.00</p>
                      </div>
                      <div className="Trans" onClick={transferT}>Transfer</div>
                  </div>
                  <div className="Main_WALL">
                      <div >
                          <div className="With_upto">
                          <div className="Pay_Bills">Pay bills with upto 5% discount</div>
                          <div className="Data"> 
                            <div className="Betting1">
                                <div className="AIR_I" onClick={airtimePurchase}>Airtime</div>
                                <div className="AIR_I" onClick={dataPurchase}>Data</div>
                                <div className="AIR_I">Betting</div>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
              </div>
              
   <div>

           { wallet === "wallets"? 
             <div>
                 <div className="Att">
                 <p className="AllTrans"> All transanction</p>
                 <div>
                     <ul className="TYPE_DATE">
                         <li className="STaTus">Date</li>
                         <li className="STaTus">Type</li>
                         <li className="STaTus">Amount</li>
                         <li className="STaTus">Recipiant</li>
                         <li className="STaTus">Status</li>
                     </ul>
                 </div>

                 {walletOverview.map((app,id)=>(
                <div className="DOPOPO" key={id}>
                     <ul className="DopoR">
                         <li className="SuccessId">{app.date}</li>
                         <li className="SuccessId">{app.type}</li>
                         <li className="SuccessId">₦{app.amount}</li>
                         <li className="SuccessId">ID:00{app.id}</li>
                         <li className="SuccessId">{app.status}</li>
                     </ul>
                 </div>
                 ))}

                 
                 
                 </div>
             </div>
             :""}


           {subscription ==="going"? 
            <div> <div className="Silver_Weekly2">
                 <div className="Silver_Weekly">

                     <div className="Pack">Premium Subscription</div>
                     <div className="Access1">
                     <p className="AccessTo">Get Access to all our prediction. </p>
                     <p className="AccessTo">Premium Tips For 30days</p>
                     <div className="Going1"><p className="Going"> $50/₦25,000</p></div>
                     </div>
                     <div className="NOWYY"><button className="BUbU"  onClick={subscript}>Subcribe Now</button></div>
                 </div>

               

                

                 

             </div>
                
             <div className="InvestorBy">

             <p className="Ifum">Don't be a <span className="Gambmi">Gambler</span>, Be an <span className="VES">Investor</span>. <span className="Iam">We are <span className="VES">Investors</span> and we deliver 50-100% profits 95% of the time.</span> start investing with us today.</p>
                <div className="termsApp">Terms & Conditions Apply </div>


               

             </div></div>
             :""}

             {refferal === "fort" ? 
             <div className="ILOVEP">
                 <div className="AllTrans">
                      <div><span className="REEE">Total Number Refferal:</span> 250</div>
                      <div> <span className="REEE">Active:</span> 200</div>
                      <div><span className="REEE">Inactive:</span> 50</div>
                    </div>
                 <div>
                     <ul className="TYPE_DATE">
                         <li className="STaTus">Date</li>
                         <li className="STaTus">Referred ID</li>
                        
                         <li className="STaTus">Commission</li>
                         <li className="STaTus">Status</li>
                     </ul>
                 </div>
                 {referrals2.map((app,id)=>(
                <div className="DOPOPO" key={id}>
                     <ul className="DopoR">
                         <li className="SuccessId">{app.created_at}</li>
                         <li className="SuccessId">ID:000{app.referred_user_id}</li>
                       
                         <li className="SuccessId">₦{subscriptionAmount * 0.5}</li>
                         <li className="SuccessId">Active</li>
                     </ul>
                 </div>
                 ))}

             </div>
             :""}

</div>

</div>

            
            </div>
               

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
                        {/* {active? 
                        <div className="ProccedRent">
                            <input type="text" placeholder={pinAmount} className={move? "ProccedRent1":"ProccedRent1 addFine"} disabled/></div>
                            :<div className="ProccedRent">
                            <input type="text" placeholder={pinAmount} className={move? "ProccedRent1":"ProccedRent1 addFine"} /></div>
                            } */}

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
            
            </div>
            </div>
        </div>
    )
}

export default WalletOverView;

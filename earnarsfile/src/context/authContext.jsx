import React ,{createContext,useEffect,useState} from "react"
import axios from "axios"

export const AuthContext = createContext()


export const AuthContextProvider = ({children})=>{
    // const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [forgotEmail,setForgotEmail] = useState((localStorage.getItem("email")) || null)
    const [isPaid,setIsPaid] = useState(1)
     const [coin,setCoin] = useState("NGN")
    const [purchaseType,setPurchaseType] = useState("Buy")

    const login = async(inputs)=>{
       const res = await axios.post("https://tea.earnars.com/api/auth/login",inputs);
       setCurrentUser(res.data)
      //  console.log(res.data)
    }

      const forgotPassword = async(email2)=>{
      //  const res = await axios.post("http://localhost:8080/api/auth/password-reset",email2);
        const res = await axios.post("https://tea.earnars.com/api/auth/password-reset",email2);

       setForgotEmail(res.data.msg)
      //  console.log(res)
    }


   //  const update = async(inputs)=>{
   //     const res = await axios.put("/post/:id",inputs);
   //     setCurrentUser(res.data)
   //  }
    const logout = async(inputs)=>{
        await axios.post("https://tea.earnars.com/api/auth/logout");
        setCurrentUser(null)
     }

    

     useEffect(()=>{
     
   localStorage.setItem("user" || "email",JSON.stringify(currentUser,forgotEmail))

     },[currentUser,forgotEmail]);

        
      const getSubscriptionPay = async()=>{
        try{
       const res = await axios.get(`https://tea.earnars.com/api/user/subscription-pay/${currentUser.id}`)
        setIsPaid(res.data.pop().subscription_pay)
        }catch(err){
          console.log(err)
        }
        
      }

      useEffect(()=>{
          if(currentUser){
             getSubscriptionPay()
             }
     },[isPaid]);
  

   
     
     return <AuthContext.Provider value={{currentUser,forgotEmail,isPaid,setIsPaid,login,logout,forgotPassword,purchaseType,setPurchaseType,coin,setCoin}}>{children}</AuthContext.Provider>
}

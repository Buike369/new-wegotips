import React ,{createContext,useEffect,useState} from "react"
import axios from "axios"

export const AuthContext = createContext()


export const AuthContextProvider = ({children})=>{
  // const wegoUrl = 'https://wegotips.com/api';
  const wegoUrl = '/api';
    // const wegoUrl = 'http://localhost:5001/api';
    // const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [forgotEmail,setForgotEmail] = useState((localStorage.getItem("email")) || null)
    const [isPaid,setIsPaid] = useState(1)
     const [coin,setCoin] = useState("NGN")
    const [purchaseType,setPurchaseType] = useState("Buy")

    const login = async(inputs)=>{
       const response = await axios.post(`${wegoUrl}/auth/login`,inputs);
       setCurrentUser(response.data)
       console.log(response)
    }

      const forgotPassword = async(email)=>{
      //  const res = await axios.post("http://localhost:8080/api/auth/password-reset",email2);
        const res = await axios.post(`${wegoUrl}/auth/forgot-password`,email);

      //  setForgotEmail(res.data.message)
       setForgotEmail(email.email)
       console.log(res)
       
    }


   //  const update = async(inputs)=>{
   //     const res = await axios.put("/post/:id",inputs);
   //     setCurrentUser(res.data)
   //  }
    const logout = async(logM)=>{
     const p =  await axios.post(`${wegoUrl}/auth/logout`,logM);
        // await axios.post(`${wegoUrl}/auth/logout`);
        setCurrentUser(null)
        
     }

 

    

     useEffect(()=>{
     
   localStorage.setItem("user" || "email",JSON.stringify(currentUser,forgotEmail))

     },[currentUser,forgotEmail]);

        
      const getSubscriptionPay = async()=>{
        try{
       const res = await axios.get(`${wegoUrl}/user/subscription-pay/${currentUser.id}`)
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

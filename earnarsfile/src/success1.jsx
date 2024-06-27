import React from 'react'

const success1 = ({succ}) => {
  return (
    <div>
        <div style={{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",background:"#24242a3b"}}>
            <div style={{position:'absolute',left:"50%",top:"20%",transform:"translate(-50%,-50%)"}}>

        <div style={{padding:"20px 20px",background:"#fff",width:"300px",borderRadius:"15px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",display:"flex",justifyContent:'center',flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"100px",height:"100px",marginBottom:"10px"}}>
                <img src="/img/success.png" alt="" style={{width:"100%",height:"100%"}}/>
            </div>
            <p style={{color:"#000",fontSize:"18px",fontWeight:"600",textAlign:"center"}}>{succ}</p></div>
        </div>
        </div>
    </div>
  )
}

export default success1;
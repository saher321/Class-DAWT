import React, { useState } from 'react'
import axios from 'axios'

function AuthLogin() {

    const [email, setEmail]= useState('')
    const [pass, setPass]= useState('')


    const handleSubmit = async()=>{

        const data = {
            email,
            password:pass
        }
        // console.log(send)

        const resp = await axios.post('http://api', data)

    }


  return (
    <div style={{width:'100%', height:'100vh', background:'#36454F', display:'flex', justifyContent:'center', alignItems:'center'}} >
        <div style={{
            width:'400px',
            height:'400px',
            border:'1px solid gray',
            borderRadius: '10px'

        }} >

<h1>login</h1>


<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', border:'1px solid red', height:'200px', padding:'10px'}} >


<input onChange={(text)=>setEmail(text.target.value)} type="text" placeholder='Enter your E-mail ...' style={{width:'100%', padding:'5px', border:'1px solid gray',height:'30px', borderRadius:'3px' }} />

<input onChange={(text)=>setPass(text.target.value)} type="password" placeholder='********' style={{width:'100%',margin:'15px 0', padding:'5px', border:'1px solid gray', height:'30px',borderRadius:'3px'  }} />

<button onClick={()=>handleSubmit()} style={{width:'100%', padding:'7px', borderRadius:'10px',border:'none',borderRadius:'3px', cursor:'pointer', background:'#023020', color:'white'}}  >login</button>
</div>


        </div>
      
    </div>
  )
}

export default AuthLogin

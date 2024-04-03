import React, { useState } from 'react'
import "./CSS/login.css"
const Login = () => {
  const [state,setState]=useState("login")
  const [formData,setFormdata]=useState({
    username:"",
    password:"",
    email:""
  })
  const login=async()=>
  {
     console.log("login",formData)
     let responseData;
     await fetch("http://localhost:8000/login",{
       method: "POST",
       headers:{"Content-Type":"application/json",
       Accept:"Application/json"},
     body:JSON.stringify(formData)
     }).then((response)=>response.json()).then((dta)=>responseData=dta)
     if(responseData.success)
     {
       localStorage.setItem("auth-token",responseData.token)
       window.location.replace("/")
     }
     else{
       alert(responseData.errors)
     }

  }
  const signup=async()=>
  {
    console.log("signup",formData)
    let responseData;
    await fetch("http://localhost:8000/signup",{
      method: "POST",
      headers:{"Content-Type":"application/json",
      Accept:"Application/json"},
    body:JSON.stringify(formData)
    }).then((response)=>response.json()).then((dta)=>responseData=dta)
    if(responseData.success)
    {
      localStorage.setItem("auth-token",responseData.token)
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
  }
  const changehadler=async(e)=>
  {
       setFormdata({...formData,[e.target.name]: e.target.value})
  }
  return (
    <div className='login'>
      <div className='logincontainer'>
        <h1>{state}</h1>
        <div className='login-fields'>
        {state==="sign up"?  <input type='text' name='username'   value={formData.username} onChange={changehadler} placeholder='Your Name'></input>:<></>}
          <input value={formData.email} name='email' onChange={changehadler} type='email' placeholder='Email Address'></input>
          <input value={formData.password} name='password' onChange={changehadler} type='password' placeholder='password'></input>
        </div>
        <button onClick={()=>{state==="login"?login():signup()}}>Continue</button>
        {state==="sign up"?  <p className='loginsignup-login'>Already have an Account?<span onClick={()=>{setState("login")}}>
          login here.
        </span></p>: <p className='loginsignup-login'>Create an Account?<span onClick={()=>{setState("sign up")}}>
          click here.
        </span></p>}
      
       
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''></input>
          <p>By continueing,i agree to thr terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
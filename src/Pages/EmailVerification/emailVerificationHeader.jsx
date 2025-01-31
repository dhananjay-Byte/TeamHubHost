import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
function EmailVerificationHeader() {
    const {response} = useSelector((state)=>state.register)
  const navigate = useNavigate()
   useEffect(()=>{
    if(response?.isVerfied){
        toast.success('User Registered Successfully',{
            duration:2000
          })
          navigate('/');
    }
},[response?.isVerfied ])

  return (
    <div>
        <h1 className='bg-black w-screen h-screen text-white text-3xl flex items-center justify-center'>
            Please Check Your Mail for Verification
        </h1>
    </div>
  )
}

export default EmailVerificationHeader
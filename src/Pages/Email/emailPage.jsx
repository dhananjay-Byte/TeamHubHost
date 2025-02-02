import React from 'react'
import Sidebar from '../../Components/sidebar'
import Mail from 'Email_Frontend/Mail'

function EmailPage() {
  return (
    <div className='flex bg-[#3C3D37]'>
        <Sidebar/>
        <div className='w-screen h-screen flex items-center justify-center'>
        <Mail/>
        </div>
    </div>
  )
}

export default EmailPage
import React from 'react'
import Sidebar from '../../Components/sidebar'
import Mail from 'Email_Frontend/Mail'

function EmailPage() {
  return (
    <div className='flex bg-slate-400 gap-2'>
        <Sidebar/>
        <div className='mt-2'>
        <Mail/>
        </div>
    </div>
  )
}

export default EmailPage
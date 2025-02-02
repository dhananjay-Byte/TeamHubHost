import React from 'react'
import Sidebar from '../../Components/sidebar'
import AddTask from '../../Components/addTask'

function TaskPage() {
  return (
    <div className='flex w-screen h-screen bg-[#3C3D37]'>
        <Sidebar/>
        <div className='flex w-screen flex-col '>
        <div className='flex justify-end m-2'>
           <AddTask/>
        </div>
        <div className='flex justify-center mt-[100px] overflow-y-auto'>
         No Tasks to display
        </div>
        </div>
        
    </div>
  )
}

export default TaskPage
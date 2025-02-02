import React,{useState} from 'react'
import AddTaskForm from './addTaskForm'

function AddTask() {
     const [toggleForm, setToggleForm] = useState(false);
        const toggleFormButton = () => setToggleForm(!toggleForm)
  return (
    <div className=' text-black'>
        <div>
            <button onClick={toggleFormButton} className='border font-semibold border-white shadow-sm shadow-slate-400 rounded-md p-2 text-xl'>Add Task</button>
        </div>

        {
            toggleForm && (
                <Modal>
                    <AddTaskForm toggleButton={toggleFormButton}/>
                </Modal>
            )
        }
    </div>
  )
}
const Modal = ({ children }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        {children}
    </div>
)
export default AddTask
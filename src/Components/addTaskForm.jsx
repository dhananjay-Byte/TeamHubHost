import React, { useEffect, useState } from "react";
import axios from 'axios'

const AddTaskForm = ({ toggleButton}) => {

    const [task,setTask] = useState()
    const[description,setDescription] = useState()
const apiURL = process.env.REACT_APP_API_URL_BASE



    const handleCancel = (e) => {
        e.preventDefault()
        toggleButton();
    }
    

    const handleAddTask = async (e) => {
        e.preventDefault();
        
        if (!task || !description) {
            alert("All fields are required");
            return;
        }
    
        try {
            const response = await axios.post(`${apiURL}/v1/api/task/add-task?userId=${localStorage.getItem('id')}`, 
            {
                "taskName": task,
                "taskDescription": description
            }, 
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' }
            });
    
            alert('Task Added Successfully!');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.log('Error in task:', error);
            const errorMessage = error.response?.data?.message || 'An error occurred.';
            alert(errorMessage);
        }
    };
    

    return (
        <div className="flex w-screen h-screen  items-center justify-center">
            <div className=" w-[50%] py-4 px-4 shadow-sm shadow-slate-400 rounded-md bg-black text-white border border-white">
                <h3 className="text-2xl font-semibold">Add Task</h3>
                <p>Enter task details!</p>
                <form className="mt-[10px]">

                    <input
                        type="text"
                        placeholder="Task Name"
                        name="taskName"
                        onChange={(e)=>setTask(e.target.value)}
                        required
                        className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
                    />
                    
                        <div className="md:col-span-2 mt-4">
                            <textarea
                                rows="5"
                                placeholder="Task Description"
                                name="taskDescription"
                                onChange={(e)=>setDescription(e.target.value)}
                                required
                                className="w-full text-black border border-gray-300 rounded-md py-2 px-3"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 flex gap-4 mt-4">


                            <button onClick={(e) => handleCancel(e)} className="py-3 text-base font-medium rounded text-black bg-white border  w-1/2 ">
                                Cancel
                            </button>

                            <button onClick={(e)=>handleAddTask(e)} className=" w-1/2 py-3 text-base font-medium rounded text-white border border-white bg-black">
                                Add Task
                            </button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskForm;

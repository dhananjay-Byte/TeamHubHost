import React, { useEffect, useState } from "react";
import axios from 'axios'

const AddTaskForm = ({ toggleButton}) => {

    const [formData, setFormData] = useState();
const apiURL = process.env.REACT_APP_API_URL_BASE


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCancel = (e) => {
        e.preventDefault()
        toggleButton();
    }
    

    const handleAddTask = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`${apiURL}/v1/api/task/add-task?userId=${localStorage.getItem('id')}`, formData, {
                withCredentials: true,
                headers: { 'Content-Type': 'multipart/form-data' }
            });
    
            alert('Task Added Succesfully!');
    
            setTimeout(() => {
                window.location.reload();
            }, 2000);
    
        } catch (error) {
            console.log('error in task',error)
            const errorMessage =
                error.response?.data?.message || 'An error occurred.';
            
            alert(errorMessage); // Display the error message to the user
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
                        onChange={(e)=>handleInputChange(e)}
                        required
                        className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
                    />
                    
                        <div className="md:col-span-2 mt-4">
                            <textarea
                                rows="5"
                                placeholder="Task Description"
                                name="taskDescription"
                                onChange={(e)=>handleInputChange(e)}
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

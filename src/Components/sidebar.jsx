import React from 'react';
import { FaTasks } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="m-2 relative flex flex-col bg-clip-border rounded-xl bg-black text-white h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug">Welcome {localStorage.getItem('name')}</h5>
      </div>
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal">
        <a href='/tasks' role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-white  focus:bg-white  hover:text-black focus:text-black outline-none">
          <div className="grid place-items-center mr-4">
            <FaTasks/>
          </div>
          Tasks
        </a>
        <a href='/chat' role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-white  focus:bg-white  hover:text-black focus:text-black outline-none">
          <div className="grid place-items-center mr-4">
            <IoChatbox/>
          </div>
          Chats
        </a>
       
        <a href='/mail' role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-white  focus:bg-white  hover:text-black focus:text-black outline-none">
          <div className="grid place-items-center mr-4">
            <MdEmail/>
          </div>
          Emails
        </a>
       
        <a role="button" tabIndex="0" className="flex  items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-white  focus:bg-white  hover:text-black focus:text-black outline-none">
          <div className="grid place-items-center mr-4">
            <IoLogOut/>
          </div>
          Log Out
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from 'react'
import Sidebar from '../../Components/sidebar'
import Chat from 'chat_app/Chats'

function ChatPage() {
    const userName = localStorage.getItem('name')
    return (
        <div className='flex bg-[#3C3D37]'>
            <Sidebar/>
            <div className='w-screen h-screen flex items-center justify-center'>
                <Chat user={userName}/>
            </div>
        </div>
    )
}

export default ChatPage
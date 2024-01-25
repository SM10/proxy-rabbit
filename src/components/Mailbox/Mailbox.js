import "./Mailbox.scss"
import ChatList from '../ChatList/ChatList';
import ChatBox from '../ChatBox/Chatbox';
import {useState, useRef} from 'react';

function Mailbox(){

    const chatListRef = useRef()
    const chatBoxRef = useRef()
    const [isOnChatList, setIsOnChatList] = useState(true)
    
    function onClick(e){
        if(isOnChatList){
            chatListRef.current.style.left = "-100%";
            chatBoxRef.current.style.right = "0";
            setIsOnChatList(false)
        }else{
            chatListRef.current.style.left = "0";
            chatBoxRef.current.style.right = "-100%";
            setIsOnChatList(true)
        }
    }

    return (<main className="mail main">
        <div className="mail-chatlist-container" ref={chatListRef}>
            <ChatList />
        </div>
        <div className="mail-chatbox-container" ref={chatBoxRef}>
            <ChatBox />
        </div>
    </main>)
}

export default Mailbox;
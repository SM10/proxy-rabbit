import "./Mailbox.scss"
import ChatList from '../ChatList/ChatList';
import ChatBox from '../ChatBox/Chatbox';
import {useState, useRef, useEffect} from 'react';
import axios from "axios";

function Mailbox({userProfile}){
    const chatListRef = useRef()
    const chatBoxRef = useRef()
    const [isOnChatList, setIsOnChatList] = useState(true)
    const [chatList, setChatList] = useState([])
    const [selectedRecipient, setSelectedRecipient] = useState(null);
    const [messageList, setMessageList] = useState([])

    useEffect(()=>{
        (async ()=>{
            try{
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/message`, {withCredentials: true})
            setChatList(response.data);
            }catch(error){
                console.log(error);
            }
        })()
    }, [])

    useEffect(()=>{
        if(selectedRecipient){
            console.log(selectedRecipient);
            (async ()=>{try{
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/message/${selectedRecipient.room_id}`, {withCredentials: true})
                setMessageList(response.data);
            }catch(error){
                console.log(error)
            }
            })()
        }
    }, [selectedRecipient])
    
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

    const onRecipientClicked = (recipient) =>{
        setSelectedRecipient(recipient)
    }

    return (<main className="mail main">
        <div className="mail-chatlist-container" ref={chatListRef}>
            <ChatList chatList={chatList} onUserClicked={onRecipientClicked}/>
        </div>
        <div className="mail-chatbox-container" ref={chatBoxRef}>
            <ChatBox recipient={selectedRecipient} user={userProfile} messageList={messageList} setMessageList={setMessageList}/>
        </div>
    </main>)
}

export default Mailbox;
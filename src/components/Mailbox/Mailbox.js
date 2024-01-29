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
            (async ()=>{try{
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/message/${selectedRecipient.room_id}`, {withCredentials: true})
                setMessageList(response.data);
            }catch(error){
                console.log(error)
            }
            })()
        }
    }, [selectedRecipient])

    const onRecipientClicked = (recipient) =>{
        setSelectedRecipient(recipient)
    }

    if(!userProfile){
        return (<main className="mail-unlogged main">
            <section className="mail-unlogged-outer">
                <div className="mail-unlogged-outer-container">
                    <h2 className="mail-unlogged-outer-container__text">User must be logged in to view this page</h2>
                </div>
            </section>
        </main>)
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
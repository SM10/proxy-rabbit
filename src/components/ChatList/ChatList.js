import './ChatList.scss';
import UserCard from '../UserCard/UserCard';
import {useState, useEffect} from 'react';
import axios from 'axios';

function ChatList(){
    const [chatList, setChatList] = useState([])

    useEffect(()=>{
        (async ()=>{
            try{
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/message`, {withCredentials: true})
            console.log(response.data);
            setChatList(response.data);
            }catch(error){
                
            }
        })()
    }, [])

    return(
    <section className='chatlist'>
        <div className='chatlist-container'>
            {chatList.map(chatItem => {
                return(<UserCard user={{first_name: chatItem.first_name, last_name: chatItem.last_name}} country ={chatItem.country_name} />)
            })}
        </div>
    </section>)
}

export default ChatList;
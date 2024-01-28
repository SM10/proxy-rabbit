import './Chatbox.scss';
import UserCard from '../UserCard/UserCard';
import send from '../../assets/icons/send_FILL0_wght400_GRAD0_opsz24.svg'
import back from '../../assets/icons/arrow_back_FILL0_wght400_GRAD0_opsz24.svg'
import axios from 'axios';
import {io} from 'socket.io-client'

function Chatbox({user, recipient, messageList, setMessageList}){
    const socket = io(process.env.REACT_APP_BASE_URL);

    console.log(socket.connect());

    socket.on("message", (message)=>{
        setMessageList([...messageList, message])
        if(message.from_id === user.id){
            user_window(message.message, )
        }else{

        }
    })

    const user_window = (message, timestamp, key) => {
        return(<div className='user-message' key={key}>
            <p className='user-message__message'>{message}</p>
            <p className='user-message__timestamp'>{timestamp}</p>
        </div>)
    }

    const recipient_window = (message, timestamp, key) => {
        return(<div className='recipient-message' key={key}>
            <p className='recipient-message__message'>{message}</p>
            <p className='recipient-message__timestamp'>{timestamp}</p>
        </div>)
    }

    const sendMessage = (e) =>{
        e.preventDefault();
        const sendObject = {
            room_id: recipient.room_id,
            recipient_id: recipient.id,
            message: e.target.message.value
        };
        (async ()=>{
            try{
                const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/message`,sendObject)
                
            }catch(error){
                console.log(error)
            }
        })();
        e.target.reset();
    }

    if(!recipient){
        return(<></>)
    }

    return(<section className='chatbox'>
        <div className='chatbox-recipient'>
            <div className='chatbox-recipient-container'>
                <div className='chatbox-recipient-container-left'>
                    <img src={back} alt="Back button" className='chatbox-recipient-container-left__button__back'/>
                    
                </div>
                <div className='chatbox-recipient-container-right'>
                    <h3 className='chatbox-recipient-container-right__name'>{recipient.first_name} {recipient.last_name}</h3>
                    <p className='chatbox-recipient-container-right__country'>{recipient.country_name}</p>
                </div>
            </div>
        </div>
        <div className='chatbox-messages'>
            {messageList.map((message, index) => {
                if(message.from_id === user.id){
                    return user_window(message.messsage, message.timestamp, index)
                }else{
                    return recipient_window(message.message, message.timestamp, index)
                }
            })}
        </div>
        <form className='chatbox-form' onSubmit={sendMessage}>
            <div className='chatbox-form-container' >
                <textarea placeholder='Send a Message' name="message" className='chatbox-form-container__input'/>
                <button type='submit' className='chatbox-form-container__button'><img src={send} alt="Send button icon"/></button>
            </div>
        </form>
    </section>)
}

export default Chatbox
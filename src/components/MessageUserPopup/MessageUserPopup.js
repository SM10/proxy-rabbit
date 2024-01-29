import './MessageUserPopup.scss';
import closeIcon from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg"
import axios from 'axios';
import {useState} from "react";

function MessageUserPopup({isLoggedIn, onCloseClicked, recipient}){
    const [sendInput, setSendInput] = useState('')

    if(!isLoggedIn){
        <div className='popup-background'>
        <section className='message-popup'>
            <button className='message-popup__exit' onClick={()=>{onCloseClicked()}}><img src={closeIcon} alt='close button icon' className='message-popup__exit__icon' /></button>
            <div className="message-popup-error">
                <h1 className="message-popup-error_text">You must be logged in to message the user.</h1>
            </div>
        </section>
    </div>
    }

    return (<div className='popup-background'>
        <section className='message-popup'>
            <button className='message-popup__exit' onClick={()=>{onCloseClicked()}}><img src={closeIcon} alt='close button icon' className='message-popup__exit__icon' /></button>
            <div className="message-popup-head">
                <h1 className="message-popup-head__title">Message {recipient.first_name}</h1>
            </div>
            <form className="message-popup-message">
                <textarea className="message-popup-message__input" name="search" placeholder="Search" onChange={(e)=>{setSendInput(e.target.value)}} value={sendInput}/>
                <div className='message-popup-message-buttons'>
                    <button className='message-popup-message-buttons__cancel' type='button' onClick={()=>{onCloseClicked()}}>Cancel</button>
                    <button className='message-popup-message-buttons__submit' type='submit'>Send</button>
                </div>
            </form>
        </section>
    </div>)
}

export default MessageUserPopup;
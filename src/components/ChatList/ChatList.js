import './ChatList.scss';
import UserCard from '../UserCard/UserCard';

function ChatList(){
    return(
    <section className='chatlist'>
        <div className='chatlist-container'>
            <UserCard user={{first_name: "Stephen", last_name: "Man"}} country ="Canada" />
        </div>
    </section>)
}

export default ChatList;
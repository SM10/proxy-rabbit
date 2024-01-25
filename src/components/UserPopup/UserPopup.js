import './UserPopup.scss';
import UserCard from '../UserCard/UserCard';
import {useState} from 'react'

function UserPopup(users){

    const [searchInput, setSearchInput] = useState('')

    return (<div className='popup-background'>
        <section className='user-popup'>
            <div className="user-popup-head">
                <h1 className="user-popup-head__title">Find a Proxy</h1>
                <form className="user-popup-head-search">
                    <input className="user-popup-head-search__input" name="search" placeholder="Search" onChange={(e)=>{setSearchInput(e.target.value)}} value={searchInput}></input>
                    <button className="user-popup-head-search__button" type="submit" >Go!</button>
                </form>
            </div>
            <div className="user-popup-cards">
                {users.map(user => {
                    <UserCard user={user} country={user.country_name}/>
                })}
            </div>
        </section>
    </div>)
}

export default UserPopup;
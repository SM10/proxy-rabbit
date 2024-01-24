import './UserCard.scss';

function UserCard({user, country}){
    return(<div className='user-card'>
    <div className='user-card-container'>
        <div className='user-card-container-right'>
            <h3 className='user-card-container-right__name'>{user.first_name} {user.last_name}</h3>
            <p className='user-card-container-right__country'>{country}</p>
        </div>
    </div>
    </div>)
}

export default UserCard;
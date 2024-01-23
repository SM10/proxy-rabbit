import "./Header.scss"
import logo from '../../assets/images/proxy-rabbit-logo.png'
import mailIcon from '../../assets/icons/mail_FILL0_wght400_GRAD0_opsz24.svg'
import { Link } from "react-router-dom"

function Header({isLoggedIn, userProfile}){
    let contentObjects;

    if(isLoggedIn){
        contentObjects = (<div className="header-content">
            <Link to='/Mailbox'><img src={mailIcon} alt="Mail button" className="header-content__mail"/></Link>
            <h4 className="header-content__greeting">Hello, {userProfile.first_name}</h4>
            <Link to='/Logout'><h4 className="header-content__logout">Logout</h4></Link>
        </div>)
    }else{
        contentObjects = (<div>
            <Link to='/SignIn'><h4 className="header-content__signin">Sign in</h4> </Link>
            <Link to='/Register'><h4 className="header-content__register">Register</h4></Link>
        </div>)
    }
    
    return (<header className="header">
        <img src={logo} alt="Proxy Rabbit company logo" />
        {contentObjects}
    </header>)
}

module.exports = Header;
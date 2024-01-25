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
            <Link to='/Logout'><h4 className="header-content__text--clickable">Logout</h4></Link>
        </div>)
    }else{
        contentObjects = (<div className="header-content">
            <Link to='/LogIn'><h4 className="header-content__text--clickable">Sign in</h4> </Link>
            <Link to='/Register'><h4 className="header-content__text--clickable">Register</h4></Link>
        </div>)
    }
    
    return (<header className="top">
        <div className="header">
            <img src={logo} alt="Proxy Rabbit company logo" className="header__logo"/>
            {contentObjects}
        </div>
        <nav className="nav-bar">
            <hr className="nav-bar__line"/>
            <div className="nav-bar-links">
                <Link to='/FindByLocation'><h4 className="nav-bar-links__item">By Location</h4></Link>
                <Link to='/FindByProduct'><h4 className="nav-bar-links__item">By Specialty</h4></Link>
                <Link to='/Mailbox'><h4 className="nav-bar-links__item">Your Mail</h4></Link>
            </div>
            <hr className="nav-bar__line"/>
        </nav>
        
    </header>)
}

export default Header;
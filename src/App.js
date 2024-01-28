import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import ContactUserPopup from './components/ContactUserPopup/ContactUserPopup';
import FindByLocation from './components/FindByLocation/FindByLocation';
import FindByProduct from './components/FindByProduct/FindByProduct';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Mailbox from './components/Mailbox/Mailbox';
import Register from './components/Register/Register'
import PageNotFound from './components/PageNotFound/PageNotFound'
import UserPopup from './components/UserPopup/UserPopup'
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [showContactUserPopup, setShowContactUserPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [countries, setCountries] = useState([]);
  const [users, setUsers] = useState([])
  axios.defaults.withCredentials = true;

  useEffect(()=>{
    (async ()=>{
      try{
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/countries`)
        setCountries(response.data);
      }catch(error){
        console.log(error)
      }
    })()
  }, [])

  useEffect(()=>{
      if(users && users.length > 0){
        setShowUserPopup(true);
      }
  }, [users])

  const onCountryClicked = async (countryObject) =>{
      getUsersByCountryId(countryObject.id)
  }

  const getUsersByCountryId = async (countryId) => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/countries/${countryId}/users`)
      console.log(response.data);
      setUsers(response.data);
    }catch(error){
      console.log(error)
    }
  }

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} userProfile={userProfile} setLoggedIn={setIsLoggedIn} setUserProfile={setUserProfile}/>
      {showUserPopup ? <UserPopup users={users} onCloseClicked={() => {setShowUserPopup(false);}}/> : ''}
      {showContactUserPopup ? <ContactUserPopup /> : ''}
      <Routes >
        <Route path='/' element={<FindByLocation supportedCountries={countries} onCountryClicked={onCountryClicked}/>} />
        <Route path='/FindByLocation' element={<FindByLocation supportedCountries={countries} onCountryClicked={onCountryClicked}/>} />
        <Route path='/FindByProduct' element={<FindByProduct onProductCardClicked={getUsersByCountryId}/>} />
        <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} setUserProfile={setUserProfile}/>} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Mailbox' element={<Mailbox userProfile={userProfile}/>} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

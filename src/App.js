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

function App() {
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [showContactUserPopup, setShowContactUserPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} userProfile={userProfile}/>
      {showUserPopup ? <UserPopup /> : ''}
      {showContactUserPopup ? <ContactUserPopup /> : ''}
      <Routes >
        <Route path='/' element={<FindByLocation />} />
        <Route path='/FindByLocation' element={<FindByLocation />} />
        <Route path='/FindByProduct' element={<FindByProduct />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Mailbox' element={<Mailbox />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

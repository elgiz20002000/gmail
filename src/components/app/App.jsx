import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EmailList from '..//EmailList/EmailList';
import { Header } from '..//header/header';
import Mail from '..//Mail/Mail';
import { Sidebar } from '..//sidebar/sidebar';
import { SendMail } from '../SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../../features/mailSlice';
import { login, User } from '../../features/userSlice';
import LoginPage from '../LoginPage/LoginPage';
import { auth } from '../../firebase';

function App() {
  const showSendMessage = useSelector(selectSendMessageIsOpen)
  const user = useSelector(User)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(login({
          name:user.displayName,
          mail:user.email,
          photo:user.photoURL
      }))
      }
    })
  } , [])
  
  return (
    <Router> 
      {!user ? <LoginPage/> : 
      <div className="App">
          <Header/>
          <div className="app_body">
          <Sidebar/>

            <Routes>
              <Route path='/' element={<EmailList/>}/>
              <Route path='/mail' element={<Mail/>}/>
            </Routes>
          </div>
          {showSendMessage && <SendMail/>}
      </div>
      }

    </Router>
  );
}

export default App;

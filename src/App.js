import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersAPI from './components/Users/UsersAPI';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
const App = (props) => {
  return (
   
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path="frofile/:userId" element={<ProfileContainer />} />
            <Route path="dialogs/*" element={<DialogsContainer/>} />
            <Route path="users/*" element={<UsersAPI/>} />
            <Route path="login/*" element={<Login/>} />
          </Routes>
        </div>

      </div>
    
  );
}

export default App;

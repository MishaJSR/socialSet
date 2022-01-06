import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
// import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MyUsersContainer from './components/Users/Users_container';


function App (props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path="frofile/*" element={<Profile />} />
            <Route path="dialogs/*" element={<DialogsContainer/>} />
            <Route path="users/*" element={<MyUsersContainer/>} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

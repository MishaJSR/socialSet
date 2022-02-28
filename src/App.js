import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersAPI from './components/Users/UsersAPI';
function App (props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path="frofile/*" element={<ProfileContainer />} />
            <Route path="dialogs/*" element={<DialogsContainer/>} />
            <Route path="users/*" element={<UsersAPI/>} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

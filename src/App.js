import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App (props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path="frofile/*" element={<Profile postData = {props.statePostData.postData}/>} />
            <Route path="dialogs/*" element={<Dialogs dialogData = {props.stateDialogData.dialogData} messageData = {props.stateDialogData.messageData}/>} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

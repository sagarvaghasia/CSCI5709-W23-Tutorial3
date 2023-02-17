import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import RegistrationForm from './register';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<RegistrationForm />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    
    </div>
  );
}

export default App;

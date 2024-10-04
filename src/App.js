import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import CreateAccount from './pages/createAccount';
import AcccountDeatils from './pages/accountDetails';
import './App.css';

function App() {
  return (
    <>
    {/* important note when you run the "npm start" after install "npm install" modules you will 
    get the main page and the main page doesn't have any component and the nav bar goes with all
    the page so you will be need to write the path of the two compponent to get create account and profile.
     */}
     {/* also you need to watch db.json in the it's directory*/ }
    <Router>
      <div className='container'>
    <Navbar /> 
      <Routes>
        <Route path='/create-account' element= {<CreateAccount />} /> {/* write the path after local host */ }
        <Route path='/profile' element= {<AcccountDeatils />} />  {/* write the path after local host */ }
      </Routes>
      </div>
    </Router>
     </>
  );
}

export default App;

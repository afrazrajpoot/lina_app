import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ActonGardens from './pages/ActonGardens';
import Neighbourhood from './pages/Neighbourhood';
import OurImpact from './pages/OurImpact';
import Finishes from './pages/Finishes';
import Fixtures from './pages/Fixtures';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Enquiry from './pages/Enquiry';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/acton-gardens' element={ <ActonGardens/>} />
        <Route path='/neighbourhood' element={ <Neighbourhood/> } />
        <Route path='/our-impact' element={<OurImpact />} />
        <Route path='/furniture' element={<Fixtures />} />
        <Route path='/finishes' element={<Finishes />} />
        <Route path='/privacy-policy-and-terms-of-use' element={<PrivacyPolicy />} />
        <Route path='/enquiry' element={<Enquiry />} />
      </Routes>

    </div>
  );
}

export default App;

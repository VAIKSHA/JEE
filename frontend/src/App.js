import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchData } from './api';
import Navbar from './Components/Navbar';
import Chatbot from './Components/Chatbot';
import Footer from './Components/Footer';


// Pages for navigation
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Slotbook from './Pages/Slotbook';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import StudyM from './Pages/StudyM';
import CuttOff from './Pages/CuttOff';
import StudentProfile from "./Pages/StudentProfile";
import BookingConfirmation from './Pages/BookingConfirmation';

function App() {
  const [data, setData] = useState('');

  // Fetch data from API
  useEffect(() => {
    fetchData().then(response => setData(response));
  }, []);

  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar displayed on all pages */}
        <div className="chatbot-container">
          <Chatbot />
        </div>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/book-slot' element={<Slotbook />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/study-material' element={<StudyM />} />
          <Route path='/cut-off' element={<CuttOff />} />
          <Route path='/student-profile' element={<StudentProfile />} />
        </Routes>
        <Footer /> {/* Footer displayed on all pages */}
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Socials from './components/Socials/Socials';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import MailingList from './components/MailingList/MailingList';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Socials />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mailing-list" element={<MailingList />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;

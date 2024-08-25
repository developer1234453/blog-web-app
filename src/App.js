import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

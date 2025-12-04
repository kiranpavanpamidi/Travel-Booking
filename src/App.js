import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import Home from './packages/Home';
import Packages from './packages/Packages';
import BookingForm from './Booking/BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <nav className="p-3 text-center">
        <Link className="btn btn-outline-primary m-2" to="/">Home</Link>
        <Link className="btn btn-outline-primary m-2" to="/packages">Packages</Link>
        <Link className="btn btn-outline-primary m-2" to="/booking">Booking</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

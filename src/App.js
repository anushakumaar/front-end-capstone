import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from "./pages/Home"
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route
            path="/confirmedBooking"
            element={<ConfirmedBooking />}
          />
          <Route
            path="/about"
            element={<ComingSoon />}
          />
          <Route
            path="/menu"
            element={<ComingSoon />}
          />
          <Route
            path="/order-online"
            element={<ComingSoon />}
          />
          <Route
            path="/login"
            element={<ComingSoon />}
          />
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;

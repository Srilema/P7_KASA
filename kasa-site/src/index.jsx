import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home';
import Location from './pages/Location';
import About from './pages/About';
import Error from './pages/Error';
import Banner from './components/Banner';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Banner />
      <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/location/:id" element={<Location />} />
      <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

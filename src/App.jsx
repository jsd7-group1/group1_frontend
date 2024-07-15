import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CartPage from './pages/CartPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import AllproductPage from './pages/AllproductPage.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Router path="/home" element={<HomePage />}></Router> */}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/product" element={<AllproductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

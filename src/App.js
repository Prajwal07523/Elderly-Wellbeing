import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./pages/Login"
import Dashboard from "./Components/Dashboard"
import Signup from "./pages/Signup"
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";
import HealthReminder from "./Components/HealthReminder";
import MedicalCare from "./Components/Medical/MedicalCare";
import OrderMedicines from "./Components/OrderMedicines";
import HospitalCare from "./Components/Hospital/HospitalCare";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="w-full h-screen lg:h-full bg-blue-100 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/health-reminder' element={<HealthReminder/>}/>
        <Route path='/medical-care' element={<MedicalCare/>}/>
        <Route path='/order-medicines' element={<OrderMedicines/>}/>
        <Route path='/hospital-care' element={<HospitalCare/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        } />
         <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App;

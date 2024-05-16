import "./App.css";
import Navbar from "./Components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home/Home";
import Homes from "./pages/Homes";
import About from "./Components/common/About";
import Contact from "./Components/common/Contact";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PrivateRoute from "./Components/PrivateRoute";
import HealthReminder from "./Components/HealthReminder/HealthReminder";
import MedicalCare from "./Components/Medical/MedicalCare";
import OrderMedicines from "./Components/OrderMedicine/OrderMedicines";
import DoctorCare from "./Components/Hospital/DoctorCare";

import MyProfile from "./Components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./Components/core/Dashboard/Settings/EditProfile";
import Footer from "./Components/common/Footer";
import Appointment from "./Components/Hospital/Appointment";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="w-full h-screen lg:h-full bg-blue-100 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route index element={<Homes />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        
        {/* PrivateRoute for Dashboard */}
        <Route 
          element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard /></PrivateRoute>}
        >
        </Route>
        <Route path='/health-reminder' element={<HealthReminder/>}/>
        <Route path='/medical-care' element={<MedicalCare/>}/>
        <Route path='/order-medicines' element={<OrderMedicines/>}/>
        <Route path='/doctor-care' element={<DoctorCare/>}/>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/dashboard/my-profile" element={<MyProfile />} />
        <Route path="/dashboard/settings/edit-profile" element={<EditProfile/>} />
      
      {/* <Route path="dashboard/Settings" element={<Settings />} /> */}
      </Routes>
     <Footer/>
    </div>
  )
}

export default App;

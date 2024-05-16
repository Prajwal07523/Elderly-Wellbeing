import React from "react";
import Hero from "./Hero";
import Info from "./Info";
import About from "./About";
import BookAppointment from "./BookAppointment";
import Reviews from "./Reviews";
import Doctors from "./Doctors";


function DoctorCare() {
  return (
    <div className="home-section">
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
     
    </div>
  );
}

export default DoctorCare;

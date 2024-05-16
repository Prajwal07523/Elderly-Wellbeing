import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Make sure toast is imported
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }
  
    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }
  
    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
    // Prepare appointment data
    const appointmentData = {
      patientName,
      patientNumber,
      patientGender,
      appointmentTime,
      preferredMode,
    };
  
    try {
      // Send appointment data to backend
      await axios.post("http://localhost:8090/appointments", appointmentData);
      toast.success("Appointment Scheduled!", { // Make sure toast is properly initialized
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsSubmitted(true),
        onClose: () => setIsSubmitted(false),
      });
      // Reset form fields and errors after successful submission
      setPatientName("");
      setPatientNumber("");
      setPatientGender("default");
      setAppointmentTime("");
      setPreferredMode("default");
      setFormErrors({});
    } catch (error) {
      console.error("Error scheduling appointment:", error.message);
      toast.error("Failed to schedule appointment. Please try again later.", { // Make sure toast is properly initialized
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl">
            <Link to="/">Elderly Wellbeing</Link>
          </h1>
        </div>
        <div className="bg-gradient-to-r from-blue-100 to-white shadow-md rounded-md p-6">
          <h2 className="font-bold text-2xl mb-4">Book Appointment Online</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label htmlFor="patientName" className="block font-medium">
                Patient Full Name:
              </label>
              <input
                type="text"
                id="patientName"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="input-field"
                required
              />
              {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="patientNumber" className="block font-medium">
                Patient Phone Number:
              </label>
              <input
                type="text"
                id="patientNumber"
                value={patientNumber}
                onChange={(e) => setPatientNumber(e.target.value)}
                className="input-field"
                required
              />
              {formErrors.patientNumber && (
                <p className="error-message">{formErrors.patientNumber}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="patientGender" className="block font-medium">
                Patient Gender:
              </label>
              <select
                id="patientGender"
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                className="input-field"
                required
              >
                <option value="default">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="private">I will inform Doctor only</option>
              </select>
              {formErrors.patientGender && (
                <p className="error-message">{formErrors.patientGender}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="appointmentTime" className="block font-medium">
                Preferred Appointment Time:
              </label>
              <input
                type="datetime-local"
                id="appointmentTime"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="input-field"
                required
              />
              {formErrors.appointmentTime && (
                <p className="error-message">{formErrors.appointmentTime}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="preferredMode" className="block font-medium">
                Preferred Mode:
              </label>
              <select
                id="preferredMode"
                value={preferredMode}
                onChange={(e) => setPreferredMode(e.target.value)}
                className="input-field"
                required
              >
                <option value="default">Select</option>
                <option value="voice">Voice Call</option>
                <option value="video">Video Call</option>
              </select>
              {formErrors.preferredMode && (
                <p className="error-message">{formErrors.preferredMode}</p>
              )}
            </div>
            <button type="submit" className="btn">
              Confirm Appointment
            </button>
            <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>
              Appointment details have been sent to the patient's phone number via SMS.
            </p>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;

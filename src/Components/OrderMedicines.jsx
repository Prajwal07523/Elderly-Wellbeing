import React, { useState } from "react";
import Footer from "./Footer";


const OrderMedicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [doseLevel, setDoseLevel] = useState("");

  const addMedicine = () => {
    if (!medicineName || !quantity || !doseLevel) {
      alert("Please fill in all fields");
      return;
    }
    const newMedicine = {
      name: medicineName,
      quantity: quantity,
      doseLevel: doseLevel
    };
    setMedicines([...medicines, newMedicine]);
    // Clear input fields
    setMedicineName("");
    setQuantity("");
    setDoseLevel("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate and display invoice
    // You can implement invoice generation logic here
    alert("Invoice generated!"); // For demonstration
  };

  return (
   
    <div className="min-h-screen bg-blue-100">
      <div className="max-w-3xl mx-auto py-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Order Medicines</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineName">Medicine Name:</label>
            <input
              type="text"
              id="medicineName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="Enter medicine name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doseLevel">Dose Level:</label>
            <input
              type="text"
              id="doseLevel"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={doseLevel}
              onChange={(e) => setDoseLevel(e.target.value)}
              placeholder="Enter dose level"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={addMedicine}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Medicine
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Generate Invoice
            </button>
          </div>
        </form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-3xl font-semibold text-center mb-4">Invoice</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Medicine Name</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Dose Level</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{medicine.name}</td>
                  <td className="border px-4 py-2">{medicine.quantity}</td>
                  <td className="border px-4 py-2">{medicine.doseLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default OrderMedicines;

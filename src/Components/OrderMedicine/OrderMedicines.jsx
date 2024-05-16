import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const OrderMedicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [doseLevel, setDoseLevel] = useState("");

  useEffect(() => {
    fetchInvoiceData();
  }, []);

  const addMedicine = () => {
    if (!medicineName || !quantity || !doseLevel) {
      alert("Please fill in all fields");
      return;
    }
    const newMedicine = {
      name: medicineName,
      quantity: parseInt(quantity), // Parse quantity as a number
      doseLevel: doseLevel
    };
    setMedicines([...medicines, newMedicine]);
    // Clear input fields
    setMedicineName("");
    setQuantity("");
    setDoseLevel("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hello");
      // Send POST request to save medicines
      await axios.post("http://localhost:8090/medicines", medicines);
      alert("Invoice generated!"); // For demonstration
      fetchInvoiceData(); // Refresh invoice data after generating invoice
    } catch (error) {
      console.error("Error generating invoice:", error.message);
    }
  };

  const fetchInvoiceData = async () => {
    try {
      // Send GET request to fetch medicines for invoice
      const response = await axios.get("http://localhost:8090/medicines");
      setMedicines(response.data);
    } catch (error) {
      console.error("Error fetching invoice data:", error.message);
    }
  };

  const Invoice = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Invoice</Text>
          <table>
            <thead>
              <tr>
                <th><Text>Medicine Name</Text></th>
                <th><Text>Quantity</Text></th>
                <th><Text>Dose Level</Text></th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine, index) => (
                <tr key={index}>
                  <td><Text>{medicine.name}</Text></td>
                  <td><Text>{medicine.quantity}</Text></td>
                  <td><Text>{medicine.doseLevel}</Text></td>
                </tr>
              ))}
            </tbody>
          </table>
        </View>
      </Page>
    </Document>
  );
  
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
         type="button" // Change the type to button
        onClick={addMedicine} // Add onClick event handler to trigger addMedicine function
        className="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         >
         Save Medicine
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
          <div className="text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
            <PDFDownloadLink document={<Invoice />} fileName="invoice.pdf">
              {({ blob, url, loading, error }) => (loading ? 'Generating PDF...' : 'Download Invoice')}
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderMedicines;

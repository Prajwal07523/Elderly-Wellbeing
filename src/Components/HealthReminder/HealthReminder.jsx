import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealthReminder = () => {
  const today = new Date();
  const [medicineList, setMedicineList] = useState([]);
  const [medicineName, setMedicineName] = useState('');
  const [medicineTiming, setMedicineTiming] = useState('');

  useEffect(() => {
    fetchHealthReminders();
  }, []);

  const fetchHealthReminders = async () => {
    try {
      const response = await axios.get('http://localhost:8090/health-reminders');
      setMedicineList(response.data);
    } catch (error) {
      console.error('Error fetching health reminders:', error.message);
    }
  };

  const handleAddMedicine = async () => {
    if (medicineName && medicineTiming) {
      const newMedicine = { name: medicineName, timing: medicineTiming };
      try {
        await axios.post('http://localhost:8090/health-reminders', newMedicine);
        setMedicineList([...medicineList, newMedicine]);
        setMedicineName('');
        setMedicineTiming('');
      } catch (error) {
        console.error('Error adding health reminder:', error.message);
      }
    }
  };

  const handleDeleteMedicine = async (index) => {
    try {
      await axios.delete(`http://localhost:8090/health-reminders/${index}`);
      const updatedMedicineList = [...medicineList];
      updatedMedicineList.splice(index, 1);
      setMedicineList(updatedMedicineList);
    } catch (error) {
      console.error('Error deleting health reminder:', error.message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-full max-w-md">
        <h1 className="text-7xl mb-10">How is your Health Today? </h1>
        <div className='bg-gradient-to-r from-blue-100 to-white shadow-md rounded-md p-6 mt-4'>
          <h2 className="font-bold text-2xl mb-8">Today's Reminders</h2>
          <div className="mt-4">
            <h3 className="font-bold text-xl mb-2">Medicines:</h3>
            {medicineList.map((medicine, index) => (
              <div key={index} className="bg-gray-200 rounded-md p-4 mb-4 flex justify-between items-center">
                <div>
                  <span className="font-bold">{medicine.name}</span> - {medicine.timing}
                </div>
                <button
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={() => handleDeleteMedicine(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineName">Medicine Name:</label>
            <input
              type="text"
              id="medicineName"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              placeholder="Enter medicine name"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineTiming">Timing:</label>
            <input
              type="text"
              id="medicineTiming"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              placeholder="Enter timing"
              value={medicineTiming}
              onChange={(e) => setMedicineTiming(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleAddMedicine}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthReminder;

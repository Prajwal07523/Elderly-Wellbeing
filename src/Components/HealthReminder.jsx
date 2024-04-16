import Footer from './Footer';
const HealthReminder = () => {
  const today = new Date();

  // Extract date, month, and year
  const date = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  // Construct the date string
  const dateString = `${date} ${month} ${year}`;

  return (
    <div>
    <div className="ml-20 mb-20">
      <h1 className="text-7xl mb-10">How is your Health Today?</h1>
      <div>
        <h3 className="text-2xl">{dateString}</h3>
        <h1 className="text-3xl">Today's Reminders</h1>
      </div>
      <div className="bg-gray-200 rounded-lg flex flex-col gap-4 p-4 w-96 ">
        {/* Morning */}
        <div>
          <div className="flex gap-20">
            <h4>Time</h4>
            <h4>Medication</h4>
          </div>
          <div className="flex gap-12">
            <div className="w-120 flex items-center justify-center">Morning</div>
            <div className="flex flex-col gap-4"> 
              <div className="flex justify-between items-center rounded-lg overflow-hidden bg-pink-200 p-4">
                <div className="ml-2">
                  <h3>Ibuprofen</h3>
                  <span>1 tablets</span>
                </div>
                <div className="ml-4">Before Meal</div>
                <div className="bg-green-500 text-white h-full flex items-center px-2 ml-4">Done</div>
              </div>
              {/* Add more morning reminders here */}
            </div>  
          </div>
        </div>
        
        {/* Afternoon */}
        <div>
          
          <div className="flex gap-12">
            <div className="w-120 flex items-center justify-center">Afternoon</div>
            <div className="flex flex-col gap-4"> 
            <div className="flex justify-between items-center rounded-lg overflow-hidden bg-pink-200 p-4">
                <div className="ml-2">
                  <h3>Diabilex</h3>
                  <span>1 tablets</span>
                </div>
                <div className="ml-4">Before Meal</div>
                <div className="bg-green-500 text-white h-full flex items-center px-2 ml-4">Done</div>
              </div>
              {/* Add afternoon reminders here */}
            </div>  
          </div>
        </div>
        
        {/* Evening */}
        <div>
          
          <div className="flex gap-12">
            <div className="w-120 flex items-center justify-center">Evening</div>
            <div className="flex flex-col gap-4"> 
            <div className="flex justify-between items-center rounded-lg overflow-hidden bg-pink-200 p-4">
                <div className="ml-2">
                  <h3>Telmisartan</h3>
                  <span>1 tablets</span>
                </div>
                <div className="ml-4">Before Meal</div>
                <div className="bg-green-500 text-white h-full flex items-center px-2 ml-4">Done</div>
              </div>
              {/* Add evening reminders here */}
            </div>  
          </div>
        </div>
        
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default HealthReminder;

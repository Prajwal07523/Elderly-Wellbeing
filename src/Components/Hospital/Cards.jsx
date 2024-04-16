import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  const doctors = props.doctors;
  const category = props.category;
 
  console.log(Object.values(doctors));
  console.log((doctors)["Business"]);

  const [likedDoctors, setlikedDoctors] = useState([]);

  function getAllDoctors() {
    if (category === "All") {
      let allDoctors = [];
      Object.values(doctors).forEach((doctors) => {
        
        doctors.forEach((DoctorsData) => {
          
          allDoctors.push(DoctorsData);
        });
      });
      return allDoctors;
    }
    else
    {
      return doctors[category];
    }
  }

  

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getAllDoctors()?.map((doctors) => {
          return (<Card key={doctors.id} doctors={doctors} likedDoctors={likedDoctors} setlikedDoctors={setlikedDoctors} />)
        })
      }
    </div>
  );
};

export default Cards;

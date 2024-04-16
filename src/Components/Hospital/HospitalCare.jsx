// HospitalCare.js

import Footer from "../Footer";
import React, { useState } from "react";
import { filterData } from "./data";
import { DoctorsData } from "./DoctorsData"; // Import coursesData from the new file

import Filter from "./Filter";
import Cards from "./Cards";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const HospitalCare = () => {
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const DoctorsToShow = category === "All" ? Object.values(DoctorsData).flat() : DoctorsData[category];

  return (
    <div>
      <div className="bg-bgDark2 min-h-screen">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap items-center justify-center">
          {loading ? <Spinner /> : <Cards doctors={DoctorsToShow} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HospitalCare;

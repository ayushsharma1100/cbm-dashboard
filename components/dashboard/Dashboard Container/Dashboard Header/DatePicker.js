"use client";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Datepicker
        value={value}
        onChange={handleValueChange}
        primaryColor="cyan"
        containerClassName={"relative border-2 border-cyan-500 rounded-lg"}
        width={100}
        height={50}
      />
    </div>
  );
};

export default DatePicker;

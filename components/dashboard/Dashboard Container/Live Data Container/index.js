import React from "react";
import DataCard from "./Data Card/index";

export default function LiveDataContainer() {
  let liveValues = [
    {
      name: "Live 3 phase Average Values",
      data: [
        {
          name: "Current Consumption",
          value: 60,
          unit: "unit",
        },
        {
          name: "Power Factor",
          value: 60,
          unit: "unit",
        },
        {
          name: "Power Factor",
          value: 60,
          unit: "unit",
        },
      ],
    },
    {
      name: "Live Total Harmonics Distortion",
      data: [
        {
          name: "Current",
          value: 60,
          unit: "unit",
        },
        {
          name: "Voltage",
          value: 60,
          unit: "unit",
        },
      ],
    },
    {
      name: "Vibration",
      data: [
        {
          name: "Dummy Data",
          value: 60,
          unit: "unit",
        },
      ],
    },
    {
      name: "Live Surface Temperature",
      data: [
        {
          name: "Dummy Data",
          value: 60,
          unit: "unit",
        },
      ],
    },
    {
      name: "Fault and Alert",
      data: [
        {
          name: "Dummy Data",
          value: 60,
          unit: "unit",
        },
      ],
    },
    {
      name: "Live Voltage",
      data: [
        {
          name: "Dummy Data",
          value: 60,
          unit: "unit",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {liveValues.map((liveValue, idx) => {
        return (
          <div className="grow" key={idx}>
            <DataCard name={liveValue.name} liveData={liveValue.data} />
          </div>
        );
      })}
    </div>
  );
}

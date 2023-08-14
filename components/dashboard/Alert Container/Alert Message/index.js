import React from "react";

export default function AlertMessage(props) {
  return (
    <div className="flex gap-3 mb-3">
      <div>
        <div
          className={`flex justify-center items-center h-6 w-6 rounded-full ${props.color}Border`}
        >
          !
        </div>
      </div>
      <div className="text-sm">
        <strong>{props.type}.</strong> {props.message}
        <div className="block mt-2">
          <button className="me-2 text-xs bg-white text-gray-800 rounded border-2 border-green-300 hover:border-green-500 hover:bg-green-500 hover:text-white py-1 px-2 inline-flex items-center rounded-2xl focus:ring-2 focus:ring-green-600">
            View More
          </button>
          <button className="bg-white text-xs text-gray-800 rounded border-2 border-orange-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white py-1 px-2 inline-flex items-center rounded-2xl focus:ring-2 focus:ring-orange-600">
            Report
          </button>
        </div>
      </div>
    </div>
  );
}

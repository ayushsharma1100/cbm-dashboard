'use client'
import React from "react";
import AlertMessage from "./Alert Message/index";

export default function AlertContainer() {
  let alerts = [
    {
      id: 1,
      type: "severe",
      color: "red",
      msg: "Lorem ipsum dolor, sit amet sit amet sit.",
    },
    {
      id: 2,
      type: "non-fatal",
      color: "orange",
      msg: "Lorem ipsum dolor, sit amet sit amet sit amet sit.",
    },
    {
      id: 3,
      type: "general",
      color: "blue",
      msg: "Lorem ipsum dolor, sit amet sit amet sit amet sit.",
    },
    {
      id: 4,
      type: "general",
      color: "blue",
      msg: "Lorem ipsum dolor, sit amet sit amet",
    },
  ];

  return (
    <div className="flex-column border-2 border-slate-300 shadow-md rounded-lg p-2.5 bg-white">
      <div className="flex py-3 justify-between px-3">
        <div>
          <h3 className="text-xl inline-block">Alerts</h3>
          <div className="text-center w-10 ms-2 h-5 text-sm rounded-2xl bg-blue-400 inline-block text-white">
            <strong>20</strong>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2 hover:cursor-pointer feather feather-settings"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      </div>
      <div className="border-y-2 border-slate-200 py-2.5 px-3">
        {alerts.map((alert) => {
          return (
            <div key={alert.id}>
              <AlertMessage
                type={alert.type}
                color={alert.color}
                message={alert.msg}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end pt-3">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-md rounded-lg text-sm px-3 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          View all notifications
        </button>
      </div>
    </div>
  );
}

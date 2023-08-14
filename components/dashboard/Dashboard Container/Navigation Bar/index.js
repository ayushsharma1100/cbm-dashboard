'use client'
import React, { useState } from "react";

export default function NavigationBar() {
  let [currentTab, setCurrentTab] = useState(1);
  return (
    <div className="text-sm block flex gap-8 text-slate-400 items-center border-b-2 border-slate-300 h-12">
      <button
        className={`${
          currentTab === 1 && "text-blue-700 border-b-2 border-blue-700"
        } hover:bg-slate-200 hover:rounded-lg p-2`}
        onClick={() => {
          setCurrentTab(1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-square me-2 inline-block"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />{" "}
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
        </svg>
        <div className="inline-block">Motor</div>
      </button>
      <button
        className={`${
          currentTab === 2 && "text-blue-700 border-b-2 border-blue-700"
        } hover:bg-slate-200 hover:rounded-lg p-2`}
        onClick={() => {
          setCurrentTab(2);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-square me-2 inline-block"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />{" "}
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
        </svg>
        <div className="inline-block">Hydraulic Systems</div>
      </button>
      <button
        className={`${
          currentTab === 3 && "text-blue-700 border-b-2 border-blue-700"
        } hover:bg-slate-200 hover:rounded-lg p-2`}
        onClick={() => {
          setCurrentTab(3);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-square me-2 inline-block"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />{" "}
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
        </svg>
        <div className="inline-block">Lubrication Systems</div>
      </button>
      <button
        className={`${
          currentTab === 4 && "text-blue-700 border-b-2 border-blue-700"
        } hover:bg-slate-200 hover:rounded-lg p-2`}
        onClick={() => {
          setCurrentTab(4);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-square me-2 inline-block"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />{" "}
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
        </svg>
        <div className="inline-block">Gear Box</div>
      </button>
    </div>
  );
}

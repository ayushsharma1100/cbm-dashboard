import React from 'react'
import AlertsChart from './AlertsChart'

export default function AlertComponent() {
  return (
    <div>
        <h3 className="text-3xl block mb-1">Alerts</h3>
        <div className="flex border-2 border-slate-400 shadow-md rounded-lg bg-white">
        <div className="flex justify-between p-6 border-r-4 border-slate-300 items-center w-1/4">
          <div>
            <h3 className="block text-3xl">88</h3>
            <p className="text-lg">Total</p>
          </div>
          <div className="w-20 h-20 rounded-full bg-slate-100"></div>
        </div>
        <div className="w-1/4 flex justify-between p-6 border-r-4 border-slate-300 items-center w-1/4">
          <div>
            <h3 className="block text-3xl">53</h3>
            <p className="text-lg">Active</p>
          </div>
          <div className="w-20 h-20 rounded-full bg-slate-100"></div>
        </div>
        <div className="w-1/2 flex items-center justify-center p-3">
          <AlertsChart />
        </div>
      </div>
    </div>
  )
}

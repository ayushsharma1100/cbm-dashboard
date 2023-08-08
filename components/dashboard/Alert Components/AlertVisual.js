import AlertsChart from "./AlertsChart";
import DatePicker from "../DatePicker";

export default function AlertVisual() {
  return (
    <div className="flex-column space-y-3">
      <div className="flex justify-between">
        <div className="hover:cursor-pointer text-lg">
          {`WLP_1 > `}<strong>Part_ABC</strong>
        </div>
        <div className="flex gap-2 items-center">
          <button className="text-sm me-2 bg-white text-gray-800 rounded border-2 border-green-500 hover:border-green-500 hover:bg-green-500 hover:text-white py-1 px-4 inline-flex items-center rounded-lg focus:ring-2 focus:ring-green-600">Today</button>
          <button className="text-sm me-2 bg-white text-gray-800 rounded border-2 border-orange-400 hover:border-orange-500 hover:bg-orange-500 hover:text-white py-1 px-4 inline-flex items-center rounded-lg focus:ring-2 focus:ring-orange-600">1 Week</button>
          <button className="text-sm me-2 bg-white text-gray-800 rounded border-2 border-red-500 hover:border-red-500 hover:bg-red-500 hover:text-white py-1 px-4 inline-flex items-center rounded-lg focus:ring-2 focus:ring-red-600">1 Month</button>
          <DatePicker />
        </div>
      </div>
      <div>
        <h3 className="text-3xl">Alerts</h3>
      </div>
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

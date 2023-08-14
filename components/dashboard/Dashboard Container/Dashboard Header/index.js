import React from 'react'
import DatePicker from './DatePicker'

export default function DashoardHeader() {
  return (
    <div className='flex items-center justify-between'>
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
  )
}

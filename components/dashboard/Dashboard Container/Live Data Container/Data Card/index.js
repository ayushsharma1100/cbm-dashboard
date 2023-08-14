import React from 'react'
import ValueCard from './Value Card/index'

export default function DataCard(props) {
  return (
    <div className="flex-column border-slate-400 border-2 rounded-lg bg-white pt-4 px-4 pb-1">
      <div>
        <h3 className="border-b-2 border-slate-200">{props.name}</h3>
      </div>
      <div className="flex flex-wrap p-4 gap-3">
        {props.liveData.map((data, idx)=>{
          return <div className="grow" key={idx}><ValueCard name={data.name} value={data.value} unit={data.unit} /></div>
        })}
      </div>
    </div>
  )
}

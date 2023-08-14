import React from 'react'

export default function ValueCard(props) {
  return (
    <div className='flex p-4 gap-8 items-center bg-slate-200 rounded-lg max-w-full'>
        <div className='h-12 w-12 rounded-full bg-white'></div>
        <div>
            <h3 className='block text-sm'>{props.name}</h3>
            <h3 className='text-4xl inline-block'>{props.value}</h3><span className='text-xs'>{props.unit}</span>
        </div>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'

export default function Workflow() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center py-12 px-6 gap-6'>
        <h1 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">Our workflow</h1>
        <Image src={"/logos/workflow.png"} alt="logo" width={1000} height={1000} className='rounded-md'/>
    </div>
  )
}

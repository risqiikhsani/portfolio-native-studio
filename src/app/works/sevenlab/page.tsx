import Image from 'next/image'
import React from 'react'


const images = [
    {
        id: 1,
        src: '/pictures/1/Scene_1.png',
        alt: 'Scene_1',
    },
    {
        id: 2,
        src: '/pictures/1/Scene_2.png',
        alt: 'Scene_2',
    },
    {
        id: 3,
        src: '/pictures/1/Scene_3.png',
        alt: 'Scene_3',
    },
    {
        id: 4,
        src: '/pictures/1/Scene_4.png',
        alt: 'Scene_4',
    },
    {
        id: 5,
        src: '/pictures/1/Scene_5.png',
        alt: 'Scene_5',
    }
]

export default function page() {
  return (
    <div>
        <div className='min-h-screen flex flex-col items-center py-6 gap-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {images.map((image) => (
                    <div key={image.id} className='overflow-hidden'>
                        <Image src={image.src} alt={image.alt} width={500} height={500} className='object-cover ' />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

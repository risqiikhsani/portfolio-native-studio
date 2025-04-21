import Image from 'next/image'
import React from 'react'


const images = [
    {
        id: 1,
        src: '/pictures/2/Image1.png',
        alt: 'Image1',
    },
    {
        id: 2,
        src: '/pictures/2/Image2.png',
        alt: 'Image2',
    },
    {
        id: 3,
        src: '/pictures/2/Image3.png',
        alt: 'Image3',
    },
    {
        id: 4,
        src: '/pictures/2/Image4.png',
        alt: 'Image4',
    },
    {
        id: 5,
        src: '/pictures/2/Image5.png',
        alt: 'Image5',
    },
    {
        id: 6,
        src: '/pictures/2/Image6.png',
        alt: 'Image6',
    },
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

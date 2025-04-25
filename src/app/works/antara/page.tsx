

import ImageGallery from '@/components/image-gallery';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Dummy gallery images
const images = [
  { id: 1, src: '/pictures/2/Image1.png', alt: 'Image1' },
  { id: 2, src: '/pictures/2/Image2.png', alt: 'Image2' },
  { id: 3, src: '/pictures/2/Image3.png', alt: 'Image3' },
  { id: 4, src: '/pictures/2/Image4.png', alt: 'Image4' },
  { id: 5, src: '/pictures/2/Image5.png', alt: 'Image5' },
  { id: 6, src: '/pictures/2/Image6.png', alt: 'Image6' },
];



export default function page() {
  return (
    <div>
      <ImageGallery images={images} />
    </div>
  )
}

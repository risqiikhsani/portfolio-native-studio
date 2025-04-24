'use client';

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

// Define GalleryItem type
interface GalleryItem {
  id: string;
  title: string;
  createdAt: string; // ISO string
  media: string;
}

// Dummy fetchGalleries function
async function fetchGalleries(): Promise<GalleryItem[]> {
  return [
    {
      id: '1',
      title: 'Gallery 1',
      media: '/pictures/2/Image1.png',
      createdAt: new Date().toISOString(),
    },
    // Add more as needed
  ];
}

export default function GalleryPage() {
  const [galleries, setGalleries] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGalleries();
      const formattedData = data.map((gallery) => ({
        ...gallery,
        createdAt: new Date(gallery.createdAt).toISOString(),
      }));

      const sortedData = formattedData.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setGalleries(sortedData);
    };

    fetchData();
  }, []);

  const closeModal = () => setSelectedImage(null);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-6 gap-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden cursor-pointer"
            onClick={() =>
              setSelectedImage({
                id: String(image.id),
                title: image.alt,
                media: image.src,
                createdAt: new Date().toISOString(),
              })
            }
          >
            <Image src={image.src} alt={image.alt} width={500} height={500} className="object-cover" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackgroundClick}
        >
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-all"
          >
            ✕
          </button>

          <div className="relative flex justify-center">
            <Image
              src={selectedImage.media}
              alt={selectedImage.title}
              height={1000}
              width={1000}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

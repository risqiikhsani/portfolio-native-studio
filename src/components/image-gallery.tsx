"use client"
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

export default function ImageGallery({images}: {images: {id: number, src: string, alt: string}[]}) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  
    const openModal = (index: number) => setCurrentIndex(index);
    const closeModal = () => setCurrentIndex(null);
  
    const showPrev = () =>
      setCurrentIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : prev));
    const showNext = () =>
      setCurrentIndex((prev) => (prev !== null ? (prev + 1) % images.length : prev));
  
    return (
        <div className="p-4">
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <Image
                key={img.id}
                src={img.src}
                width={500}
                height={500}
                alt={img.alt}
                onClick={() => openModal(idx)}
                className="cursor-pointer rounded-xl shadow-md hover:opacity-80 transition"
              />
            ))}
          </div>
    
          {/* Fullscreen Modal */}
          {currentIndex !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 px-2">
              <button
                className="absolute top-4 right-4 text-white p-2 z-10"
                onClick={closeModal}
              >
                <X size={28} />
              </button>
    
              {/* Centered Image with Arrows Inside */}
              <div className="relative w-full mx-auto flex justify-center items-center">
                {/* Left arrow */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 bg-black/40 rounded-full z-10"
                  onClick={showPrev}
                >
                  <ChevronLeft size={28} />
                </button>
    
                <Image
                  src={images[currentIndex].src}
                  alt="Fullscreen"
                  width={1000}
                  height={1000}
                  className="max-h-[80vh] max-w-full rounded-lg object-contain"
                />
    
                {/* Right arrow */}
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 bg-black/40 rounded-full z-10"
                  onClick={showNext}
                >
                  <ChevronRight size={28} />
                </button>
              </div>
    
              {/* Thumbnails */}
              <div className="mt-4 flex gap-2 overflow-x-auto w-full justify-center">
                {images.map((img, idx) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    width={100}
                    height={100}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-16 w-20 object-cover rounded-md cursor-pointer transition ${
                      idx === currentIndex
                        ? "ring-4 ring-blue-500"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      );
  }

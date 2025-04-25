
import ImageGallery from '@/components/image-gallery';


const images = [
    {
        id: 2,
        src: '/pictures/3/Image2.png',
        alt: 'Image2',
    },
    {
        id: 3,
        src: '/pictures/3/Image3.png',
        alt: 'Image3',
    },
    {
        id: 4,
        src: '/pictures/3/Image4.png',
        alt: 'Image4',
    },
    {
        id: 5,
        src: '/pictures/3/Image5.png',
        alt: 'Image5',
    },
    {
        id: 6,
        src: '/pictures/3/Image6.png',
        alt: 'Image6',
    },
    {
        id: 7,
        src: '/pictures/3/Image7.png',
        alt: 'Image7',
    }
]


export default function page() {
  return (
    <div>
        <ImageGallery images={images} />
    </div>
  )
}

import blackShirtImage from '../assets/products/black-shirt.png'
import blackToteImage from '../assets/products/black-tote.jpeg'
import bottleLifestyle1 from '../assets/products/bottles/bottles-lifestyle-1.png'
import bottleLifestyle2 from '../assets/products/bottles/bottles-lifestyle-2.png'
import bottleVideo from '../assets/products/bottles/bottle-video.mp4'
import capImage from '../assets/products/caps/trucker-lineup-1.png'
import capSolidColors from '../assets/products/caps/solid-colors-lineup.png'
import capSolidColors2 from '../assets/products/caps/solid-colors-2.png'
import capTrucker1 from '../assets/products/caps/trucker-lineup-1.png'
import capTrucker2 from '../assets/products/caps/trucker-lineup-2.png'
import capTrucker3 from '../assets/products/caps/trucker-lineup-3.png'
import capTrucker4 from '../assets/products/caps/trucker-lineup-4.png'
import capTrucker5 from '../assets/products/caps/trucker-lineup-5.png'
import capVideo from '../assets/products/caps/cap-video-1.mp4'
import whiteShirtImage from '../assets/products/white-shirt.png'
import whiteToteImage from '../assets/products/white-tote.jpeg'

const capGallery = [
  capTrucker1,
  capTrucker2,
  capTrucker3,
  capTrucker4,
  capTrucker5,
  capSolidColors,
  capSolidColors2,
]

export const products = [
  {
    id: 1,
    name: 'Tote Bag',
    category: 'Tote Bag',
    color: 'Black',
    amount: 100,
    badge: 'Black Edition',
    description: 'Durable black tote with the signature splash artwork.',
    image: blackToteImage,
  },
  {
    id: 2,
    name: 'Tote Bag',
    category: 'Tote Bag',
    color: 'White',
    amount: 100,
    badge: 'White Edition',
    description: 'Clean white tote featuring the multicolor signature mark.',
    image: whiteToteImage,
  },
  {
    id: 3,
    name: 'Cap',
    category: 'Cap',
    amount: 100,
    badge: 'Best Seller',
    description: 'Praisafest splash logo cap. Choose your colour — trucker and solid styles available.',
    image: capImage,
    video: capVideo,
    gallery: capGallery,
    colors: ['Yellow', 'White', 'Black', 'Orange', 'Navy', 'Royal Blue', 'Purple', 'Hot Pink'],
    mediaFit: 'cover',
    mediaPosition: 'center 35%',
  },
  {
    id: 4,
    name: 'Water Bottle',
    category: 'Bottle',
    color: 'White',
    amount: 100,
    badge: 'Hydration Pick',
    description: 'Branded reusable glass bottle with the signature Praisafest artwork.',
    image: bottleLifestyle1,
    video: bottleVideo,
    gallery: [bottleLifestyle1, bottleLifestyle2],
    mediaFit: 'contain',
  },
  {
    id: 5,
    name: 'Shirt',
    category: 'Shirt',
    color: 'White',
    amount: 100,
    badge: 'White Edition',
    description: 'A simple, comfortable shirt available in your preferred size.',
    image: whiteShirtImage,
    sizes: ['M', 'XL', 'XXL', 'XXXL'],
  },
  {
    id: 6,
    name: 'Shirt',
    category: 'Shirt',
    color: 'Black',
    amount: 100,
    badge: 'Black Edition',
    description: 'A simple, comfortable shirt available in your preferred size.',
    image: blackShirtImage,
    sizes: ['M', 'XL', 'XXL', 'XXXL'],
  },
]

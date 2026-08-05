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
import shirtBluePurple from '../assets/products/shirts/blue-purple-lineup.png'

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
    amount: 100,
    badge: 'New Colours',
    description: 'Praisafest splash logo tee with Adinkra side detail. Available in black, navy blue, pink, and grey.',
    image: shirtBluePurple,
    colors: ['Black', 'Navy Blue', 'Pink', 'Grey'],
    sizes: ['M', 'XL', 'XXL', 'XXXL'],
    mediaFit: 'contain',
  },
]

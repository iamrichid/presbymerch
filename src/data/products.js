import blackCapImage from '../assets/products/black-cap.jpeg'
import blackShirtImage from '../assets/products/black-shirt.png'
import blackToteImage from '../assets/products/black-tote.jpeg'
import waterBottleImage from '../assets/products/water-bottle.jpeg'
import whiteCapImage from '../assets/products/white-cap.jpeg'
import whiteShirtImage from '../assets/products/white-shirt.png'
import whiteToteImage from '../assets/products/white-tote.jpeg'

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
    name: 'White Cap',
    category: 'Cap',
    color: 'White',
    amount: 100,
    badge: 'Best Seller',
    description: 'White trucker cap with the splash logo across the front panel.',
    image: whiteCapImage,
  },
  {
    id: 4,
    name: 'Water Bottle',
    category: 'Bottle',
    color: 'White',
    amount: 100,
    badge: 'Hydration Pick',
    description: 'Branded reusable bottle available with the signature artwork.',
    image: waterBottleImage,
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
  {
    id: 7,
    name: 'Black Cap',
    category: 'Cap',
    color: 'Black',
    amount: 100,
    badge: 'Black Edition',
    description: 'Black trucker cap with the full-color splash logo.',
    image: blackCapImage,
  },
]

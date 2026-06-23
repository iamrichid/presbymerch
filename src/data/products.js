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
    name: 'Black Praisafest Tote',
    category: 'Tote Bag',
    color: 'Black',
    amount: 100,
    badge: 'Black Edition',
    description: 'Durable black tote with the Praisafest splash artwork.',
    image: blackToteImage,
  },
  {
    id: 2,
    name: 'White Praisafest Tote',
    category: 'Tote Bag',
    color: 'White',
    amount: 100,
    badge: 'White Edition',
    description: 'Clean white tote featuring the multicolor Praisafest mark.',
    image: whiteToteImage,
  },
  {
    id: 3,
    name: 'White Praisafest Cap',
    category: 'Cap',
    color: 'White',
    amount: 100,
    badge: 'Best Seller',
    description: 'White trucker cap with the splash logo across the front panel.',
    image: whiteCapImage,
  },
  {
    id: 4,
    name: 'Praisafest Water Bottle',
    category: 'Bottle',
    color: 'White',
    amount: 100,
    badge: 'Hydration Pick',
    description: 'Branded reusable bottle available with the Praisafest artwork.',
    image: waterBottleImage,
  },
  {
    id: 5,
    name: 'White Praisafest Shirt',
    category: 'Shirt',
    color: 'White',
    amount: 100,
    badge: 'White Edition',
    description: 'Official white Praisafest shirt with selectable sizes for your order.',
    image: whiteShirtImage,
    sizes: ['M', 'XL', 'XXL', 'XXXL'],
  },
  {
    id: 6,
    name: 'Black Praisafest Shirt',
    category: 'Shirt',
    color: 'Black',
    amount: 100,
    badge: 'Black Edition',
    description: 'Official black Praisafest shirt with selectable sizes for your order.',
    image: blackShirtImage,
    sizes: ['M', 'XL', 'XXL', 'XXXL'],
  },
  {
    id: 7,
    name: 'Black Praisafest Cap',
    category: 'Cap',
    color: 'Black',
    amount: 100,
    badge: 'Black Edition',
    description: 'Black trucker cap with the full-color Praisafest splash logo.',
    image: blackCapImage,
  },
]

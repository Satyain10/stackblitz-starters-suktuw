import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HomeIcon,
  WrenchIcon,
  TruckIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
  HeartIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const categories = [
  {
    id: 'home-services',
    name: 'Home Services',
    icon: HomeIcon,
    description: 'Cleaning, Plumbing, Electrician',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'repairs',
    name: 'Repairs',
    icon: WrenchIcon,
    description: 'Appliances, Electronics, Gadgets',
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'transport',
    name: 'Transport',
    icon: TruckIcon,
    description: 'Moving, Delivery, Logistics',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: 'tech',
    name: 'Tech Support',
    icon: ComputerDesktopIcon,
    description: 'Computer, Network, IT Services',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'home-improvement',
    name: 'Home Improvement',
    icon: PaintBrushIcon,
    description: 'Painting, Renovation, Design',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    icon: HeartIcon,
    description: 'Fitness, Spa, Healthcare',
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    icon: SparklesIcon,
    description: 'Salon, Makeup, Grooming',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'security',
    name: 'Security',
    icon: ShieldCheckIcon,
    description: 'Guards, CCTV, Access Control',
    color: 'bg-gray-100 text-gray-600'
  }
]

export default function ServiceCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center mb-12">
          Choose from our wide range of professional services
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link
                to={`/services/${category.id}`}
                className="block bg-white rounded-lg shadow-md p-6 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
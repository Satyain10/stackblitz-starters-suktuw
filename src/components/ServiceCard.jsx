import { motion } from 'framer-motion'
import * as Icons from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function ServiceCard({ title, description, icon, image }) {
  const Icon = Icons[icon]
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {Icon && <Icon className="w-6 h-6 text-indigo-600 mr-2" />}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/services/${title.toLowerCase().replace(' ', '-')}`}
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  )
}
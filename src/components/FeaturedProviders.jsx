import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const providers = [
  {
    name: "Tech Solutions Hub",
    type: "Computer Service",
    rating: 4.8,
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500",
    location: "Downtown Tech District"
  },
  {
    name: "AutoCare Express",
    type: "Auto Service",
    rating: 4.9,
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da05?w=500",
    location: "Central Auto Zone"
  },
  {
    name: "BikeWorks Pro",
    type: "Bike Service",
    rating: 4.7,
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1523740856324-f2ce89135981?w=500",
    location: "Bike Valley"
  }
]

export default function FeaturedProviders() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {providers.map((provider, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img 
            src={provider.image} 
            alt={provider.name} 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
            <p className="text-gray-600 mb-2">{provider.type}</p>
            <div className="flex items-center mb-2">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="ml-1">{provider.rating}</span>
            </div>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Experience:</span> {provider.experience}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> {provider.location}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
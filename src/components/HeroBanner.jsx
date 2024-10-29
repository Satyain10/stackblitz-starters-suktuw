import { motion } from 'framer-motion'
import SearchBar from './SearchBar'

export default function HeroBanner() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your One-Stop Service Solution
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Find trusted professionals for all your service needs
          </p>
          <SearchBar className="max-w-3xl mx-auto" />
        </motion.div>
      </div>
    </section>
  )
}
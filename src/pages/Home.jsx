import { motion } from 'framer-motion'
import HeroBanner from '../components/HeroBanner'
import ServiceCategories from '../components/ServiceCategories'
import FeaturedProviders from '../components/FeaturedProviders'
import PopularServices from '../components/PopularServices'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ServiceCategories />
      <PopularServices />
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Top Service Providers
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Trusted and verified professionals near you
          </p>
          <FeaturedProviders />
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p>Service Providers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-2">10k+</h3>
              <p>Happy Customers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-4xl font-bold mb-2">4.8/5</h3>
              <p>Average Rating</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
import { motion } from 'framer-motion'

const popularServices = [
  {
    name: "Home Cleaning",
    price: "from $49",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500"
  },
  {
    name: "AC Repair",
    price: "from $39",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500"
  },
  {
    name: "Plumbing",
    price: "from $29",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500"
  },
  {
    name: "Electrician",
    price: "from $35",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500"
  }
]

export default function PopularServices() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Popular Services</h2>
        <p className="text-gray-600 text-center mb-12">Most booked services in your area</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold">{service.name}</h3>
                  <p className="text-sm opacity-90">{service.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
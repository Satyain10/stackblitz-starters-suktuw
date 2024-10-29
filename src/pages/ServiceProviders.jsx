import { useParams } from 'react-router-dom'
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ServiceProviders() {
  const { category } = useParams()

  const providers = [
    {
      id: 1,
      name: "Expert Tech Solutions",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500",
      address: "123 Tech Street, Downtown",
      phone: "+1 234-567-8900",
      hours: "Mon-Sat: 9AM-6PM",
      experience: "12 years",
      services: ["Computer Repair", "Virus Removal", "Data Recovery"],
      prices: {
        "Basic Diagnostics": "$49",
        "Virus Removal": "$89",
        "Data Recovery": "from $129"
      }
    },
    // Add more providers...
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8 capitalize">{category.replace('-', ' ')} Providers</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {providers.map(provider => (
            <div key={provider.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={provider.image} 
                alt={provider.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{provider.name}</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 text-gray-400 mr-2" />
                    <span>{provider.address}</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 text-gray-400 mr-2" />
                    <span>{provider.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 text-gray-400 mr-2" />
                    <span>{provider.hours}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Services & Prices:</h3>
                  <ul className="space-y-2">
                    {Object.entries(provider.prices).map(([service, price]) => (
                      <li key={service} className="flex justify-between">
                        <span>{service}</span>
                        <span className="font-semibold">{price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
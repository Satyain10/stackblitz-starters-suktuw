import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { StarIcon, MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid'
import { Tab } from '@headlessui/react'
import Map from '../components/Map'
import ReviewList from '../components/ReviewList'
import BookingForm from '../components/BookingForm'

export default function ProviderProfile() {
  const { id } = useParams()
  const [selectedTab, setSelectedTab] = useState(0)

  const provider = {
    id,
    name: "Expert Tech Solutions",
    type: "Computer Service",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500",
    coverImage: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=1920",
    address: "123 Tech Street, Downtown",
    phone: "+1 234-567-8900",
    hours: "Mon-Sat: 9AM-6PM",
    experience: "12 years",
    description: "Expert Tech Solutions provides professional computer repair and IT services with over 12 years of experience. We specialize in hardware repairs, software troubleshooting, and network solutions.",
    services: [
      { name: "Computer Repair", price: "from $49" },
      { name: "Virus Removal", price: "$89" },
      { name: "Data Recovery", price: "from $129" },
      { name: "Network Setup", price: "$99" }
    ],
    location: {
      lat: 40.7128,
      lng: -74.0060
    }
  }

  return (
    <div>
      {/* Cover Image */}
      <div className="h-64 md:h-96 relative">
        <img
          src={provider.coverImage}
          alt={provider.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-24 h-24 rounded-lg object-cover mr-6"
                />
                <div>
                  <h1 className="text-2xl font-bold mb-2">{provider.name}</h1>
                  <p className="text-gray-600 mb-2">{provider.type}</p>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <span className="ml-1 font-semibold">{provider.rating}</span>
                    <span className="ml-1 text-gray-600">
                      ({provider.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <Tab.Group onChange={setSelectedTab}>
                  <Tab.List className="flex space-x-4 border-b">
                    {['About', 'Services', 'Reviews', 'Location'].map((tab, index) => (
                      <Tab
                        key={tab}
                        className={({ selected }) =>
                          `pb-4 px-4 text-sm font-medium border-b-2 ${
                            selected
                              ? 'border-blue-600 text-blue-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700'
                          }`
                        }
                      >
                        {tab}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-6">
                    <Tab.Panel>
                      <p className="text-gray-600">{provider.description}</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="space-y-4">
                        {provider.services.map((service, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                          >
                            <span className="font-medium">{service.name}</span>
                            <span className="text-blue-600 font-semibold">
                              {service.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ReviewList providerId={id} />
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="h-96">
                        <Map location={provider.location} />
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <div className="space-y-4 mb-6">
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
              <BookingForm provider={provider} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
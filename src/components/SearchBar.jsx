import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Combobox } from '@headlessui/react'

const services = [
  'Home Cleaning',
  'Plumbing',
  'Electrician',
  'AC Repair',
  'Car Service',
  'Computer Repair',
  'Moving Service',
  'Beauty Service'
]

export default function SearchBar({ className = '' }) {
  const navigate = useNavigate()
  const [selectedService, setSelectedService] = useState('')
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  const filteredServices = query === ''
    ? services
    : services.filter((service) =>
        service.toLowerCase().includes(query.toLowerCase())
      )

  const handleSearch = (e) => {
    e.preventDefault()
    if (selectedService) {
      navigate(`/services/${selectedService.toLowerCase().replace(' ', '-')}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className={`${className}`}>
      <div className="flex flex-col md:flex-row gap-4 bg-white p-3 rounded-lg shadow-lg">
        <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 p-2">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 mr-2" />
          <Combobox value={selectedService} onChange={setSelectedService}>
            <Combobox.Input
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What service do you need?"
              className="w-full focus:outline-none text-gray-700"
            />
            <Combobox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg">
              {filteredServices.map((service) => (
                <Combobox.Option
                  key={service}
                  value={service}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 ${
                      active ? 'bg-blue-600 text-white' : 'text-gray-900'
                    }`
                  }
                >
                  {service}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </div>
        <div className="flex-1 flex items-center p-2">
          <MapPinIcon className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full focus:outline-none text-gray-700"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Search
        </button>
      </div>
    </form>
  )
}
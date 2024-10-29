import { useAuth0 } from '@auth0/auth0-react'
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function UserDashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [selectedTab, setSelectedTab] = useState(0)

  const bookings = [
    {
      id: 1,
      service: "Computer Repair",
      provider: "Expert Tech Solutions",
      date: "2023-12-20",
      time: "14:00",
      status: "Confirmed",
      location: "123 Tech Street, Downtown"
    }
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please sign in to view your dashboard</h2>
          <p className="text-gray-600">You need to be logged in to access this page.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center mb-8">
        <img
          src={user.picture}
          alt={user.name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <Tab.Group onChange={setSelectedTab}>
        <Tab.List className="flex space-x-4 border-b mb-6">
          {['Bookings', 'Favorites', 'Settings'].map((tab, index) => (
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
        <Tab.Panels>
          <Tab.Panel>
            <div className="space-y-6">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {booking.service}
                      </h3>
                      <p className="text-gray-600">{booking.provider}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {booking.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-5 h-5 mr-2" />
                      <span>{booking.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-5 h-5 mr-2" />
                      <span>{booking.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center text-gray-600 py-12">
              <p>No favorite providers yet</p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="max-w-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
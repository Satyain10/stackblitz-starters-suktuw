import { useAuth0 } from '@auth0/auth0-react'
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import {
  CalendarIcon,
  CurrencyDollarIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function ProviderDashboard() {
  const { isAuthenticated, isLoading } = useAuth0()
  const [selectedTab, setSelectedTab] = useState(0)

  const stats = [
    {
      name: 'Total Bookings',
      value: '156',
      icon: CalendarIcon
    },
    {
      name: 'Revenue',
      value: '$12,426',
      icon: CurrencyDollarIcon
    },
    {
      name: 'Rating',
      value: '4.8',
      icon: StarIcon
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
          <h2 className="text-2xl font-bold mb-4">Provider Access Required</h2>
          <p className="text-gray-600">Please sign in with a provider account.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-8">Provider Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-blue-100 mr-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Tab.Group onChange={setSelectedTab}>
        <Tab.List className="flex space-x-4 border-b mb-6">
          {['Bookings', 'Services', 'Reviews', 'Settings'].map((tab, index) => (
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
            <div className="bg-white rounded-lg shadow-md">
              {/* Add bookings table */}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-6">
                {/* Add service management form */}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-white rounded-lg shadow-md">
              {/* Add reviews list */}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="max-w-lg space-y-6">
                {/* Add settings form */}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
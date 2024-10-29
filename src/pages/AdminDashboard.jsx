import { useAuth0 } from '@auth0/auth0-react'
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import {
  UserGroupIcon,
  BuildingStorefrontIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline'

export default function AdminDashboard() {
  const { isAuthenticated, isLoading } = useAuth0()
  const [selectedTab, setSelectedTab] = useState(0)

  const stats = [
    {
      name: 'Total Users',
      value: '2,543',
      icon: UserGroupIcon
    },
    {
      name: 'Active Providers',
      value: '487',
      icon: BuildingStorefrontIcon
    },
    {
      name: 'Bookings Today',
      value: '156',
      icon: DocumentCheckIcon
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
          <h2 className="text-2xl font-bold mb-4">Admin Access Required</h2>
          <p className="text-gray-600">Please sign in with an admin account.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>

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
          {['Providers', 'Users', 'Bookings'].map((tab, index) => (
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
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Provider
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Add provider rows here */}
                </tbody>
              </table>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-white rounded-lg shadow-md">
              {/* Add users table */}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-white rounded-lg shadow-md">
              {/* Add bookings table */}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

export default function BookingForm({ provider }) {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [service, setService] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      loginWithRedirect()
      return
    }

    // Here you would typically make an API call to book the service
    toast.success('Booking request sent successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Service
        </label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select a service</option>
          {provider.services.map((service, index) => (
            <option key={index} value={service.name}>
              {service.name} ({service.price})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <div className="relative">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <CalendarIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Time
        </label>
        <div className="relative">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <ClockIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        {isAuthenticated ? 'Book Now' : 'Sign in to Book'}
      </button>
    </form>
  )
}
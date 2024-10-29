import { StarIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'

const reviews = [
  {
    id: 1,
    author: "John Doe",
    rating: 5,
    date: new Date('2023-12-01'),
    content: "Excellent service! Very professional and knowledgeable. Fixed my computer issues quickly.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32"
  },
  {
    id: 2,
    author: "Jane Smith",
    rating: 4,
    date: new Date('2023-11-28'),
    content: "Good service overall. Slightly expensive but worth the quality.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32"
  }
]

export default function ReviewList({ providerId }) {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-6">
          <div className="flex items-center mb-4">
            <img
              src={review.avatar}
              alt={review.author}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h4 className="font-medium">{review.author}</h4>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {format(review.date, 'MMM d, yyyy')}
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-600">{review.content}</p>
        </div>
      ))}
    </div>
  )
}
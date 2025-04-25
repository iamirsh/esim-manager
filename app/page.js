"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [bookingId, setBookingId] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!bookingId) {
      setError("Please enter a booking ID")
      return
    }

    if (!bookingId.startsWith("esim_")) {
      setError("Booking ID should start with 'esim_'")
      return
    }

    // In a real app, we would validate the booking ID against a database
    // For this demo, we'll just redirect to the dashboard
    router.push("/dashboard")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to eSIM Manager</h2>
          <p className="mt-2 text-gray-600">Enter your booking ID to view your eSIM details</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="booking-id" className="block text-sm font-medium text-gray-700">
              Booking ID
            </label>
            <div className="mt-1">
              <input
                id="booking-id"
                name="bookingId"
                type="text"
                required
                placeholder="e.g. esim_12345678"
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={bookingId}
                onChange={(e) => {
                  setBookingId(e.target.value)
                  setError("")
                }}
              />
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View eSIM Details
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
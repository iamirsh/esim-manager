"use client"

import { useState } from "react"
import { CreditCard } from "lucide-react"

export default function PaymentForm({ amount, planName, onSuccess, onCancel }) {
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})

  const formatCardNumber = (value) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, "")
    // Limit to 16 digits
    const limited = digits.slice(0, 16)
    // Add spaces after every 4 digits
    const formatted = limited.replace(/(\d{4})(?=\d)/g, "$1 ")
    return formatted
  }

  const formatExpiryDate = (value) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, "")
    // Limit to 4 digits
    const limited = digits.slice(0, 4)
    // Add slash after first 2 digits if there are more than 2
    if (limited.length > 2) {
      return `${limited.slice(0, 2)}/${limited.slice(2)}`
    }
    return limited
  }

  const validateForm = () => {
    const newErrors = {}

    if (!cardNumber.trim() || cardNumber.replace(/\s/g, "").length < 16) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number"
    }

    if (!cardName.trim()) {
      newErrors.cardName = "Please enter the name on card"
    }

    if (!expiryDate.trim() || expiryDate.length < 5) {
      newErrors.expiryDate = "Please enter a valid expiry date (MM/YY)"
    } else {
      const [month, year] = expiryDate.split("/")
      const currentYear = new Date().getFullYear() % 100
      const currentMonth = new Date().getMonth() + 1

      if (
        Number.parseInt(month) < 1 ||
        Number.parseInt(month) > 12 ||
        Number.parseInt(year) < currentYear ||
        (Number.parseInt(year) === currentYear && Number.parseInt(month) < currentMonth)
      ) {
        newErrors.expiryDate = "Card has expired"
      }
    }

    if (!cvv.trim() || cvv.length < 3) {
      newErrors.cvv = "Please enter a valid CVV"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      onSuccess()
    }, 2000)
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Payment Details</h2>
        <CreditCard className="text-blue-500" />
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">Plan Selected</p>
        <p className="font-medium">{planName}</p>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-600">Amount</p>
        <p className="text-xl font-bold text-blue-500">{amount}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="card-number" className="block mb-1 text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="1234 5678 9012 3456"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.cardNumber ? "border-red-500" : "border-gray-300"
              }`}
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            />
            {errors.cardNumber && <p className="mt-1 text-xs text-red-500">{errors.cardNumber}</p>}
          </div>

          <div>
            <label htmlFor="card-name" className="block mb-1 text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <input
              id="card-name"
              type="text"
              placeholder="John Doe"
              className={`w-full px-3 py-2 border rounded-md ${errors.cardName ? "border-red-500" : "border-gray-300"}`}
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            {errors.cardName && <p className="mt-1 text-xs text-red-500">{errors.cardName}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry-date" className="block mb-1 text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                id="expiry-date"
                type="text"
                placeholder="MM/YY"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.expiryDate ? "border-red-500" : "border-gray-300"
                }`}
                value={expiryDate}
                onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
              />
              {errors.expiryDate && <p className="mt-1 text-xs text-red-500">{errors.expiryDate}</p>}
            </div>

            <div>
              <label htmlFor="cvv" className="block mb-1 text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                placeholder="123"
                maxLength={4}
                className={`w-full px-3 py-2 border rounded-md ${errors.cvv ? "border-red-500" : "border-gray-300"}`}
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
              />
              {errors.cvv && <p className="mt-1 text-xs text-red-500">{errors.cvv}</p>}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              onClick={onCancel}
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : `Pay ${amount}`}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
"use client"

import { CheckCircle } from "lucide-react"

export default function PlanCard({ name, price, features, isSelected = false, onSelect }) {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-all ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
      }`}
      onClick={onSelect}
    >
      <h3 className="mb-2 text-lg font-semibold">{name}</h3>
      <p className="mb-4 text-xl font-bold text-blue-500">{price}</p>

      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle className={`h-4 w-4 ${feature.included ? "text-green-500" : "text-gray-300"}`} />
            <span className="text-sm">{feature.name}</span>
          </div>
        ))}
      </div>

      <button
        className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={(e) => {
          e.stopPropagation()
          onSelect()
        }}
      >
        Select Plan
      </button>
    </div>
  )
}
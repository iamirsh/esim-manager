"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { esimData } from "@/data/esimData"
import { CheckCircle } from "lucide-react"
import PaymentForm from "@/components/payment-form"

export default function Recharge() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isRecharging, setIsRecharging] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showPayment, setShowPayment] = useState(false)

  const selectedPlanData = selectedPlan ? esimData.availablePlans.find((plan) => plan.name === selectedPlan) : null

  const handleRecharge = () => {
    if (!selectedPlan) return
    setShowPayment(true)
  }

  const handlePaymentSuccess = () => {
    setShowPayment(false)
    setIsSuccess(true)

    // Redirect to dashboard after success
    setTimeout(() => {
      router.push("/dashboard")
    }, 2000)
  }

  const handlePaymentCancel = () => {
    setShowPayment(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Dashboard
        </button>
      </div>

      <h1 className="text-2xl font-bold">Manage SIM</h1>

      {isSuccess ? (
        <div className="p-6 text-center bg-white rounded-lg shadow">
          <div className="flex flex-col items-center justify-center gap-2">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <h2 className="text-xl font-semibold">Recharge Successful!</h2>
            <p className="text-gray-600">Your plan has been updated successfully.</p>
            <p className="text-gray-600">Redirecting to dashboard...</p>
          </div>
        </div>
      ) : showPayment ? (
        <PaymentForm
          amount={selectedPlanData?.price || ""}
          planName={selectedPlanData?.name || ""}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
        />
      ) : (
        <>
          {/* Current Plan Card */}
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Current Plan</h2>
              <div className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 8.5V7a1 1 0 0 0-1-1h-1.5" />
                  <path d="M8 8.5V7a1 1 0 0 1 1-1h1.5" />
                  <path d="M16 15.5V17a1 1 0 0 1-1 1h-1.5" />
                  <path d="M8 15.5V17a1 1 0 0 0 1 1h1.5" />
                  <path d="M12 12v-2" />
                  <path d="M12 12h2" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-600">Plan Name</p>
                <p className="font-medium">{esimData.plan.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Price</p>
                <p className="font-medium">{esimData.plan.price}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Validity</p>
                <p className="font-medium">
                  {esimData.plan.validFrom} - {esimData.plan.validUntil}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Remaining Data</p>
                <p className="font-medium">{esimData.plan.remainingData}</p>
              </div>
            </div>
          </div>

          {/* Available Plans */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="mb-4 text-lg font-semibold">Available Plans</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {esimData.availablePlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedPlan === plan.name ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  <h3 className="mb-2 text-lg font-semibold">{plan.name}</h3>
                  <p className="mb-4 text-xl font-bold text-blue-500">{plan.price}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span className="text-sm">{plan.data} Data</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span className="text-sm">{plan.validity} Validity</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span className="text-sm">{plan.speed} Speed</span>
                    </div>

                    {plan.support && (
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span className="text-sm">{plan.support} Support</span>
                      </div>
                    )}

                    {plan.roaming && (
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span className="text-sm">Global Roaming</span>
                      </div>
                    )}
                  </div>

                  <button
                    className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedPlan(plan.name)
                    }}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={!selectedPlan || isRecharging}
                onClick={handleRecharge}
              >
                {isRecharging ? "Processing..." : "Recharge Now"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
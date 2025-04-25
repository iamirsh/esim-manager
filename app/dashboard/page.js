"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { esimData } from "@/data/esimData"

export default function Dashboard() {
  const router = useRouter()
  const [data] = useState(esimData)

  // Calculate percentage for progress bar
  const usagePercentage = Math.round(
    (Number.parseFloat(data.usage.usedData.split(" ")[0]) / Number.parseFloat(data.usage.totalData.split(" ")[0]) * 100))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={() => router.push("/recharge")}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Manage SIM
        </button>
      </div>

      {/* Data Usage Card */}
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-lg font-semibold">Data Usage</h2>
            <p className="text-sm text-gray-600">{data.plan.name} plan</p>
          </div>
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
              <path d="M2 20h.01" />
              <path d="M7 20v-4" />
              <path d="M12 20v-8" />
              <path d="M17 20V8" />
              <path d="M22 4v16" />
            </svg>
          </div>
        </div>

        <div className="w-full h-4 mt-4 bg-gray-200 rounded-full">
          <div className="h-4 bg-blue-500 rounded-full" style={{ width: `${usagePercentage}%` }}></div>
        </div>

        <div className="flex justify-between mt-2 text-sm">
          <span>{data.usage.usedData}</span>
          <span>{data.usage.totalData}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Remaining Data Card */}
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Remaining Data</h2>
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
                <path d="M2 20h.01" />
                <path d="M7 20v-4" />
                <path d="M12 20v-8" />
                <path d="M17 20V8" />
                <path d="M22 4v16" />
              </svg>
            </div>
          </div>

          <div className="mb-2">
            <h3 className="text-3xl font-bold">{data.plan.remainingData}</h3>
            <p className="text-sm text-gray-600">Available for use</p>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Total Data</span>
              <span className="text-sm font-medium">{data.usage.totalData}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Used Data</span>
              <span className="text-sm font-medium">{data.usage.usedData}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">SMS Total</span>
              <span className="text-sm font-medium">{data.usage.smsTotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">SMS Used</span>
              <span className="text-sm font-medium">{data.usage.smsUsed}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Voice Total</span>
              <span className="text-sm font-medium">{data.usage.voiceTotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Voice Used</span>
              <span className="text-sm font-medium">{data.usage.voiceUsed}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Valid From</span>
              <span className="text-sm font-medium">{data.plan.validFrom}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Valid Until</span>
              <span className="text-sm font-medium">{data.plan.validUntil}</span>
            </div>
          </div>
        </div>

        {/* Current Session Card */}
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Current Session</h2>
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
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
          </div>

          <div className="mb-2">
            <h3 className="text-3xl font-bold">{data.currentSession.usageMB} MB</h3>
            <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleTimeString()}</p>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Session ID</span>
              <span className="text-sm font-medium">{data.currentSession.sessionId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Started</span>
              <span className="text-sm font-medium">{new Date(data.currentSession.started).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Usage</span>
              <span className="text-sm font-medium">{data.currentSession.usageMB * 1024} KB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
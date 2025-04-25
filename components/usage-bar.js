export default function UsageBar({ used, total, unit = "GB" }) {
    const percentage = Math.min(100, Math.round((used / total) * 100))
  
    return (
      <div className="space-y-2">
        <div className="w-full h-4 bg-gray-200 rounded-full">
          <div className="h-4 bg-blue-500 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
  
        <div className="flex justify-between text-sm">
          <span>
            {used} {unit}
          </span>
          <span>
            {total} {unit}
          </span>
        </div>
      </div>
    )
  }
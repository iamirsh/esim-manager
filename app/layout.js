import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "eSIM Manager",
  description: "Track and manage your eSIM data usage",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="flex items-center justify-between px-4 py-4 bg-white border-b md:px-8">
            <div className="flex items-center gap-2">
              <div className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              <h1 className="text-xl font-bold">eSIM Manager</h1>
            </div>
            <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
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
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Logout
            </a>
          </header>
          <main className="container px-4 py-6 mx-auto md:px-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
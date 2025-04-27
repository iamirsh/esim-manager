# eSIM Manager – Data Usage Tracker Web App

A responsive Next.js web application for managing eSIM plans, tracking data usage, and recharging plans.



## Features

- **Home Page**: Enter booking ID to access eSIM details
- **Dashboard Page**: View current plan, data usage, and session information
- **Recharge Page**: Browse available plans and recharge with mock payment system
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Mock Payment System**: Simulates credit card payment for plan recharges

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS v4
- **State Management**: React Hooks (useState)
- **Routing**: Next.js App Router
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/iamirsh/esim-manager.git
cd esim-manager
\`\`\`

2. Install dependencies:


npm install
# or
yarn install


3. Run the development server:


npm run dev
# or
yarn dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
esim-manager/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page (Booking ID entry)
│   ├── dashboard/          # Dashboard page
│   ├── recharge/           # Recharge page
│   ├── layout.tsx          # Root layout with header
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── payment-form.tsx    # Credit card payment form
│   ├── usage-bar.tsx       # Data usage progress bar
│   └── plan-card.tsx       # Plan selection card
├── data/                   # Mock data
│   └── esimData.ts         # eSIM data including plans and usage
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS configuration
└── README.md               # Project documentation
\`\`\`

## Implementation Notes

### Data Flow

The application uses a mock data file (`data/esimData.js`) to simulate fetching data from an API. In a production environment, this would be replaced with actual API calls.

### State Management

React's useState hook is used for managing component state. For a larger application, you might consider using more robust state management solutions like Redux or Zustand.

### Mock Payment System

The payment system simulates a credit card payment flow with:
- Form validation for card details
- Input formatting for card number and expiry date
- Simulated payment processing with timeout
- Success and error states

### Responsive Design

The application is designed to be responsive across different screen sizes:
- Mobile-first approach
- Responsive grid layouts
- Adaptive component sizing

### Future Improvements

- Add user authentication
- Implement dark mode
- Add usage history charts
- Integrate with real payment gateway
- Add notifications for low data alerts



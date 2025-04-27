# eSIM Manager – Data Usage Tracker Web App

A responsive Next.js web application for managing eSIM plans, tracking data usage, and recharging plans.
<img width="935" alt="sss" src="https://github.com/user-attachments/assets/ac5831c1-9994-4bd5-8981-640f781300a3" />



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
├── app/                    
│   ├── page.js          
│   ├── dashboard/page.js       
│   ├── recharge/ page.js         
│   ├── layout.js         
│   └── globals.css        
├── components/             
│   ├── payment-form.js   
│   ├── usage-bar.js       
│   └── plan-card.js     
├── data/                   
│   └── esimData.js        
├── public/                 
└── README.md             
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



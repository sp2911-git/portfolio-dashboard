# AI & Semiconductor Stock Portfolio Dashboard

A comprehensive web-based dashboard for tracking and analyzing AI and semiconductor stock recommendations, with historical performance tracking and a self-improving learning algorithm.

## Features

- **Main Dashboard**: Displays recommended stocks with 30-day forecasts, risk levels, and investment rationales
- **Historical Performance**: Tracks how previous predictions compared to actual results
- **Update Mechanism**: Refreshes stock recommendations and learns from past performance
- **Learning Algorithm**: Continuously improves future analyses based on what worked and what didn't
- **Settings**: Configure portfolio preferences, update frequency, and notification settings

## Technology Stack

- **Frontend**: React, TypeScript, Material-UI, Recharts
- **Backend**: Node.js, Express, MongoDB
- **Data Analysis**: Python with pandas, numpy, scikit-learn, yfinance

## Installation

### Prerequisites

- Node.js (v14+)
- MongoDB
- Python 3.8+

### Setup

1. Clone the repository
2. Run the build script:

```bash
./build.sh
```

This script will:
- Install MongoDB if not already installed
- Build the React frontend
- Set up the Node.js backend
- Create a startup script

## Running the Application

After building, start the application:

```bash
./start.sh
```

The dashboard will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Deployment Options

### Local Deployment

The default setup runs the application locally, which is suitable for personal use.

### Cloud Deployment

For cloud deployment, you can:

1. Deploy the frontend to a static hosting service (Netlify, Vercel, etc.)
2. Deploy the backend to a Node.js hosting service (Heroku, DigitalOcean, etc.)
3. Use a managed MongoDB service (MongoDB Atlas)

## Usage Guide

### Main Dashboard

The main dashboard displays current stock recommendations with:
- Expected 30-day price increases
- Risk levels
- Investment ratings
- Rationales for each recommendation

### Historical Performance

Track how previous recommendations performed:
- Compare expected vs. actual returns
- View performance by month or by stock
- Analyze prediction accuracy over time

### Update Recommendations

Trigger a new analysis that:
1. Reviews previous predictions
2. Learns from what worked and what didn't
3. Updates the selection criteria
4. Generates new recommendations

### Learning Algorithm

View insights discovered by the algorithm:
- Performance improvements over time
- Key patterns identified in successful picks
- Model adjustments made to improve accuracy

### Settings

Configure the dashboard to your preferences:
- Risk tolerance level
- Focus sectors
- Update frequency
- Notification preferences

## Maintenance

### Backend Updates

To update the backend:

1. Navigate to the backend directory
2. Pull the latest changes
3. Install any new dependencies
4. Restart the server

### Frontend Updates

To update the frontend:

1. Navigate to the frontend directory
2. Pull the latest changes
3. Rebuild the application
4. Restart the server

### Database Maintenance

MongoDB maintenance tasks:

1. Regular backups
2. Index optimization
3. Data cleanup for old records

## License

This project is licensed under the MIT License - see the LICENSE file for details.

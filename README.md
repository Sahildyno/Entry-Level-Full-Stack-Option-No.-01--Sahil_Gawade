#  Gamified User Dashboard

A responsive and interactive personal dashboard that gamifies daily check-ins. Users can track XP, streaks, mood, and progress — with a clean UI and animated XP charts.

---

##  Features

- **User Login (Mock)**
- **XP and Level Tracking**
- **Streak Counter & Last Action Log**
- **Mood Check-in with Text/Emoji**
- **Animated XP Chart (Line Chart using Chart.js)**
- **Reward Message after Check-in**
- **Fully Responsive UI for Mobile and Desktop**

---

## Live Demo

[🔗 View on Netlify (replace this with your link)](https://phenomenal-kelpie-a1167e.netlify.app/)

---

##  Setup Instructions

### Clone the Repository

git clone https://github.com/Sahildyno/Entry-Level-Full-Stack-Option-No.-01--Sahil_Gawade.git
cd gamified-dashboard


Install Dependencies

npm install
Start the App
npm start
App will run at: http://localhost:3000

🔧 Folder Structure
pgsql
gamified-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── XPChart.jsx       # XP Line Chart component
│   ├── App.js                # Main dashboard logic
│   ├── App.css               # Styles
│   └── index.js              # React entry point
├── package.json
└── README.md
📦 Tech Stack
React.js — Frontend Library

Chart.js + react-chartjs-2 — XP Line Chart

CSS Flexbox & Media Queries — Responsive Styling

useState + useEffect — React Hooks

| Feature               | Description                                                                   |
| ----------------------| ----------------------------------------------------------------------------- |
|  **User Greeting**    | Personalized welcome message with user's name (e.g., *Welcome, Sahil Gawade*) |
|  **XP Tracker**       | Displays the user’s current experience points (XP), e.g., *XP: 120*           |
|  **Level Indicator**  | Shows the current user level, e.g., *Level: 2*                                |
|  **Streak Counter**   | Tracks how many days the user has checked in consecutively                    |
|  **Last Action Log**  | Displays the last date/time the user interacted (e.g., mood check-in)         |
|  **Mood Check-In**    | Allows the user to input a mood emoji and a short journal entry               |
|  **Check-In Button**  | Submits mood and journal entry; updates streak and last action                |
|  **Progress Section** | Placeholder for a progress visual (e.g., XP chart, level bar, or timeline)    |

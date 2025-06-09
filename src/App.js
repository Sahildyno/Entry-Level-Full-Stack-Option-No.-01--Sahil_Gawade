import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [xp, setXp] = useState(120);
  const [streak, setStreak] = useState(5);
  const [lastAction, setLastAction] = useState("2025-06-07 15:00");
  const [mood, setMood] = useState("");
  const [journal, setJournal] = useState("");
  const [level, setLevel] = useState(1);
  const [showReward, setShowReward] = useState(false);

  // Calculate level based on XP
  useEffect(() => {
    setLevel(Math.floor(xp / 100) + 1);
  }, [xp]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.trim() !== "") setLoggedIn(true);
  };

  const handleMoodSubmit = (e) => {
    e.preventDefault();
    if (mood || journal) {
      setXp((prev) => prev + 20);
      setStreak((prev) => prev + 1);
      setLastAction(new Date().toLocaleString());
      setMood("");
      setJournal("");
      setShowReward(true);
      setTimeout(() => setShowReward(false), 3000);
    }
  };

  if (!loggedIn) {
    return (
      <div className="app-background">
        <div className="overlay" />
        <div className="login-container">
          <h1>🎮 Gamified Dashboard</h1>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="text"
              placeholder="Enter your username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              autoFocus
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="app-background">
      <div className="overlay" />
      <div className="dashboard-container">
        <header>
          <h2>Welcome, {user} 👋</h2>
        </header>

        <section className="stats-section">
          <div className="stat-card">
            <h3>XP</h3>
            <p>{xp}</p>
          </div>
          <div className="stat-card">
            <h3>Level</h3>
            <p>{level}</p>
          </div>
          <div className="stat-card">
            <h3>Streak</h3>
            <p>{streak} days 🔥</p>
          </div>
          <div className="stat-card">
            <h3>Last Action</h3>
            <p>{lastAction}</p>
          </div>
        </section>

        <section className="mood-section">
          <h3>📝 Mood Check-in</h3>
          <form onSubmit={handleMoodSubmit} className="mood-form">
            <input
              type="text"
              placeholder="Your mood (e.g., 😊, 😔, 😡)"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            />
            <textarea
              placeholder="Write a quick journal entry (optional)"
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
            />
            <button type="submit">Check In</button>
          </form>
        </section>

        <section className="progress-bar-section">
          <h3>Progress</h3>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(xp % 100)}%` }}
            ></div>
          </div>
          {(xp % 100) === 0 && xp !== 0 && (
            <div className="reward-message">🎉 Level Up! Welcome to Level {level}!</div>
          )}
        </section>

        {showReward && <div className="confetti">🎊🎉✨</div>}
      </div>
    </div>
  );
}

export default App;

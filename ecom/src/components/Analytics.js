import React, { useEffect, useState } from 'react';
import '../styles/Analytics.css';


const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


const statColors = {
  ecommercePurchases: '#ffc107',
  transactions: '#4caf50',
  itemsPurchased: '#03a9f4',
  totalUsers: '#9c27b0',
  newUsers: '#e91e63',
  activeUsers: '#00bcd4',
  averageSessionDuration: '#ff5722',
  bounceRate: '#f44336',
  engagementRate: '#8bc34a',
}


const groupedStats = {
  'E-Commerce Stats': ['ecommercePurchases', 'transactions', 'itemsPurchased'],
  'User Stats': ['totalUsers', 'newUsers', 'activeUsers'],
  'Engagement Stats': ['averageSessionDuration', 'bounceRate', 'engagementRate'],
}


const Analytics = () => {
  const [stats, setStats] = useState(null);


  useEffect(() => {
    fetch('')//add the route
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Failed to load stats:', err))
  }, [])


  if (!stats) return <div className="dashboard"><h2>Loading analytics</h2></div>


  return (
    <div className="dashboard">
      <h2>Analytics</h2>
      {Object.entries(groupedStats).map(([groupTitle, keys]) => (
        <div key={groupTitle} className="stat-group">
          <h3 className="group-title">{groupTitle}</h3>
          <div className="cards">
            {keys.map(key => (
              <StatCard
                key={key}
                title={formatTitle(key)}
                values={Array.isArray(stats[key]) ? stats[key].map(Number) : [Number(stats[key])]}
                color={statColors[key]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}


const StatCard = ({ title, values, color }) => {
  const max = Math.max(...values);
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * 100;
    const y = 50 - (v / max) * 40;
    return `${x},${y}`;
  }).join(' ')


  const total = values.reduce((sum, v) => sum + v, 0)
  const avg = (total / values.length).toFixed(2)


  const isPercentage = title.toLowerCase().includes('rate')
  const isDuration = title.toLowerCase().includes('duration')


  let displayValue = avg
  if (isPercentage) displayValue = `${avg}%`
  else if (isDuration) {
    const mins = Math.floor(avg / 60)
    const secs = Math.floor(avg % 60).toString().padStart(2, '0')
    displayValue = `${mins}:${secs} min`
  }


  return (
    <div className="card">
      <h4>{title}</h4>
      <div className="graph">
        <svg viewBox="0 0 100 50" preserveAspectRatio="none">
          <polyline fill="none" stroke={color} strokeWidth="2" points={points} />
        </svg>
        <div className="day-labels">
          {days.map((day, idx) => (
            <span key={idx}>{day}</span>
          ))}
        </div>
      </div>
      <div className="stat-value">{displayValue}</div>
    </div>
  )
}


const formatTitle = (key) => {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}


export default Analytics
import React, { useState } from 'react';
import SimpleApp from './SimpleApp';
import { TransitCalendar } from './components/TransitCalendar';
import './App.css';

function AppWithNavigation() {
  const [currentView, setCurrentView] = useState<'wheel' | 'calendar'>('wheel');

  return (
    <div className="App">
      {/* Navigation Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '15px 20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          gap: '15px',
          alignItems: 'center'
        }}>
          <h1 style={{
            color: 'white',
            margin: 0,
            fontSize: '20px',
            flex: 1
          }}>
            🌟 Astrology Transit Tool
          </h1>

          <button
            onClick={() => setCurrentView('wheel')}
            style={{
              padding: '10px 20px',
              background: currentView === 'wheel' ? 'white' : 'rgba(255,255,255,0.2)',
              color: currentView === 'wheel' ? '#667eea' : 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              transition: 'all 0.3s'
            }}
          >
            📊 Transit Wheel
          </button>

          <button
            onClick={() => setCurrentView('calendar')}
            style={{
              padding: '10px 20px',
              background: currentView === 'calendar' ? 'white' : 'rgba(255,255,255,0.2)',
              color: currentView === 'calendar' ? '#667eea' : 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              transition: 'all 0.3s'
            }}
          >
            📅 Transit Calendar
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        {currentView === 'wheel' ? (
          <SimpleApp />
        ) : (
          <TransitCalendar startDate={new Date()} />
        )}
      </div>
    </div>
  );
}

export default AppWithNavigation;

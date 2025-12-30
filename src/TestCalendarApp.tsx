import React from 'react';
import { TransitCalendar } from './components/TransitCalendar';
import './App.css';

function TestCalendarApp() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', padding: '20px', color: '#333' }}>
        Transit Calendar Test - Click Aspects for Interpretations
      </h1>
      <TransitCalendar startDate={new Date()} />
    </div>
  );
}

export default TestCalendarApp;

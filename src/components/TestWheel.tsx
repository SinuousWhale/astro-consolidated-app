import React from 'react';

export const TestWheel: React.FC = () => {
  return (
    <div style={{ padding: '20px', background: '#f0f0f0', textAlign: 'center' }}>
      <h2>Test Wheel Component</h2>
      <svg width="600" height="600" style={{ background: 'white', border: '2px solid blue' }}>
        <circle
          cx={300}
          cy={300}
          r={250}
          fill="lightblue"
          stroke="navy"
          strokeWidth="3"
        />
        <text x={300} y={300} textAnchor="middle" fontSize="24" fill="black">
          Wheel Test Working
        </text>
      </svg>
    </div>
  );
};
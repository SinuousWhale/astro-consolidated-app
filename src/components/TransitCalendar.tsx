import React, { useState, useMemo } from 'react';
import { calculatePlanetaryPositions } from '../utils/ephemeris';
import { getGeneralAspectInterpretation } from '../utils/generalAspectInterpretations';
import type { GeneralAspectInterpretation } from '../utils/generalAspectInterpretations';

interface TransitCalendarProps {
  startDate?: Date;
}

// Planet colors for visual distinction
const PLANET_COLORS: Record<string, string> = {
  'Sun': '#FF6B00',
  'Moon': '#C0C0C0',
  'Mercury': '#FFA500',
  'Venus': '#FF69B4',
  'Mars': '#DC143C',
  'Jupiter': '#DAA520',
  'Saturn': '#8B7355',
  'Uranus': '#00CED1',
  'Neptune': '#4169E1',
  'Pluto': '#8B008B',
  'North Node': '#228B22',
  'South Node': '#8B0000'
};

// Planet symbols
const PLANET_SYMBOLS: Record<string, string> = {
  'Sun': '☉',
  'Moon': '☽',
  'Mercury': '☿',
  'Venus': '♀',
  'Mars': '♂',
  'Jupiter': '♃',
  'Saturn': '♄',
  'Uranus': '♅',
  'Neptune': '♆',
  'Pluto': '♇',
  'North Node': '☊',
  'South Node': '☋'
};

// Aspect types and colors
const ASPECT_TYPES = [
  { name: 'Conjunction', angle: 0, color: '#FF0000', symbol: '☌' },
  { name: 'Opposition', angle: 180, color: '#0000FF', symbol: '☍' },
  { name: 'Trine', angle: 120, color: '#00AA00', symbol: '△' },
  { name: 'Square', angle: 90, color: '#FF8800', symbol: '□' },
  { name: 'Sextile', angle: 60, color: '#8800FF', symbol: '⚹' }
];

// Get orb for transit-to-transit aspects
const getTransitOrb = (planet1: string, planet2: string, aspectName: string): number => {
  const innerPlanets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'];
  const nodes = ['North Node', 'South Node'];

  const isInner1 = innerPlanets.includes(planet1);
  const isInner2 = innerPlanets.includes(planet2);
  const isNode1 = nodes.includes(planet1);
  const isNode2 = nodes.includes(planet2);

  if (planet1 === 'Moon' || planet2 === 'Moon') {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 2;
    if (aspectName === 'Trine' || aspectName === 'Square') return 1.5;
    return 1;
  }

  if (isNode1 || isNode2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  if ((planet1 === 'Jupiter' && planet2 === 'Saturn') || (planet1 === 'Saturn' && planet2 === 'Jupiter')) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 6;
    if (aspectName === 'Trine' || aspectName === 'Square') return 5;
    return 4;
  }

  if (isInner1 && isInner2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 3;
    if (aspectName === 'Trine' || aspectName === 'Square') return 2.5;
    return 2;
  }

  if (!isInner1 && !isInner2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 4;
  if (aspectName === 'Trine' || aspectName === 'Square') return 3;
  return 2.5;
};

// Calculate aspects for a given date
const calculateDayAspects = (date: Date) => {
  const planets = calculatePlanetaryPositions(date);
  const aspects = [];

  for (let i = 0; i < planets.length; i++) {
    for (let j = i + 1; j < planets.length; j++) {
      const planet1 = planets[i];
      const planet2 = planets[j];

      let diff = Math.abs(planet1.longitude - planet2.longitude);
      if (diff > 180) diff = 360 - diff;

      for (const aspectType of ASPECT_TYPES) {
        const orb = Math.abs(diff - aspectType.angle);
        const maxOrb = getTransitOrb(planet1.name, planet2.name, aspectType.name);

        if (orb <= maxOrb) {
          aspects.push({
            planet1: planet1.name,
            planet2: planet2.name,
            aspect: aspectType.name,
            symbol: aspectType.symbol,
            color: aspectType.color,
            orb: orb.toFixed(1)
          });
        }
      }
    }
  }

  return aspects.sort((a, b) => parseFloat(a.orb) - parseFloat(b.orb));
};

export const TransitCalendar: React.FC<TransitCalendarProps> = ({ startDate = new Date() }) => {
  const [viewMode, setViewMode] = useState<'7day' | '2week' | '3week' | 'month'>('7day');
  const [currentStartDate, setCurrentStartDate] = useState(startDate);
  const [selectedAspect, setSelectedAspect] = useState<{
    planet1: string;
    planet2: string;
    aspect: string;
    orb: string;
    interpretation: GeneralAspectInterpretation | null;
  } | null>(null);

  console.log('📅 Transit Calendar Loaded - Click aspects for interpretations!');

  const days = useMemo(() => {
    const daysCount = viewMode === '7day' ? 7 : viewMode === '2week' ? 14 : viewMode === '3week' ? 21 : 30;
    const result = [];

    for (let i = 0; i < daysCount; i++) {
      const date = new Date(currentStartDate);
      date.setDate(date.getDate() + i);
      const aspects = calculateDayAspects(date);
      result.push({ date, aspects });
    }

    return result;
  }, [currentStartDate, viewMode]);

  const goToPrevious = () => {
    const daysToSubtract = viewMode === '7day' ? 7 : viewMode === '2week' ? 14 : viewMode === '3week' ? 21 : 30;
    const newDate = new Date(currentStartDate);
    newDate.setDate(newDate.getDate() - daysToSubtract);
    setCurrentStartDate(newDate);
  };

  const goToNext = () => {
    const daysToAdd = viewMode === '7day' ? 7 : viewMode === '2week' ? 14 : viewMode === '3week' ? 21 : 30;
    const newDate = new Date(currentStartDate);
    newDate.setDate(newDate.getDate() + daysToAdd);
    setCurrentStartDate(newDate);
  };

  const goToToday = () => {
    setCurrentStartDate(new Date());
  };

  const handleAspectClick = (aspect: any) => {
    console.log('🔍 Aspect clicked:', aspect);
    const interpretation = getGeneralAspectInterpretation(
      aspect.planet1,
      aspect.planet2,
      aspect.aspect,
      parseFloat(aspect.orb)
    );

    console.log('📖 Interpretation found:', interpretation ? 'Yes' : 'No');

    setSelectedAspect({
      planet1: aspect.planet1,
      planet2: aspect.planet2,
      aspect: aspect.aspect,
      orb: aspect.orb,
      interpretation
    });
  };

  const closeModal = () => {
    setSelectedAspect(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>
        Transit Calendar - Active Cosmic Currents
      </h2>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setViewMode('7day')}
            style={{
              padding: '8px 16px',
              background: viewMode === '7day' ? '#4a90e2' : '#e0e0e0',
              color: viewMode === '7day' ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: viewMode === '7day' ? 'bold' : 'normal'
            }}
          >
            7 Days
          </button>
          <button
            onClick={() => setViewMode('2week')}
            style={{
              padding: '8px 16px',
              background: viewMode === '2week' ? '#4a90e2' : '#e0e0e0',
              color: viewMode === '2week' ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: viewMode === '2week' ? 'bold' : 'normal'
            }}
          >
            2 Weeks
          </button>
          <button
            onClick={() => setViewMode('3week')}
            style={{
              padding: '8px 16px',
              background: viewMode === '3week' ? '#4a90e2' : '#e0e0e0',
              color: viewMode === '3week' ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: viewMode === '3week' ? 'bold' : 'normal'
            }}
          >
            3 Weeks
          </button>
          <button
            onClick={() => setViewMode('month')}
            style={{
              padding: '8px 16px',
              background: viewMode === 'month' ? '#4a90e2' : '#e0e0e0',
              color: viewMode === 'month' ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: viewMode === 'month' ? 'bold' : 'normal'
            }}
          >
            Month
          </button>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            onClick={goToPrevious}
            style={{
              padding: '8px 16px',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ← Previous
          </button>
          <button
            onClick={goToToday}
            style={{
              padding: '8px 16px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Today
          </button>
          <button
            onClick={goToNext}
            style={{
              padding: '8px 16px',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${viewMode === '7day' ? 7 : viewMode === '2week' ? 7 : viewMode === '3week' ? 7 : 6}, 1fr)`,
        gap: '10px'
      }}>
        {days.map((day, index) => {
          const isToday = day.date.toDateString() === new Date().toDateString();

          return (
            <div
              key={index}
              style={{
                border: isToday ? '3px solid #28a745' : '1px solid #ddd',
                borderRadius: '8px',
                padding: '10px',
                background: isToday ? '#f0fff4' : 'white',
                minHeight: '200px',
                boxShadow: isToday ? '0 4px 12px rgba(40, 167, 69, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                fontWeight: 'bold',
                fontSize: '14px',
                marginBottom: '8px',
                color: isToday ? '#28a745' : '#333',
                borderBottom: '2px solid ' + (isToday ? '#28a745' : '#ddd'),
                paddingBottom: '5px'
              }}>
                {day.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </div>

              <div style={{ fontSize: '11px' }}>
                {day.aspects.length > 0 ? (
                  day.aspects.map((aspect, i) => (
                    <div
                      key={i}
                      onClick={() => handleAspectClick(aspect)}
                      style={{
                        marginBottom: '6px',
                        padding: '4px',
                        background: '#f9f9f9',
                        borderRadius: '4px',
                        borderLeft: `3px solid ${aspect.color}`,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#e8f4ff';
                        e.currentTarget.style.transform = 'translateX(2px)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f9f9f9';
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                        <span style={{
                          color: PLANET_COLORS[aspect.planet1],
                          fontSize: '16px',
                          fontWeight: 'bold'
                        }}>
                          {PLANET_SYMBOLS[aspect.planet1]}
                        </span>
                        <span style={{ color: aspect.color, fontSize: '14px', fontWeight: 'bold' }}>
                          {aspect.symbol}
                        </span>
                        <span style={{
                          color: PLANET_COLORS[aspect.planet2],
                          fontSize: '16px',
                          fontWeight: 'bold'
                        }}>
                          {PLANET_SYMBOLS[aspect.planet2]}
                        </span>
                      </div>
                      <div style={{ fontSize: '10px', color: '#666', marginTop: '2px' }}>
                        {aspect.planet1} {aspect.aspect} {aspect.planet2}
                      </div>
                      <div style={{ fontSize: '9px', color: '#999' }}>
                        Orb: {aspect.orb}°
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ color: '#999', fontStyle: 'italic', fontSize: '10px', marginTop: '10px' }}>
                    No major aspects
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div style={{ marginTop: '30px', padding: '15px', background: '#f9f9f9', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '10px', fontSize: '14px' }}>Legend</h4>

        {/* Aspect Types */}
        <div style={{ marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '8px', color: '#555' }}>Aspect Types:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', fontSize: '12px' }}>
            {ASPECT_TYPES.map(aspect => (
              <div key={aspect.name} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: aspect.color, fontSize: '16px', fontWeight: 'bold' }}>{aspect.symbol}</span>
                <span>{aspect.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Orb Settings */}
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '8px', color: '#555' }}>Orb Settings (Conj/Opp — Trine/Square — Sextile):</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px', fontSize: '11px', color: '#666' }}>
            <div>☽ <strong>Moon:</strong> 2° / 1.5° / 1°</div>
            <div>☊☋ <strong>Nodes:</strong> 5° / 4° / 3°</div>
            <div>♃♄ <strong>Jupiter-Saturn:</strong> 6° / 5° / 4°</div>
            <div>☉☿♀♂ <strong>Inner-to-Inner:</strong> 3° / 2.5° / 2°</div>
            <div>♃♄♅♆♇ <strong>Outer-to-Outer:</strong> 5° / 4° / 3°</div>
            <div>🔀 <strong>Mixed (Inner-Outer):</strong> 4° / 3° / 2.5°</div>
          </div>
        </div>

        {/* Tip */}
        <div style={{ marginTop: '15px', padding: '10px', background: '#e8f4ff', borderRadius: '6px', fontSize: '12px', color: '#2c5aa0' }}>
          💡 <strong>Tip:</strong> Click on any aspect to view detailed interpretation including predictions for Love, Career, Finances, and Family.
        </div>
      </div>

      {/* Modal for Aspect Interpretation */}
      {selectedAspect && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '12px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
          >
            {selectedAspect.interpretation ? (
              <div>
                {/* Header */}
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '12px 12px 0 0',
                  position: 'sticky',
                  top: 0,
                  zIndex: 1
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <h2 style={{ margin: 0, marginBottom: '8px' }}>{selectedAspect.interpretation.name}</h2>
                      <div style={{ fontSize: '14px', opacity: 0.9 }}>
                        Orb: {selectedAspect.orb}° | {selectedAspect.interpretation.frequency}
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        border: 'none',
                        color: 'white',
                        fontSize: '24px',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  {/* Duration */}
                  <div style={{ marginBottom: '20px', padding: '12px', background: '#fff3cd', borderRadius: '6px', borderLeft: '4px solid #ffc107' }}>
                    <strong>⏱️ Duration:</strong> {selectedAspect.interpretation.duration}
                  </div>

                  {/* Planet Energies */}
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#333' }}>🌟 Planet Energies</h3>
                    <div style={{ padding: '12px', background: '#f8f9fa', borderRadius: '6px', marginBottom: '10px' }}>
                      <strong style={{ color: PLANET_COLORS[selectedAspect.planet1] }}>{selectedAspect.planet1}:</strong> {selectedAspect.interpretation.planet1Energy}
                    </div>
                    <div style={{ padding: '12px', background: '#f8f9fa', borderRadius: '6px' }}>
                      <strong style={{ color: PLANET_COLORS[selectedAspect.planet2] }}>{selectedAspect.planet2}:</strong> {selectedAspect.interpretation.planet2Energy}
                    </div>
                  </div>

                  {/* Aspect Meaning */}
                  <div style={{ marginBottom: '20px', padding: '15px', background: '#e8f4ff', borderRadius: '6px', borderLeft: '4px solid #4a90e2' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '8px', color: '#2c5aa0' }}>✨ Aspect Meaning</h3>
                    <p style={{ margin: 0, lineHeight: '1.6' }}>{selectedAspect.interpretation.aspectMeaning}</p>
                  </div>

                  {/* Life Areas */}
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#333' }}>🎯 How This Affects Different Life Areas</h3>

                    <div style={{ marginBottom: '12px', padding: '12px', background: '#ffe8f0', borderRadius: '6px', borderLeft: '4px solid #e91e63' }}>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#c2185b' }}>💕 Love & Relationships</h4>
                      <p style={{ margin: 0, lineHeight: '1.6', fontSize: '13px' }}>{selectedAspect.interpretation.loveRelationships}</p>
                    </div>

                    <div style={{ marginBottom: '12px', padding: '12px', background: '#fff3e0', borderRadius: '6px', borderLeft: '4px solid #ff9800' }}>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#e65100' }}>🏠 Family & Home</h4>
                      <p style={{ margin: 0, lineHeight: '1.6', fontSize: '13px' }}>{selectedAspect.interpretation.familyHome}</p>
                    </div>

                    <div style={{ marginBottom: '12px', padding: '12px', background: '#e8f5e9', borderRadius: '6px', borderLeft: '4px solid #4caf50' }}>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#2e7d32' }}>💼 Business & Career</h4>
                      <p style={{ margin: 0, lineHeight: '1.6', fontSize: '13px' }}>{selectedAspect.interpretation.businessCareer}</p>
                    </div>

                    <div style={{ marginBottom: '12px', padding: '12px', background: '#f3e5f5', borderRadius: '6px', borderLeft: '4px solid #9c27b0' }}>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6a1b9a' }}>💰 Money & Finances</h4>
                      <p style={{ margin: 0, lineHeight: '1.6', fontSize: '13px' }}>{selectedAspect.interpretation.moneyFinances}</p>
                    </div>
                  </div>

                  {/* Predictions */}
                  <div style={{ marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#333' }}>🔮 10 Predictions - What Can Happen</h3>
                    <div style={{ background: '#f8f9fa', borderRadius: '6px', padding: '15px' }}>
                      {selectedAspect.interpretation.predictions.map((prediction, idx) => (
                        <div key={idx} style={{
                          marginBottom: idx < selectedAspect.interpretation!.predictions.length - 1 ? '10px' : 0,
                          paddingBottom: idx < selectedAspect.interpretation!.predictions.length - 1 ? '10px' : 0,
                          borderBottom: idx < selectedAspect.interpretation!.predictions.length - 1 ? '1px solid #dee2e6' : 'none'
                        }}>
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <div style={{
                              minWidth: '24px',
                              height: '24px',
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              color: 'white',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              fontWeight: 'bold'
                            }}>
                              {idx + 1}
                            </div>
                            <p style={{ margin: 0, lineHeight: '1.6', fontSize: '13px', flex: 1 }}>{prediction}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>📚</div>
                <h3 style={{ color: '#666', marginBottom: '10px' }}>Interpretation Not Available</h3>
                <p style={{ color: '#999', marginBottom: '20px' }}>
                  Detailed interpretation for {selectedAspect.planet1} {selectedAspect.aspect} {selectedAspect.planet2} is not yet available.
                </p>
                <p style={{ color: '#999', fontSize: '14px' }}>
                  Currently available: Saturn-Uranus, Jupiter-Saturn, Mars-Jupiter (all aspects)
                </p>
                <button
                  onClick={closeModal}
                  style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    background: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransitCalendar;

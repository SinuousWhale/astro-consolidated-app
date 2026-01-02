import React, { useState, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { TestWheel } from './components/TestWheel';
// import { SimpleWheelEnhanced } from './components/SimpleWheelEnhanced';
import { SimpleWheelFixed } from './components/SimpleWheelFixed';
import { PersonalTransitCalendar } from './components/PersonalTransitCalendar';
import { lookupCity, getCityList, getUTCOffset } from './utils/location';
import { generateAspectInterpretation, generateTransitToTransitInterpretation, getNatalActivationManifestations } from './utils/aspectInterpretations';
import { calculatePlanetaryPositions } from './utils/ephemeris';
import './App.css';

// Helper function to determine if a planet is inner or outer
const isInnerPlanet = (name: string): boolean => {
  const innerPlanets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'];
  return innerPlanets.includes(name);
};

// Helper function to get color intensity based on orb and planet types
// Returns an rgba color string with varying opacity
const getOrbColorIntensity = (orb: number, planet1: string, planet2: string, baseColor: string): string => {
  const p1Inner = isInnerPlanet(planet1);
  const p2Inner = isInnerPlanet(planet2);

  let intensity = 0;

  if (p1Inner && p2Inner) {
    // Inner to Inner: intense 0-1°, less intense beyond 1°
    if (orb <= 1) {
      intensity = 1 - (orb / 1) * 0.2; // 1.0 to 0.8
    } else {
      intensity = 0.8 - ((orb - 1) / 4) * 0.6; // 0.8 to 0.2
    }
  } else if (!p1Inner && !p2Inner) {
    // Outer to Outer: intense 0-2°, less intense beyond 2°
    if (orb <= 2) {
      intensity = 1 - (orb / 2) * 0.2; // 1.0 to 0.8
    } else {
      intensity = 0.8 - ((orb - 2) / 6) * 0.6; // 0.8 to 0.2
    }
  } else {
    // Outer to Inner: intense 0-1°, less intense from 2° onward
    if (orb <= 1) {
      intensity = 1 - (orb / 1) * 0.2; // 1.0 to 0.8
    } else {
      intensity = 0.8 - ((orb - 1) / 4) * 0.6; // 0.8 to 0.2
    }
  }

  // Clamp intensity between 0.2 and 1
  intensity = Math.max(0.2, Math.min(1, intensity));

  // Convert hex color to rgba with intensity
  const r = parseInt(baseColor.slice(1, 3), 16);
  const g = parseInt(baseColor.slice(3, 5), 16);
  const b = parseInt(baseColor.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${intensity * 0.5})`;
};

function SimpleApp() {
  // Fixed version
  const [natalDate, setNatalDate] = useState<Date>(() => {
    const date = new Date(1981, 4, 31, 16, 30, 0); // Year, Month (0-indexed), Day, Hour, Minute, Second - 4:30 PM
    return date;
  });
  const [transitDate, setTransitDate] = useState<Date>(new Date());
  const [houseSystem, setHouseSystem] = useState<string>('placidus');
  const [latitude, setLatitude] = useState<number>(44.8565); // Default: Pitești, Romania
  const [longitude, setLongitude] = useState<number>(24.8692);
  const [cityName, setCityName] = useState<string>('Pitești');
  const [timezone, setTimezone] = useState<string>('Europe/Bucharest');
  const [useManualUtcOffset, setUseManualUtcOffset] = useState<boolean>(false);
  const [manualUtcOffset, setManualUtcOffset] = useState<number>(-5); // Default to EST
  const [firstHouseReference, setFirstHouseReference] = useState<string>('ascendant'); // 'ascendant', 'sun', 'moon', 'manual'
  const [manualFirstHouseSign, setManualFirstHouseSign] = useState<string>('Aries');
  const [natalPlanetFilter, setNatalPlanetFilter] = useState<string>('all');
  const [transitPlanetFilter, setTransitPlanetFilter] = useState<string>('all');
  const [planetData, setPlanetData] = useState<any>(null);
  const [expandedAspectIndex, setExpandedAspectIndex] = useState<number | null>(null);
  const [expandedTransitAspectIndex, setExpandedTransitAspectIndex] = useState<number | null>(null);
  const [expandedNatalToTransitIndex, setExpandedNatalToTransitIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'wheel' | 'natal-transit' | 'transit-transit' | 'calendar' | 'personal-calendar'>('wheel');
  const [calendarPeriod, setCalendarPeriod] = useState<7 | 14 | 21 | 30>(7); // Days to show in calendar
  const [calendarStartDate, setCalendarStartDate] = useState<Date>(new Date()); // Start date for calendar

  // Calculate the actual UTC offset being used (auto or manual)
  const autoUtcOffset = useMemo(() => {
    return getUTCOffset(natalDate, timezone);
  }, [natalDate, timezone]);

  const effectiveUtcOffset = useManualUtcOffset ? manualUtcOffset : autoUtcOffset;

  // Format UTC offset for display (e.g., "UTC-5" or "UTC+5:30")
  const formatUtcOffset = (offset: number): string => {
    const sign = offset >= 0 ? '+' : '';
    const hours = Math.floor(Math.abs(offset));
    const minutes = Math.round((Math.abs(offset) - hours) * 60);
    if (minutes === 0) {
      return `UTC${sign}${offset}`;
    }
    return `UTC${sign}${offset >= 0 ? '' : '-'}${hours}:${minutes.toString().padStart(2, '0')}`;
  };

  // Handle city name change and auto-populate coordinates
  const handleCityChange = (newCityName: string) => {
    setCityName(newCityName);
    const locationData = lookupCity(newCityName);
    if (locationData) {
      setLatitude(locationData.latitude);
      setLongitude(locationData.longitude);
      setTimezone(locationData.timezone);
      // When city is found, switch to auto mode
      setUseManualUtcOffset(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>🌟 Astrological Transit Wheel</h1>
      </header>

      <div className="controls">
        <div className="control-group">
          <label>
            <strong>Natal Chart Date & Time:</strong>
            <DatePicker
              selected={natalDate}
              onChange={(date) => {
                if (date) {
                  console.log('Natal date changed to:', date);
                  setNatalDate(date);
                }
              }}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="date-picker"
              minDate={new Date('1960-01-01')}
              maxDate={new Date('2027-12-31')}
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
              preventOpenOnFocus={false}
              shouldCloseOnSelect={false}
            />
          </label>
        </div>

        <div className="control-group">
          <label>
            <strong>Transit Date & Time:</strong>
            <DatePicker
              selected={transitDate}
              onChange={(date) => date && setTransitDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="date-picker"
              minDate={new Date('2025-01-01')}
              maxDate={new Date('2027-12-31')}
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
            />
          </label>
          <button
            onClick={() => setTransitDate(new Date())}
            className="today-button"
          >
            Today
          </button>
        </div>

        <div className="control-group">
          <label>
            <strong>House System:</strong>
            <select
              value={houseSystem}
              onChange={(e) => setHouseSystem(e.target.value)}
              style={{
                marginLeft: '10px',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              <option value="placidus">Placidus</option>
              <option value="whole-sign">Whole Sign</option>
              <option value="equal">Equal House</option>
            </select>
          </label>
        </div>

        <div className="control-group">
          <label>
            <strong>First House Reference:</strong>
            <select
              value={firstHouseReference}
              onChange={(e) => setFirstHouseReference(e.target.value)}
              style={{
                marginLeft: '10px',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              <option value="ascendant">Ascendant (Rising Sign)</option>
              <option value="sun">Sun Sign</option>
              <option value="moon">Moon Sign</option>
              <option value="manual">Manual Selection</option>
            </select>
          </label>
        </div>

        {firstHouseReference === 'manual' && (
          <div className="control-group">
            <label>
              <strong>First House Sign:</strong>
              <select
                value={manualFirstHouseSign}
                onChange={(e) => setManualFirstHouseSign(e.target.value)}
                style={{
                  marginLeft: '10px',
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                <option value="Aries">♈ Aries</option>
                <option value="Taurus">♉ Taurus</option>
                <option value="Gemini">♊ Gemini</option>
                <option value="Cancer">♋ Cancer</option>
                <option value="Leo">♌ Leo</option>
                <option value="Virgo">♍ Virgo</option>
                <option value="Libra">♎ Libra</option>
                <option value="Scorpio">♏ Scorpio</option>
                <option value="Sagittarius">♐ Sagittarius</option>
                <option value="Capricorn">♑ Capricorn</option>
                <option value="Aquarius">♒ Aquarius</option>
                <option value="Pisces">♓ Pisces</option>
              </select>
            </label>
          </div>
        )}

        <div className="control-group">
          <label>
            <strong>Birth Location:</strong>
            <input
              type="text"
              value={cityName}
              onChange={(e) => handleCityChange(e.target.value)}
              onBlur={(e) => handleCityChange(e.target.value)}
              placeholder="City, State/Country"
              list="city-suggestions"
              style={{
                marginLeft: '10px',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                width: '200px'
              }}
            />
            <datalist id="city-suggestions">
              {getCityList().map(city => (
                <option key={city} value={city} />
              ))}
            </datalist>
          </label>
        </div>

        <div className="control-group">
          <label>
            <strong>Latitude:</strong>
            <input
              type="number"
              value={latitude}
              onChange={(e) => setLatitude(parseFloat(e.target.value))}
              step="0.0001"
              style={{
                marginLeft: '10px',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                width: '120px'
              }}
            />
          </label>
          <label style={{ marginLeft: '20px' }}>
            <strong>Longitude:</strong>
            <input
              type="number"
              value={longitude}
              onChange={(e) => setLongitude(parseFloat(e.target.value))}
              step="0.0001"
              style={{
                marginLeft: '10px',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                width: '120px'
              }}
            />
          </label>
        </div>

        {/* UTC Timezone Offset Control */}
        <div className="control-group" style={{
          background: '#f8f9fa',
          padding: '15px',
          borderRadius: '8px',
          border: '1px solid #dee2e6'
        }}>
          <div style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#495057' }}>UTC Timezone Offset:</strong>
            <span style={{
              marginLeft: '10px',
              padding: '4px 12px',
              background: '#e9ecef',
              borderRadius: '4px',
              fontWeight: 'bold',
              color: '#212529'
            }}>
              {formatUtcOffset(effectiveUtcOffset)}
            </span>
            <span style={{
              marginLeft: '10px',
              fontSize: '12px',
              color: '#6c757d'
            }}>
              ({useManualUtcOffset ? 'Manual' : `Auto from ${timezone}`})
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={useManualUtcOffset}
                onChange={(e) => {
                  setUseManualUtcOffset(e.target.checked);
                  if (e.target.checked) {
                    // Initialize manual offset to current auto offset
                    setManualUtcOffset(autoUtcOffset);
                  }
                }}
                style={{ marginRight: '8px', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '14px' }}>Use Manual Offset</span>
            </label>
            {useManualUtcOffset && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <select
                  value={manualUtcOffset}
                  onChange={(e) => setManualUtcOffset(parseFloat(e.target.value))}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    minWidth: '150px'
                  }}
                >
                  <option value={-12}>UTC-12 (Baker Island)</option>
                  <option value={-11}>UTC-11 (Samoa)</option>
                  <option value={-10}>UTC-10 (Hawaii)</option>
                  <option value={-9.5}>UTC-9:30 (Marquesas)</option>
                  <option value={-9}>UTC-9 (Alaska)</option>
                  <option value={-8}>UTC-8 (Pacific)</option>
                  <option value={-7}>UTC-7 (Mountain)</option>
                  <option value={-6}>UTC-6 (Central)</option>
                  <option value={-5}>UTC-5 (Eastern)</option>
                  <option value={-4}>UTC-4 (Atlantic)</option>
                  <option value={-3.5}>UTC-3:30 (Newfoundland)</option>
                  <option value={-3}>UTC-3 (Brazil)</option>
                  <option value={-2}>UTC-2 (Mid-Atlantic)</option>
                  <option value={-1}>UTC-1 (Azores)</option>
                  <option value={0}>UTC+0 (GMT/London)</option>
                  <option value={1}>UTC+1 (Central Europe)</option>
                  <option value={2}>UTC+2 (Eastern Europe)</option>
                  <option value={3}>UTC+3 (Moscow)</option>
                  <option value={3.5}>UTC+3:30 (Iran)</option>
                  <option value={4}>UTC+4 (Dubai)</option>
                  <option value={4.5}>UTC+4:30 (Afghanistan)</option>
                  <option value={5}>UTC+5 (Pakistan)</option>
                  <option value={5.5}>UTC+5:30 (India)</option>
                  <option value={5.75}>UTC+5:45 (Nepal)</option>
                  <option value={6}>UTC+6 (Bangladesh)</option>
                  <option value={6.5}>UTC+6:30 (Myanmar)</option>
                  <option value={7}>UTC+7 (Thailand)</option>
                  <option value={8}>UTC+8 (China/Singapore)</option>
                  <option value={8.75}>UTC+8:45 (Eucla)</option>
                  <option value={9}>UTC+9 (Japan/Korea)</option>
                  <option value={9.5}>UTC+9:30 (Adelaide)</option>
                  <option value={10}>UTC+10 (Sydney)</option>
                  <option value={10.5}>UTC+10:30 (Lord Howe)</option>
                  <option value={11}>UTC+11 (Solomon Islands)</option>
                  <option value={12}>UTC+12 (New Zealand)</option>
                  <option value={12.75}>UTC+12:45 (Chatham)</option>
                  <option value={13}>UTC+13 (Tonga)</option>
                  <option value={14}>UTC+14 (Line Islands)</option>
                </select>
                <span style={{ fontSize: '12px', color: '#6c757d' }}>
                  For birth locations not in the city database
                </span>
              </div>
            )}
          </div>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#6c757d', fontStyle: 'italic' }}>
            The UTC offset affects Ascendant and Moon degree calculations. Use manual offset for historical dates with different daylight saving rules.
          </div>
        </div>

        <div className="control-group">
          <label>
            <strong>Natal Planets to Show:</strong>
            <select
              value={natalPlanetFilter}
              onChange={(e) => setNatalPlanetFilter(e.target.value)}
              style={{
                marginLeft: '10px',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Planets</option>
              <option value="inner">Inner Planets Only</option>
              <option value="outer">Outer Planets Only</option>
              <option value="outer-nodes">Outer Planets & Nodes Only</option>
              <option value="nodes">Nodes Only</option>
              <option value="sun">Only Sun</option>
              <option value="moon">Only Moon</option>
              <option value="mercury">Only Mercury</option>
              <option value="venus">Only Venus</option>
              <option value="mars">Only Mars</option>
              <option value="jupiter">Only Jupiter</option>
              <option value="saturn">Only Saturn</option>
              <option value="uranus">Only Uranus</option>
              <option value="neptune">Only Neptune</option>
              <option value="pluto">Only Pluto</option>
              <option value="north node">Only North Node</option>
              <option value="south node">Only South Node</option>
              <option value="sun-outer">Sun & Outer Planets</option>
              <option value="moon-outer">Moon & Outer Planets</option>
              <option value="mercury-outer">Mercury & Outer Planets</option>
              <option value="venus-outer">Venus & Outer Planets</option>
              <option value="mars-outer">Mars & Outer Planets</option>
              <option value="jupiter-inner">Jupiter & Inner Planets</option>
              <option value="saturn-inner">Saturn & Inner Planets</option>
              <option value="uranus-inner">Uranus & Inner Planets</option>
              <option value="neptune-inner">Neptune & Inner Planets</option>
              <option value="pluto-inner">Pluto & Inner Planets</option>
            </select>
          </label>
        </div>

        <div className="control-group">
          <label>
            <strong>Transit Planets to Show:</strong>
            <select
              value={transitPlanetFilter}
              onChange={(e) => setTransitPlanetFilter(e.target.value)}
              style={{
                marginLeft: '10px',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Planets</option>
              <option value="inner">Inner Planets Only</option>
              <option value="outer">Outer Planets Only</option>
              <option value="outer-nodes">Outer Planets & Nodes Only</option>
              <option value="nodes">Nodes Only</option>
              <option value="sun">Only Sun</option>
              <option value="moon">Only Moon</option>
              <option value="mercury">Only Mercury</option>
              <option value="venus">Only Venus</option>
              <option value="mars">Only Mars</option>
              <option value="jupiter">Only Jupiter</option>
              <option value="saturn">Only Saturn</option>
              <option value="uranus">Only Uranus</option>
              <option value="neptune">Only Neptune</option>
              <option value="pluto">Only Pluto</option>
              <option value="north node">Only North Node</option>
              <option value="south node">Only South Node</option>
              <option value="sun-outer">Sun & Outer Planets</option>
              <option value="moon-outer">Moon & Outer Planets</option>
              <option value="mercury-outer">Mercury & Outer Planets</option>
              <option value="venus-outer">Venus & Outer Planets</option>
              <option value="mars-outer">Mars & Outer Planets</option>
              <option value="jupiter-inner">Jupiter & Inner Planets</option>
              <option value="saturn-inner">Saturn & Inner Planets</option>
              <option value="uranus-inner">Uranus & Inner Planets</option>
              <option value="neptune-inner">Neptune & Inner Planets</option>
              <option value="pluto-inner">Pluto & Inner Planets</option>
            </select>
          </label>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'wheel' ? 'active' : ''}`}
          onClick={() => setActiveTab('wheel')}
        >
          Transit Wheel
        </button>
        <button
          className={`tab ${activeTab === 'natal-transit' ? 'active' : ''}`}
          onClick={() => setActiveTab('natal-transit')}
        >
          Natal-Transit Aspects
        </button>
        <button
          className={`tab ${activeTab === 'transit-transit' ? 'active' : ''}`}
          onClick={() => setActiveTab('transit-transit')}
        >
          Transit-Transit Aspects
        </button>
        <button
          className={`tab ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          Transit Calendar
        </button>
        <button
          className={`tab ${activeTab === 'personal-calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal-calendar')}
        >
          Personal Transit Calendar
        </button>
      </div>

      {/* Tab Content - Wheel Tab */}
      {activeTab === 'wheel' && (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <SimpleWheelFixed
          natalDate={natalDate}
          transitDate={transitDate}
          houseSystem={houseSystem}
          latitude={latitude}
          longitude={longitude}
          timezone={timezone}
          utcOffset={effectiveUtcOffset}
          firstHouseReference={firstHouseReference}
          manualFirstHouseSign={manualFirstHouseSign}
          natalPlanetFilter={natalPlanetFilter}
          transitPlanetFilter={transitPlanetFilter}
          onDataUpdate={setPlanetData}
        />

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          {/* Planet Legend */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
            <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '20px', height: '20px', background: '#4a90e2', borderRadius: '50%' }}></div>
                <span>Natal Planets</span>
              </div>
            </div>
            <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '20px', height: '20px', background: '#e24a4a', borderRadius: '50%' }}></div>
                <span>Transit Planets</span>
              </div>
            </div>
          </div>

          {/* Aspect Legend */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '12px', color: '#666' }}>
              <strong>Aspects:</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '30px', height: '2px', background: '#9370DB' }}></div>
              <span style={{ fontSize: '12px' }}>Conjunction</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '30px', height: '2px', background: '#FFA500' }}></div>
              <span style={{ fontSize: '12px' }}>Opposition</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '30px', height: '2px', background: '#0000FF' }}></div>
              <span style={{ fontSize: '12px' }}>Trine</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '30px', height: '2px', background: '#FF0000' }}></div>
              <span style={{ fontSize: '12px' }}>Square</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '30px', height: '2px', background: '#00FF00', borderStyle: 'dashed', borderWidth: '1px 0 0 0' }}></div>
              <span style={{ fontSize: '12px' }}>Sextile</span>
            </div>
          </div>

          {/* Instructions */}
          <div style={{ fontSize: '12px', color: '#666', fontStyle: 'italic' }}>
            Hover over any planet to see its exact position
          </div>
        </div>

        {/* Planetary Positions and Aspects Tables */}
        {planetData && (
          <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '1200px', margin: '40px auto' }}>
            {/* Natal Chart Section */}
            <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '2px solid #4a90e2' }}>
              <h3 style={{ color: '#4a90e2', marginBottom: '15px' }}>Natal Chart - {natalDate.toLocaleDateString()}</h3>

              {/* Natal Planetary Positions */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>Planetary Positions</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #4a90e2' }}>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Planet</th>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Sign</th>
                      <th style={{ textAlign: 'right', padding: '8px' }}>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Ascendant */}
                    {planetData.ascendant && (
                      <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#e8f4f8' }}>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>{planetData.ascendant.symbol} {planetData.ascendant.name}</td>
                        <td style={{ padding: '8px', fontWeight: 'bold' }}>{planetData.ascendant.zodiacSign}</td>
                        <td style={{ textAlign: 'right', padding: '8px', fontWeight: 'bold' }}>{planetData.ascendant.degree}°{planetData.ascendant.minute}'</td>
                      </tr>
                    )}
                    {/* Planets */}
                    {planetData.natalPositions.map((planet: any) => (
                      <tr key={planet.name} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '8px' }}>{planet.symbol} {planet.name}</td>
                        <td style={{ padding: '8px' }}>{planet.zodiacSign}</td>
                        <td style={{ textAlign: 'right', padding: '8px' }}>{planet.degree}°{planet.minute}'</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Natal to Transit-Transit Aspects */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>Natal to Transit Aspects</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #4a90e2' }}>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Aspect</th>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Configuration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planetData.natalToTransitAspects && planetData.natalToTransitAspects.length > 0 ? (
                      planetData.natalToTransitAspects.map((item: any, idx: number) => {
                        // Helper function to format house ordinal
                        const getOrdinal = (n: number) => {
                          const s = ['th', 'st', 'nd', 'rd'];
                          const v = n % 100;
                          return n + (s[(v - 20) % 10] || s[v] || s[0]);
                        };

                        const isExpanded = expandedNatalToTransitIndex === idx;

                        // Get practical manifestations for how natal planet activates the transit
                        const activationManifestations = isExpanded ? getNatalActivationManifestations(
                          item.natal.name,
                          item.natal.house,
                          item.transitAspect.transit1.name,
                          item.transitAspect.transit1.house,
                          item.transitAspect.transit2.name,
                          item.transitAspect.transit2.house,
                          item.aspect.name,
                          item.transitAspect.aspect.name
                        ) : [];

                        // Build interpretation text
                        const interpretation = isExpanded ? `
**Natal Planet Activation:**
Your natal ${item.natal.name} in the ${getOrdinal(item.natal.house)} house is forming a ${item.aspect.name.toLowerCase()} to a transit-to-transit aspect configuration. This means your natal ${item.natal.name} is activating and coloring the dynamic between transiting ${item.transitAspect.transit1.name} and ${item.transitAspect.transit2.name}.

**The Transit Aspect Being Activated:**
Currently, transiting ${item.transitAspect.transit1.name} (in your ${getOrdinal(item.transitAspect.transit1.house)} house) is forming a ${item.transitAspect.aspect.name.toLowerCase()} to transiting ${item.transitAspect.transit2.name} (in your ${getOrdinal(item.transitAspect.transit2.house)} house).

**How Your Natal ${item.natal.name} in the ${getOrdinal(item.natal.house)} House Activates This Transit:**
${activationManifestations.length > 0
  ? activationManifestations.map(m => `• ${m}`).join('\n')
  : `Your natal ${item.natal.name} from the ${getOrdinal(item.natal.house)} house brings its energy to this transit configuration. The themes of your ${getOrdinal(item.natal.house)} house will be especially prominent in how you experience this ${item.transitAspect.transit1.name}-${item.transitAspect.transit2.name} transit.`}

**Working With This:**
${item.aspect.name === 'Square' || item.aspect.name === 'Opposition'
  ? `Use the friction to grow. The challenge is pushing you to evolve how you handle both your natal ${getOrdinal(item.natal.house)} house themes and the current transit circumstances.`
  : `Take advantage of this supportive energy. Your natal strengths are perfectly positioned to help you navigate the current transits successfully.`}
                        `.trim() : null;

                        // Get intensity-based background color (using natal planet vs midpoint of transits)
                        const bgColor = isExpanded
                          ? '#fff5f5'
                          : getOrbColorIntensity(item.aspect.actualOrb, item.natal.name, item.transitAspect.transit1.name, item.aspect.color);

                        return (
                          <React.Fragment key={idx}>
                            <tr
                              title={`Orb: ${item.aspect.actualOrb.toFixed(2)}°`}
                              onClick={() => setExpandedNatalToTransitIndex(isExpanded ? null : idx)}
                              style={{
                                borderBottom: '1px solid #ddd',
                                cursor: 'pointer',
                                backgroundColor: bgColor
                              }}
                            >
                              <td style={{ padding: '8px', color: item.aspect.color }}>
                                {isExpanded ? '▼' : '▶'} {item.aspect.name}
                              </td>
                              <td style={{ padding: '8px' }}>
                                {item.natal.symbol} {item.natal.name}({getOrdinal(item.natal.house)}) → ({item.transitAspect.transit1.symbol} {item.transitAspect.transit1.name}({getOrdinal(item.transitAspect.transit1.house)}) {item.transitAspect.aspect.name} {item.transitAspect.transit2.symbol} {item.transitAspect.transit2.name}({getOrdinal(item.transitAspect.transit2.house)}))
                              </td>
                            </tr>
                            {isExpanded && interpretation && (
                              <tr>
                                <td colSpan={2} style={{
                                  padding: '20px',
                                  backgroundColor: '#f9f9f9',
                                  borderBottom: '2px solid #4a90e2'
                                }}>
                                  <div style={{
                                    whiteSpace: 'pre-wrap',
                                    lineHeight: '1.6',
                                    fontSize: '13px'
                                  }}>
                                    {interpretation}
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={2} style={{ padding: '8px', textAlign: 'center', color: '#999', fontStyle: 'italic' }}>
                          No natal to transit aspect configurations
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Natal-Transit Aspects */}
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>Active Aspects (Natal-Transit)</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #4a90e2' }}>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Aspect</th>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Planets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planetData.aspects.map((aspect: any, idx: number) => {
                      // Helper function to format house ordinal (1st, 2nd, 3rd, 4th, etc.)
                      const getOrdinal = (n: number) => {
                        const s = ['th', 'st', 'nd', 'rd'];
                        const v = n % 100;
                        return n + (s[(v - 20) % 10] || s[v] || s[0]);
                      };

                      const isExpanded = expandedAspectIndex === idx;
                      const interpretation = isExpanded ? generateAspectInterpretation(
                        aspect.natal.name,
                        aspect.natal.house,
                        aspect.transit.name,
                        aspect.transit.house,
                        aspect.aspect.name,
                        aspect.aspect.actualOrb
                      ) : null;

                      // Get intensity-based background color
                      const bgColor = isExpanded
                        ? '#f0f8ff'
                        : getOrbColorIntensity(aspect.aspect.actualOrb, aspect.natal.name, aspect.transit.name, aspect.aspect.color);

                      return (
                        <React.Fragment key={idx}>
                          <tr
                            title={`Orb: ${aspect.aspect.actualOrb.toFixed(2)}°`}
                            style={{
                              borderBottom: '1px solid #ddd',
                              cursor: 'pointer',
                              backgroundColor: bgColor
                            }}
                            onClick={() => setExpandedAspectIndex(isExpanded ? null : idx)}
                          >
                            <td style={{ padding: '8px', color: aspect.aspect.color }}>
                              {isExpanded ? '▼' : '▶'} {aspect.aspect.name}
                            </td>
                            <td style={{ padding: '8px' }}>
                              {aspect.natal.symbol} {aspect.natal.name}({getOrdinal(aspect.natal.house)}) - {aspect.transit.symbol} {aspect.transit.name}({getOrdinal(aspect.transit.house)})
                            </td>
                          </tr>
                          {isExpanded && interpretation && (
                            <tr key={`${idx}-interpretation`}>
                              <td colSpan={2} style={{ padding: '15px', backgroundColor: '#f9f9f9', borderBottom: '2px solid #4a90e2' }}>
                                <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                                  {interpretation.fullInterpretation}
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Transit Chart Section */}
            <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '2px solid #e24a4a' }}>
              <h3 style={{ color: '#e24a4a', marginBottom: '15px' }}>Transit Chart - {transitDate.toLocaleDateString()}</h3>

              {/* Transit Planetary Positions */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>Planetary Positions</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e24a4a' }}>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Planet</th>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Sign</th>
                      <th style={{ textAlign: 'right', padding: '8px' }}>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planetData.transitPositions.map((planet: any) => (
                      <tr key={planet.name} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '8px' }}>{planet.symbol} {planet.name}</td>
                        <td style={{ padding: '8px' }}>{planet.zodiacSign}</td>
                        <td style={{ textAlign: 'right', padding: '8px' }}>{planet.degree}°{planet.minute}'</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Transit Aspects */}
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>Active Aspects (Transit-Transit)</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e24a4a' }}>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Aspect</th>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Planets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planetData.transitAspects && planetData.transitAspects.length > 0 ? (
                      planetData.transitAspects.map((aspect: any, idx: number) => {
                        // Helper function to format house ordinal (1st, 2nd, 3rd, 4th, etc.)
                        const getOrdinal = (n: number) => {
                          const s = ['th', 'st', 'nd', 'rd'];
                          const v = n % 100;
                          return n + (s[(v - 20) % 10] || s[v] || s[0]);
                        };

                        const isExpanded = expandedTransitAspectIndex === idx;

                        // Generate interpretation for this transit-to-transit aspect
                        const interpretation = generateTransitToTransitInterpretation(
                          aspect.transit1.name,
                          aspect.transit1.house,
                          aspect.transit2.name,
                          aspect.transit2.house,
                          aspect.aspect.name,
                          aspect.aspect.actualOrb
                        );

                        // Get intensity-based background color
                        const bgColor = isExpanded
                          ? '#fff5f5'
                          : getOrbColorIntensity(aspect.aspect.actualOrb, aspect.transit1.name, aspect.transit2.name, aspect.aspect.color);

                        return (
                          <React.Fragment key={idx}>
                            <tr
                              title={`Orb: ${aspect.aspect.actualOrb.toFixed(2)}°`}
                              onClick={() => setExpandedTransitAspectIndex(isExpanded ? null : idx)}
                              style={{
                                borderBottom: '1px solid #ddd',
                                cursor: 'pointer',
                                backgroundColor: bgColor
                              }}
                            >
                              <td style={{ padding: '8px', color: aspect.aspect.color }}>{aspect.aspect.name}</td>
                              <td style={{ padding: '8px' }}>
                                {aspect.transit1.symbol} {aspect.transit1.name}({getOrdinal(aspect.transit1.house)}) - {aspect.transit2.symbol} {aspect.transit2.name}({getOrdinal(aspect.transit2.house)})
                              </td>
                            </tr>
                            {isExpanded && (
                              <tr>
                                <td colSpan={2} style={{
                                  padding: '20px',
                                  backgroundColor: '#f9f9f9',
                                  borderBottom: '2px solid #e24a4a'
                                }}>
                                  <div style={{
                                    whiteSpace: 'pre-wrap',
                                    lineHeight: '1.6',
                                    fontSize: '13px'
                                  }}>
                                    {interpretation.fullInterpretation}
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={2} style={{ padding: '8px', textAlign: 'center', color: '#999', fontStyle: 'italic' }}>
                          No active transit aspects
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      )}

      {/* Tab Content - Natal-Transit Aspects Tab */}
      {activeTab === 'natal-transit' && planetData && (
        <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
          <h2>Natal-Transit Aspect Activations</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Shows how current transiting planets activate your natal chart through aspects
          </p>
          {planetData.natalActivations && planetData.natalActivations.length > 0 ? (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #4a90e2', backgroundColor: '#f0f8ff' }}>
                  <th style={{ textAlign: 'left', padding: '12px' }}>Aspect</th>
                  <th style={{ textAlign: 'left', padding: '12px' }}>Configuration</th>
                </tr>
              </thead>
              <tbody>
                {planetData.natalActivations.map((item: any, idx: number) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px', color: item.aspect.color }}>{item.aspect.name}</td>
                    <td style={{ padding: '12px' }}>
                      {item.natal.symbol} {item.natal.name} → ({item.transitAspect.transit1.symbol} {item.transitAspect.transit1.name} {item.transitAspect.aspect.name} {item.transitAspect.transit2.symbol} {item.transitAspect.transit2.name})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ textAlign: 'center', color: '#999', padding: '40px' }}>No natal-transit aspects at this time</p>
          )}
        </div>
      )}

      {/* Tab Content - Transit-Transit Aspects Tab */}
      {activeTab === 'transit-transit' && (
        <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Transit-to-Transit Wheel</h2>

          {/* Transit-Transit Controls */}
          <div className="controls" style={{ marginBottom: '30px' }}>
            <div className="control-group">
              <label>
                <strong>Transit Date & Time:</strong>
                <DatePicker
                  selected={transitDate}
                  onChange={(date) => {
                    if (date) {
                      setTransitDate(date);
                    }
                  }}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="date-picker"
                  minDate={new Date('1960-01-01')}
                  maxDate={new Date('2027-12-31')}
                  showYearDropdown
                  showMonthDropdown
                  dropdownMode="select"
                />
              </label>
              <button
                onClick={() => setTransitDate(new Date())}
                className="today-button"
                style={{ marginTop: '5px' }}
              >
                Today
              </button>
            </div>

            <div className="control-group">
              <label>
                <strong>House System:</strong>
                <select
                  value="whole-sign"
                  disabled
                  style={{
                    marginLeft: '10px',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px',
                    backgroundColor: '#f5f5f5'
                  }}
                >
                  <option value="whole-sign">Whole Sign</option>
                </select>
              </label>
            </div>

            <div className="control-group">
              <label>
                <strong>First House Reference:</strong>
                <select
                  value={firstHouseReference}
                  onChange={(e) => setFirstHouseReference(e.target.value)}
                  style={{
                    marginLeft: '10px',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                >
                  <option value="ascendant">Ascendant</option>
                  <option value="sun">Sun Sign</option>
                  <option value="moon">Moon Sign</option>
                  <option value="manual">Manual</option>
                </select>
              </label>
              {firstHouseReference === 'manual' && (
                <select
                  value={manualFirstHouseSign}
                  onChange={(e) => setManualFirstHouseSign(e.target.value)}
                  style={{
                    marginTop: '5px',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                >
                  <option value="Aries">Aries</option>
                  <option value="Taurus">Taurus</option>
                  <option value="Gemini">Gemini</option>
                  <option value="Cancer">Cancer</option>
                  <option value="Leo">Leo</option>
                  <option value="Virgo">Virgo</option>
                  <option value="Libra">Libra</option>
                  <option value="Scorpio">Scorpio</option>
                  <option value="Sagittarius">Sagittarius</option>
                  <option value="Capricorn">Capricorn</option>
                  <option value="Aquarius">Aquarius</option>
                  <option value="Pisces">Pisces</option>
                </select>
              )}
            </div>

            <div className="control-group">
              <label>
                <strong>Location:</strong>
                <input
                  type="text"
                  value="Dublin, Ireland"
                  disabled
                  style={{
                    marginLeft: '10px',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px',
                    backgroundColor: '#f5f5f5',
                    width: '200px'
                  }}
                />
              </label>
            </div>
          </div>

          {/* Transit-Only Wheel */}
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <SimpleWheelFixed
              natalDate={transitDate}
              transitDate={transitDate}
              houseSystem="whole-sign"
              latitude={53.3498}
              longitude={-6.2603}
              timezone="Europe/Dublin"
              utcOffset={0}
              firstHouseReference={firstHouseReference}
              manualFirstHouseSign={manualFirstHouseSign}
              natalPlanetFilter="none"
              transitPlanetFilter="all"
              onDataUpdate={setPlanetData}
            />

            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              {/* Planet Legend */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
                <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', background: '#e24a4a', borderRadius: '50%' }}></div>
                    <span>Transit Planets</span>
                  </div>
                </div>
              </div>

              {/* Aspect Legend */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  <strong>Aspects:</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '30px', height: '2px', background: '#9370DB' }}></div>
                  <span style={{ fontSize: '12px' }}>Conjunction</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '30px', height: '2px', background: '#FFA500' }}></div>
                  <span style={{ fontSize: '12px' }}>Opposition</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '30px', height: '2px', background: '#0000FF' }}></div>
                  <span style={{ fontSize: '12px' }}>Trine</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '30px', height: '2px', background: '#FF0000' }}></div>
                  <span style={{ fontSize: '12px' }}>Square</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '30px', height: '2px', background: '#00FF00', borderStyle: 'dashed', borderWidth: '1px 0 0 0' }}></div>
                  <span style={{ fontSize: '12px' }}>Sextile</span>
                </div>
              </div>
            </div>

            {/* Transit Aspects Table */}
            {planetData && planetData.transitAspects && planetData.transitAspects.length > 0 && (
              <div style={{ marginTop: '40px', maxWidth: '800px', margin: '40px auto' }}>
                <h3>Current Transit-to-Transit Aspects</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginTop: '20px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e24a4a', backgroundColor: '#fff5f5' }}>
                      <th style={{ textAlign: 'left', padding: '12px' }}>Aspect</th>
                      <th style={{ textAlign: 'left', padding: '12px' }}>Configuration</th>
                      <th style={{ textAlign: 'right', padding: '12px' }}>Orb</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planetData.transitAspects.map((aspect: any, idx: number) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '12px', color: aspect.aspect.color, fontWeight: 'bold' }}>{aspect.aspect.name}</td>
                        <td style={{ padding: '12px' }}>
                          {aspect.transit1.symbol} {aspect.transit1.name} - {aspect.transit2.symbol} {aspect.transit2.name}
                        </td>
                        <td style={{ textAlign: 'right', padding: '12px' }}>{aspect.aspect.actualOrb.toFixed(2)}°</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab Content - Transit Calendar Tab */}
      {activeTab === 'calendar' && (() => {
        // Calculate transit aspects for each day in the selected period
        const MAJOR_ASPECTS = [
          { name: 'Conjunction', angle: 0, color: '#9370DB', symbol: '☌' },
          { name: 'Opposition', angle: 180, color: '#FFA500', symbol: '☍' },
          { name: 'Trine', angle: 120, color: '#0000FF', symbol: '△' },
          { name: 'Square', angle: 90, color: '#FF0000', symbol: '□' },
          { name: 'Sextile', angle: 60, color: '#00FF00', symbol: '⚹' }
        ];

        const INNER_PLANETS = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'];
        const OUTER_PLANETS = ['Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

        // Planet colors
        const getPlanetColor = (planetName: string): string => {
          const colors: { [key: string]: string } = {
            'Sun': '#FFD700',        // Gold
            'Moon': '#C0C0C0',       // Silver
            'Mercury': '#32CD32',    // Lime Green
            'Venus': '#FF69B4',      // Hot Pink
            'Mars': '#FF4500',       // Red-Orange
            'Jupiter': '#FFA500',    // Orange
            'Saturn': '#8B4513',     // Saddle Brown
            'Uranus': '#00CED1',     // Dark Turquoise
            'Neptune': '#4169E1',    // Royal Blue
            'Pluto': '#800080',      // Purple
            'North Node': '#32CD32', // Lime Green
            'South Node': '#32CD32'  // Lime Green
          };
          return colors[planetName] || '#333';
        };

        // Convert hex color to rgba with transparency for backgrounds
        const hexToRgba = (hex: string, alpha: number): string => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        // Determine appropriate orb based on planet types and aspect
        const getOrbLimit = (planet1: string, planet2: string, aspectName: string): number => {
          const NODES = ['North Node', 'South Node'];
          const isInner1 = INNER_PLANETS.includes(planet1);
          const isInner2 = INNER_PLANETS.includes(planet2);
          const isNode1 = NODES.includes(planet1);
          const isNode2 = NODES.includes(planet2);

          // Moon aspects - tightest orbs
          if (planet1 === 'Moon' || planet2 === 'Moon') {
            if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 2;
            if (aspectName === 'Trine' || aspectName === 'Square') return 1.5;
            return 1; // Sextile
          }

          // Nodes - slow-moving karmic points
          if (isNode1 || isNode2) {
            if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
            if (aspectName === 'Trine' || aspectName === 'Square') return 4;
            return 3; // Sextile
          }

          // Jupiter-Saturn - major cycles
          if ((planet1 === 'Jupiter' && planet2 === 'Saturn') || (planet1 === 'Saturn' && planet2 === 'Jupiter')) {
            if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 6;
            if (aspectName === 'Trine' || aspectName === 'Square') return 5;
            return 4; // Sextile
          }

          // Inner to Inner planets
          if (isInner1 && isInner2) {
            if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 3;
            if (aspectName === 'Trine' || aspectName === 'Square') return 2.5;
            return 2; // Sextile
          }

          // Outer to Outer planets
          if (!isInner1 && !isInner2) {
            if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
            if (aspectName === 'Trine' || aspectName === 'Square') return 4;
            return 3; // Sextile
          }

          // Mixed (Inner to Outer)
          if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 4;
          if (aspectName === 'Trine' || aspectName === 'Square') return 3;
          return 2.5; // Sextile
        };

        const checkAspect = (angle1: number, angle2: number, planet1: string, planet2: string, aspectName: string) => {
          // Skip North Node opposition South Node (their natural relationship)
          if (aspectName === 'Opposition' &&
              ((planet1 === 'North Node' && planet2 === 'South Node') ||
               (planet1 === 'South Node' && planet2 === 'North Node'))) {
            return null;
          }

          let diff = Math.abs(angle1 - angle2);
          if (diff > 180) diff = 360 - diff;

          for (const aspect of MAJOR_ASPECTS) {
            const orb = Math.abs(diff - aspect.angle);
            const orbLimit = getOrbLimit(planet1, planet2, aspect.name);

            if (orb <= orbLimit) {
              // Check if this is the aspect we're currently examining
              if (aspect.name === aspectName) {
                return { ...aspect, actualOrb: orb };
              }
            }
          }
          return null;
        };

        const calendarData = [];

        for (let i = 0; i < calendarPeriod; i++) {
          const date = new Date(calendarStartDate);
          date.setDate(calendarStartDate.getDate() + i);

          // Calculate planetary positions for this date
          const planets = calculatePlanetaryPositions(date);

          // Store previous day's positions for ingress detection
          const prevDate = new Date(date);
          prevDate.setDate(date.getDate() - 1);
          const prevPlanets = calculatePlanetaryPositions(prevDate);

          // Find all transit-to-transit aspects
          const aspects = [];

          // Find Sun and Moon for lunations
          const sun = planets.find(p => p.name === 'Sun');
          const moon = planets.find(p => p.name === 'Moon');

          // Check for Lunations (New Moon, Full Moon, Solar Eclipse)
          if (sun && moon) {
            let diff = Math.abs(sun.longitude - moon.longitude);
            if (diff > 180) diff = 360 - diff;

            // Helper to get position in degrees and sign
            const getPositionString = (longitude: number) => {
              const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                                 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
              const signIndex = Math.floor(longitude / 30);
              const degreeInSign = longitude % 30;
              const degrees = Math.floor(degreeInSign);
              const minutes = Math.round((degreeInSign - degrees) * 60);
              return `${degrees}°${minutes.toString().padStart(2, '0')}' ${signNames[signIndex]}`;
            };

            // New Moon (Conjunction) - max orb 5°
            const newMoonOrb = diff; // diff is already the smallest angular distance
            if (newMoonOrb <= 5) {
              // Determine phase based on Moon's position relative to Sun
              const moonRelativePos = (moon.longitude - sun.longitude + 360) % 360;
              const isApplying = moonRelativePos > 180; // Moon is catching up to Sun

              let phase = 'Exact';
              if (newMoonOrb > 1.5) {
                phase = isApplying ? 'Applying' : 'Separating';
              }

              // Check if it's a Solar Eclipse (Node within 18° of Sun during New Moon)
              const northNode = planets.find(p => p.name === 'North Node');
              const southNode = planets.find(p => p.name === 'South Node');
              let isEclipse = false;

              if (northNode) {
                let nodeDiff = Math.abs(sun.longitude - northNode.longitude);
                if (nodeDiff > 180) nodeDiff = 360 - nodeDiff;
                if (nodeDiff <= 18) isEclipse = true;
              }
              if (!isEclipse && southNode) {
                let nodeDiff = Math.abs(sun.longitude - southNode.longitude);
                if (nodeDiff > 180) nodeDiff = 360 - nodeDiff;
                if (nodeDiff <= 18) isEclipse = true;
              }

              const positionStr = getPositionString(sun.longitude);
              aspects.push({
                planet1: 'Sun',
                planet2: 'Moon',
                symbol1: '☉',
                symbol2: '☽',
                color1: getPlanetColor('Sun'),
                color2: getPlanetColor('Moon'),
                aspect: isEclipse ? 'Solar Eclipse' : 'New Moon',
                aspectSymbol: isEclipse ? '🌑🌒' : '🌑',
                color: isEclipse ? '#8B0000' : '#000000',
                orb: newMoonOrb,
                phase: phase,
                position: positionStr,
                isLunation: true
              });
            }

            // Full Moon (Opposition) - max orb 5°
            const fullMoonOrb = Math.abs(diff - 180);
            if (fullMoonOrb <= 5) {
              // Determine phase for Full Moon
              const moonRelativePos = (moon.longitude - sun.longitude + 360) % 360;
              const isApplying = moonRelativePos < 180; // Moon approaching opposition

              let phase = 'Exact';
              if (fullMoonOrb > 1.5) {
                phase = isApplying ? 'Applying' : 'Separating';
              }

              // Full Moon position is opposite Sun (Sun's position + 180°)
              const fullMoonLongitude = (sun.longitude + 180) % 360;
              const positionStr = getPositionString(fullMoonLongitude);
              aspects.push({
                planet1: 'Sun',
                planet2: 'Moon',
                symbol1: '☉',
                symbol2: '☽',
                color1: getPlanetColor('Sun'),
                color2: getPlanetColor('Moon'),
                aspect: 'Full Moon',
                aspectSymbol: '🌕',
                color: '#FFD700',
                orb: fullMoonOrb,
                phase: phase,
                position: positionStr,
                isLunation: true
              });
            }
          }

          // Check for Sign Ingress (0° of any sign)
          const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                             'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
          const signSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

          planets.forEach((planet, idx) => {
            // Skip Moon ingresses (Moon changes signs every ~2.5 days - too frequent)
            if (planet.name === 'Moon') {
              return;
            }

            const currentSign = Math.floor(planet.longitude / 30);
            const degreeInSign = planet.longitude % 30;

            // Check if planet changed signs from previous day
            const prevPlanet = prevPlanets[idx];
            const prevSign = Math.floor(prevPlanet.longitude / 30);

            // Detect sign change: current sign is different from previous sign
            if (currentSign !== prevSign) {
              aspects.push({
                planet1: planet.name,
                planet2: '',
                symbol1: planet.symbol,
                symbol2: signSymbols[currentSign],
                color1: getPlanetColor(planet.name),
                color2: '#666',
                aspect: 'Ingress',
                aspectSymbol: '→',
                color: '#9370DB',
                orb: degreeInSign,
                signName: signNames[currentSign],
                isIngress: true
              });
            }
          });

          // Regular aspects (excluding Moon)
          for (let j = 0; j < planets.length; j++) {
            for (let k = j + 1; k < planets.length; k++) {
              const planet1 = planets[j];
              const planet2 = planets[k];

              // Skip Moon aspects (but lunations are already added above)
              if (planet1.name === 'Moon' || planet2.name === 'Moon') {
                continue;
              }

              // Check each aspect type
              for (const aspectType of MAJOR_ASPECTS) {
                const aspect = checkAspect(planet1.longitude, planet2.longitude, planet1.name, planet2.name, aspectType.name);
                if (aspect) {
                  aspects.push({
                    planet1: planet1.name,
                    planet2: planet2.name,
                    symbol1: planet1.symbol,
                    symbol2: planet2.symbol,
                    color1: getPlanetColor(planet1.name),
                    color2: getPlanetColor(planet2.name),
                    aspect: aspect.name,
                    aspectSymbol: aspectType.symbol,
                    color: aspect.color,
                    orb: aspect.actualOrb
                  });
                  break; // Only record one aspect per planet pair
                }
              }
            }
          }

          // Sort aspects: regular aspects first, then ingresses, then lunations
          aspects.sort((a: any, b: any) => {
            // Lunations last (priority 3)
            if (a.isLunation && !b.isLunation) return 1;
            if (!a.isLunation && b.isLunation) return -1;

            // Ingresses second-to-last (priority 2)
            if (a.isIngress && !b.isIngress && !b.isLunation) return 1;
            if (!a.isIngress && b.isIngress && !a.isLunation) return -1;

            // Within same category, sort by orb (tightest first)
            if (a.orb !== undefined && b.orb !== undefined) {
              return a.orb - b.orb;
            }

            return 0;
          });

          calendarData.push({
            date,
            aspects
          });
        }

        // Create aligned aspect grid for better visual tracking across days
        // Collect all unique aspects (by planet pair and aspect type)
        const aspectKeys = new Map<string, any>();
        calendarData.forEach(day => {
          day.aspects.forEach((aspect: any) => {
            let key: string;
            if (aspect.isLunation) {
              key = `lunation-${aspect.aspect}`;
            } else if (aspect.isIngress) {
              key = `ingress-${aspect.planet1}-${aspect.signName}`;
            } else {
              // For regular aspects, create a key based on planet pair and aspect type
              const planets = [aspect.planet1, aspect.planet2].sort();
              key = `${planets[0]}-${aspect.aspect}-${planets[1]}`;
            }

            if (!aspectKeys.has(key)) {
              aspectKeys.set(key, {
                key,
                planet1: aspect.planet1,
                planet2: aspect.planet2,
                aspect: aspect.aspect,
                symbol1: aspect.symbol1,
                symbol2: aspect.symbol2,
                color: aspect.color,
                color1: aspect.color1,
                color2: aspect.color2,
                aspectSymbol: aspect.aspectSymbol,
                isLunation: aspect.isLunation,
                isIngress: aspect.isIngress,
                signName: aspect.signName,
                sortPriority: aspect.isLunation ? 3 : aspect.isIngress ? 2 : 1
              });
            }
          });
        });

        // Sort aspects: regular first, ingresses second, lunations last
        const sortedAspects = Array.from(aspectKeys.values()).sort((a, b) => {
          if (a.sortPriority !== b.sortPriority) return a.sortPriority - b.sortPriority;
          return 0;
        });

        // Create a mapping of which aspects are active on which days
        const aspectsByDay = calendarData.map(day => {
          const dayMap = new Map<string, any>();
          day.aspects.forEach((aspect: any) => {
            let key: string;
            if (aspect.isLunation) {
              key = `lunation-${aspect.aspect}`;
            } else if (aspect.isIngress) {
              key = `ingress-${aspect.planet1}-${aspect.signName}`;
            } else {
              const planets = [aspect.planet1, aspect.planet2].sort();
              key = `${planets[0]}-${aspect.aspect}-${planets[1]}`;
            }
            dayMap.set(key, aspect);
          });
          return { date: day.date, aspectMap: dayMap };
        });

        return (
          <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
            <h2>Transit-to-Transit Aspects Calendar</h2>

            {/* Navigation and Period Selection */}
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Date Navigation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button
                  onClick={() => {
                    const newDate = new Date(calendarStartDate);
                    newDate.setDate(calendarStartDate.getDate() - calendarPeriod);
                    setCalendarStartDate(newDate);
                  }}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#4a90e2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setCalendarStartDate(new Date())}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  Today
                </button>
                <button
                  onClick={() => {
                    const newDate = new Date(calendarStartDate);
                    newDate.setDate(calendarStartDate.getDate() + calendarPeriod);
                    setCalendarStartDate(newDate);
                  }}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#4a90e2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}
                >
                  Next →
                </button>
                <div style={{ fontSize: '14px', color: '#666', marginLeft: '10px' }}>
                  {calendarStartDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  {' - '}
                  {new Date(calendarStartDate.getTime() + (calendarPeriod - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>

            {/* Period Selection Buttons */}
            <div style={{ marginBottom: '30px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={() => setCalendarPeriod(7)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: calendarPeriod === 7 ? '#4a90e2' : '#f0f0f0',
                  color: calendarPeriod === 7 ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: calendarPeriod === 7 ? 'bold' : 'normal',
                  fontSize: '14px'
                }}
              >
                1 Week
              </button>
              <button
                onClick={() => setCalendarPeriod(14)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: calendarPeriod === 14 ? '#4a90e2' : '#f0f0f0',
                  color: calendarPeriod === 14 ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: calendarPeriod === 14 ? 'bold' : 'normal',
                  fontSize: '14px'
                }}
              >
                2 Weeks
              </button>
              <button
                onClick={() => setCalendarPeriod(21)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: calendarPeriod === 21 ? '#4a90e2' : '#f0f0f0',
                  color: calendarPeriod === 21 ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: calendarPeriod === 21 ? 'bold' : 'normal',
                  fontSize: '14px'
                }}
              >
                3 Weeks
              </button>
              <button
                onClick={() => setCalendarPeriod(30)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: calendarPeriod === 30 ? '#4a90e2' : '#f0f0f0',
                  color: calendarPeriod === 30 ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: calendarPeriod === 30 ? 'bold' : 'normal',
                  fontSize: '14px'
                }}
              >
                1 Month
              </button>
            </div>

            {/* Calendar Grid - Aligned Aspect View */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
                {/* Header Row with Dates */}
                <thead>
                  <tr>
                    <th style={{
                      padding: '4px',
                      textAlign: 'center',
                      borderBottom: '2px solid #4a90e2',
                      position: 'sticky',
                      left: 0,
                      backgroundColor: '#f9f9f9',
                      fontSize: '9px',
                      fontWeight: 'bold',
                      width: '60px',
                      minWidth: '60px',
                      maxWidth: '60px',
                      zIndex: 2
                    }}>
                      Aspect
                    </th>
                    {aspectsByDay.map((dayData, idx) => {
                      const today = new Date();
                      const isToday = dayData.date.toDateString() === today.toDateString();
                      return (
                        <th key={idx} style={{
                          padding: '4px',
                          textAlign: 'center',
                          borderBottom: '2px solid #4a90e2',
                          backgroundColor: isToday ? '#fff9e6' : 'white',
                          width: '60px',
                          minWidth: '60px',
                          maxWidth: '60px'
                        }}>
                          <div style={{ fontSize: '10px', fontWeight: 'bold' }}>
                            {dayData.date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                          <div style={{ fontSize: '9px', color: '#666' }}>
                            {dayData.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                          {isToday && <div style={{ color: '#4a90e2', fontSize: '8px' }}>Today</div>}
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                {/* Aspect Rows */}
                <tbody>
                  {sortedAspects.map((aspectTemplate, rowIdx) => (
                    <tr key={rowIdx} style={{ borderBottom: '1px solid #eee' }}>
                      {/* Aspect Label Column */}
                      <td
                        style={{
                          padding: '4px 2px',
                          fontWeight: 'bold',
                          fontSize: '9px',
                          position: 'sticky',
                          left: 0,
                          backgroundColor: '#f9f9f9',
                          borderRight: '1px solid #ddd',
                          zIndex: 1,
                          width: '60px',
                          minWidth: '60px',
                          maxWidth: '60px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                        title={
                          aspectTemplate.isLunation
                            ? aspectTemplate.aspect
                            : aspectTemplate.isIngress
                              ? `${aspectTemplate.planet1} enters ${aspectTemplate.signName}`
                              : `${aspectTemplate.planet1} ${aspectTemplate.aspect} ${aspectTemplate.planet2}`
                        }
                      >
                        {aspectTemplate.isLunation ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                            <span>{aspectTemplate.aspectSymbol}</span>
                            <span>{aspectTemplate.aspect}</span>
                          </div>
                        ) : aspectTemplate.isIngress ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                            <span style={{ color: aspectTemplate.color1 }}>{aspectTemplate.symbol1}</span>
                            <span>{aspectTemplate.aspectSymbol}</span>
                            <span style={{ color: aspectTemplate.color2 }}>{aspectTemplate.symbol2}</span>
                            <span style={{ fontSize: '9px' }}>{aspectTemplate.signName}</span>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                            <span style={{ color: aspectTemplate.color1 }}>{aspectTemplate.symbol1}</span>
                            <span style={{ color: aspectTemplate.color }}>{aspectTemplate.aspectSymbol}</span>
                            <span style={{ color: aspectTemplate.color2 }}>{aspectTemplate.symbol2}</span>
                          </div>
                        )}
                      </td>

                      {/* Day Columns */}
                      {aspectsByDay.map((dayData, colIdx) => {
                        const today = new Date();
                        const isToday = dayData.date.toDateString() === today.toDateString();
                        const aspect = dayData.aspectMap.get(aspectTemplate.key);

                        return (
                          <td key={colIdx} style={{
                            padding: '4px',
                            textAlign: 'center',
                            backgroundColor: isToday ? '#fff9e6' : 'white',
                            borderRight: '1px solid #f0f0f0'
                          }}>
                            {aspect ? (
                              <div
                                title={
                                  aspect.isLunation
                                    ? `${aspect.aspect} at ${aspect.position} (${aspect.phase})`
                                    : aspect.isIngress
                                      ? `${aspect.planet1} enters ${aspect.signName}`
                                      : `${aspect.planet1} ${aspect.aspect} ${aspect.planet2} ${aspect.orb.toFixed(1)}° orb`
                                }
                                style={{
                                  padding: '4px 2px',
                                  backgroundColor: aspect.isLunation
                                    ? '#fff3cd'
                                    : hexToRgba(aspect.color1, 0.2),
                                  borderRadius: '3px',
                                  borderLeft: `3px solid ${aspect.color}`,
                                  fontSize: '9px',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}
                              >
                                {aspect.isLunation ? (
                                  <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontWeight: 'bold' }}>{aspect.aspectSymbol} {aspect.aspect}</span>
                                    {' '}({aspect.phase})
                                  </div>
                                ) : aspect.isIngress ? (
                                  <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontWeight: 'bold' }}>
                                      <span style={{ color: aspect.color1 }}>{aspect.symbol1}</span>
                                      {' '}{aspect.aspectSymbol}{' '}
                                      <span style={{ color: aspect.color2 }}>{aspect.symbol2}</span>
                                    </span>
                                    {' '}{aspect.orb.toFixed(1)}°
                                  </div>
                                ) : (
                                  <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontWeight: 'bold' }}>
                                      <span style={{ color: aspect.color1 }}>{aspect.symbol1}</span>
                                      {' '}<span style={{ color: aspect.color }}>{aspect.aspectSymbol}</span>{' '}
                                      <span style={{ color: aspect.color2 }}>{aspect.symbol2}</span>
                                    </span>
                                    {' '}{aspect.orb.toFixed(1)}°
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div></div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Aspect Legend */}
            <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>
                Legend:
              </div>

              {/* Aspect Summary */}
              <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px', color: '#555' }}>
                  Period Summary ({calendarPeriod} days):
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', fontSize: '13px' }}>
                  {(() => {
                    const counts: { [key: string]: number } = {
                      'Conjunction': 0,
                      'Opposition': 0,
                      'Trine': 0,
                      'Square': 0,
                      'Sextile': 0,
                      'New Moon': 0,
                      'Full Moon': 0,
                      'Solar Eclipse': 0,
                      'Ingress': 0
                    };

                    calendarData.forEach(day => {
                      day.aspects.forEach((aspect: any) => {
                        if (aspect.isLunation || aspect.isIngress) {
                          counts[aspect.aspect] = (counts[aspect.aspect] || 0) + 1;
                        } else {
                          counts[aspect.aspect] = (counts[aspect.aspect] || 0) + 1;
                        }
                      });
                    });

                    const colors: { [key: string]: string } = {
                      'Conjunction': '#9370DB',
                      'Opposition': '#FFA500',
                      'Trine': '#0000FF',
                      'Square': '#FF0000',
                      'Sextile': '#00FF00',
                      'New Moon': '#000000',
                      'Full Moon': '#FFD700',
                      'Solar Eclipse': '#8B0000',
                      'Ingress': '#4169E1'
                    };

                    return Object.entries(counts)
                      .filter(([_, count]) => count > 0)
                      .map(([aspect, count]) => (
                        <div key={aspect} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <div style={{ width: '12px', height: '12px', backgroundColor: colors[aspect], borderRadius: '50%' }}></div>
                          <span style={{ fontWeight: 'bold', color: colors[aspect] }}>{count}</span>
                          <span style={{ color: '#666' }}>{aspect}{count !== 1 && aspect !== 'Ingress' ? 's' : ''}</span>
                        </div>
                      ));
                  })()}
                </div>
              </div>

              {/* Aspect Types */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px', color: '#555' }}>Aspect Types:</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '20px', height: '4px', backgroundColor: '#9370DB', borderRadius: '2px' }}></div>
                    <span style={{ fontSize: '13px' }}>Conjunction (0°)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '20px', height: '4px', backgroundColor: '#FFA500', borderRadius: '2px' }}></div>
                    <span style={{ fontSize: '13px' }}>Opposition (180°)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '20px', height: '4px', backgroundColor: '#0000FF', borderRadius: '2px' }}></div>
                    <span style={{ fontSize: '13px' }}>Trine (120°)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '20px', height: '4px', backgroundColor: '#FF0000', borderRadius: '2px' }}></div>
                    <span style={{ fontSize: '13px' }}>Square (90°)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '20px', height: '4px', backgroundColor: '#00FF00', borderRadius: '2px' }}></div>
                    <span style={{ fontSize: '13px' }}>Sextile (60°)</span>
                  </div>
                </div>
              </div>

              {/* Orb Settings */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px', color: '#555' }}>Orb Settings (Conj/Opp — Trine/Square — Sextile):</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px', fontSize: '11px', color: '#666' }}>
                  <div>☊☋ <strong>Nodes:</strong> 5° / 4° / 3°</div>
                  <div>♃♄ <strong>Jupiter-Saturn:</strong> 6° / 5° / 4°</div>
                  <div>☉☿♀♂ <strong>Inner-to-Inner:</strong> 3° / 2.5° / 2°</div>
                  <div>♃♄♅♆♇ <strong>Outer-to-Outer:</strong> 5° / 4° / 3°</div>
                  <div>🔀 <strong>Mixed (Inner-Outer):</strong> 4° / 3° / 2.5°</div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '5px', color: '#555' }}>Special Events:</div>
                  <div style={{ fontSize: '10px', color: '#666', lineHeight: '1.6' }}>
                    <div>🌑 <strong>New Moon:</strong> Sun-Moon conjunction within 5° (shows Applying/Exact/Separating)</div>
                    <div>🌕 <strong>Full Moon:</strong> Sun-Moon opposition within 5° (shows Applying/Exact/Separating)</div>
                    <div>🌑🌒 <strong>Solar Eclipse:</strong> New Moon within 18° of North or South Node</div>
                    <div>→ <strong>Sign Ingress:</strong> Planets entering new signs (0°-1°)</div>
                  </div>
                </div>
                <div style={{ marginTop: '10px', fontSize: '11px', color: '#999', fontStyle: 'italic' }}>
                  Note: Regular Moon aspects (trine, square, sextile) are excluded from Transit Calendar
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Tab Content - Personal Transit Calendar Tab */}
      {activeTab === 'personal-calendar' && (
        <PersonalTransitCalendar
          natalDate={natalDate}
          natalLatitude={latitude}
          natalLongitude={longitude}
          natalTimezone={timezone}
          firstHouseReference={firstHouseReference}
          manualFirstHouseSign={manualFirstHouseSign}
          cityName={cityName}
        />
      )}

    </div>
  );
}

export default SimpleApp;
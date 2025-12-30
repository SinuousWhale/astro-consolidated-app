import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AstroWheel } from './components/AstroWheel';
import {
  calculatePlanetaryPositions,
  calculateHouses,
  calculateNatalTransitAspects,
  calculateTransitToTransitAspects,
  calculateAscendant,
  PlanetPosition,
  Aspect,
  HouseCusp,
  AscendantPosition,
  formatDegree
} from './utils/astro';
import './App.css';

type HouseSystem = 'placidus' | 'whole-sign' | 'equal';

function App() {
  const [natalDate, setNatalDate] = useState<Date>(new Date('1990-01-01T12:00:00'));
  const [transitDate, setTransitDate] = useState<Date>(new Date());
  const [houseSystem, setHouseSystem] = useState<HouseSystem>('whole-sign');
  const [latitude, setLatitude] = useState<number>(40.7128); // Default NYC
  const [longitude, setLongitude] = useState<number>(-74.0060);

  const [natalPlanets, setNatalPlanets] = useState<PlanetPosition[]>([]);
  const [transitPlanets, setTransitPlanets] = useState<PlanetPosition[]>([]);
  const [houses, setHouses] = useState<HouseCusp[]>([]);
  const [natalAscendant, setNatalAscendant] = useState<AscendantPosition | null>(null);
  const [aspects, setAspects] = useState<Aspect[]>([]);
  const [activeAspects, setActiveAspects] = useState<Aspect[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      try {
        setLoading(true);
        setError('');
        console.log('Starting calculations...');

        const natal = calculatePlanetaryPositions(natalDate);
        const transits = calculatePlanetaryPositions(transitDate);
        const ascendant = calculateAscendant(natalDate, latitude, longitude);
        const houseData = calculateHouses(natalDate, latitude, longitude, houseSystem);

        // Calculate natal-to-transit aspects (includes Ascendant, excludes Moon transits)
        const aspectData = calculateNatalTransitAspects(natal, transits, ascendant);

        // Calculate active aspects (transit-to-transit only, excludes Moon)
        const activeAspectData = calculateTransitToTransitAspects(transits);

        console.log('Calculations complete:', {
          natal: natal.length,
          transits: transits.length,
          ascendant: ascendant.sign + ' ' + ascendant.degree.toFixed(2),
          houses: houseData.length,
          natalTransitAspects: aspectData.length,
          activeAspects: activeAspectData.length
        });

        setNatalPlanets(natal);
        setTransitPlanets(transits);
        setNatalAscendant(ascendant);
        setHouses(houseData);
        setAspects(aspectData);
        setActiveAspects(activeAspectData);
        setLoading(false);
        setInitialized(true);
      } catch (err: any) {
        console.error('Error calculating positions:', err);
        setError(`Error: ${err.message || err}`);
        setLoading(false);
        setInitialized(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [natalDate, transitDate, houseSystem, latitude, longitude]);

  const formatPlanetInfo = (planet: PlanetPosition) => {
    return `${planet.name}: ${planet.sign} ${formatDegree(planet.degree)}`;
  };

  if (error) {
    return (
      <div className="app">
        <div style={{ padding: '20px', color: 'red' }}>
          <h1>Error</h1>
          <pre>{error}</pre>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      </div>
    );
  }

  // Show something immediately on mount
  if (!initialized) {
    return (
      <div className="app" style={{ padding: '50px', textAlign: 'center' }}>
        <h1 style={{ color: 'blue' }}>🌟 Astrological Transit Wheel</h1>
        <p style={{ fontSize: '24px', color: 'green' }}>Initializing astronomy calculations...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>Astrological Transit Wheel</h1>
      </header>

      <div className="controls">
        <div className="control-group">
          <label>
            <strong>Natal Chart Date & Time:</strong>
            <DatePicker
              selected={natalDate}
              onChange={(date) => date && setNatalDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="date-picker"
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
              onChange={(e) => setHouseSystem(e.target.value as HouseSystem)}
              className="house-select"
            >
              <option value="placidus">Placidus</option>
              <option value="whole-sign">Whole Sign</option>
              <option value="equal">Equal House</option>
            </select>
          </label>
        </div>

        <div className="control-group">
          <label>
            <strong>Latitude:</strong>
            <input
              type="number"
              value={latitude}
              onChange={(e) => setLatitude(parseFloat(e.target.value) || 0)}
              step="0.0001"
              className="location-input"
              style={{ width: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </label>
        </div>

        <div className="control-group">
          <label>
            <strong>Longitude:</strong>
            <input
              type="number"
              value={longitude}
              onChange={(e) => setLongitude(parseFloat(e.target.value) || 0)}
              step="0.0001"
              className="location-input"
              style={{ width: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </label>
        </div>
      </div>

      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Calculating planetary positions...</h2>
        </div>
      ) : (
        <div className="content">
          <div className="wheel-container">
            <AstroWheel
              natalPlanets={natalPlanets}
              transitPlanets={transitPlanets}
              houses={houses}
              aspects={aspects}
            />
            <div className="legend">
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#4a90e2' }}></span>
                Natal Planets
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#e24a4a' }}></span>
                Transit Planets
              </div>
            </div>
          </div>

          <div className="info-panels">
            <div className="panel">
              <h3>Natal Chart</h3>
              <div className="planet-list">
                {natalAscendant && (
                  <div className="planet-info" style={{ fontWeight: 'bold', color: '#2c5aa0' }}>
                    Ascendant: {natalAscendant.sign} {formatDegree(natalAscendant.degree)}
                  </div>
                )}
                {natalPlanets.map((planet, idx) => (
                  <div key={idx} className="planet-info">
                    {formatPlanetInfo(planet)}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <h3>Transit Planets</h3>
              <div className="planet-list">
                {transitPlanets.map((planet, idx) => (
                  <div key={idx} className="planet-info">
                    {formatPlanetInfo(planet)}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <h3>Transits to Natal Chart ({aspects.length})</h3>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                Transit planets to natal planets + Ascendant (Moon excluded)
              </div>
              <div className="aspect-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {aspects.length === 0 ? (
                  <div className="no-aspects">No significant aspects at this time</div>
                ) : (
                  aspects.slice(0, 20).map((aspect, idx) => (
                    <div key={idx} className="aspect-info">
                      <span className="aspect-planets">
                        {aspect.planet1} {aspect.type} {aspect.planet2}
                      </span>
                      <span className="aspect-orb">
                        (orb: {aspect.orb.toFixed(2)}°)
                      </span>
                    </div>
                  ))
                )}
                {aspects.length > 20 && (
                  <div style={{ padding: '10px', textAlign: 'center', color: '#666' }}>
                    ... and {aspects.length - 20} more aspects
                  </div>
                )}
              </div>
            </div>

            <div className="panel">
              <h3>Active Aspects - Transit to Transit ({activeAspects.length})</h3>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                Aspects between transiting planets (Moon excluded)
              </div>
              <div className="aspect-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {activeAspects.length === 0 ? (
                  <div className="no-aspects">No active transit aspects at this time</div>
                ) : (
                  activeAspects.map((aspect, idx) => (
                    <div key={idx} className="aspect-info">
                      <span className="aspect-planets">
                        {aspect.planet1} {aspect.type} {aspect.planet2}
                      </span>
                      <span className="aspect-orb">
                        (orb: {aspect.orb.toFixed(2)}°)
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
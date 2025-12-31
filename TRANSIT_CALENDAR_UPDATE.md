# Transit Calendar Update Instructions

## Summary
Add click functionality to aspects in Transit Calendar to show general interpretations.

## Changes Needed in `src/components/TransitCalendar.tsx`

### 1. Add Import (Line 2-3)
```typescript
import { calculatePlanetaryPositions } from '../utils/ephemeris';
import { getGeneralAspectInterpretation, GeneralAspectInterpretation } from '../utils/generalAspectInterpretations';
```

### 2. Add State for Selected Aspect (Line 130-131)
After the line `const [currentStartDate, setCurrentStartDate] = useState(startDate);`

Add:
```typescript
  const [selectedAspect, setSelectedAspect] = useState<{
    planet1: string;
    planet2: string;
    aspect: string;
    orb: string;
    interpretation: GeneralAspectInterpretation | null;
  } | null>(null);
```

### 3. Add Click Handler Function (After goToToday function, around line 162)
```typescript
  const handleAspectClick = (aspect: any) => {
    const interpretation = getGeneralAspectInterpretation(
      aspect.planet1,
      aspect.planet2,
      aspect.aspect,
      parseFloat(aspect.orb)
    );

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
```

### 4. Make Aspects Clickable (Line 309-318)
Replace the aspect div:
```typescript
FROM:
                    <div
                      key={i}
                      style={{
                        marginBottom: '6px',
                        padding: '4px',
                        background: '#f9f9f9',
                        borderRadius: '4px',
                        borderLeft: `3px solid ${aspect.color}`
                      }}
                    >

TO:
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
```

### 5. Add Tip in Legend (After Orb Settings div, before closing </div> of Legend section)
```typescript
        <div style={{ marginTop: '15px', padding: '10px', background: '#e8f4ff', borderRadius: '6px', fontSize: '12px', color: '#2c5aa0' }}>
          💡 <strong>Tip:</strong> Click on any aspect to view detailed interpretation including predictions for Love, Career, Finances, and Family.
        </div>
```

### 6. Add Modal (Before the final closing </div> of the component, after Legend section)
Add the complete modal code (see full file for modal JSX - it's about 200 lines of modal UI)

## Testing
1. Start the app: `npm run dev`
2. Look for Jupiter-Saturn, Saturn-Uranus, or Mars-Jupiter aspects in the calendar
3. Click on any of these aspects
4. Modal should appear with full interpretation

## Currently Available Interpretations
- Saturn-Uranus (all 5 aspects)
- Jupiter-Saturn (all 5 aspects)
- Mars-Jupiter (all 5 aspects)

Other aspects will show "Interpretation Not Available" message.

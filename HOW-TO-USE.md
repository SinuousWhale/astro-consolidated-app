# Astro Consolidated App - User Guide

## 📍 Location
**Path:** `D:\Projects\astro-consolidated-app\`
**URL:** http://localhost:3000/

---

## 🚀 How to Start the App

### Simple Method (Recommended)
1. Double-click `START-APP.bat` in the `D:\Projects\astro-consolidated-app\` folder
2. The batch file will:
   - Kill all running Node.js processes
   - Clear port 3000
   - Start the app on http://localhost:3000/
   - Open your browser automatically

### Manual Method
If you prefer to run it manually:
```bash
cd D:\Projects\astro-consolidated-app
npm run dev
```

---

## 🔄 How to Restart After Making Changes

**IMPORTANT:** Always use the `START-APP.bat` file to restart the app. This ensures:
- All old instances are killed
- Port 3000 is cleared
- Only ONE instance runs at a time
- Changes are reflected immediately

### Steps:
1. Make your code changes
2. Save the files
3. Press `Ctrl+C` in the command window (if app is running)
4. Double-click `START-APP.bat` again
5. Refresh your browser at http://localhost:3000/

---

## 📦 What's Included

This consolidated app contains ALL your astro wheels and components:

### Available Tabs:
1. **Transit Wheel** - Main astrological wheel with natal and transit positions
2. **Natal-Transit Aspects** - Shows how transits activate your natal chart
3. **Transit-Transit Aspects** - Current planetary aspects in the sky (with planet filter)
4. **Transit Calendar** - 7-day/2-week/3-week/month view of daily aspects
5. **Personal Transit Calendar** - Personalized transit calendar view
6. **Natal to Transit-Transit Calendar** - Calendar showing natal activations from transit-transit aspects
7. **Natal to Transit Calendar** - Calendar showing natal-transit aspect activations

### Components:
- SimpleWheelFixed.tsx
- TransitCalendar.tsx
- PersonalTransitCalendar.tsx
- NatalToTransitCalendar.tsx
- SimpleNatalTransitCalendar.tsx
- All other wheel components
- Complete ephemeris calculations
- Aspect interpretations

### Features:
- **Planet Filters**: In the Transit-Transit Aspects tab, you can filter which planets to display:
  - All Planets (default)
  - Inner/Outer planets only
  - Outer Planets & Nodes only
  - Individual planets (Sun only, Moon only, etc.)
  - Combinations (Sun & Outer Planets, Jupiter & Inner Planets, etc.)
- **Lunar Events & Moon Phases**: Automatic detection and display of:
  - 🌑 New Moons (Sun conjunct Moon)
  - 🌕 Full Moons (Sun opposite Moon)
  - 🌑🌞 Solar Eclipses (New Moons near Lunar Nodes)
  - 🌕🌑 Lunar Eclipses (Full Moons near Lunar Nodes)
  - All 8 moon phases with illumination percentage
  - **Visual markers on the wheel**: All new moons, full moons, and eclipses appear as large colored markers on the Transit-Transit Aspects wheel showing:
    - Exact position and degree (e.g., "13° Leo")
    - Event type (New Moon, Full Moon, Solar Eclipse, Lunar Eclipse)
    - Zodiac sign
    - Color-coded for easy identification (gold for full moons, dark blue for new moons, red/orange for eclipses)
- **Multiple Calendar Views**: Switch between different calendar formats
- **Customizable House Systems**: Choose your preferred astrological house system
- **Location-based Calculations**: Accurate ephemeris calculations for any location
- **Fixed Layout**: Transit-Transit tab maintains stable positioning when filters change

---

## ⚙️ Configuration

The app is configured to ALWAYS run on port 3000:
- **Port:** 3000 (fixed, will not use other ports)
- **URL:** http://localhost:3000/
- **strictPort:** Enabled (app will fail if port is busy instead of using a different port)

---

## 🛠️ Troubleshooting

### App won't start / Port already in use
Run `START-APP.bat` - it will kill all Node processes and clear the port.

### Changes not appearing
1. Make sure you saved your files
2. Use `START-APP.bat` to restart (don't just refresh browser)
3. Hard refresh in browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Multiple apps running
- NEVER start the app by running `npm run dev` manually in different folders
- ALWAYS use `START-APP.bat` from this folder only
- If you have multiple instances, run `START-APP.bat` - it kills all Node processes

---

## 📁 Project Structure

```
D:\Projects\astro-consolidated-app\
├── START-APP.bat          ← Use this to start the app
├── HOW-TO-USE.md          ← This file
├── src\
│   ├── SimpleApp.tsx      ← Main app with 7 tabs
│   ├── components\
│   │   ├── SimpleWheelFixed.tsx
│   │   ├── TransitCalendar.tsx
│   │   ├── PersonalTransitCalendar.tsx
│   │   ├── NatalToTransitCalendar.tsx
│   │   ├── SimpleNatalTransitCalendar.tsx
│   │   └── ...other components
│   ├── utils\
│   │   ├── ephemeris.ts
│   │   ├── aspectInterpretations.ts
│   │   └── ...other utilities
├── package.json
├── vite.config.ts         ← Port configuration (3000)
└── ...other config files
```

---

## 💡 Best Practices

1. **Always use START-APP.bat** - Don't manually run `npm run dev` unless you know what you're doing
2. **Only ONE instance** - Never run the app from multiple folders
3. **Fixed port** - Always http://localhost:3000/ (never 3009, 3012, or other ports)
4. **Save before restart** - Make sure all changes are saved before restarting
5. **Local drive only** - Keep this on D: drive, not network Y: drive (faster npm installs)

---

## 📝 Notes

- This app is NOT connected to Git version control (no automatic backups)
- Make manual backups of important changes
- Network drive version (Y:\Astro) is separate - don't mix them
- This app was NOT deployed to ivyastrology.com (that's a different app)

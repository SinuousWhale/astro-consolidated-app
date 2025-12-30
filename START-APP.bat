@echo off
echo ========================================
echo  ASTRO CONSOLIDATED APP LAUNCHER
echo ========================================
echo.
echo Step 1: Killing all Node.js processes...
echo.

REM Kill all node processes
taskkill /F /IM node.exe >nul 2>&1
if %errorlevel% equ 0 (
    echo [SUCCESS] All Node.js processes terminated
) else (
    echo [INFO] No Node.js processes were running
)

echo.
echo Waiting 2 seconds for processes to fully terminate...
timeout /t 2 /nobreak >nul

echo.
echo Step 2: Clearing port 3000 (if occupied)...
echo.

REM Find and kill any process using port 3000
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    taskkill /F /PID %%a >nul 2>&1
)

echo.
echo Step 3: Starting Astro Consolidated App on http://localhost:3000/
echo.
echo ========================================
echo  The app will open automatically
echo  Press Ctrl+C to stop the server
echo ========================================
echo.

REM Change to app directory and start
cd /d "%~dp0"
start http://localhost:3000
npm run dev

pause

@echo off
chcp 65001 > nul

cd /d "%~dp0"

echo ============================================
echo   Siheung Special Class Map - Excel to JSON
echo ============================================
echo.

echo Checking required packages (pandas, openpyxl)...
python -m pip install pandas openpyxl --quiet

echo.

if not exist "convert_all.py" (
    echo [ERROR] convert_all.py not found in this folder.
    echo Please make sure convert_all.py, data, json are all
    echo in the SAME folder as this convert.bat file.
    echo.
    pause
    exit /b 1
)

echo Starting conversion...
echo.

python convert_all.py

echo.
echo Done. Press any key to close this window.
pause > nul

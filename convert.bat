@echo off
chcp 65001 > nul
cd /d "%~dp0"

echo ============================================
echo   시흥 특수학급 지도 - 엑셀 -^> JSON 변환
echo ============================================
echo.

echo 필요한 패키지를 확인합니다 (pandas, openpyxl)...
pip install pandas openpyxl --quiet

echo.
echo 변환을 시작합니다...
echo.

python convert_all.py

echo.
pause

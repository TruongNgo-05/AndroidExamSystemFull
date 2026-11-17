@echo off
cd /d "%~dp0"
if not exist application-local.yml (
 powershell -ExecutionPolicy Bypass -File .\setup-local.ps1
 if errorlevel 1 exit /b 1
)
call mvnw.cmd spring-boot:run
pause

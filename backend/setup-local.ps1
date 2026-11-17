$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
if (Test-Path "application-local.yml") {
  Write-Host "Da co application-local.yml. Giu nguyen cau hinh hien tai."
  exit 0
}
Write-Host "Neu dang co cau hinh backend cu, chep application-local.yml cu vao thu muc nay de giu JWT secret va SMTP."
$dbUser = Read-Host "MySQL user (Enter = root)"
if ([string]::IsNullOrWhiteSpace($dbUser)) { $dbUser = "root" }
$secret = Read-Host "Mat khau MySQL" -AsSecureString
$ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secret)
try { $dbPassword = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr) }
finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr) }
$adminSecret = Read-Host "Mat khau ADMIN ban dau (Enter neu DB da co tai khoan)" -AsSecureString
$ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($adminSecret)
try { $adminPassword = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr) }
finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr) }
$bytes = New-Object byte[] 48
$rng = [Security.Cryptography.RandomNumberGenerator]::Create()
try { $rng.GetBytes($bytes) } finally { $rng.Dispose() }
$jwt = [Convert]::ToBase64String($bytes)
$userYaml = ConvertTo-Json -InputObject $dbUser -Compress
$passwordYaml = ConvertTo-Json -InputObject $dbPassword -Compress
$adminYaml = ConvertTo-Json -InputObject $adminPassword -Compress
@"
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/jlerTestingHubt?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC
    username: $userYaml
    password: $passwordYaml
app:
  jwt-secret: "$jwt"
  admin-email: admin@jler.local
  admin-password: $adminYaml
  mail-enabled: false
  seed: true
  seed-overwrite: false
"@ | Set-Content -Encoding UTF8 "application-local.yml"
Write-Host "Da tao application-local.yml. Khong dua file nay len Git."

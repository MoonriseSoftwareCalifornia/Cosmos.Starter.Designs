Get-ChildItem -Path "src/Layouts" -Filter "build-templates.js" -Recurse |
ForEach-Object {
  Push-Location $_.Directory
  try {
    Write-Host "==> Running" $_.FullName
    node ./build-templates.js
  } finally {
    Pop-Location
  }
}
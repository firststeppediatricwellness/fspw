@echo off
echo Starting local web server...
echo.
echo The flashcard viewer will open in your browser.
echo Keep this window open while using the app.
echo.
echo Press Ctrl+C to stop the server when done.
echo.
echo ========================================
echo Server running at: http://localhost:8080
echo ========================================
echo.

powershell -Command "& { $listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:8080/'); $listener.Start(); Write-Host 'Server started. Opening browser...'; Start-Process 'http://localhost:8080/index.html'; while ($listener.IsListening) { $context = $listener.GetContext(); $request = $context.Request; $response = $context.Response; $path = $request.Url.LocalPath; if ($path -eq '/') { $path = '/index.html' }; $filePath = Join-Path $PWD $path.TrimStart('/'); if (Test-Path $filePath) { $content = [System.IO.File]::ReadAllBytes($filePath); $response.ContentLength64 = $content.Length; $ext = [System.IO.Path]::GetExtension($filePath); $contentType = switch ($ext) { '.html' { 'text/html' } '.css' { 'text/css' } '.js' { 'application/javascript' } '.json' { 'application/json' } '.png' { 'image/png' } '.jpg' { 'image/jpeg' } '.svg' { 'image/svg+xml' } '.ttf' { 'font/ttf' } default { 'application/octet-stream' } }; $response.ContentType = $contentType; $response.OutputStream.Write($content, 0, $content.Length); } else { $response.StatusCode = 404; $buffer = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found'); $response.OutputStream.Write($buffer, 0, $buffer.Length); }; $response.Close(); } }"

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add('http://localhost:8765/')
$listener.Start()
Write-Host 'Server running on http://localhost:8765'

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $reqPath = $context.Request.Url.LocalPath
    if ($reqPath -eq '/') { $reqPath = '/internship_letter.html' }
    $basePath = 'c:\Users\LENOVO\Downloads\fspw-main (1)\fspw-main'
    $filePath = Join-Path $basePath $reqPath.TrimStart('/')
    
    if (Test-Path $filePath) {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        $ct = 'application/octet-stream'
        if ($ext -eq '.html') { $ct = 'text/html; charset=utf-8' }
        elseif ($ext -eq '.js') { $ct = 'application/javascript' }
        elseif ($ext -eq '.css') { $ct = 'text/css' }
        elseif ($ext -eq '.png') { $ct = 'image/png' }
        elseif ($ext -eq '.jpg') { $ct = 'image/jpeg' }
        
        $context.Response.ContentType = $ct
        $context.Response.ContentLength64 = $bytes.Length
        $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        $context.Response.Close()
    } else {
        $context.Response.StatusCode = 404
        $context.Response.Close()
    }
}

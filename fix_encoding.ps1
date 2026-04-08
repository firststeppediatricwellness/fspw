# Read file as raw bytes, then as Latin-1 to preserve byte values
$filePath = 'c:\Users\LENOVO\Downloads\fspw-main (1)\fspw-main\internship_letter.html'
$bytes = [System.IO.File]::ReadAllBytes($filePath)

# Decode as Latin-1 (ISO-8859-1) to get a 1:1 byte-to-char mapping
$latin1 = [System.Text.Encoding]::GetEncoding('iso-8859-1')
$content = $latin1.GetString($bytes)

# The garbled sequences are UTF-8 multi-byte chars interpreted as Latin-1
# UTF-8 em-dash (U+2014) = bytes E2 80 94 -> Latin-1 chars: â + € + "
# After first script replaced U+2014 char with '-', we have orphaned partial sequences
# Let's fix what the view_file shows as garbled

# Pattern: "â€"" = 0xC3 0xA2 0xC2 0x80 0x22 (double-encoded, then partially replaced)
# Actually let me just look at what's in the file now

# Fix remaining garbled patterns
# "â€\"" pattern (broken em-dash) - this is what view_file shows
$content = $content -replace '\xC3\xA2\xC2\x80\x22', '-'
# "â€"" pattern
$content = $content -replace '\xC3\xA2\xC2\x80\x93', '-'
# "â€""  (em-dash UTF-8 as seen in Latin-1)
$content = $content -replace '\xE2\x80\x94', '&mdash;'
$content = $content -replace '\xE2\x80\x93', '&ndash;'
$content = $content -replace '\xE2\x80\x99', "'"
$content = $content -replace '\xE2\x80\x98', "'"
$content = $content -replace '\xE2\x80\x9C', '"'
$content = $content -replace '\xE2\x80\x9D', '"'
# Variant: â€" where " is the end
$content = $content -replace '\xC3\xA2\xC2\x80\x94', '&mdash;'

# Also handle any â€ followed by various chars (broken partial UTF-8)
# â = C3 A2, € = is multi-byte too
# Let's try: search and replace the literal string as shown by view tool
$content = $content.Replace([string][char]0xC3 + [string][char]0xA2 + [string][char]0xC2 + [string][char]0x80 + [string][char]0x22, '-')

# Write back
[System.IO.File]::WriteAllBytes($filePath, $latin1.GetBytes($content))
Write-Host "Done. Size: $((Get-Item $filePath).Length)"

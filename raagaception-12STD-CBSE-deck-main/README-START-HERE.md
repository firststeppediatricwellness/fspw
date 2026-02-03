# Flashcard Viewer - Quick Start Guide

## ⚠️ CORS Error Fix

You encountered a "Failed to fetch" error because browsers block loading local files for security reasons. Here are **3 solutions**:

---

## ✅ Solution 1: Use the Batch File (Easiest)

I've created a simple server for you!

### Steps:
1. **Double-click** `start-server.bat` in this folder
2. A command window will open and your browser will automatically launch
3. The app will now work perfectly!
4. **Keep the command window open** while using the app
5. When done, close the command window or press `Ctrl+C`

**That's it!** The server runs at `http://localhost:8080`

---

## ✅ Solution 2: Use Chrome with Disabled Security (Quick Test)

**⚠️ Warning**: Only use this for testing, not for regular browsing!

### Steps:
1. Close **all** Chrome windows completely
2. Press `Win+R` to open Run dialog
3. Paste this command:
   ```
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\temp\chrome_dev" --allow-file-access-from-files
   ```
4. Press Enter
5. Chrome will open with a warning banner
6. Navigate to the `index.html` file
7. The app will work!

**After testing**: Close this Chrome window and open Chrome normally.

---

## ✅ Solution 3: Install Python (One-Time Setup)

If you want a permanent solution:

### Steps:
1. Download Python from: https://www.python.org/downloads/
2. Install it (check "Add Python to PATH" during installation)
3. Open Command Prompt in this folder
4. Run:
   ```
   python -m http.server 8080
   ```
5. Open browser to: `http://localhost:8080`

---

## 🎯 Recommended Solution

**Use Solution 1** (the batch file) - it's the easiest and safest!

Just double-click `start-server.bat` and you're ready to go! 🚀

---

## 📝 Technical Explanation

The "Failed to fetch" error occurs because:
- Modern browsers implement **CORS** (Cross-Origin Resource Sharing) security
- When you open `index.html` directly, it uses the `file://` protocol
- Browsers block `file://` from loading other local files (like the JSON)
- Running a local web server uses `http://` protocol, which works fine

The batch file creates a simple HTTP server using PowerShell, which is built into Windows!

---

## ❓ Troubleshooting

### Batch file doesn't work?
- Make sure you're running it from the correct folder (same folder as `index.html`)
- Try right-click → "Run as Administrator"

### Port 8080 already in use?
- Edit `start-server.bat` and change `8080` to another port like `8081` or `3000`

### Still having issues?
- Try Solution 2 (Chrome with disabled security) for quick testing
- Or install Python and use Solution 3

---

## 🎉 Once It's Working

After starting the server with any solution:
1. The app will load all 10,936 cards
2. Browse decks in the sidebar
3. Click cards to flip them
4. Use search to find specific topics
5. Enjoy studying! 📚

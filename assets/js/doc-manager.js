const DocManager = {
    scriptUrl: 'https://script.google.com/macros/s/AKfycbwP2MpHFjO_QFIVnuD7YUYRBHN2qLNwY-V3ztn2_hTGfaTR34v6_9fOSQH2NuIpfbsJkA/exec', // Deployed Web App URL
    pin: 'Admin@2020_FSPW',
    authTarget: null,
    schools: [
        'Chrysalis High',
        'Jubilee School',
        'Maruthi International',
        'The Millennium School',
        'Narayana e-Techno School',
        'Navkis Educational Centre',
        'National Public School (NPS)',
        'Orchids The International School',
        'St. Vincent Pallotti School',
        'Royale Concorde International School'
    ],

    init() {
        this.renderUI();
        this.bindEvents();
        this.loadDashboardDependencies();
    },

    loadDashboardDependencies() {
        if (!document.getElementById('chartjs-script')) {
            const script = document.createElement('script');
            script.id = 'chartjs-script';
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            document.head.appendChild(script);
        }
        if (!document.getElementById('chartjs-datalabels')) {
            // Optional: Add datalabels plugin if needed later, keeping it simple for now
        }
    },

    renderUI() {
        // Inject the Document Manager Section into index.html if not present
        const container = document.getElementById('documentManagerSection');
        if (!container) return;

        container.innerHTML = `
            <div class="doc-manager-container glass-container p-8 rounded-3xl border border-white/10 -mt-4 mb-20 max-w-6xl mx-auto text-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 pointer-events-none"></div>
                
                <h2 class="text-3xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 relative z-10">
                    Document Manager
                </h2>

                <div id="dm-selection" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    <div class="doc-card" onclick="DocManager.showUploadAuth()">
                        <div class="icon-circle bg-blue-500/20 text-blue-400 mb-4">
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Upload Record</h3>
                        <p class="text-slate-400 text-sm">Upload student records securely. PIN Required.</p>
                    </div>

                    <div class="doc-card" onclick="DocManager.showViewAuth()">
                        <div class="icon-circle bg-purple-500/20 text-purple-400 mb-4">
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">View Documents</h3>
                        <p class="text-slate-400 text-sm">Access stored records. Login Required.</p>
                    </div>

                    <div class="doc-card" onclick="DocManager.showDashboardAuth()">
                        <div class="icon-circle bg-emerald-500/20 text-emerald-400 mb-4">
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Analytics Dashboard</h3>
                        <p class="text-slate-400 text-sm">Visualize submission data. PIN Required.</p>
                    </div>

                    <div class="doc-card" onclick="DocManager.showWellnessAnalyser()">
                        <div class="icon-circle bg-rose-500/20 text-rose-400 mb-4">
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Wellness.ai Analyser</h3>
                        <p class="text-slate-400 text-sm">AI-powered SWB, IAT & ARS score analysis.</p>
                    </div>
                </div>

                <!-- PIN Entry Screen -->
                <div id="dm-pin-screen" class="hidden relative z-10 max-w-md mx-auto">
                    <h3 class="text-xl font-bold text-white mb-6">Enter Admin PIN</h3>
                    <div class="relative mb-6">
                        <input type="password" id="dm-pin-input" class="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-xl text-white text-center text-2xl tracking-widest focus:border-blue-500 focus:outline-none transition-colors pr-12" placeholder="••••••••••" maxlength="20">
                        <button type="button" onclick="DocManager.togglePinVisibility()" class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-2">
                            <svg id="dm-pin-eye-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            <svg id="dm-pin-eye-closed" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.577-3.235M7.808 6.42A9.957 9.957 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.05 10.05 0 01-2.924 4.542M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18"></path></svg>
                        </button>
                    </div>
                    <div class="flex gap-4">
                        <button onclick="DocManager.resetToMain()" class="flex-1 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-all">Cancel</button>
                        <button onclick="DocManager.verifyPin()" class="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/25">Verify</button>
                    </div>
                    <p id="dm-pin-error" class="text-rose-400 mt-4 hidden">Invalid PIN. Access Denied.</p>
                </div>

                <!-- Upload Form -->
                <div id="dm-upload-screen" class="hidden relative z-10 max-w-2xl mx-auto text-left pt-12 md:pt-0">
                    <button onclick="DocManager.resetToMain()" class="absolute top-4 left-4 md:static md:mb-6 text-slate-400 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        Back
                    </button>
                    
                    <form id="dm-upload-form" class="space-y-6" onsubmit="DocManager.handleUpload(event)">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-slate-300">Student Name</label>
                                <input type="text" name="studentName" required class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none">
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-slate-300">Roll Number</label>
                                <input type="text" name="rollNumber" required class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-slate-300">Class (1-12)</label>
                                <select name="class" required class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none">
                                    <option value="" disabled selected>Select Class</option>
                                    ${Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                                </select>
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-slate-300">Section (A-F)</label>
                                <select name="section" required class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none">
                                    <option value="" disabled selected>Select Section</option>
                                    ${['A', 'B', 'C', 'D', 'E', 'F'].map(s => `<option value="${s}">${s}</option>`).join('')}
                                </select>
                            </div>
                        </div>

                         <div class="space-y-2">
                            <label class="text-sm font-bold text-slate-300">School</label>
                            <select name="school" required class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none">
                                <option value="" disabled selected>Select School</option>
                                ${this.schools.map(s => `<option value="${s}">${s}</option>`).join('')}
                            </select>
                        </div>

                         <div class="space-y-2">
                              <label class="text-sm font-bold text-slate-300">Upload Document (PDF Only)</label>
                             <div class="relative border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-blue-500/50 transition-colors cursor-pointer group">
                                <input type="file" id="dm-file-input" accept="application/pdf" class="hidden" onchange="DocManager.updateFileLabel(this)">
                                
                                <div id="dm-file-label" class="text-slate-400 space-y-4">
                                    <!-- Default View -->
                                    <div class="flex flex-col gap-4">
                                        <button type="button" onclick="document.getElementById('dm-file-input').click()" class="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors mx-auto w-full max-w-xs border border-white/5">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                            <span>Choose File</span>
                                        </button>
                                        
                                        <span class="text-xs uppercase tracking-widest font-bold opacity-50">OR</span>
                                        
                                        <button type="button" onclick="DocManager.openCamera()" class="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors mx-auto w-full max-w-xs border border-blue-500/20">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            <span>Take Photo</span>
                                        </button>
                                    </div>
                                </div>
                             </div>
                         </div>

                         <button type="submit" id="dm-submit-btn" class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition-all">
                            Submit & Upload
                         </button>
                         <div id="dm-upload-status" class="hidden p-4 rounded-xl text-center font-bold text-sm"></div>
                    </form>
                </div>

                <!-- Camera Screen -->
                <div id="dm-camera-screen" class="hidden relative z-20 max-w-lg mx-auto bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                    <div class="relative aspect-[3/4] bg-gray-900">
                        <video id="dm-video" autoplay playsinline class="w-full h-full object-cover"></video>
                        
                        <div class="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center gap-4">
                            <div id="dm-thumbnails" class="flex gap-2 overflow-x-auto w-full justify-center pb-2">
                                <!-- Thumbnails injected here -->
                            </div>
                            
                            <div class="flex items-center gap-8">
                                <button onclick="DocManager.closeCamera()" class="p-3 rounded-full bg-white/10 text-white hover:bg-white/20">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                                
                                <button onclick="DocManager.capturePhoto()" class="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center relative group">
                                    <div class="w-12 h-12 bg-white rounded-full group-hover:scale-90 transition-transform"></div>
                                </button>
                                
                                <button onclick="DocManager.finishCapture()" class="p-3 rounded-full bg-green-500/80 text-white hover:bg-green-500 relative">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span id="dm-capture-count" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- View Screen -->
                <div id="dm-view-screen" class="hidden relative z-10 max-w-4xl mx-auto text-left pt-12 md:pt-0">
                     <button onclick="DocManager.resetToMain()" class="absolute top-4 left-4 md:static md:mb-6 text-slate-400 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        Back
                    </button>
                    
                    <div class="flex flex-col md:flex-row gap-6 mb-8 items-end">
                        <div class="flex-1 space-y-2 w-full">
                            <label class="text-sm font-bold text-slate-300">Filter by Student Name</label>
                            <input type="text" id="dm-search" placeholder="Enter Name" class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-purple-500 outline-none" oninput="DocManager.filterDocs()">
                        </div>
                        <button onclick="DocManager.fetchDocs()" class="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors">
                            Refresh
                        </button>
                    </div>

                    <div id="dm-docs-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Docs will be injected here -->
                        <div class="col-span-full text-center text-slate-500 py-12 italic">Loading documents...</div>
                    </div>
                </div>

                <!-- Dashboard Screen -->
                <div id="dm-dashboard-screen" class="hidden relative z-10 max-w-6xl mx-auto text-left pt-12 md:pt-0">
                    <div class="flex items-center justify-between mb-8">
                        <button onclick="DocManager.resetToMain()" class="absolute top-4 left-4 md:static text-slate-400 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            Back
                        </button>
                        <h2 class="text-2xl font-bold text-white w-full text-center md:text-left md:w-auto">Analytics Dashboard</h2>
                    </div>

                    <!-- Loading State -->
                    <div id="dm-dashboard-loading" class="hidden absolute inset-0 z-50 bg-black/80 flex flex-col items-center justify-center rounded-3xl backdrop-blur-sm">
                        <svg class="w-12 h-12 text-blue-500 animate-spin mb-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        <span class="text-white font-bold text-lg">Loading Dashboard Data...</span>
                    </div>

                    <!-- Filters -->
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 bg-white/5 p-4 rounded-2xl border border-white/10 items-end">
                        <div class="space-y-1">
                            <label class="text-xs font-bold text-slate-400 ml-1">Year</label>
                            <select id="dm-dash-year" class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-blue-500">
                                <option value="All">All Years</option>
                                ${Array.from({ length: 11 }, (_, i) => 2025 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                            </select>
                        </div>
                        <div class="space-y-1">
                            <label class="text-xs font-bold text-slate-400 ml-1">School</label>
                            <select id="dm-dash-school" class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-blue-500">
                                <option value="All">All Schools</option>
                                ${this.schools.map(s => `<option value="${s}">${s}</option>`).join('')}
                            </select>
                        </div>
                        <div class="space-y-1">
                            <label class="text-xs font-bold text-slate-400 ml-1">Class</label>
                            <select id="dm-dash-class" class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-blue-500">
                                <option value="All">All Classes</option>
                                ${Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">Class ${i + 1}</option>`).join('')}
                            </select>
                        </div>
                        <div class="space-y-1">
                            <label class="text-xs font-bold text-slate-400 ml-1">Section</label>
                            <select id="dm-dash-section" class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-blue-500">
                                <option value="All">All Sections</option>
                                ${['A', 'B', 'C', 'D', 'E', 'F'].map(s => `<option value="${s}">Section ${s}</option>`).join('')}
                            </select>
                        </div>
                         <button onclick="DocManager.fetchDashboardData()" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-white text-sm font-bold transition-colors shadow-lg shadow-blue-500/20 h-10">
                            Apply Filters
                        </button>
                    </div>

                    <!-- Stats Cards -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div class="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30">
                            <div class="text-blue-400 text-sm font-bold uppercase tracking-wider mb-1">Total Submissions</div>
                            <div class="text-4xl font-black text-white" id="dm-stat-total">0</div>
                        </div>
                        <div class="p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30">
                            <div class="text-purple-400 text-sm font-bold uppercase tracking-wider mb-1">Active Schools</div>
                            <div class="text-4xl font-black text-white" id="dm-stat-schools">0</div>
                        </div>
                        <div class="p-6 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 border border-emerald-500/30">
                            <div class="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-1">Recent Activity</div>
                            <div class="text-sm text-slate-300 mt-2" id="dm-stat-recent">No data</div>
                        </div>
                    </div>

                    <!-- Monthly Grid -->
                    <div class="w-full">
                        <h3 class="text-white font-bold mb-4">Monthly Breakdown</h3>
                        <div id="dm-month-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <!-- Cards injected here -->
                        </div>
                    </div>
                </div>

                <!-- Wellness.ai Analyser Screen -->
                <div id="dm-wellness-screen" class="hidden relative z-10 max-w-4xl mx-auto text-left pt-12 md:pt-0">
                    <button onclick="DocManager.resetToMain()" class="absolute top-4 left-4 md:static md:mb-6 text-slate-400 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        Back
                    </button>

                    <div class="text-center mb-8">
                        <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">Wellness.ai Analyser</h3>
                        <p class="text-slate-400 text-sm mt-1">Enter student details and psychological scores for a personalised AI analysis.</p>
                    </div>

                    <!-- Score Reference Table -->
                    <div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                        <div class="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <div class="font-bold text-rose-400 mb-2 uppercase tracking-wider">SWB Score (0–60)</div>
                            <div class="flex justify-between text-slate-300 border-b border-white/10 pb-1 mb-1"><span>31–60</span><span class="text-emerald-400">Greater Well-Being</span></div>
                            <div class="flex justify-between text-slate-300"><span>0–30</span><span class="text-red-400">Poor Well-Being</span></div>
                        </div>
                        <div class="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <div class="font-bold text-amber-400 mb-2 uppercase tracking-wider">IAT Score (0–100)</div>
                            <div class="flex justify-between text-slate-300 border-b border-white/10 pb-1 mb-1"><span>0–30</span><span class="text-emerald-400">Normal</span></div>
                            <div class="flex justify-between text-slate-300 border-b border-white/10 pb-1 mb-1"><span>31–49</span><span class="text-yellow-400">Mild Addiction</span></div>
                            <div class="flex justify-between text-slate-300 border-b border-white/10 pb-1 mb-1"><span>50–79</span><span class="text-orange-400">Moderate</span></div>
                            <div class="flex justify-between text-slate-300"><span>80–100</span><span class="text-red-400">Severe</span></div>
                        </div>
                        <div class="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <div class="font-bold text-sky-400 mb-2 uppercase tracking-wider">ARS Score (25–250)</div>
                            <div class="flex justify-between text-slate-300 border-b border-white/10 pb-1 mb-1"><span>≥185</span><span class="text-emerald-400">High Resilience</span></div>
                            <div class="flex justify-between text-slate-300 border-b border-white/10 pb-1 mb-1"><span>124–184</span><span class="text-yellow-400">Moderate</span></div>
                            <div class="flex justify-between text-slate-300"><span>&lt;124</span><span class="text-red-400">Low Resilience</span></div>
                        </div>
                    </div>

                    <form id="dm-wellness-form" onsubmit="DocManager.runWellnessAnalysis(event)" class="space-y-6">
                        <!-- Student Info -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-slate-300">Student Name</label>
                                <input type="text" id="wai-name" required class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-rose-500 outline-none" placeholder="e.g. Aarav Sharma">
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-slate-300">Age</label>
                                <input type="number" id="wai-age" required min="5" max="25" class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-rose-500 outline-none" placeholder="e.g. 14" oninput="DocManager.toggleArsField(this.value)">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-slate-300">Class</label>
                                <select id="wai-class" required class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-rose-500 outline-none">
                                    <option value="" disabled selected>Select Class</option>
                                    ${Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                                </select>
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-slate-300">Section</label>
                                <select id="wai-section" required class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-rose-500 outline-none">
                                    <option value="" disabled selected>Select Section</option>
                                    ${['A', 'B', 'C', 'D', 'E', 'F'].map(s => `<option value="${s}">${s}</option>`).join('')}
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-slate-300">School</label>
                                <select id="wai-school" required class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-rose-500 outline-none">
                                    <option value="" disabled selected>Select School</option>
                                    ${this.schools.map(s => `<option value="${s}">${s}</option>`).join('')}
                                </select>
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-slate-300">Gender</label>
                                <select id="wai-gender" required class="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-rose-500 outline-none">
                                    <option value="" disabled selected>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <!-- Scores -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-rose-300">SWB Score <span class="text-slate-500">(0–60)</span></label>
                                <input type="number" id="wai-swb" required min="0" max="60" class="w-full px-4 py-3 bg-black/40 border border-rose-500/30 rounded-xl text-white focus:border-rose-500 outline-none" placeholder="e.g. 38">
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-amber-300">IAT Score <span class="text-slate-500">(0–100)</span></label>
                                <input type="number" id="wai-iat" required min="0" max="100" class="w-full px-4 py-3 bg-black/40 border border-amber-500/30 rounded-xl text-white focus:border-amber-500 outline-none" placeholder="e.g. 25">
                            </div>
                            <div id="wai-ars-wrapper" class="space-y-2 hidden">
                                <label class="text-sm font-bold text-sky-300">ARS Score <span class="text-slate-500">(25–250)</span> <span class="text-xs text-sky-500 font-normal">Adolescents 10–19 only</span></label>
                                <input type="number" id="wai-ars" min="25" max="250" class="w-full px-4 py-3 bg-black/40 border border-sky-500/30 rounded-xl text-white focus:border-sky-500 outline-none" placeholder="e.g. 160">
                            </div>
                        </div>

                        <button type="submit" class="w-full py-4 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-bold text-lg rounded-xl shadow-lg transition-all mt-2">
                            ✦ Generate AI Analysis
                        </button>
                    </form>

                    <!-- AI Report Output -->
                    <div id="dm-wellness-report" class="hidden mt-8 space-y-6">
                    </div>
                </div>
            </div>

            <style>
                select {
                    background-color: rgba(15, 23, 42, 0.9) !important; 
                    color: white !important;
                }
                option {
                    background-color: #0f172a !important;
                    color: white !important;
                }
                .doc-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.05);
                    padding: 2rem;
                    border-radius: 1.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .doc-card:hover {
                    background: rgba(255,255,255,0.08);
                    transform: translateY(-5px);
                    border-color: rgba(255,255,255,0.2);
                }
                .icon-circle {
                    width: 4rem; height: 4rem;
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    margin: 0 auto;
                }
                @keyframes wellnessShimmer {
                    0%   { transform: translateX(-100%); opacity: 0.6; }
                    50%  { transform: translateX(100%);  opacity: 1; }
                    100% { transform: translateX(-100%); opacity: 0.6; }
                }
            </style>
        `;
    },

    bindEvents() {
        const pinInput = document.getElementById('dm-pin-input');
        if (pinInput) {
            pinInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.verifyPin();
            });
        }
    },

    togglePinVisibility() {
        const input = document.getElementById('dm-pin-input');
        const openIcon = document.getElementById('dm-pin-eye-open');
        const closedIcon = document.getElementById('dm-pin-eye-closed');

        if (input.type === 'password') {
            input.type = 'text';
            openIcon.classList.add('hidden');
            closedIcon.classList.remove('hidden');
        } else {
            input.type = 'password';
            openIcon.classList.remove('hidden');
            closedIcon.classList.add('hidden');
        }
    },

    resetToMain() {
        document.getElementById('dm-selection').classList.remove('hidden');
        document.getElementById('dm-pin-screen').classList.add('hidden');
        document.getElementById('dm-upload-screen').classList.add('hidden');
        document.getElementById('dm-view-screen').classList.add('hidden');
        document.getElementById('dm-dashboard-screen').classList.add('hidden');
        document.getElementById('dm-wellness-screen').classList.add('hidden');
        document.getElementById('dm-pin-input').value = '';
        document.getElementById('dm-pin-error').classList.add('hidden');
        this.authTarget = null;
    },

    showUploadAuth() {
        if (!AuthManager.isLoggedIn) {
            alert("Please log in to upload records.");
            AuthManager.openLoginModal();
            return;
        }
        this.authTarget = 'upload';
        document.getElementById('dm-selection').classList.add('hidden');
        document.getElementById('dm-pin-screen').classList.remove('hidden');
        setTimeout(() => document.getElementById('dm-pin-input').focus(), 100);
    },

    verifyPin() {
        const input = document.getElementById('dm-pin-input').value;
        if (input === this.pin) {
            document.getElementById('dm-pin-screen').classList.add('hidden');

            if (this.authTarget === 'upload') {
                document.getElementById('dm-upload-screen').classList.remove('hidden');
            } else if (this.authTarget === 'dashboard') {
                document.getElementById('dm-dashboard-screen').classList.remove('hidden');
                this.fetchDashboardData();
            }
        } else {
            const err = document.getElementById('dm-pin-error');
            err.classList.remove('hidden');
            err.classList.add('animate-pulse');
        }
    },

    showViewAuth() {
        if (!AuthManager.isLoggedIn) {
            alert("Please log in to access documents.");
            AuthManager.openLoginModal();
            return;
        }
        document.getElementById('dm-selection').classList.add('hidden');
        document.getElementById('dm-view-screen').classList.remove('hidden');
        this.fetchDocs();
    },

    showDashboardAuth() {
        if (!AuthManager.isLoggedIn) {
            alert("Please log in to access dashboard.");
            AuthManager.openLoginModal();
            return;
        }
        this.authTarget = 'dashboard';
        document.getElementById('dm-selection').classList.add('hidden');
        document.getElementById('dm-pin-screen').classList.remove('hidden');
        setTimeout(() => document.getElementById('dm-pin-input').focus(), 100);
    },

    async fetchDashboardData() {
        if (!this.scriptUrl) return;

        const loader = document.getElementById('dm-dashboard-loading');

        // Show loading
        if (loader) loader.classList.remove('hidden');

        // Always fetch fresh data for dashboard to ensure accuracy
        try {
            console.log("Fetching fresh dashboard data...");
            const response = await fetch(`${this.scriptUrl}?action=list`);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (e) {
                console.error("Dashboard JSON Parse Error. Raw response:", text);
                throw new Error("Invalid JSON response from server. Check console.");
            }

            console.log("Dashboard Data Received:", data);

            if (Array.isArray(data)) {
                this.allDocs = data;
                this.updateDashboard();
            } else {
                console.error("Invalid data format received:", data);
                alert("Error loading data. Server returned unexpected format.");
            }
        } catch (err) {
            console.error("Dashboard fetch error:", err);
            alert(`Failed to load dashboard data. ${err.message}`);
        } finally {
            // Hide loading
            if (loader) loader.classList.add('hidden');
        }
    },

    resetDashboardFilters() {
        document.getElementById('dm-dash-year').value = 'All';
        document.getElementById('dm-dash-school').value = 'All';
        document.getElementById('dm-dash-class').value = 'All';
        document.getElementById('dm-dash-section').value = 'All';
        this.updateDashboard();
    },

    updateDashboard() {
        if (!this.allDocs) {
            console.warn("Dashboard Code: No data found in this.allDocs");
            return;
        }

        console.log("Dashboard Update Triggered. Total docs available:", this.allDocs.length);

        const yearFilter = document.getElementById('dm-dash-year').value;
        const schoolFilter = document.getElementById('dm-dash-school').value;
        const classFilter = document.getElementById('dm-dash-class').value;
        const sectionFilter = document.getElementById('dm-dash-section').value;

        // 1. Filter Data
        const filtered = this.allDocs.filter(doc => {
            // Timestamp check (ensure it exists)
            const docDate = doc.timestamp ? new Date(doc.timestamp) : null;
            const docYear = docDate ? docDate.getFullYear().toString() : 'Unknown';

            const matchYear = yearFilter === 'All' || docYear === yearFilter;
            const matchSchool = schoolFilter === 'All' || doc.school === schoolFilter;
            const matchClass = classFilter === 'All' || doc.class.toString() === classFilter;
            const matchSection = sectionFilter === 'All' || doc.section === sectionFilter;

            return matchYear && matchSchool && matchClass && matchSection;
        });

        console.log("Filtered docs count:", filtered.length);

        // 2. Update Stats
        document.getElementById('dm-stat-total').textContent = filtered.length;

        const uniqueSchools = new Set(filtered.map(d => d.school)).size;
        document.getElementById('dm-stat-schools').textContent = uniqueSchools;

        if (filtered.length > 0) {
            // Find most recent
            const dates = filtered.map(d => d.timestamp ? new Date(d.timestamp) : new Date(0));
            const maxDate = new Date(Math.max.apply(null, dates));
            document.getElementById('dm-stat-recent').textContent = `Last: ${maxDate.toLocaleDateString()}`;
        } else {
            document.getElementById('dm-stat-recent').textContent = "No data available";
        }

        // 3. Render Monthly Cards
        this.renderMonthlyCards(filtered);
    },

    renderMonthlyCards(data) {
        const grid = document.getElementById('dm-month-grid');
        if (!grid) return;

        // Prepare Data: Monthly Breakdown (Jan - Dec)
        const monthCounts = new Array(12).fill(0);

        data.forEach(doc => {
            if (!doc.timestamp) return;
            const dateObj = new Date(doc.timestamp);
            if (isNaN(dateObj)) return;

            const monthIndex = dateObj.getMonth(); // 0 = Jan, 11 = Dec
            monthCounts[monthIndex]++;
        });

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // Generate Cards HTML
        grid.innerHTML = months.map((m, index) => {
            const count = monthCounts[index];
            // Highlight active months
            const bgClass = count > 0 ? 'bg-blue-600/20 border-blue-500/30' : 'bg-white/5 border-white/5';
            const textClass = count > 0 ? 'text-white' : 'text-slate-500';
            const countClass = count > 0 ? 'text-blue-400' : 'text-slate-600';

            return `
                <div class="p-4 rounded-2xl border ${bgClass} flex flex-col items-center justify-center transition-all h-32">
                    <div class="text-sm font-bold uppercase tracking-wider ${textClass} mb-2">${m}</div>
                    <div class="text-4xl font-black ${countClass}">${count}</div>
                </div>
            `;
        }).join('');
    },

    updateFileLabel(input) {
        const label = document.getElementById('dm-file-label');
        if (input.files && input.files[0]) {
            label.innerHTML = `<span class="text-green-400 font-bold">${input.files[0].name}</span>`;
        }
    },

    resetFileLabel() {
        const label = document.getElementById('dm-file-label');
        label.innerHTML = `
            <div class="flex flex-col gap-4">
                <button type="button" onclick="document.getElementById('dm-file-input').click()" class="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors mx-auto w-full max-w-xs border border-white/5">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                    <span>Choose File</span>
                </button>
                
                <span class="text-xs uppercase tracking-widest font-bold opacity-50">OR</span>
                
                <button type="button" onclick="DocManager.openCamera()" class="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors mx-auto w-full max-w-xs border border-blue-500/20">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>Take Photo</span>
                </button>
            </div>
        `;
    },

    scrollToSection() {
        const section = document.getElementById('document-manager');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    },

    // --- LOGIC ---

    // --- CAMERA & PDF LOGIC ---

    capturedImages: [],
    stream: null,

    openCamera() {
        document.getElementById('dm-upload-screen').classList.add('hidden');
        document.getElementById('dm-camera-screen').classList.remove('hidden');
        this.startCamera();
    },

    async startCamera() {
        try {
            const video = document.getElementById('dm-video');
            this.stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' }
            });
            video.srcObject = this.stream;
        } catch (err) {
            console.error("Camera Error:", err);
            alert("Could not access camera. Please allow permissions.");
            this.closeCamera();
        }
    },

    capturePhoto() {
        const video = document.getElementById('dm-video');
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height); // Ensure image covers canvas

        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        this.capturedImages.push(dataUrl);
        this.updateThumbnails();
    },

    updateThumbnails() {
        const container = document.getElementById('dm-thumbnails');
        container.innerHTML = this.capturedImages.map((img, index) => `
            <div class="relative w-16 h-16 rounded-lg overflow-hidden border border-white/20">
                <img src="${img}" class="w-full h-full object-cover">
                <button onclick="DocManager.removeImage(${index})" class="absolute top-0 right-0 bg-red-500 text-white rounded-full p-0.5 transform scale-75">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        `).join('');

        const count = this.capturedImages.length;
        document.getElementById('dm-capture-count').textContent = count > 0 ? `${count} pages` : '';
    },

    removeImage(index) {
        this.capturedImages.splice(index, 1);
        this.updateThumbnails();
    },

    closeCamera() {
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }
        document.getElementById('dm-camera-screen').classList.add('hidden');
        document.getElementById('dm-upload-screen').classList.remove('hidden');
    },

    async finishCapture() {
        if (this.capturedImages.length === 0) {
            this.closeCamera();
            return;
        }

        // Generate PDF
        const pdf = new jspdf.jsPDF();

        for (let i = 0; i < this.capturedImages.length; i++) {
            if (i > 0) pdf.addPage();

            const imgData = this.capturedImages[i];
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        }

        const pdfBlob = pdf.output('blob');
        const file = new File([pdfBlob], "captured_record.pdf", { type: "application/pdf" });

        // Simulate file input
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        const fileInput = document.getElementById('dm-file-input');
        fileInput.files = dataTransfer.files;

        this.updateFileLabel(fileInput);
        this.closeCamera();
        this.capturedImages = []; // Reset
        this.updateThumbnails();
    },

    async handleUpload(e) {
        e.preventDefault();
        if (!this.scriptUrl) { alert("Please configure the Google Apps Script URL!"); return; }

        const form = e.target;
        const btn = document.getElementById('dm-submit-btn');
        const status = document.getElementById('dm-upload-status');
        const fileInput = document.getElementById('dm-file-input');

        if (!fileInput.files.length) { alert("Please select a file or take photos."); return; }

        const originalFile = fileInput.files[0];
        const studentName = form.studentName.value.trim();
        const className = form.class.value;
        const section = form.section.value;
        const school = form.school.value;

        // 1. Strict Validation
        if (!studentName || !form.rollNumber.value || !className || !section || !school) {
            alert("Please fill in ALL fields (Name, Roll No, Class, Section, School).");
            return;
        }

        // 2. Validate PDF File
        if (originalFile.type !== 'application/pdf' && !originalFile.name.toLowerCase().endsWith('.pdf')) {
            alert("Only PDF files are allowed. Please select a PDF or use the 'Take Photo' feature to create one.");
            fileInput.value = ''; // Clear invalid file
            this.resetFileLabel();
            return;
        }

        // Standardized Name: Name_Class_Section_School_Date_Time
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
        const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS

        // Sanitize name
        const safeName = studentName.replace(/[^a-zA-Z0-9]/g, '_');
        const safeSchool = school.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 10); // Truncate school name

        const extension = 'pdf'; // Force PDF extension
        const standardizedName = `${safeName}_${className}_${section}_${safeSchool}_${dateStr}_${timeStr}.${extension}`;

        // UI State: Loading
        btn.disabled = true;
        btn.innerHTML = `<svg class="w-5 h-5 animate-spin inline mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Uploading...`;
        status.className = 'mt-4 p-4 rounded-xl text-center font-bold text-sm bg-blue-500/10 text-blue-400';
        status.textContent = `Uploading as: ${standardizedName}...`;
        status.classList.remove('hidden');

        try {
            const base64 = await this.toBase64(originalFile);
            const payload = {
                action: 'upload',
                studentName: studentName,
                rollNumber: form.rollNumber.value,
                class: className,
                section: section,
                school: school,
                fileName: standardizedName, // Send standardized name
                mimeType: 'application/pdf', // Force MIME type
                fileData: base64
            };

            const response = await fetch(this.scriptUrl, {
                method: 'POST',
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.status === 'success') {
                status.className = 'mt-4 p-4 rounded-xl text-center font-bold text-sm bg-green-500/10 text-green-400';
                status.textContent = 'Upload Successful! Ready for next record.';

                // Clear cache so next view fetches fresh data
                this.allDocs = null;

                // Reset form for next entry (BUT do not exit)
                form.reset();
                this.resetFileLabel();

                btn.disabled = false;
                btn.textContent = 'Submit & Upload';

                // Auto-hide success message after 3 seconds
                setTimeout(() => {
                    status.classList.add('hidden');
                }, 3000);

            } else {
                throw new Error(result.message || 'Upload failed');
            }

        } catch (err) {
            console.error(err);
            status.className = 'mt-4 p-4 rounded-xl text-center font-bold text-sm bg-rose-500/10 text-rose-400';
            status.textContent = `Upload Failed: ${err.message}`;
            btn.disabled = false;
            btn.textContent = 'Submit & Upload';
        }
    },

    toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]); // Remove "data:application/pdf;base64," prefix
            reader.onerror = error => reject(error);
        });
    },

    async fetchDocs() {
        if (!this.scriptUrl) {
            document.getElementById('dm-docs-list').innerHTML = `<div class="col-span-full text-center text-rose-400">Error: Script URL not configured.</div>`;
            return;
        }

        const list = document.getElementById('dm-docs-list');
        list.innerHTML = `<div class="col-span-full text-center text-slate-500 py-12 italic">Loading documents from drive...</div>`;

        try {
            const response = await fetch(`${this.scriptUrl}?action=list`);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (e) {
                console.error("FetchDocs JSON Parse Error. Raw response:", text);
                throw new Error("Invalid JSON response from server.");
            }

            this.allDocs = data; // Cache for filtering
            this.filterDocs();

        } catch (err) {
            console.error(err);
            list.innerHTML = `<div class="col-span-full text-center text-rose-400">Failed to load documents. ${err.message}</div>`;
        }
    },

    toggleArsField(ageVal) {
        const age = parseInt(ageVal);
        const wrapper = document.getElementById('wai-ars-wrapper');
        const arsInput = document.getElementById('wai-ars');
        if (!wrapper || !arsInput) return;
        const isAdolescent = age >= 10 && age <= 19;
        if (isAdolescent) {
            wrapper.classList.remove('hidden');
            arsInput.setAttribute('required', 'required');
        } else {
            wrapper.classList.add('hidden');
            arsInput.removeAttribute('required');
            arsInput.value = '';
        }
    },

    showWellnessAnalyser() {
        if (!AuthManager.isLoggedIn) {
            alert("Please log in to access the Wellness.ai Analyser.");
            AuthManager.openLoginModal();
            return;
        }
        document.getElementById('dm-selection').classList.add('hidden');
        document.getElementById('dm-wellness-screen').classList.remove('hidden');
        document.getElementById('dm-wellness-report').classList.add('hidden');
    },

    runWellnessAnalysis(e) {
        e.preventDefault();
        const name = document.getElementById('wai-name').value.trim();
        const age = parseInt(document.getElementById('wai-age').value);
        const cls = document.getElementById('wai-class').value;
        const section = document.getElementById('wai-section').value;
        const school = document.getElementById('wai-school').value;
        const gender = document.getElementById('wai-gender').value;
        const swb = parseInt(document.getElementById('wai-swb').value);
        const iat = parseInt(document.getElementById('wai-iat').value);
        const isAdolescent = age >= 10 && age <= 19;
        const arsRaw = document.getElementById('wai-ars').value;
        const ars = isAdolescent && arsRaw !== '' ? parseInt(arsRaw) : null;

        // --- SWB Interpretation ---
        let swbLabel, swbColor, swbBg, swbTips;
        if (swb >= 31) {
            swbLabel = 'Greater Well-Being'; swbColor = 'text-emerald-400'; swbBg = 'border-emerald-500/30 bg-emerald-500/5';
            swbTips = [
                `${name} demonstrates a positive subjective well-being. Continue nurturing emotional resilience through regular physical activity and social engagement.`,
                `Encourage journaling or mindfulness practices to maintain this positive emotional state.`,
                `Peer support and extracurricular involvement will further strengthen ${gender === 'Male' ? 'his' : gender === 'Female' ? 'her' : 'their'} psychological health.`
            ];
        } else {
            swbLabel = 'Poor Well-Being'; swbColor = 'text-red-400'; swbBg = 'border-red-500/30 bg-red-500/5';
            swbTips = [
                `${name}'s SWB score (${swb}) indicates emotional distress. Immediate attention from a school counsellor or wellness professional is recommended.`,
                `Consider structured peer support groups and one-on-one counselling sessions to build emotional coping skills.`,
                `Family involvement is key — encourage open conversations at home about feelings, school pressures, and aspirations.`,
                `Introduce positive reinforcement activities such as art, music, or sports to rebuild a sense of achievement.`
            ];
        }

        // --- IAT Interpretation ---
        let iatLabel, iatColor, iatBg, iatTips;
        if (iat <= 30) {
            iatLabel = 'Normal Internet Usage'; iatColor = 'text-emerald-400'; iatBg = 'border-emerald-500/30 bg-emerald-500/5';
            iatTips = [
                `${name}'s internet usage is healthy and within normal limits.`,
                `Reinforce digital literacy skills and encourage purposeful, educational use of the internet.`
            ];
        } else if (iat <= 49) {
            iatLabel = 'Mild Internet Addiction'; iatColor = 'text-yellow-400'; iatBg = 'border-yellow-500/30 bg-yellow-500/5';
            iatTips = [
                `${name} shows early signs of internet over-use. Setting a daily screen-time schedule with designated offline periods is advised.`,
                `Encourage offline hobbies — sports, reading, crafts — to reduce digital dependency.`,
                `Parents should engage in regular, non-judgmental conversations about online habits.`
            ];
        } else if (iat <= 79) {
            iatLabel = 'Moderate Internet Addiction'; iatColor = 'text-orange-400'; iatBg = 'border-orange-500/30 bg-orange-500/5';
            iatTips = [
                `A score of ${iat} places ${name} in the moderate addiction range. Structured digital detox periods and parental controls are strongly recommended.`,
                `School-based digital wellness programmes can help ${gender === 'Male' ? 'him' : gender === 'Female' ? 'her' : 'them'} develop healthier online boundaries.`,
                `Cognitive Behavioural Therapy (CBT) techniques focused on habit replacement may be beneficial.`,
                `Create a device-free bedroom environment to improve sleep quality and reduce compulsive usage.`
            ];
        } else {
            iatLabel = 'Severe Internet Addiction'; iatColor = 'text-red-400'; iatBg = 'border-red-500/30 bg-red-500/5';
            iatTips = [
                `${name}'s IAT score (${iat}) signals severe internet addiction requiring immediate professional intervention.`,
                `A referral to a child psychologist or mental health professional is strongly advised.`,
                `Family therapy and a structured digital rehabilitation plan should be initiated promptly.`,
                `Complete removal of unsupervised screen access, combined with productive physical and social activities, is essential during recovery.`
            ];
        }

        // --- ARS Interpretation (Adolescents 10-19 only) ---
        let arsLabel, arsColor, arsBg, arsTips;
        if (ars === null) {
            arsLabel = null; arsColor = null; arsBg = null; arsTips = null;
        } else if (ars >= 185) {
            arsLabel = 'High Resilience'; arsColor = 'text-emerald-400'; arsBg = 'border-emerald-500/30 bg-emerald-500/5';
            arsTips = [
                `${name} exhibits strong adolescent resilience. ${gender === 'Male' ? 'He' : gender === 'Female' ? 'She' : 'They'} is well-equipped to handle academic and social stressors.`,
                `Channel this resilience through leadership opportunities — prefect roles, school councils, or peer mentoring.`
            ];
        } else if (ars >= 124) {
            arsLabel = 'Moderate Resilience'; arsColor = 'text-yellow-400'; arsBg = 'border-yellow-500/30 bg-yellow-500/5';
            arsTips = [
                `${name}'s resilience is at a moderate level. Building problem-solving and emotional regulation skills will strengthen it further.`,
                `Encourage participation in team sports, creative arts, or community service to develop coping mechanisms.`,
                `Regular check-ins with a trusted adult — teacher, counsellor, or parent — will provide consistent emotional scaffolding.`
            ];
        } else {
            arsLabel = 'Low Resilience'; arsColor = 'text-red-400'; arsBg = 'border-red-500/30 bg-red-500/5';
            arsTips = [
                `An ARS score of ${ars} suggests ${name} struggles significantly with adversity. Immediate support from school counsellors is essential.`,
                `Structured resilience-building workshops and group therapy can be highly beneficial at this developmental stage.`,
                `Identify and reduce key stressors (academic pressure, peer conflict, family dynamics) with targeted support plans.`,
                `Positive mentorship from an adult role model within school or community can provide a crucial safety net.`
            ];
        }

        // --- Overall Summary ---
        const criticalCount = [swb < 31 ? 1 : 0, iat > 49 ? 1 : 0, (ars !== null && ars < 124) ? 1 : 0].reduce((a, b) => a + b, 0);
        const totalDomains = ars !== null ? 3 : 2;
        let overallMsg, overallColor;
        if (criticalCount === 0) {
            overallMsg = `${name} is in a healthy psychological state across all three domains. Continue monitoring and providing enriching experiences.`;
            overallColor = 'from-emerald-600 to-emerald-800';
        } else if (criticalCount === 1) {
            overallMsg = `${name} shows one area of concern. Targeted support in that domain will help achieve balanced well-being.`;
            overallColor = 'from-yellow-600 to-yellow-800';
        } else if (criticalCount === 2) {
            overallMsg = `${name} is facing challenges in multiple areas. A holistic wellness plan involving parents, teachers, and counsellors is recommended.`;
            overallColor = 'from-orange-600 to-orange-800';
        } else {
            overallMsg = `${name} requires urgent, multi-disciplinary support. Please involve a professional mental health specialist immediately.`;
            overallColor = 'from-red-600 to-red-800';
        }

        const reportDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });

        const renderTips = (tips) => tips.map(t => `<li class="text-slate-300 text-sm leading-relaxed">• ${t}</li>`).join('');

        const report = document.getElementById('dm-wellness-report');
        report.innerHTML = `
            <!-- Header Card -->
            <div class="p-6 rounded-2xl bg-gradient-to-r ${overallColor}/20 border border-white/10">
                <div class="flex flex-wrap justify-between items-start gap-4">
                    <div>
                        <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Wellness.ai Report · ${reportDate}</div>
                        <div class="text-2xl font-black text-white">${name}</div>
                        <div class="text-slate-400 text-sm mt-1">Age ${age} &middot; Class ${cls}${section} &middot; ${school} &middot; ${gender}</div>
                    </div>
                    <div class="flex gap-4 flex-wrap">
                        <div class="text-center"><div class="text-3xl font-black text-rose-400">${swb}</div><div class="text-xs text-slate-500">SWB</div></div>
                        <div class="text-center"><div class="text-3xl font-black text-amber-400">${iat}</div><div class="text-xs text-slate-500">IAT</div></div>
                        ${ars !== null ? `<div class="text-center"><div class="text-3xl font-black text-sky-400">${ars}</div><div class="text-xs text-slate-500">ARS</div></div>` : ''}
                    </div>
                </div>
                <p class="mt-4 text-sm text-slate-300 border-t border-white/10 pt-4">${overallMsg}</p>
            </div>

            <!-- SWB Card -->
            <div class="p-5 rounded-2xl border ${swbBg}">
                <div class="flex items-center justify-between mb-3">
                    <div class="font-bold text-white">Subjective Well-Being (SWB)</div>
                    <div class="px-3 py-1 rounded-full text-xs font-bold ${swbColor} bg-white/5">${swbLabel} · ${swb}/60</div>
                </div>
                <ul class="space-y-2">${renderTips(swbTips)}</ul>
            </div>

            <!-- IAT Card -->
            <div class="p-5 rounded-2xl border ${iatBg}">
                <div class="flex items-center justify-between mb-3">
                    <div class="font-bold text-white">Internet Addiction Test (IAT)</div>
                    <div class="px-3 py-1 rounded-full text-xs font-bold ${iatColor} bg-white/5">${iatLabel} · ${iat}/100</div>
                </div>
                <ul class="space-y-2">${renderTips(iatTips)}</ul>
            </div>

            <!-- ARS Card (shown only for adolescents 10-19) -->
            ${ars !== null ? `
            <div class="p-5 rounded-2xl border ${arsBg}">
                <div class="flex items-center justify-between mb-3">
                    <div class="font-bold text-white">Adolescent Resilience Scale (ARS)</div>
                    <div class="px-3 py-1 rounded-full text-xs font-bold ${arsColor} bg-white/5">${arsLabel} &middot; ${ars}/250</div>
                </div>
                <ul class="space-y-2">${renderTips(arsTips)}</ul>
            </div>` : `
            <div class="p-4 rounded-2xl border border-white/5 bg-white/3 text-slate-500 text-sm text-center italic">
                ARS not applicable &mdash; Adolescent Resilience Scale is only assessed for ages 10&ndash;19.
            </div>`}

            <!-- AI Insight Card -->
            <div id="dm-ai-insight-card" class="p-5 rounded-2xl border border-purple-500/30 bg-purple-500/5">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                    </div>
                    <div class="font-bold text-white">AI Insight <span class="text-xs font-normal text-purple-400 ml-1">powered by Wellness.ai</span></div>
                </div>
                <div id="dm-ai-progress" class="mb-3 hidden">
                    <div class="flex items-center gap-2 text-xs text-slate-400 mb-2">
                        <svg class="w-3 h-3 animate-spin text-purple-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        <span id="dm-ai-progress-text">Warming up Wellness.ai...</span>
                    </div>
                    <div class="w-full h-1 rounded-full overflow-hidden bg-white/5">
                        <div class="h-full w-1/2 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500 rounded-full animate-pulse" style="animation: wellnessShimmer 1.4s ease-in-out infinite;"></div>
                    </div>
                </div>
                <div id="dm-ai-insight-text" class="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                    <span class="text-slate-500 italic">Generating personalised AI insight...</span>
                </div>
            </div>

            <!-- Action buttons -->
            <div class="flex gap-4 flex-wrap pb-4">
                <button onclick="DocManager.resetToMain()" class="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 hover:opacity-90 text-white font-bold text-sm transition-all">+ New Analysis</button>
            </div>
        `;
        report.classList.remove('hidden');
        report.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Kick off SmolLM generation
        this.runAIInsight({ name, age, cls, section, school, gender, swb, swbLabel, iat, iatLabel, ars, arsLabel });
    },

    wellnessEngine: null,

    async loadSmolLM() {
        if (this.wellnessEngine) return this.wellnessEngine;

        const progressEl = document.getElementById('dm-ai-progress');
        const progressText = document.getElementById('dm-ai-progress-text');
        // No progressBar — using shimmer animation instead

        if (progressEl) progressEl.classList.remove('hidden');

        try {
            const webllm = await import('https://esm.run/@mlc-ai/web-llm');
            const engine = await webllm.CreateMLCEngine(
                'SmolLM2-360M-Instruct-q4f16_1-MLC',
                {
                    initProgressCallback: (p) => {
                        // Only update text — no percentage bar (avoids double-run visual)
                        const pct = Math.round((p.progress || 0) * 100);
                        let msg = 'Warming up Wellness.ai...';
                        if (pct > 0 && pct < 30) msg = 'Preparing Wellness.ai...';
                        else if (pct >= 30 && pct < 70) msg = 'Loading intelligence...';
                        else if (pct >= 70 && pct < 99) msg = 'Almost ready...';
                        else if (pct >= 99) msg = 'Starting up...';
                        if (progressText) progressText.textContent = msg;
                    }
                }
            );
            this.wellnessEngine = engine;
            if (progressEl) progressEl.classList.add('hidden');
            return engine;
        } catch (err) {
            console.error('SmolLM load error:', err);
            if (progressEl) progressEl.classList.add('hidden');
            throw err;
        }
    },

    async runAIInsight({ name, age, cls, section, school, gender, swb, swbLabel, iat, iatLabel, ars, arsLabel }) {
        const insightEl = document.getElementById('dm-ai-insight-text');
        if (!insightEl) return;

        insightEl.innerHTML = '<span class="text-slate-500 italic">Connecting to Wellness.ai...</span>';

        let engine;
        try {
            engine = await this.loadSmolLM();
        } catch (err) {
            insightEl.innerHTML = `<span class="text-amber-400">⚠ Wellness.ai requires a modern browser with WebGPU support (Chrome 113+ recommended). Please try on a desktop device.</span>`;
            return;
        }

        const pronoun = gender === 'Male' ? 'he' : gender === 'Female' ? 'she' : 'they';
        const possessive = gender === 'Male' ? 'his' : gender === 'Female' ? 'her' : 'their';
        const heShe = gender === 'Male' ? 'He' : gender === 'Female' ? 'She' : 'They';

        // Build clear score-meaning strings so the model has full context
        const swbMeaning = swb >= 31
            ? `SWB score of ${swb}/60 means ${name} has GOOD emotional well-being and feels positive about life.`
            : `SWB score of ${swb}/60 means ${name} has POOR emotional well-being — ${pronoun} may be feeling stressed, unhappy, or emotionally low.`;

        const iatMeaning = iat <= 30
            ? `IAT score of ${iat}/100 means ${name} has NORMAL internet usage — no signs of addiction.`
            : iat <= 49
                ? `IAT score of ${iat}/100 means ${name} shows MILD internet addiction — ${pronoun} is spending slightly too much time online.`
                : iat <= 79
                    ? `IAT score of ${iat}/100 means ${name} has MODERATE internet addiction — the internet is significantly affecting daily life and focus.`
                    : `IAT score of ${iat}/100 means ${name} has SEVERE internet addiction — ${pronoun} is heavily dependent on the internet and it is disrupting ${possessive} life.`;

        const arsMeaning = ars === null
            ? ''
            : ars >= 185
                ? `ARS score of ${ars}/250 means ${name} has HIGH resilience — ${pronoun} bounces back well from challenges.`
                : ars >= 124
                    ? `ARS score of ${ars}/250 means ${name} has MODERATE resilience — ${pronoun} copes with difficulties but could be stronger.`
                    : `ARS score of ${ars}/250 means ${name} has LOW resilience — ${pronoun} struggles to cope with stress and setbacks.`;

        // Build the prompt — use external template if available, else fallback
        let prompt;
        const arsLine = ars !== null ? `\n- ${arsMeaning}` : '';

        if (window.WELLNESS_PROMPT_TEMPLATE) {
            prompt = window.WELLNESS_PROMPT_TEMPLATE
                .replace(/{{NAME}}/g, name)
                .replace(/{{AGE}}/g, age)
                .replace(/{{CLASS}}/g, cls)
                .replace(/{{SECTION}}/g, section)
                .replace(/{{SCHOOL}}/g, school)
                .replace(/{{GENDER}}/g, gender)
                .replace(/{{SWB_MEANING}}/g, swbMeaning)
                .replace(/{{IAT_MEANING}}/g, iatMeaning)
                .replace(/{{ARS_LINE}}/g, arsLine);
        } else {
            // Fallback hardcoded prompt
            prompt = `You are a school wellness counsellor writing a personalised note directly to a student.

Student: ${name}, Age ${age}, Class ${cls}${section}, School: ${school}, Gender: ${gender}

Here is what their wellness assessment results mean:
- ${swbMeaning}
- ${iatMeaning}${arsLine}

Write a short, warm note directly to ${name} (use "you" and "your"). The note should:
1. Clearly tell them what the results mean in simple words.
2. Give 2-3 simple practical daily habits they can start TODAY.
3. End with one encouraging sentence.

Do NOT greet with their full name. Do NOT mention score numbers or test names. Do NOT add a sign-off. Maximum 4 short paragraphs.`;
        }

        insightEl.textContent = '';

        try {
            const stream = await engine.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                stream: true,
                temperature: 0.65,
                max_tokens: 350
            });

            let full = '';
            for await (const chunk of stream) {
                const delta = chunk.choices[0]?.delta?.content || '';
                full += delta;
                insightEl.textContent = full;
            }

            // Strip any AI-generated sign-off (e.g. "All the best, SmolLM")
            // and append the official Wellness.ai BOT signature
            full = full.replace(/[\s\S]*?(all the best|yours sincerely|warm regards|sincerely|cheers|best wishes|regards)[\s\S]{0,60}$/i, '').trimEnd();
            insightEl.textContent = full;

            // Append official signature
            const sig = document.createElement('p');
            sig.className = 'mt-4 text-purple-400 font-bold text-sm';
            sig.textContent = '— Wellness.ai BOT';
            insightEl.appendChild(sig);

        } catch (err) {
            console.error('Wellness.ai generation error:', err);
            insightEl.innerHTML = `<span class="text-red-400">Could not generate insight at this time. Please try again.</span>`;
        }
    },

    filterDocs() {
        const search = document.getElementById('dm-search').value.toLowerCase();
        const list = document.getElementById('dm-docs-list');

        if (!this.allDocs || !this.allDocs.length) {
            list.innerHTML = `<div class="col-span-full text-center text-slate-500">No documents found.</div>`;
            return;
        }
        const filtered = this.allDocs.filter(doc =>
            doc.studentName.toLowerCase().includes(search)
        );

        if (!filtered.length) {
            list.innerHTML = `<div class="col-span-full text-center text-slate-500">No matching results found.</div>`;
            return;
        }

        list.innerHTML = filtered.map(doc => {
            // Extract date from timestamp
            let dateStr = '';
            if (doc.timestamp) {
                const d = new Date(doc.timestamp);
                if (!isNaN(d)) {
                    const dd = String(d.getDate()).padStart(2, '0');
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const yyyy = d.getFullYear();
                    dateStr = `${dd}/${mm}/${yyyy}`;
                }
            }
            return `
            <a href="${doc.link}" target="_blank" class="p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between group">
                <div class="w-full">
                    <div class="font-bold text-white group-hover:text-blue-400 transition-colors text-lg flex items-center flex-wrap gap-y-1">
                        ${doc.studentName} 
                        <span class="text-slate-500 mx-2 text-sm">&gt;</span> 
                        <span class="text-sky-400">${doc.class}</span>
                        <span class="text-slate-500 mx-2 text-sm">&gt;</span>
                        <span class="text-purple-400">${doc.section}</span>
                        <span class="text-slate-500 mx-2 text-sm">&gt;</span>
                        <span class="text-slate-300 text-sm whitespace-nowrap overflow-hidden text-ellipsis">${doc.school}</span>
                        ${dateStr ? `<span class="text-slate-500 mx-2 text-sm">&gt;</span><span class="text-emerald-400 text-sm font-medium">${dateStr}</span>` : ''}
                    </div>
                </div>
                <div class="text-slate-500 group-hover:text-blue-400 shrink-0 ml-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </div>
            </a>
        `}).join('');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    DocManager.init();
});

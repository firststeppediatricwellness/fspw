// PDF Generation Logic for First Step Pediatric Wellness
function generatePdf(
    personalData,
    aswbScore,
    aswbInterpretation,
    arsScore,
    arsInterpretation,
    confidenceScore,
    emotionalInsightScore,
    negativeCognitionScore,
    socialSkillsScore,
    empathyScore,
    familyConnectednessScore,
    familyAvailabilityScore,
    peersConnectednessScore,
    peersAvailabilityScore,
    schoolSupportiveEnvironmentScore,
    schoolConnectednessScore,
    communityConnectednessScore,
    iatScore,
    iatInterpretation
) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Colors (Premium Blue & Gold Theme)
    const primaryDark = '#111827';
    const primaryBlue = '#1E3A8A'; // Deep Royal Blue
    const accentGold = '#B45309';  // Gold/Amber
    const tableHeaderBg = '#E0F2FE'; // Light Blue for Headers
    const accentBlue = '#e0e7ff'; // Legacy Light Blue (Restored for Page 2 compatibility)
    const textGray = '#4b5563';
    const sectionHeaderBg = '#F3F4F6';

    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const contentWidth = pageWidth - (margin * 2);

    // --- Helper: Header ---
    function addHeader(doc) {
        // Top Decorative Line
        doc.setDrawColor(primaryBlue);
        doc.setLineWidth(2);
        doc.line(0, 0, pageWidth, 0);

        // Logo
        const logo = document.getElementById('pdfLogo');
        if (logo) {
            try {
                // Ensure we use the vectorised image if possible, or fallback to whatever is in the img tag
                // We assume the img tag src is updated or valid.
                doc.addImage(logo, 'PNG', margin, 10, 25, 25);
            } catch (e) { console.error("Logo Error", e); }
        }

        // Company Name
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(primaryBlue);
        doc.text("First Step Pediatric Wellness", margin + 30, 18);

        // Tagline
        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.setTextColor(accentGold);
        doc.text("World's 1st EdHealth Platform™", margin + 30, 23);

        // Report Title
        doc.setFontSize(12);
        doc.setTextColor(accentGold);
        doc.text("COMPREHENSIVE STUDENT WELLNESS REPORT", margin + 30, 29);

        // Address & Contact
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(textGray);
        const contact = "First Floor, SNDR, Horamavu, Bengaluru 560043 | +91-9110865715 | pediconnect@fspw.org | www.fspw.org";
        doc.text(contact, margin + 30, 35);

        // Bottom Header Line
        doc.setDrawColor(accentGold);
        doc.setLineWidth(0.5);
        doc.line(margin, 38, pageWidth - margin, 38);
    }

    // --- Helper: Footer ---
    function addFooter(doc, pageNum) {
        const footerY = pageHeight - 12;

        // Decorative Line
        doc.setDrawColor(primaryBlue);
        doc.setLineWidth(0.5);
        doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);

        doc.setFontSize(8);
        doc.setTextColor(textGray);

        // Left: Confidentiality
        doc.text("Confidential Medical Record - For Internal & Parental Use Only", margin, footerY);

        // Right: Page Number
        doc.text(`Page ${pageNum}`, pageWidth - margin, footerY, { align: 'right' });

        // Bottom Edge Line
        doc.setDrawColor(accentGold);
        doc.setLineWidth(2);
        doc.line(0, pageHeight, pageWidth, pageHeight);
    }

    // Helper for Section Title (With Footer Overlap Fix)
    function addSectionTitle(doc, title, y) {
        // Check for page break before section title
        // Increased buffer to avoid overlap with footer
        if (y + 15 > pageHeight - 30) {
            doc.addPage();
            pageNum++;
            addHeader(doc);
            addFooter(doc, pageNum);
            y = 45;
        }

        // Decorative block
        doc.setFillColor(primaryBlue);
        doc.rect(margin, y, 2, 9, 'F');

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(primaryBlue);
        doc.text(title.toUpperCase(), margin + 6, y + 6);

        // Underline
        doc.setDrawColor(229, 231, 235);
        doc.setLineWidth(0.2);
        doc.line(margin, y + 10, pageWidth - margin, y + 10);

        return y + 16;
    }

    // --- Helper: Data Row ---
    function addDataRow(doc, label, value, y, interpretation = null) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(primaryDark);
        doc.text(label + ":", margin + 2, y);

        doc.setFont("helvetica", "normal");
        doc.text(String(value), margin + 60, y);

        if (interpretation) {
            // If there's an interpretation, show it
            // Check if negative for red color
            const negativeKeywords = ['High', 'Severe', 'Poor', 'Requires', 'Hypoxia', 'Excessive', 'Sleep-deprived', 'Obese', 'Underweight', 'Hypertension', 'Low'];
            // Simple check: if interpretation contains negative words, make it red-ish? 
            // Or just use a different color for interpretation generally.
            doc.setFont("helvetica", "italic");
            doc.setTextColor(primaryBlue);
            // Wrap text if too long
            const interpText = `(${interpretation})`;
            doc.text(interpText, margin + 60 + doc.getStringUnitWidth(String(value)) * doc.internal.getFontSize() + 2, y);
        }

        return y + 6;
    }

    // --- Start Generating ---
    let currentY = 45; // Start content below header
    let pageNum = 1;

    addHeader(doc);
    addFooter(doc, pageNum);

    // 1. Patient Details Box
    doc.setDrawColor(primaryBlue);
    doc.setLineWidth(0.1);
    doc.rect(margin, currentY, contentWidth, 35);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(primaryDark);

    // Col 1
    doc.text("Student Name:", margin + 5, currentY + 8);
    doc.setFont("helvetica", "normal");
    doc.text(personalData.studentName, margin + 40, currentY + 8);

    doc.setFont("helvetica", "bold");
    doc.text("Age / DOB:", margin + 5, currentY + 16);
    doc.setFont("helvetica", "normal");
    doc.text(`${personalData.age} / ${personalData.dateOfBirth}`, margin + 40, currentY + 16);

    doc.setFont("helvetica", "bold");
    doc.text("School:", margin + 5, currentY + 24);
    doc.setFont("helvetica", "normal");
    doc.text(personalData.schoolName, margin + 40, currentY + 24);

    // Col 2
    const col2X = margin + 100;
    doc.setFont("helvetica", "bold");
    doc.text("Date of Test:", col2X, currentY + 8);
    doc.setFont("helvetica", "normal");
    doc.text(personalData.dateOfTest, col2X + 30, currentY + 8);

    doc.setFont("helvetica", "bold");
    doc.text("Class / Sec:", col2X, currentY + 16);
    doc.setFont("helvetica", "normal");
    doc.text(`${personalData.class} / ${personalData.section}`, col2X + 30, currentY + 16);

    // Add Roll Number
    doc.setFont("helvetica", "bold");
    doc.text("Roll No:", col2X, currentY + 24);
    doc.setFont("helvetica", "normal");
    doc.text(`${personalData.rollNumber || 'N/A'}`, col2X + 30, currentY + 24);

    currentY += 45;



    // 2. Vitals / Physical Health (REMOVED)
    // currentY += 45; 

    currentY += 10; // Add some spacing after Patient Details box
    // We will list them downwards
    // currentY = addDataRow(doc, "BMI", `${personalData.bmi} kg/m²`, currentY, personalData.bmiInterpretation);
    // Removed Height/Weight as requested previously, only showing BMI results if derived or just BMI. 
    // Wait, user asked to remove "Height" and "Weight" inputs/results text? 
    // User request 1: "remove the below items... Height, Weight...". 
    // But BMI is calculated from them. We should probably keep BMI? The user requested to remove "Height: ... Weight: ..." lines.
    // I will assume BMI stays as it's a derived metric often required, unless "Height" and "Weight" specifically meant the lines displaying them.
    // Looking at previous modification, I removed Height/Weight DISPLAY lines but BMI was kept. I will stick to that.

    // Removed inputs: BP, SpO2, Pulse, Perfusion Index...
    // Wait, the user said "remove the below items in the assessment page, results page and the final pdf- ... Blood Pressure ... SpO2 ... Pulse Rate ... Perfusion Index".
    // If they are removed, I should NOT display them in the PDF.
    // My previous modification removed them from the 'Results Section' in HTML.
    // I should NOT show them here either.

    // Let's re-read the exclusion list:
    // Height, Weight, Eyechart Left/Right, Screen Time, Brushing Habits, BP, SpO2, Pulse Rate, Perfusion Index, Sleep.
    // Basically ALL physical vitals except BMI?
    // Wait, if Height and Weight are removed from INTAKE, BMI cannot be calculated.
    // BUT my previous edit removed the INPUT fields too. So `personalData` will have NaN or undefined for these.
    // If inputs are gone, BMI is impossible.
    // Let's check `personalData` construction.
    // I removed `height` and `weight` PROPS from `personalHealthData` object in Step 78.
    // So `personalData.bmi` will likely be NaN.

    // If I cannot calculate BMI, I shouldn't display it.
    // Effectively, the "Physical Health & Vitals" section might be EMPTY or significantly reduced.
    // What remains?
    // - Subjective Well Being (SWB)
    // - Adolescent Resilience Scale (ARS)
    // - Internet Addiction (IAT)

    // If the user removed ALL those physical fields, what is left in "Personal & Health Overview"?
    // Only: Name, Class, Section, DOB, Age, School, Date of Test.
    // Basically just demographic info.

    // So I should SKIP "Physical Health & Vitals" section if there is no data.
    // Let's verify if *anything* is left.
    // The exclusion list covered: Height, Weight, Eyechart, Screen Time, Brushing, BP, SpO2, Pulse, Perfusion, Sleep.
    // That seems to be EVERYTHING in that section.

    // So I will start directly with Psychological Assessments.

    currentY -= 5; // Undo spacing

    // 3. Subjective Well-being (SWB)
    // Insert WELLNESS.AI RESULTS Title
    currentY += 5; // Add a bit more spacing
    doc.setFillColor(primaryBlue);
    doc.rect(margin, currentY, contentWidth, 10, 'F');
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor("#FFFFFF"); // White text
    doc.text("WELLNESS.AI RESULTS", margin + 5, currentY + 7);
    currentY += 15;

    currentY = addSectionTitle(doc, "Subjective Well-being (SWB)", currentY);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(primaryDark);
    doc.text(`Total Score: ${aswbScore} / 60`, margin + 2, currentY);

    // Interpretation Box
    const swbColor = aswbInterpretation.includes('Poor') ? [254, 226, 226] : [220, 252, 231]; // Light Red or Green
    const swbTextColor = aswbInterpretation.includes('Poor') ? [185, 28, 28] : [21, 128, 61];

    // Background for result
    doc.setFillColor(...swbColor);
    doc.roundedRect(margin + 2, currentY + 3, contentWidth - 4, 10, 1, 1, 'F');

    doc.setFont("helvetica", "bold");
    doc.setTextColor(...swbTextColor);
    doc.text(`Interpretation: ${aswbInterpretation}`, margin + 5, currentY + 9);

    currentY += 20;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textGray);
    const swbDesc = doc.splitTextToSize("Purpose: Evaluates personal perception of happiness, life satisfaction, and emotional well-being.", contentWidth);
    doc.text(swbDesc, margin + 2, currentY);
    currentY += (swbDesc.length * 5) + 5;


    // 4. Internet Addiction Test (IAT)
    currentY = addSectionTitle(doc, "Internet Addiction Test (IAT)", currentY);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(primaryDark);
    doc.text(`Total Score: ${iatScore} / 100`, margin + 2, currentY);

    const iatColor = (iatInterpretation === 'Normal Internet usage') ? [220, 252, 231] :
        (iatInterpretation.includes('Mild')) ? [254, 249, 195] : // Yellow
            [254, 226, 226]; // Red
    const iatTextColor = (iatInterpretation === 'Normal Internet usage') ? [21, 128, 61] :
        (iatInterpretation.includes('Mild')) ? [161, 98, 7] :
            [185, 28, 28];

    doc.setFillColor(...iatColor);
    doc.roundedRect(margin + 2, currentY + 3, contentWidth - 4, 10, 1, 1, 'F');

    doc.setFont("helvetica", "bold");
    doc.setTextColor(...iatTextColor);
    doc.text(`Interpretation: ${iatInterpretation}`, margin + 5, currentY + 9);

    currentY += 20;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textGray);
    const iatDesc = doc.splitTextToSize("Purpose: Assesses the degree of internet use and its impact on daily functioning.", contentWidth);
    doc.text(iatDesc, margin + 2, currentY);
    currentY += (iatDesc.length * 5) + 5;

    // 5. Adolescent Resilience Scale (ARS) - Conditional
    // Check age logic
    if (parseInt(personalData.age) >= 10 && parseInt(personalData.age) <= 19) {

        // Check for page break
        if (currentY > pageHeight - 80) {
            doc.addPage();
            pageNum++;
            addHeader(doc);
            addFooter(doc, pageNum);
            currentY = 45;
        }

        currentY = addSectionTitle(doc, "Adolescent Resilience Scale (ARS)", currentY);

        doc.setFont("helvetica", "bold");
        doc.setTextColor(primaryDark);
        doc.text(`Total Score: ${arsScore}`, margin + 2, currentY);

        const arsColor = (arsInterpretation === 'High Resilience') ? [220, 252, 231] :
            (arsInterpretation.includes('Moderate')) ? [254, 249, 195] :
                [254, 226, 226];
        const arsTextColor = (arsInterpretation === 'High Resilience') ? [21, 128, 61] :
            (arsInterpretation.includes('Moderate')) ? [161, 98, 7] :
                [185, 28, 28];

        doc.setFillColor(...arsColor);
        doc.roundedRect(margin + 2, currentY + 3, contentWidth - 4, 10, 1, 1, 'F');

        doc.setFont("helvetica", "bold");
        doc.setTextColor(...arsTextColor);
        doc.text(`Interpretation: ${arsInterpretation}`, margin + 5, currentY + 9);

        currentY += 18;

        // Detailed Breakdown
        doc.setFont("helvetica", "bold");
        doc.setTextColor(primaryDark);
        doc.text("Category Breakdown:", margin + 2, currentY);
        currentY += 6;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);

        const cats = [
            { l: "Confidence", v: confidenceScore },
            { l: "Emotional Insight", v: emotionalInsightScore },
            { l: "Negative Cognition", v: negativeCognitionScore },
            { l: "Social Skills", v: socialSkillsScore },
            { l: "Empathy", v: empathyScore },
            { l: "Family Connectedness", v: familyConnectednessScore },
            { l: "Family Availability", v: familyAvailabilityScore },
            { l: "Peers Connectedness", v: peersConnectednessScore },
            { l: "Peers Availability", v: peersAvailabilityScore },
            { l: "School Supportive Env", v: schoolSupportiveEnvironmentScore },
            { l: "School Connectedness", v: schoolConnectednessScore },
            { l: "Community Connectedness", v: communityConnectednessScore }
        ];

        let rowCount = 0;
        let colWidth = contentWidth / 3;

        cats.forEach((cat, i) => {
            let x = margin + (i % 3) * colWidth;
            let y = currentY + Math.floor(i / 3) * 6;
            doc.text(`• ${cat.l}: ${cat.v}`, x, y);
            rowCount = Math.floor(i / 3);
        });

        currentY += (rowCount + 1) * 6 + 10;
    }

    // Save
    // --- PAGE 2: Assessment Scoring Interpretation ---
    doc.addPage();
    pageNum++;
    addHeader(doc);
    addFooter(doc, pageNum);
    currentY = 45;

    currentY = addSectionTitle(doc, "Assessment Scoring Interpretation", currentY);
    currentY += 5;

    // Table Helper
    function drawTable(title, rows) {
        // Check Page Break
        if (currentY + (rows.length * 8) + 30 > pageHeight) {
            doc.addPage();
            pageNum++;
            addHeader(doc);
            addFooter(doc, pageNum);
            currentY = 45;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(primaryBlue);
        doc.text(title, margin, currentY);
        currentY += 6;

        // Table Header
        doc.setFillColor(accentBlue);
        doc.rect(margin, currentY, contentWidth, 8, 'F');
        doc.setTextColor(primaryDark);
        doc.text("Score Range", margin + 5, currentY + 5.5);
        doc.text("Interpretation", margin + 60, currentY + 5.5);
        currentY += 8;

        // Rows
        doc.setFont("helvetica", "normal");
        rows.forEach((row, index) => {
            // Alternating row color
            if (index % 2 === 1) doc.setFillColor('#f9fafb');
            else doc.setFillColor('#ffffff');
            doc.rect(margin, currentY, contentWidth, 8, 'F');

            doc.setTextColor(textGray);
            doc.text(row.range, margin + 5, currentY + 5.5);
            doc.text(row.interp, margin + 60, currentY + 5.5);
            currentY += 8;
        });
        currentY += 10;
    }

    // SWB Table
    drawTable("Subjective Well-being (SWB)", [
        { range: "31 - 60", interp: "Greater Well-Being" },
        { range: "0 - 30", interp: "Poor Well-Being" }
    ]);

    // IAT Table
    drawTable("Internet Addiction Test (IAT)", [
        { range: "0 - 30", interp: "Normal Internet Usage" },
        { range: "31 - 49", interp: "Mild Addiction" },
        { range: "50 - 79", interp: "Moderate Addiction" },
        { range: "80 - 100", interp: "Severe Addiction" }
    ]);

    // ARS Table
    if (parseInt(personalData.age) >= 10 && parseInt(personalData.age) <= 19) {
        drawTable("Adolescent Resilience Scale (ARS)", [
            { range: ">= 185", interp: "High Resilience" },
            { range: "124 - 184", interp: "Moderate Resilience" },
            { range: "< 124", interp: "Low Resilience" }
        ]);
    }

    // 6. Signature Area (Moved)
    currentY += 20; // Add space above signature

    // Check for page break
    if (currentY + 30 > pageHeight) {
        doc.addPage();
        pageNum++;
        addHeader(doc);
        addFooter(doc, pageNum);
        currentY = 45;
    }

    doc.setDrawColor(primaryDark);
    doc.setLineWidth(0.5);
    doc.line(pageWidth - margin - 60, currentY + 15, pageWidth - margin, currentY + 15);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Parent / Guardian Signature", pageWidth - margin - 60, currentY + 20);


    // --- PAGE 3: Comprehensive Medical Screening (Sections 1-6) ---
    doc.addPage();
    pageNum++;
    addHeader(doc);
    addFooter(doc, pageNum);
    currentY = 45;

    // Draw Table Helper for Screening (With Pagination & Orphan Check)
    function drawScreeningTable(title, cols, rows) {
        // Orphan Check: Title + Header + First Row (approx 30 units)
        if (currentY + 30 > pageHeight - 30) {
            doc.addPage();
            pageNum++;
            addHeader(doc);
            addFooter(doc, pageNum);
            currentY = 45;
        }

        // If this is the FIRST item (Growth & Vitals), add the main title "A-Z CHECK UP RESULTS"
        if (title === "1. Growth & Vital Parameters") {
            // Add Date of Check Up with spacing
            doc.setFont("helvetica", "normal");
            doc.setFontSize(10);
            doc.setTextColor(textGray);
            doc.text("Date of Check Up: ______________________", margin, currentY);
            currentY += 10; // Blank line spacing

            doc.setFillColor(primaryBlue);
            doc.rect(margin, currentY, contentWidth, 10, 'F');
            doc.setFont("helvetica", "bold");
            doc.setFontSize(12);
            doc.setTextColor("#FFFFFF");
            doc.text("A-Z CHECK UP RESULTS", margin + 5, currentY + 7);
            currentY += 15;
        }

        currentY = addSectionTitle(doc, title, currentY);

        // Header
        doc.setFillColor(tableHeaderBg);
        doc.rect(margin, currentY, contentWidth, 8, 'F');
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(primaryBlue);

        let x = margin + 2;
        cols.forEach(col => {
            doc.text(col.name, x, currentY + 5.5);
            x += col.width;
        });
        currentY += 8;

        // Rows
        doc.setFont("helvetica", "normal");
        rows.forEach((row, index) => {
            // Check Page Break
            if (currentY + 10 > pageHeight - 15) {
                doc.addPage();
                pageNum++;
                addHeader(doc);
                addFooter(doc, pageNum);
                currentY = 45;

                // Re-draw Header on new page
                doc.setFillColor(tableHeaderBg);
                doc.rect(margin, currentY, contentWidth, 8, 'F');
                doc.setFont("helvetica", "bold");
                doc.setFontSize(9);
                doc.setTextColor(primaryBlue);

                let rx = margin + 2;
                cols.forEach(col => {
                    doc.text(col.name, rx, currentY + 5.5);
                    rx += col.width;
                });
                currentY += 8;
                doc.setFont("helvetica", "normal");
            }

            // Alternating Row Color
            if (index % 2 !== 0) {
                doc.setFillColor(sectionHeaderBg);
                doc.rect(margin, currentY, contentWidth, 8, 'F');
            }

            // Line
            doc.setDrawColor(229, 231, 235);
            doc.setLineWidth(0.1);
            // doc.line(margin, currentY + 8, pageWidth - margin, currentY + 8); 

            let rx = margin + 2;
            doc.setTextColor(primaryDark);
            row.forEach((cell, i) => {
                if (cols[i].name === "Status" && Array.isArray(cell)) {
                    // Draw Checkboxes
                    let cx = rx;
                    cell.forEach(opt => {
                        const optWidth = doc.getTextWidth(opt);
                        doc.setDrawColor(primaryDark);
                        doc.rect(cx, currentY + 2, 3, 3); // Draw box
                        doc.text(opt, cx + 5, currentY + 5.5);
                        cx += optWidth + 10; // Dynamic spacing: Start(0) -> TextStart(5) + TextWidth + Padding(5)
                    });
                } else {
                    doc.text(cell, rx, currentY + 5.5);
                }
                rx += cols[i].width;
            });
            currentY += 8;
        });
        currentY += 5;
    }

    // 1. Growth & Vital Parameters
    drawScreeningTable("1. Growth & Vital Parameters",
        [{ name: "Parameter", width: 50 }, { name: "Value", width: 40 }, { name: "Status", width: 80 }],
        [
            ["Height (cm)", "_________", ["Short", "Normal", "Tall"]],
            ["Weight (kg)", "_________", ["Under", "Normal", "Over", "Obese"]],
            ["BMI", "_______", ["Under", "Normal", "Over", "Obese"]],
            ["BP (mmHg)", "___ / ___", ["Hypo", "Normal", "Pre-HTN", "Hyper"]],
            ["SpO2 (%)", "_______", ["Normal", "Hypoxemia (<95%)"]],
            ["Pulse Rate", "_______", ["Brady", "Normal", "Tachy"]],
            ["Perfusion Index", "_______", ["Normal", "Low Perfusion"]]
        ]
    );

    // 2. Vision & Eye Health
    drawScreeningTable("2. Vision & Eye Health",
        [{ name: "Test", width: 50 }, { name: "Value", width: 40 }, { name: "Status", width: 80 }],
        [
            ["Snellen - Left", "_______", ["Normal", "Myopia", "Hyperopia", "Other"]],
            ["Snellen - Right", "_______", ["Normal", "Myopia", "Hyperopia", "Other"]],
            ["Colour Vision", "", ["Normal", "Red-Green Def", "Blue-Yellow Def"]]
        ]
    );

    // 3. Respiratory (Lung Function)
    drawScreeningTable("3. Respiratory (Lung Function) Screening",
        [{ name: "Parameter", width: 50 }, { name: "Value", width: 40 }, { name: "Status", width: 80 }],
        [
            ["FVC (% pred)", "_______", ["Normal", "Restrictive", "Obstructive"]],
            ["FEV1 (% pred)", "_______", ["Normal", "Restrictive", "Obstructive"]],
            ["FEV1/FVC Ratio", "_______", ["Normal", "Restrictive", "Obstructive"]],
            ["Peak Exp Flow", "_______", ["Normal", "Below Average", "Poor"]]
        ]
    );

    // Helper for Checklist Rows (With Pagination & Overlap Fix & Bolding Fix)
    function drawChecklistSection(title, items) {
        // Orphan Check: Title + First Item (approx 20 units)
        if (currentY + 25 > pageHeight - 30) {
            doc.addPage();
            pageNum++;
            addHeader(doc);
            addFooter(doc, pageNum);
            currentY = 45;
        }

        currentY = addSectionTitle(doc, title, currentY);

        doc.setFontSize(9);
        doc.setTextColor(primaryDark);

        items.forEach(item => {
            // Check Page Break
            if (currentY + 12 > pageHeight - 30) {
                doc.addPage();
                pageNum++;
                addHeader(doc);
                addFooter(doc, pageNum);
                currentY = 45; // Secure start below header

                // Re-print title
                doc.setFont("helvetica", "italic");
                doc.setFontSize(8);
                doc.setTextColor(textGray);
                doc.text(title + " (Cont.)", margin, currentY - 5);
                currentY += 5;

                doc.setFontSize(9);
                doc.setTextColor(primaryDark);
            }

            doc.setFont("helvetica", "normal");
            doc.text(item.label, margin + 5, currentY);
            let x = margin + 60;

            doc.setFont("helvetica", "normal");
            if (item.type === 'text') {
                doc.text("__________ " + item.suffix, x, currentY);
            } else {
                item.options.forEach(opt => {
                    // Draw checkbox square (using primaryDark/Black instead of Blue)
                    doc.setDrawColor(primaryDark);
                    doc.rect(x, currentY - 3, 3, 3);
                    doc.text(opt, x + 5, currentY);
                    x += 45; // Spacing between options
                });
            }
            currentY += 8;
        });
        currentY += 5;
    }

    // 4. Cardiac Screening
    drawChecklistSection("4. Cardiac Screening", [
        { label: "Heart Sounds", options: ["Normal", "Murmur", "Arrhythmia"] }
    ]);

    // 5. Hearing
    drawScreeningTable("5. Hearing (Audiometry) Screening",
        [{ name: "Ear", width: 50 }, { name: "Value (dB)", width: 40 }, { name: "Status", width: 80 }],
        [
            ["Left Ear", "_______", ["Normal", "Mild", "Moderate", "Severe"]],
            ["Right Ear", "_______", ["Normal", "Mild", "Moderate", "Severe"]]
        ]
    );

    // 6. Oral & Dental Health
    drawChecklistSection("6. Oral & Dental Health", [
        { label: "Cavities", options: ["Absent", "Present"] },
        { label: "Plaque / Tartar", options: ["Absent", "Present"] },
        { label: "Gum Health", options: ["Healthy", "Inflamed"] },
        { label: "Tooth Alignment", options: ["Normal", "Malaligned"] },
        { label: "Enamel Wear", options: ["Absent", "Present"] },
        { label: "Oral Lesions", options: ["Absent", "Present"] },
        { label: "Bad Breath", options: ["Absent", "Present"] },
        { label: "Tonsils", options: ["Normal", "Enlarged"] }
    ]);

    // --- PAGE 4: Medical Screening Cont (Sections 7-14) ---
    doc.addPage();
    pageNum++;
    addHeader(doc);
    addFooter(doc, pageNum);
    currentY = 45;

    // 7. Posture & Balance
    drawChecklistSection("7. Posture, Balance & Flexibility", [
        { label: "Posture", options: ["Normal", "Deviation noted"] },
        { label: "Sit & Reach", options: ["Adequate", "Reduced"] },
        { label: "Romberg Test", options: ["Stable", "Unstable"] },
        { label: "Tandem Walk", options: ["Normal", "Difficulty noted"] }
    ]);

    // 8. Personal Hygiene
    drawChecklistSection("8. Personal Hygiene Assessment", [
        { label: "Nail Hygiene", options: ["Good", "Needs improvement"] },
        { label: "Hair & Scalp", options: ["Clean", "Issues noted"] }
    ]);

    // 9. Skin Health
    drawChecklistSection("9. Skin Health (Face & Exposed Areas)", [
        { label: "Skin Cleanliness", options: ["Clean", "Excess oil / dirt"] },
        { label: "Texture", options: ["Normal", "Dry"] },
        { label: "Acne / Lesions", options: ["None", "Present"] },
        { label: "Hydration", options: ["Adequate", "Poor"] },
        { label: "Inflammation", options: ["Absent", "Present"] }
    ]);

    // 10. Digestive
    drawChecklistSection("10. Digestive & Gut Health", [
        { label: "Bowel Habits", options: ["Regular", "Irregular"] },
        { label: "Bloating / Gas", options: ["Absent", "Present"] },
        { label: "F&V Intake", options: ["Adequate", "Low"] },
        { label: "Fibre / Probiotics", options: ["Adequate", "Low"] }
    ]);

    // 11. Immunity
    drawChecklistSection("11. Immunity & General Health", [
        { label: "Freq of Fever/Cold", options: ["Rare", "Frequent"] },
        { label: "Fatigue", options: ["Absent", "Present"] }
    ]);

    // 12. Hydration 
    drawChecklistSection("12. Hydration & Urinary Health", [
        { label: "Hydration Level", options: ["Adequate", "Mild dehydration", "Dehydration suspected"] },
        { label: "Urine Colour", options: ["Pale yellow", "Dark yellow"] }
    ]);

    // 13. Lifestyle
    drawChecklistSection("13. Lifestyle & Habits (Data collection only)", [
        { label: "Screen Time", type: 'text', suffix: "hrs/day" },
        { label: "Sleep Duration", options: ["7–9 hrs", "< 7 hrs"] },
        { label: "Brushing Habit", options: ["Twice daily", "Needs improvement"] }
    ]);

    // 14. Learning & Genetics
    drawChecklistSection("14. Learning & Neurodevelopmental Screening", [
        { label: "Attention & Focus", options: ["Normal", "Needs monitoring"] },
        { label: "Reading Skills", options: ["Normal", "Difficulty noted"] },
        { label: "Phonological", options: ["Adequate", "Difficulty"] },
        { label: "Writing Skills", options: ["Age-appropriate", "Difficulty"] },
        { label: "Numerical Skills", options: ["Normal", "Difficulty"] }
    ]);

    drawChecklistSection("Genetic & Family Risk Profile", [
        { label: "Family History", options: ["Present", "Not reported"] }
    ]);

    // Small note for conditions
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(textGray);
    const conditions = "(Includes: Diabetes, Hypertension, Heart disease, Asthma, Allergies, Thyroid, Obesity, Vision/Hearing issues, ADHD, Autism, etc.)";
    const condLines = doc.splitTextToSize(conditions, contentWidth - 10);
    doc.text(condLines, margin + 5, currentY - 5);
    currentY += (condLines.length * 4) + 10;

    // Disclaimer


    // Signature REMOVED per user request





    // --- PAGE 5: Interpretation & Action Guidance ---
    doc.addPage();
    pageNum++;
    addHeader(doc);
    addFooter(doc, pageNum);
    currentY = 45;

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(primaryBlue);
    doc.text("INTERPRETATION & ACTION GUIDANCE (A-Z CHECK UP)", margin, currentY);
    doc.setFontSize(10);
    doc.setTextColor(textGray);
    doc.text("(To be read along with the screening report)", margin, currentY + 6);

    doc.setDrawColor(primaryBlue);
    doc.setLineWidth(0.5);
    doc.line(margin, currentY + 9, pageWidth - margin, currentY + 9);
    currentY += 15;

    // Content
    const guidanceItems = [
        { t: "Growth & Vital Parameters", d: "Abnormal growth patterns or vital signs may reflect nutritional imbalance, lifestyle factors, or temporary physiological variations. Persistent deviations should be discussed with a pediatrician." },
        { t: "Vision & Eye Health", d: "Reduced visual acuity or colour vision difficulty may affect classroom learning. An ophthalmology consultation is recommended if issues persist." },
        { t: "Respiratory (Lung Function)", d: "Reduced lung values or altered airflow may suggest breathing inefficiency (allergies/asthma). Medical evaluation is advised if symptoms like wheezing present." },
        { t: "Cardiac Screening", d: "Detection of a murmur does not confirm heart disease but indicates need for further evaluation to rule out structural causes." },
        { t: "Hearing", d: "Hearing difficulties may impact speech and academics. ENT/audiology consultation recommended if abnormalities noted." },
        { t: "Oral & Dental Health", d: "Cavities or gum issues indicate inadequate hygiene. Regular brushing and dental consultation advised." },
        { t: "Posture, Balance & Flexibility", d: "Deviations may relate to ergonomics or muscle imbalance. Physiotherapy may help if issues persist." },
        { t: "Personal Hygiene & Skin Health", d: "Poor hygiene increases infection risk. Acne/dryness may be hormonal or environmental. Dermatological advice may be sought." },
        { t: "Digestive & Gut Health", d: "Irregular bowel habits may reflect diet/hydration issues. Nutritional adjustments recommended." },
        { t: "Immunity & General Health", d: "Frequent infections or fatigue may indicate reduced immunity. Adequate sleep/nutrition advised." },
        { t: "Hydration & Urinary Health", d: "Dark urine suggests insufficient fluid intake. Encourage regular water consumption." },
        { t: "Learning & Neurodevelopment", d: "Learning difficulties may benefit from closer academic monitoring and early supportive interventions." }
    ];

    guidanceItems.forEach(item => {
        // Check Page Break
        if (currentY + 20 > pageHeight) {
            doc.addPage();
            pageNum++;
            addHeader(doc);
            addFooter(doc, pageNum);
            currentY = 45;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(primaryBlue);
        doc.text(item.t, margin, currentY);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(textGray);

        const descLines = doc.splitTextToSize(item.d, contentWidth);
        doc.text(descLines, margin, currentY + 5);

        currentY += (descLines.length * 4) + 8;
    });

    // Disclaimer (Moved to End)
    if (currentY + 40 > pageHeight) {
        doc.addPage();
        pageNum++;
        addHeader(doc);
        addFooter(doc, pageNum);
        currentY = 45;
    }

    doc.setDrawColor(251, 191, 36);
    doc.setFillColor(sectionHeaderBg);
    doc.rect(margin, currentY, contentWidth, 30, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(primaryDark);
    doc.text("DISCLAIMER", margin + 5, currentY + 6);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    const disclaimerText = "This is a preventive screening report, not a diagnostic certificate. Abnormal findings indicate risk, not disease. Accuracy is subject to responses provided.";
    const disLines = doc.splitTextToSize(disclaimerText, contentWidth - 10);
    doc.text(disLines, margin + 5, currentY + 12);

    doc.save("Paediatric_Wellness_Report.pdf");
}

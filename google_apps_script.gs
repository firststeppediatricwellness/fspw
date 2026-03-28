function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // 1. Get/Create Folders
    const rootFolder = DriveApp.getRootFolder();
    const schoolFolder = getOrCreateFolder(rootFolder, data.school);
    const classFolder = getOrCreateFolder(schoolFolder, "Class " + data.class);
    const sectionFolder = getOrCreateFolder(classFolder, "Section " + data.section);
    
    // 2. Decode Base64 and Create File
    const decoded = Utilities.base64Decode(data.fileData);
    const blob = Utilities.newBlob(decoded, data.mimeType, data.fileName);
    const file = sectionFolder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // 3. Save Metadata to Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    // Headers if empty: Timestamp, Student Name, Roll No, Class, Section, School, File Link, File ID
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Student Name", "Roll No", "Class", "Section", "School", "Link", "File ID"]);
    }
    
    sheet.appendRow([
      new Date(),
      data.studentName,
      data.rollNumber,
      data.class,
      data.section,
      data.school,
      file.getUrl(),
      file.getId()
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success', url: file.getUrl() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const rows = sheet.getDataRange().getValues();
    const headers = rows.shift(); // Remove header row
    
    const docs = rows.map(row => ({
      timestamp: row[0],
      studentName: row[1],
      rollNumber: row[2],
      class: row[3],
      section: row[4],
      school: row[5],
      link: row[6]
    }));
    
    return ContentService.createTextOutput(JSON.stringify(docs))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateFolder(parent, name) {
  const folders = parent.getFoldersByName(name);
  if (folders.hasNext()) {
    return folders.next();
  } else {
    return parent.createFolder(name);
  }
}

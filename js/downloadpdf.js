function downloadPDF(event) {
  event.preventDefault(); // Prevent the default behavior of the link

  // Resume hosted on Google Drive
  var driveURL =
    "https://drive.google.com/drive/folders/12vEQZYYmn8Yg4AH77DNZ1EDh8KB9P1yh?usp=drive_link";

  window.open(driveURL, "_blank");
}

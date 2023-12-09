// script.js

let startTime;
let intervalId;

function startReadingFile() {
    // Reset the progress bar and counter
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('timeElapsedCounter').textContent = 'Time Elapsed: 0 seconds';

    // Start the time elapsed counter
    startTime = Date.now();
    intervalId = setInterval(updateTimeElapsedCounter, 1000); // Update every 1 second

    // Fetch and display the file
    readFile();
}

function stopReadingFile() {
    // Stop the time elapsed counter
    clearInterval(intervalId);

    // Fetch and display the file (optional)
    readFile();
}

function updateTimeElapsedCounter() {
    const currentTime = Date.now();
    const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
    document.getElementById('timeElapsedCounter').textContent = `Time Elapsed: ${elapsedSeconds} seconds`;
}

function readFile() {
    fetch('/read_file')
        .then(response => response.text())
        .then(fileContents => {
            // Display the file contents in the 'fileContent' div
            document.getElementById('fileContent').textContent = fileContents;
        })
        .catch(error => console.error('Error:', error));
}

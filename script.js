function updateDateTime() {
    // Get the current date and time
    var currentDate = new Date();

    // Format the date and time
    var formattedDateTime = currentDate.toLocaleString();

    // Display the formatted date and time in an HTML element with the id "datetime"
    document.getElementById("datetime").innerHTML = "Today is: " + formattedDateTime;
}

function showRecord() {
    // Display the pop-up overlay
    if(popupOverlay.style.display == 'none'){
        document.getElementById('popupOverlay').style.display = 'flex';
    }
    else{
        document.getElementById('popupOverlay').style.display = 'none';
    }
}

function closePopup() {
    // Hide the pop-up overlay
    document.getElementById('popupOverlay').style.display = 'none';
}


//Add listner for when button is clicked
document.querySelector("#showrecord").addEventListener("click", showRecord);

// Call the updateDateTime function when the page loads
window.onload = function () {
    updateDateTime();

    // Update the date and time every second (1000 milliseconds)
    setInterval(updateDateTime, 1000);
    document.getElementById('popupOverlay').style.display = 'none';
};
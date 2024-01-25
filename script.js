function updateDateTime() {
    // Get the current date and time
    var currentDate = new Date();

    // Format the date and time
    var formattedDateTime = currentDate.toLocaleString();

    // Display the formatted date and time in an HTML element with the id "datetime"
    document.getElementById("datetime").innerHTML = "Today is: " + formattedDateTime;
}



// Call the updateDateTime function when the page loads
window.onload = function () {
    updateDateTime();

    // Update the date and time every second (1000 milliseconds)
    setInterval(updateDateTime, 1000);
};
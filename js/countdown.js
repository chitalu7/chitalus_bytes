// Set the target end date (e.g., October 31, 2024)
const endDate = new Date("Oct 31, 2024 23:59:59").getTime();

// Function to update the countdown every second
const countdownTimer = setInterval(function() {

    // Get the current date and time (when the page is loaded)
    const now = new Date().getTime(); // Always gets the current time

    // Calculate the remaining time between now and the end date
    const remainingTime = endDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the countdown in the appropriate HTML elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // If the countdown reaches the end date, stop the countdown and show a message
    if (remainingTime < 0) {
        clearInterval(countdownTimer);
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        document.querySelector("#maintenance-banner-section p i").innerHTML = "The maintenance is complete!";
    }

}, 1000); // Updates every second

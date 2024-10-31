let count = 0; // Initialize counter
let timer;     // Variable to store the timer reference

// Function to update the timer display
function updateTimer() {
    count++; // Increment count
    document.getElementById("count").innerHTML = count; // Update the displayed count
}

// Start button event listener
document.getElementById("start").addEventListener("click", function() {
    // Only start a new timer if one isn't already running
    if (!timer) {
        timer = setInterval(updateTimer, 1000); // Update every second
        document.getElementById("start").style.display = "none"; // Hide the START button
        document.getElementById("stop").style.display = "block";
        document.getElementById("reset").style.display="none";  // Show the STOP button
    }
});
document.getElementById("reset").addEventListener("click",function(){
    clearInterval(timer); 
    timer=null;
    count=0;
    document.getElementById("count").innerHTML = count;
    document.getElementById("reset").style.display="none"; 
    document.getElementById("start").style.display="block"; 
    document.getElementById("stop").style.display="none"; 
})
// Stop button event listener
document.getElementById("stop").addEventListener("click", function() {
    clearInterval(timer); // Stop the timer
    timer = null;         // Reset the timer reference
    document.getElementById("stop").style.display = "none"; // Hide the STOP button
    document.getElementById("start").style.display = "block";
    document.getElementById("reset").style.display="block"; // Show the START button again
});

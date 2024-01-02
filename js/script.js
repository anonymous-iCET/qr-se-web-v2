document.addEventListener("DOMContentLoaded", function () {
    // Show loading screen
    document.getElementById("loading-screen").classList.add("loading-visible");

    // Simulate loading time (you can replace this with actual loading logic)
    setTimeout(function () {
        // Hide loading screen
        document.getElementById("loading-screen").classList.remove("loading-visible");
    }, 5000); // 5 seconds in milliseconds
});
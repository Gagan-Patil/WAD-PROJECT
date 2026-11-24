
/* =========================================
   BoundaryPass - JavaScript Interactions
   Activity 5: Toast + Smooth Scrolling
========================================= */

// 1. Create reusable Toast Notification function
function showToast(message) {
    let toast = document.getElementById("boundaryToast");

    // Create the toast if it doesn't exist
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "boundaryToast";

        // Toast styling
        toast.style.position = "fixed";
        toast.style.bottom = "25px";
        toast.style.right = "25px";
        toast.style.backgroundColor = "#142544";
        toast.style.color = "#ffffff";
        toast.style.padding = "14px 22px";
        toast.style.borderRadius = "8px";
        toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
        toast.style.zIndex = "9999";
        toast.style.fontSize = "14px";
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.3s ease";

        document.body.appendChild(toast);
    }

    // Display message
    toast.textContent = message;
    toast.style.opacity = "1";

    // Hide after 3 seconds
    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(function () {
        toast.style.opacity = "0";
    }, 3000);
}


// 2. Smooth scrolling + Book button interaction
document.addEventListener("DOMContentLoaded", function () {

    // Select links pointing to the booking section
    const bookLinks = document.querySelectorAll('a[href="#booking"]');

    bookLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const bookingSection = document.getElementById("booking");

            if (bookingSection) {
                event.preventDefault();

                // Scroll smoothly to booking form
                bookingSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Show confirmation toast
                showToast("Great! Let's get your IPL tickets booked.");
            }
        });
    });

});

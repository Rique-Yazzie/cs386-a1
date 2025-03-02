// Wait until the document is fully loaded
$(document).ready(function() {
    // Listen for the "Enter" keypress in the search box
    $("#search-input").on("keydown", function(event) {
        if (event.key === "Enter") {
            // Prevent form submission
            event.preventDefault();
            searchFunction(); // Call search function on "Enter"
        }
    });
});

function searchFunction() {
    var search = document.getElementById("search-input").value.trim(); // Get the value and remove extra spaces

    if (search.toLowerCase() === "character index" || search.toLowerCase() === "heroes") {
        window.location.href = "./characterIndex.html"; // Redirect to character index
    }
    else if (search.toLowerCase() === "tier list") {
        window.location.href = "./tierList.html"; // Redirect to tier list
    }
    else if (search.toLowerCase() === "team comps") {
        window.location.href = "./teamComps.html"; // Redirect to team comps
    }
    else {
        console.log("No matching page found for:", search); // If no match, log it
    }
}
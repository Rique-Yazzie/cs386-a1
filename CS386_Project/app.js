// dictionary of ALL heroes
const heroes = {
    "luna-snow": {
        name: "Luna Snow",
        image: "./luna_snow.png",
        description: "Equal parts pop star and Super Hero, Luna Snow puts on a dazzling show with both her light and dark ice powers. The arena is her stage, where Seol Hee and her team orchestrate spectacular displays that earn her an ever-increasing number of fans and wins."
    },
    "invisible-woman": {
        name: "Invisible Woman",
        image: "./invisible_woman.png",
        description: "The Invisible Woman is able to slip in and out of sight without a trace. No matter how intense the battle may be, Susan Richards always keeps her cool, conjuring up impenetrable force fields to protect herself and her team."
    },
    "jeff": {
        name: "Jeff",
        image: "./jeff.png",
        description: "Most landsharks are vicious creatures of the deep... but not Jeff! This adorable and mischievous little landshark brings splashes of joy and healing to every battle. But if the tide turns, Jeff can morph into a voracious beast, swallowing an army of foes in one giant gulp!"
    },
    "cloak-and-dagger": {
        name: "Cloak and Dagger",
        image: "./cloak&dagger.png",
        description: "Tyrone Johnson and Tandy Bowen are nearly inseparable, like two sides of the same coin. Intertwined by forces of shadow and light, Cloak & Dagger fight as a united front, dealing havoc and healing allies across the arena."
    },
    "mantis": {
        name: "Mantis",
        image: "./mantis.png",
        description: "Mantis uses her impressive mental abilities and her penchant for plant control to anchor any team she fights alongside. Her powers tap into a limitless flow of life energy, gently nourishing everything she touches."
    },
}



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
    // Get the value and remove extra spaces
    var search = document.getElementById("search-input").value.trim(); 

    if (search.toLowerCase() === "character index" || search.toLowerCase() === "heroes") {
        // Redirect to character index
        window.location.href = "./characterIndex.html"; 
    }
    else if (search.toLowerCase() === "tier list") {
        // Redirect to tier list
        window.location.href = "./tierList.html"; 
    }
    else if (search.toLowerCase() === "team comps") {
        // Redirect to team comps
        window.location.href = "./teamComps.html";
    }
    else if (search.toLowerCase() === "home") {
        // Redirect to team comps
        window.location.href = "./mainPage.html";
    }
    else {
        // If no match, log it
        console.log("No matching page found for:", search); 
    }
}

// displays every hero in the dictionary
window.onload = function() {
    // get into heroes-container
    const container = document.getElementById("heroes-container");

    // for every hero in the dictionary
    for (const heroId in heroes) {
        if (heroes.hasOwnProperty(heroId)) {
            const hero = heroes[heroId];

            // add an image element for the hero
            const heroImage = document.createElement("img");
            heroImage.src = hero.image;
            heroImage.alt = hero.name;
            heroImage.id = heroId;
            // add class to the image
            heroImage.classList.add("hero-image");
            // add one click function to the tag
            heroImage.onclick = function() { openImagePopup(heroId); };

            container.appendChild(heroImage);
        }
    }
};

// Function to display the popup and display hero info
function openImagePopup(heroId) {
    const hero = heroes[heroId];
    if (!hero) {
        alert("Hero not found!");
        return;
    }

    // Set the content inside the popup
    document.getElementById("hero-name").textContent = hero.name;
    document.getElementById("hero-image").src = hero.image;
    document.getElementById("hero-description").textContent = hero.description;

    // Show the popup
    document.getElementById("hero-popup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
    document.getElementById("hero-popup").style.display = "none";
}

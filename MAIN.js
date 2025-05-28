function searchContent() {
    var srch = document.getElementById("searchInput").value.toLowerCase();

    if(srch == "what are sharks?") {
        alert("Great! Sharks are fascinating creatures. Would you like to learn more about them?");
        window.location.assign("SUBMENU-1.html");
    }
    
    else if(srch == "Are there many types of sharks?") {
        alert("Great! Sharks are fascinating creatures. Would you like to learn more about them?");
        window.location.assign("SUBMENU-2.html");
    }

    else if(srch == "How long have sharks been around?") {
        alert("Sharks have been around for over 400 million years. Would you like to learn more about them?");
        window.location.assign("SUBMENU-3.html");
    }

    else {
        alert("Sorry, we couldn't find any information on that topic.");
    }
}




function toggleMenu() {
    const menu = document.querySelector('#nav-menu');
    const headerGrid = document.querySelector('.Header-Grid');

    // Toggle menu visibility
    menu.classList.toggle('hide');

    // Define how much the margin should change
    const customMargin = 300; // Change this value to whatever you want

    if (!menu.classList.contains('hide')) {
        headerGrid.style.marginTop = `${customMargin}px`; // Move elements down
    } else {
        headerGrid.style.marginTop = '0px'; // Reset positioning
    }
}


// Function to maintain active class based on current page
function setActivePage() {
    const currentPage = window.location.pathname.split("/").pop(); // Get current file name
    
    document.querySelectorAll("#nav-menu li a").forEach(link => {
        // Remove active class from all items
        link.parentElement.classList.remove("active");
        
        // If the link matches the current page, add the active class
        if (link.getAttribute("href") === currentPage) {
            link.parentElement.classList.add("active");
        }
    });
}

// Call function when page loads to set the correct active link
document.addEventListener("DOMContentLoaded", setActivePage);





var myText = document.getElementById("changetext");
var myBtn = document.getElementById("btn1");

function myFunction() {
    myText.innerHTML = "Hello World!";
    myBtn.style.fontWeight = "bold"; // changes the font style to bold
    myBtn.style.borderRadius = "50%"; // changes the border radius to 50%
    myBtn.classList.toggle("active"); // allows red class to be added and removes by using toggle
}

// //use the above instead of the below to get the element by id
// function myFunction(){
//     document.getElementById("changetext").innerHTML = "Hello World!";
// }





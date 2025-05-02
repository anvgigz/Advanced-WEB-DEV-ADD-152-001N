//email function
function sendEmail() {
    window.location.href = "mailto:Stephen.c.krohn@gmail.com?subject=Hello&body=Hello%20Stephen%20I%20saw%20your%20website%20and%20I%20wanted%20to%20reach%20out$20to%20you!";
}



//hamburger menu

function toggleMenu() {
    const menu = document.querySelector('#nav-menu');
    const headerGrid = document.querySelector('.Header-Grid');
    const headerPageInfo = document.querySelector('.Header-Grid__PageInfo');
    const hamburger = document.querySelector('.hamburger-menu');
    const headerName = document.querySelector('.Header-Grid__Name'); // Select Header-Grid__Name

    // Toggle menu visibility
    menu.classList.toggle('hide');

    // Define movement amounts
    const moveDownMargin = 300; 
    const moveUpAmount = -500;
    const hamburgerMovewUpAmount = -185;

    if (!menu.classList.contains('hide')) {
        headerGrid.style.marginTop = `${moveDownMargin}px`; 
        if (headerPageInfo) {
            headerPageInfo.style.transform = `translateY(${moveUpAmount}px)`;
            headerPageInfo.style.transition = 'transform 1.0s ease-in-out'; 
        }
        if (hamburger) {
            hamburger.style.transform = `translateY(${hamburgerMovewUpAmount}px)`;
            hamburger.style.transition = 'transform 1.0s ease-in-out'; 
        }
        if (headerName) {
            headerName.style.color = '#FFD700'; // Change color when moving down
        }
    } else {
        headerGrid.style.marginTop = '0px';
        if (headerPageInfo) {
            headerPageInfo.style.transform = 'translateY(0px)'; 
        }
        if (hamburger) {
            hamburger.style.transform = 'translateY(0px)'; 
        }
        if (headerName) {
            headerName.style.color = ''; // Reset to default color
        }
    }
}


function setActivePage() {
    const currentPage = window.location.pathname.split("/").pop(); // Get current file name
    const mediaQuery = window.matchMedia("(max-width: 599px)"); // Media condition
    const header = document.querySelector(".Header-Grid__PageInfo");

    // Only add/remove the `active` class for the header based on media query
    if (header) {
        if (mediaQuery.matches) {
            header.classList.add("active"); // Add class when width is below 598px
        } else {
            header.classList.remove("active"); // Remove class otherwise
        }
    }

    // If width is above 598px, apply active class to navigation links based on current page
    if (!mediaQuery.matches) {
        document.querySelectorAll("#nav-menu li a").forEach(link => {
            link.parentElement.classList.remove("active"); // Remove active class from all items

            if (link.getAttribute("href") === currentPage) {
                link.parentElement.classList.add("active"); // Add class only if width is above 598px
            }
        });
    }
}

// Call function when page loads
document.addEventListener("DOMContentLoaded", setActivePage);

// Listen for screen size changes
window.addEventListener("resize", setActivePage);
function toggleMenu() {
    const menu = document.querySelector('#nav-menu');
    const headerGrid = document.querySelector('.Header-Grid');
    var myBtn = document.getElementById("btn1");

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

function myFunction(event) {
    // Remove active class from all menu items first
    document.querySelectorAll(".btn1").forEach(item => {
        item.classList.remove("active");
    });

    // Add active class to the clicked menu item
    event.currentTarget.classList.add("active");
}
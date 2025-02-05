function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const barIcon = document.getElementById('bar');
    
    navLinks.classList.toggle("toggle-menu");
    
    // Check if navLinks contains active class
    if (navLinks.classList.contains("toggle-menu")) {
        barIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        barIcon.classList.replace("fa-xmark", "fa-bars");
    }
}
  
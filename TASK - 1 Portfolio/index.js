document.querySelector('#dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('darkmode', isDarkMode);
    // chang mobile status bar color
    document.querySelector('meta[name="theme-color"').setAttribute('content', isDarkMode ? '#1a1a2e' : '#fff');
});

document.getElementById('hamburger').addEventListener('click', function (event) {
    event.stopPropagation();
    document.getElementById('nav-item').classList.toggle('active');
});

document.querySelector('#wrapper').addEventListener('click', () => {
    const navItem = document.getElementById('nav-item');
    if (navItem.classList.contains('active')) {
        navItem.classList.remove('active');
    }
}); 

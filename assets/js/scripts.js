// Toggle Command Menu
const dialTrigger = document.getElementById('dialTrigger');
const dialMenu = document.getElementById('dialMenu');

dialTrigger.addEventListener('click', () => {
    dialMenu.classList.toggle('active');
});

// Smooth Theme Switcher
function setTheme(themeName) {
    document.body.className = ''; // Reset
    if (themeName !== 'dark') {
        document.body.classList.add(`theme-${themeName}`);
    }
    dialMenu.classList.remove('active');
    
    // Add a small Focal Zoom effect on change
    document.getElementById('main-content').style.transform = 'scale(0.98)';
    document.getElementById('main-content').style.filter = 'blur(5px)';
    
    setTimeout(() => {
        document.getElementById('main-content').style.transform = 'scale(1)';
        document.getElementById('main-content').style.filter = 'blur(0px)';
    }, 300);
}

// Coordinate Cycling logic
const coordLines = document.querySelectorAll('.coord-line');
let currentCoord = 0;

setInterval(() => {
    coordLines.forEach(l => l.style.display = 'none');
    currentCoord = (currentCoord + 1) % coordLines.length;
    coordLines[currentCoord].style.display = 'block';
}, 3000);

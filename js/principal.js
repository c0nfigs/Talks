// Script to handle sidebar toggle and dark/light mode
const sidebar = document.querySelector('.sidebar');
const toggleDarkLight = document.getElementById('toggleDarkLight');
const body = document.body;
const logoImg = document.querySelector('.sidebar .logo img');

// Handle sidebar hover to expand and collapse
sidebar.addEventListener('mouseenter', () => {
    sidebar.classList.remove('close');
    logoImg.style.display = 'block';
});

sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.add('close');
    logoImg.style.display = 'none';
});

// Toggle dark/light mode
toggleDarkLight.addEventListener('click', () => {
    body.classList.toggle('dark');
    updateMode();
});

// Update mode text and icon
function updateMode() {
    if (body.classList.contains('dark')) {
        toggleDarkLight.innerHTML = '<i class="bx bx-sun"></i> Light Mode';
    } else {
        toggleDarkLight.innerHTML = '<i class="bx bx-moon"></i> Dark Mode';
    }
}

// Initialize mode on page load
updateMode();

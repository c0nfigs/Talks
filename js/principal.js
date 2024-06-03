// Script to handle sidebar toggle and dark/light mode
const sidebar = document.querySelector('.sidebar');
const toggleDarkLight = document.getElementById('toggleDarkLight');
const body = document.body;
const logoImg = document.querySelector('.sidebar .logo img');
const isUserLoggedIn = document.getElementById('usuariologado')

// Handle sidebar hover to expand and collapse
sidebar.addEventListener('mouseenter', () => {
    sidebar.classList.remove('close');
    logoImg.style.display = 'block';
});

sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.add('close');
    logoImg.style.display = 'none';
});

toggleDarkLight.addEventListener('click', () => {
    body.classList.toggle('dark');
    updateMode();
});

function updateMode() {
    if (body.classList.contains('dark')) {
        toggleDarkLight.innerHTML = '<i class="bx bx-sun"></i><span>Light Mode</span>';
    } else {
        toggleDarkLight.innerHTML = '<i class="bx bx-moon"></i><span>Dark Mode</span>';
    }
}

function isAutenticated() {
    if (!localStorage.getItem('user')) {
        window.location.href = "index.html"
    }
}

function init() {
    nextID = findNextId()
    isUserLoggedIn.innerHTML = `Bem vindo, ${localStorage.getItem('user')}`
}

init()
updateMode();


/*/ Path: js/principal.js */
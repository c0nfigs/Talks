document.addEventListener('DOMContentLoaded', function () {
    const sidebarItems = document.querySelectorAll('.side-menu li');
    const sections = document.querySelectorAll('.section');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function () {
            
            sidebarItems.forEach(i => i.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            
            this.classList.add('active');

           
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    
    const sidebar = document.querySelector('.sidebar');
    const toggleDarkLight = document.getElementById('toggleDarkLight');
    const body = document.body;
    const isUserLoggedIn = document.getElementById('usuarioLogado');
    const logoutButton = document.querySelector('.bx-log-out-circle');

    sidebar.addEventListener('mouseenter', () => {
        sidebar.classList.remove('close');
    });

    sidebar.addEventListener('mouseleave', () => {
        sidebar.classList.add('close');
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

    function isAuthenticated() {
        if (!localStorage.getItem('user')) {
            window.location.href = "../index.html"; 
        }
    }

    function init() {
        isAuthenticated();
        isUserLoggedIn.innerHTML = `Olá, ${localStorage.getItem('user')}`;
    }

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.href = "../index.html"; 
    });

    init();
    updateMode();
});

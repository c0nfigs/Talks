const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const btnSignup = document.querySelector('#btnSignup');
const fieldNewUser = document.querySelector('#newUser');
const fieldNewPassword = document.querySelector('#newPassword');
const formSignup = document.querySelector("#form-signup");
const btnLogin = document.querySelector('#btnLogin');
const fieldUser = document.querySelector('#user');
const fieldPassword = document.querySelector('#password');
const formLogin = document.querySelector("#form-login");
const logoutBtn = document.getElementById('logoutBtn');
const userList = document.getElementById('userList');
const mobileSigninBtn = document.getElementById('mobile-signin');
const mobileSignupBtn = document.getElementById('mobile-signup');

//SignUp
function storeUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
}

function resetFormSignup() {
    formSignup.reset();
}

async function signup() {
    const username = fieldNewUser.value;
    const password = fieldNewPassword.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('Usuário já existe. Escolha outro nome de usuário.');
    } else {
        storeUser(username, password);
        alert('Inscrição bem-sucedida. Você pode fazer login agora.');
        resetFormSignup();
    }
}

btnSignup.addEventListener('click', (e) => {
    e.preventDefault();
    signup();
});

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

//SignIn
function userIsAuthenticated() {
    const username = fieldUser.value;
    const password = fieldPassword.value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.username === username && user.password === password);
}

function resetFormLogin() {
    formLogin.reset();
}

function logout() {
    userList.style.display = 'none';
    container.style.display = 'block';
}

async function login() {
    const username = fieldUser.value;
    const password = fieldPassword.value;

    if (username === 'adminCotta' && password === 'apenasumteste') {
        resetFormLogin();
        alert("Login bem sucedido como admin");
        showUserList();
    } else if (userIsAuthenticated()) {
        localStorage.setItem('user', username);
        resetFormLogin();
        alert("Login bem sucedido");
    } else {
        localStorage.removeItem('user');
        resetFormLogin();
        alert('Usuário/Senha inválidos.');
    }
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    login();
});

logoutBtn.addEventListener('click', logout);

function showUserList() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userListElement = document.getElementById('registeredUsers');
    userListElement.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.username;
        userListElement.appendChild(li);
    });
    userList.style.display = 'block';
    container.style.display = 'none';
}

mobileSigninBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

mobileSignupBtn.addEventListener('click', () => {
    container.classList.add('active');
});

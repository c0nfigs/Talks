const userList = document.getElementById('userList');
const registeredUsers = document.getElementById('registeredUsers');
const deleteUsersBtn = document.getElementById('deleteUsers');
const logoutBtn = document.getElementById('logoutBtn');

function loadRegisteredUsers() {
    registeredUsers.innerHTML = '';
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Usuário: ${user.username}, Senha: ${user.password}`;
        registeredUsers.appendChild(li);
    });
}

function deleteAllUsers() {
    localStorage.removeItem('users');
    loadRegisteredUsers();
}

function showUserList() {
    userList.style.display = 'block';
    document.getElementById('container').style.display = 'none';
    loadRegisteredUsers();
}

function logout() {
    userList.style.display = 'none';
    document.getElementById('container').style.display = 'block';
}

deleteUsersBtn.addEventListener('click', deleteAllUsers);
logoutBtn.addEventListener('click', logout);

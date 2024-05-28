const userList = document.getElementById('userList');
const registeredUsers = document.getElementById('registeredUsers');
const deleteUsersBtn = document.getElementById('deleteUsers');

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

deleteUsersBtn.addEventListener('click', deleteAllUsers);

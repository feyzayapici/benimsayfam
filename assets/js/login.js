
const username = document.querySelector('.login-container #username')
const password = document.querySelector('.login-container #password')
const btnLogin = document.querySelector('.login-container button')


function login(e) {
    e.preventDefault();

    const userValue = username.value;
    const passValue = password.value;

    if(userValue === "feyza@x.com" && passValue === "123456") {
        localStorage.setItem('user', JSON.stringify({ username: userValue }))
        location.href = "index.html";
    }
}

btnLogin.addEventListener('click', login)





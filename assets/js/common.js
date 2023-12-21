const headerLogin = document.querySelector('.header-login')


function onInit() {
    let user = localStorage.getItem('user')

    if(user) {
        user = JSON.parse(user)
        headerLogin.innerHTML = `"${user.username}" hoşgeldiniz!`;
    }


}

onInit();





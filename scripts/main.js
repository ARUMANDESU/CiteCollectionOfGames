let regы = []; 

function reg() {
    let login = document.querySelector('#login').value;
    let password = document.querySelector('#password').value;
    let password1 = document.querySelector('#password1').value;
    // let email = document.querySelector('#email').value;

    if (password == password1) {
        // console.log(password1)
        // regs.push(login, password)
        // console.log(regs)
        document.location.href = "https://google.com";
    
    
    } else {
        alert('Ваши пароли не совпадают')
    }

    
    
}
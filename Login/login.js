const signinbtn = document.querySelector('.signin-link'); // login down
const signupbtn = document.querySelector('.signup-link'); // login up
const wrapper = document.querySelector('.wrapper');

signupbtn.addEventListener('click', () =>{
    wrapper.classList.toggle('active');
});

signinbtn.addEventListener('click', () =>{
    wrapper.classList.remove('active');
});
document.getElementById("login").addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var passwordfirst = document.getElementById('passwordfirst').value;
    var passwordafter = document.getElementById('passwordafter').value;
    var agree = document.getElementById('checkbox').checked;
    if (passwordafter === passwordfirst  && agree) {
        window.location.href = '../main/main.html';
    } else {
        alert('=)) Again =))');
    }
});
document.getElementById("signup").addEventListener('submit', function(event) {
    event.preventDefault();
    var username1 = document.getElementById('username1').value;
    var email = document.getElementById('email').value;
    var password1 = document.getElementById('password1').value;
    var agree = document.getElementById('checkbox1').checked;
        window.location.href = '../main/main.html';
        alert(username1 + ' đăng ký thất bại vì chưa có database');
})
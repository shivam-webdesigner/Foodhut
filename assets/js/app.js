function test() {
    alert("your item is added on the cart")
}
document.getElementById("search").innerHTML = dist - img.filter(testSearch);
function testSearch() {
    alert("search")

}



const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
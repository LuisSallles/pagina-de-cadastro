function check() {

var name = Number(window.document.getElementById('txtname').value)
var email = String(window.document.getElementById('txtemail').value)
var pass = Number(window.document.getElementById('txtpass').value)
var pass2 = Number(window.document.getElementById('txtpass2').value)
var res = window.document.getElementById('res')

if (name === 0 || email === 0 || pass == 0 || pass2 == 0) {
    res.innerHTML = `<p>Please, fill in the details above!</p>`
}
}

function checkData(n, e, p, p2) { // Here will check if the user fill the details
    const res = window.document.getElementById('res')
    if (n === 0 || e === 0 || p == 0 || p == 0) {
        res.innerHTML = `<p><strong>Please, fill in the details above!</strong></p>`
        res.style.color = 'red'
    } else {
        res.innerHTML = `<p><strong>Very Good! Come back tomorrow!!</strong></p>`
        res.style.color = 'green'
    }
}

function check() { // Function to check if the user fill in the data
    let name = Number(window.document.getElementById('txtname').value) 
    const email = String(window.document.getElementById('txtemail').value)
    const pass = Number(window.document.getElementById('txtpass').value)
    const pass2 = Number(window.document.getElementById('txtpass2').value)
    checkData(name, email, pass, pass2, res)
}

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

form.addEventListener('submit', (event) =>{
    
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    
    //Stop from submitting
    event.preventDefault()

    // Username Blank
    if(usernameValue === ""){
        setErrorFor(username, "Username cannot be blank")
    } else{
        setSuccessFor(username)
    }

    // Email Blank
    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank")
    } else{
        setSuccessFor(email)
    }

    // Password Blank
    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank")
    } else{
        setSuccessFor(password)
    }

    // Confirm Password Blank
    if(confirmPasswordValue === ""){
        setErrorFor(confirmPassword, "Confirm Password cannot be blank")
    } else{
        setSuccessFor(confirmPassword)
    }


})

function setErrorFor(field, message){
    const formField = field.parentElement
    const messageField = formField.querySelector('small')
    
    formField.className = "form-field error"
    messageField.innerText = message


}
function setSuccessFor(field){
    const formField = field.parentElement
    formField.className = "form-field success"
    
}
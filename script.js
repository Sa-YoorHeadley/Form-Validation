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
    
    
    // Username Blank
    if(usernameValue === ""){
        setErrorFor(username, "Username cannot be blank")
    } else{
        setSuccessFor(username)
    }

    // Email Blank
    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank")
    } else if(!isEmail(emailValue)){  // Invalid Email
        setErrorFor(email, "Email invalid")
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
    } else if(confirmPasswordValue !== passwordValue){ // Passwords Do Not Match
        setErrorFor(confirmPassword, "Passwords do not match")
    }else{
        setSuccessFor(confirmPassword)
    }

    event.preventDefault()
})

//Set Error Class
function setErrorFor(field, message){
    const formField = field.parentElement
    const messageField = formField.querySelector('small')
    
    formField.className = "form-field error"
    messageField.innerText = message
}

//Set Success Class
function setSuccessFor(field){
    const formField = field.parentElement
    formField.className = "form-field success"
}

//Check if email is valid
function isEmail(email){
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return emailRegex.test(email)
}

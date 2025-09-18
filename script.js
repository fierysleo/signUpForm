const first_name = document.querySelector("#firstName")
const last_name = document.querySelector("#lastName")
const email = document.querySelector("#user_email")
const number = document.querySelector("#number")
const password = document.querySelector("#password")
const confirm_password = document.querySelector("#confirmPassword")


const submitButton = document.getElementById("signUpButton");

submitButton.addEventListener('click', (event) => {
   console.log(first_name.value)
   console.log(last_name.value)
   console.log(email.value)
   console.log(number.value)
   console.log(password.value)
   console.log(confirm_password.value)
})
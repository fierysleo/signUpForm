const first_name = document.querySelector("#firstname")
const last_name = document.querySelector("#lastname")
const email = document.querySelector("#user_email")
const phone_number = document.querySelector("#number")
const password = document.querySelector("#password")
const confirm_password = document.querySelector("#confirmPassword")
const sign_up_button = document.querySelector("#signUpButton")

signUpButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    console.log(first_name.value);
    console.log(last_name.value);
    console.log(email.value);
    console.log(phone_number.value);
    })
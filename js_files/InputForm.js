/** Name Validation. */
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = /^[A-Z][A-Z a-z]{3,}$/;
    if(nameRegex.test(text.value)){
        textError.textContent = " ";
    }
    else{
        textError.textContent = "Name is invalid.";
    }
});

/** Email Validation. */
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = /^[\w+-]+(\.[\w+-]+)*@[\w]+(\.[\w]+)?(?=(\.[A-Za-z_]{2,3}$|\.[a-zA-Z]{2,3}$)).*$/;
    if(emailRegex.test(email.value)){
        emailError.textContent = " ";
    }
    else{
        emailError.textContent = "Email is invalid";
    }
});

/** Phone Number validation. */
const phoneNum = document.querySelector('#PhoneNum');
const phoneNumError = document.querySelector('.ph-error');
phoneNum.addEventListener('input',function(){
    let phoneNumRegex = /^[\d]{2}(\s){1}[\d]{10}$/;
    if(phoneNumRegex.test(phoneNum)){
        phoneNumError.textContent = " ";
    }
    else{
        phoneNumError.textContent = "Phone Number is invalid."
    }
});

/** Salary Output fixed. */
const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.addEventListener('input',function(){
    salaryOutput.textContent = salary.value;
});

/** Password Validation UC-4(RULE-1):- minimum 8 characters. */
const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input',function(){
    let passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if(passwordRegex.test(password.value)){
        passwordError.textContent = " ";
    }
    else{
        passwordError.textContent = "Password is invalid.";
    }
});
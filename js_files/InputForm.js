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

/** Salary Output. */
const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.addEventListener('input',function(){
    salaryOutput.textContent = salary.value;
});
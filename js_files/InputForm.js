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

/** Salary Output. */
const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.addEventListener('input',function(){
    salaryOutput.textContent = salary.value;
});
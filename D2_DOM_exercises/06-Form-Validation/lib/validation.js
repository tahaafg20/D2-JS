// // TODO: Validate this form
// (function() {
// 'use strict';
// window.addEventListener('load', function() {
// // Fetch all the forms we want to apply custom Bootstrap validation styles to
// var forms = document.getElementsByClassName('needs-validation');
// // Loop over them and prevent submission
// var validation = Array.prototype.filter.call(forms, function(form) {
// form.addEventListener('submit', function(event) {
// if (form.checkValidity() === false) {
// event.preventDefault();
// event.stopPropagation();
// }
// form.classList.add('was-validated');
// }, false);
// });
// }, false);
// })();
var form = document.querySelector(".needs-validation");
var firstNameInput = document.querySelector("#first_name");
var lastNameInput = document.querySelector("#last_name");
var addressInput = document.querySelector("#address");
var countryInput = document.querySelector("#country");
var zipCodeInput = document.querySelector("#zip_code");
var cityInput = document.querySelector("#city");
var emailInput = document.querySelector("#email");
var phoneInput = document.querySelector("#mobile_phone");
var checkboxInput = document.querySelector("#tos");
// firstNameInput.required = true;
// lastNameInput.required = true;
// addressInput.required = true;
// countryInput.required = true;
// zipCodeInput.required = true;
// cityInput.required = true;
// emailInput.required = true;
// phoneInput.required = true;
// checkboxInput.checked = true;
// if (firstNameInput.required != true || lastNameInput.required != true || addressInput.required != true || countryInput.required != true || zipCodeInput.required != true || cityInput.required != true || emailInput.required != true || phoneInput.required != true){
//     return false;
// }
// firstNameInput.addEventListener("blur", validation);
firstNameInput.addEventListener("keyup", validation);
lastNameInput.addEventListener("keyup", validation);
addressInput.addEventListener("keyup", validation);
countryInput.addEventListener("keyup", validation);
zipCodeInput.addEventListener("keyup", validation);
cityInput.addEventListener("keyup", validation);
emailInput.addEventListener("keyup", validation);
phoneInput.addEventListener("keyup", validation);
checkboxInput.addEventListener("keyup", validation);
// form.addEventListener("blur", validation);

function validateFirstName(){
    if (firstNameInput.value === ""){
        // alert("This filed should be filled.");
        return false;
    }
}
function validateLastName(){
    if (lastNameInput.value === ""){
        // alert("This filed should be filled.");
        return false;
    }
}
function validateAddress(){
    if (addressInput.value === ""){
        // alert("This filed should be filled.");
        return false;
    }
}
function validateCountry(){
    if (countryInput.value === ""){
        // alert("This filed should be filled.");
        return false;
    }
}
function validateCity(){
    if (cityInput.value === ""){
        // alert("This filed should be filled.");
        return false;
    }
}
function validateEmail(){
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value) != true){
        // alert("The email is not valid");
        return false;
    }
}
function validateZipCode(){
    if (/^(?:(?:(?:0[1-9]|[1-8]\d|9[0-4])(?:\d{3})?)|97[1-8]|98[4-9]|‌​‌​2[abAB])$/.test(`${zipCodeInput.value}`) === false){
        // alert("zip code does not belong to France");
        return false
    }
}
function validatePhone(){
    if (/^((\+)33|0)[1-9](\d{2}){4}$/.test(phoneInput.value) != true){
        // alert("This is not a vild french mobile number");
        return false;
    }
}
function validateCheckBox(){
    if (checkboxInput.checked != true){
        // alert("To be able to submit the form you need to tick the checkbox");
        return false;
    }
}

function validation(){
    var button = document.querySelector(".btn-primary");
    if(validateFirstName() != false && validateLastName() != false && validateAddress() != false &&validateCountry() != false && validateCity() != false && validateEmail() != false && validateZipCode() != false && validatePhone() != false && validateCheckBox() != false ){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}
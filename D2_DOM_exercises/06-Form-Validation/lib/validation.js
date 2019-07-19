// TODO: Validate this form
(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

function validation(){
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
    if (checkboxInput.checked != true){
        return false;
    }
    if (firstNameInput.value === "" || lastNameInput.value === "" || addressInput.value === "" || countryInput.value === "" || cityInput.value === ""){
        return false;
    }
    if (/^(?:(?:(?:0[1-9]|[1-8]\d|9[0-4])(?:\d{3})?)|97[1-8]|98[4-9]|‌​‌​2[abAB])$/.test(`${zipCodeInput.value}`) === false){
        return false
    }
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value) != true){
        return false;
    }
    if (/^((\+)33|0)[1-9](\d{2}){4}$/.test(phoneInput.value) != true){
        return false;
    }
    return true;
}

if (validation()){
  var button = document.querySelector(".btn-primary");
  button.disabled = false;
}

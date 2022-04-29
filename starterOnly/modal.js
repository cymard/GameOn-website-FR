function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".close");
let checkedCity = '';

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal event
modalBtnClose.addEventListener("click", closeModal);

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// control modalFirstName value
function isFirstNameValid(firstName) {
    const regex = /^[a-zA-Z\-]{2,}$/;
    if(regex.test(firstName.value) === false){
        console.log('error first name');
        return false
    }

    return true;
}

// control modalLastName value
function isLastNameValid(lastName) {
    const regex = /[a-zA-Z\- ]{2,}/;
    if(regex.test(lastName.value) === false) {
        console.log('error last name');
        return false;
    }

    return true;
}

// control modalEmail value
function isEmailValid(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(email.value) === false) {
        console.log('error email');
        return false;
    }

    return true;
}

// control modalBirthDate value
function isBirthDateValid(birthDate) {
    const regex = /[0-9]{4}(\-[0-9]{2}){2}/;
    if (regex.test(birthDate.value) === false) {
        console.log('error birthdate');
        console.log(birthDate.value);
        return false;
    }
    return true;
}

// control modalParticipatedTournamentQuantity value
function isParticipatedTournamentQuantity(number) {
    const regex = /[0-9]+/;
    if(regex.test(number.value) === false){
        console.log('error participated tournament quantity')
        return false;
    }
    return true;
}

// verify if one radio location is cheked
function isOneRadioLocationChecked(arrayOfRadioLocation) {
    for (let i = 0; i < arrayOfRadioLocation.length; i++) {
        if (arrayOfRadioLocation[i].checked === true) {
            checkedCity = arrayOfRadioLocation[i]
            return true;
        }
    }
    console.log('isOneRadioLocationChecked');
    return false;
}

// control termsOfUse value
function isTermsOfUseChecked(termsOfUseInput) {
    if (!termsOfUseInput.checked) {
        console.log('isTermsOfUseChecked');
        return false;
    }

    return true;
}

// send modal form informations after validation
function validate() {
    const modalFirstName = document.getElementById("first");
    const modalLastName = document.getElementById("last");
    const modalEmail = document.getElementById("email");
    const modalBirthDate = document.getElementById("birthdate");
    const modalParticipatedTournamentQuantity = document.getElementById("quantity");
    const allRadioLocation = document.getElementsByName('location');
    const termsOfUse = document.getElementById("checkbox1");

    let errors = 0;

    if (!isFirstNameValid(modalFirstName)) {
        errors++;
    }

    if (!isLastNameValid(modalLastName)) {
        errors++;
    }

    if (!isEmailValid(modalEmail)) {
        errors++;
    }

    if (!isBirthDateValid(modalBirthDate)) {
        errors++;
    }

    if (!isParticipatedTournamentQuantity(modalParticipatedTournamentQuantity)) {
        errors++;
    }

    if (!isOneRadioLocationChecked(allRadioLocation)) {
        errors++;
    }

    if (!isTermsOfUseChecked(termsOfUse)) {
        errors++;
    }

    if (errors === 0) {
        console.log({
            'FirstName': modalFirstName.value,
            'LastName': modalLastName.value,
            'Email': modalEmail.value,
            'BirthDay': modalBirthDate.value,
            'ParticipatedTournamentQuantity': modalParticipatedTournamentQuantity.valueAsNumber,
            'WhichCity': checkedCity.value,
            'TermsOfUse': termsOfUse.checked,
            'NotifiedOfUpcomingEvents': document.getElementById("checkbox2").checked
        })
        // return true;
        return false;
    }

    return false;
}



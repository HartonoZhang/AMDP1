function printError(elementId, messageError) {
  document.getElementById(elementId).innerHTML = messageError;
}
function registerForm() {
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var city = document.contactForm.city.value;
  var gender = document.contactForm.gender.value;
  var address = document.contactForm.address.value;
  var nameErr = (emailErr = cityErr = genderErr = addressErr = true);

  if (name == "" || name == null || name == undefined) {
    printError("nameError", "Please enter your name");
  } else {
    var symbolError = /^[a-zA-Z0-9\s\,\''\-]*$/;
    if (symbolError.test(name) === false) {
      printError("nameError", "Please enter a valid name");
    } else {
      printError("nameError", "");
      nameErr = false;
    }
  }
  if (email == "" || email == null || email == undefined) {
    printError("emailError", "Please enter your email address");
  } else {
    var symbolError = /^\S+@\S+\.\S+$/;
    if (symbolError.test(email) === false) {
      printError("emailError", "Please enter a valid email address");
    } else {
      printError("emailError", "");
      emailErr = false;
    }
  }
  if (city == "Select") {
    printError("cityError", "Please select your country");
  } else {
    printError("cityError", "");
    cityErr = false;
  }
  if (gender == "") {
    printError("genderError", "Please select your gender");
  } else {
    printError("genderError", "");
    genderErr = false;
  }
  if (address == "" || address == null || address == undefined) {
    printError("addressError", "Please enter your address");
  } else {
    if (address.indexOf("Street") == -1) {
      printError("addressError", "Address must be containes 'Street'");
    } else {
      printError("addressError", "");
      addressErr = false;
    }
  }
  if ((nameErr || emailErr || cityErr || genderErr || addressErr) == true) {
    return false;
  } else {
    alert("Registered Successfully");
    location.reload();
  }
}

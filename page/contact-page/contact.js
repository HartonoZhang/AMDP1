function sendMessage() {
  var symbolError = /^\S+@\S+\.\S+$/;
  var name = document.getElementById("name").value;
  var emailContact = document.getElementById("emailContact").value;
  var message = document.getElementById("message").value;
  if (name == null || name == "" || name == undefined) {
    alert("Please enter your name");
  } else if (
    emailContact == null ||
    emailContact == "" ||
    emailContact == undefined
  ) {
    alert("Email must be filled");
  } else if (symbolError.test(emailContact) == false) {
    alert("Invalid Email Format");
  } else if (message == null || message == "" || message == undefined) {
    alert("Write your message to sent");
  } else {
    alert("Sent Successfully");
    location.reload();
  }
}

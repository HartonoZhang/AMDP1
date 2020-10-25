function login() {
  var symbolError = /^\S+@\S+\.\S+$/;
  let email = document.getElementById("input-email").value;
  let password = document.getElementById("input-password").value;
  if (email == null || email == "" || email == undefined) {
    alert("Email must be filled");
  } else if (symbolError.test(email) == false) {
    alert("Invalid Email Format");
  } else if (password == null || password == "" || password == undefined) {
    alert("Password must be filled");
  } else {
    alert("Login Successfully!");
    location.reload();
  }
}

document.getElementById("span-page").onclick = function () {
  location.href = ".././register-page/register.html";
};

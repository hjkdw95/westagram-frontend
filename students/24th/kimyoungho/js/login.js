const id = document.getElementById("id");
const password = document.getElementById('password');
const loginButton = document.getElementById("loginButton");
const loginForm = document.getElementsByClassName("loginForm")[0];

loginForm.addEventListener("keyup", () => {
   if(id.value.length >= 1 && password.value.length >= 1) {
      loginButton.style.backgroundColor = "#0095F6";
      loginButton.disabled = true;
      loginButton.style.cursor= "pointer"
   } else {
         loginButton.style.backgroundColor = "#C5E1FC";
         loginButton.style.cursor= "default"
         }
});



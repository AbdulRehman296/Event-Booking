
// let loginemail = document.getElementById("email");
// let loginpassword = document.getElementById("password");

// function handleLogin(event){
//     event.preventDefault();



//    let getdatafromLS = JSON.parse(localStorage.getItem("sign-up-data"));
//        if (
//   loginemail.value === getdatafromLS.email &&
//   loginpassword.value === getdatafromLS.password
// ) {
//     alert("login successfully");
//     window.location.pathname = "../index.html";
// } else {
//     alert("invalid email or password");
// }

//    console.log(loginemail.value,loginpassword.value)
//    console.log(getdatafromLS,"getdatafromLS");
  
// }


// src/js/login.js

export function handleLogin(event) {
  event.preventDefault();

  // Get form data from the event target
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  // Get signup data from localStorage
  const getDataFromLS = JSON.parse(localStorage.getItem("sign-up-data"));

  if (getDataFromLS) {
    if (email === getDataFromLS.email && password === getDataFromLS.password) {
      alert("Login successful!");
      // In React Router, we will use navigate, not window.location.pathname
      window.location.pathname = "/home"; // fallback if not using React Router
    } else {
      alert("Invalid email or password");
    }
  } else {
    alert("No signup data found. Please sign up first.");
  }

  console.log("Email:", email, "Password:", password);
  console.log("LocalStorage data:", getDataFromLS);
}
// let form = document.getElementById("Sign-up-form");
// // console.log(form);
// let elements=form.elements;
// // console.log(elements)
// function handleSignUp(event){
//     event.preventDefault()
//     let formData = {}
//     for(let idx = 0;idx<elements.length;idx++){
//         // console.log(elements[idx].value)
//         let key = elements[idx].name
//         let value = elements[idx].value
//         if(key.length>0 && value.length>0)
//         formData[key]=value;
        
// }
//     console.log(formData);
//     let stringData = JSON.stringify(formData)
//     console.log(stringData)

//     localStorage.setItem("sign-up-data",stringData)
//     window.location.pathname="/loginform2.html"

//     }

// src/js/signup.js
export function handleSignUp(event) {
    event.preventDefault();
  const form = event.target;
  const elements = form.elements;
  console.log(form)
  let formData = {};

  for (let idx = 0; idx < elements.length; idx++) {
    const key = elements[idx].name;
    const value = elements[idx].value;
    if (key.length>0 && value.length>0) formData[key] = value;
  }
   console.log(formData);
    let stringData = JSON.stringify(formData)
    console.log(stringData)

    localStorage.setItem("sign-up-data",stringData)

  window.location.pathname = "/login"; // or use navigate in component
 }
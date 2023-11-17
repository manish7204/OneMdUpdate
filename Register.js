
function numvalidate() {
  let numm = document.getElementById("TelNum").value

  console.log(numm)

  if (numm.length < 10 || numm.length > 10) {
    let NumElement = document.getElementById("NumCheck");
    NumElement.style.display = "block";
    NumElement.innerText = "Enter a Valid Password ";


  } else {
    let NumElement = document.getElementById("NumCheck");
    NumElement.style.display = "none";
    NumElement.innerText = "Enter a Valid Password ";

  }



}

function showPassword() {

  var x = document.getElementById("Password")
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

}

function conformPassword() {

  var x = document.getElementById("ConformPassword")
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

}

function validateEmailAddress(emailAddress) {
  console.log("clikkkkkkkkkk");
  var atSymbol = emailAddress.indexOf("@");
  var dotSymbol = emailAddress.lastIndexOf(".");
  var spaceSymbol = emailAddress.indexOf(" ");

  if (
    atSymbol != -1 &&
    atSymbol != 0 &&
    dotSymbol != -1 &&
    dotSymbol != 0 &&
    dotSymbol > atSymbol + 1 &&
    emailAddress.length > dotSymbol + 1 &&
    spaceSymbol == -1
  ) {
    let emailElement = document.getElementById("EmailCheck");
    emailElement.style.display = "none";
    emailElement.innerText = "Enter a valid email address";
    return true;
  } else {
    let emailElement = document.getElementById("EmailCheck");
    emailElement.style.display = "block";
    emailElement.innerText = "Enter a valid email address";


    return false;
  }
}

function checkPassword() {
  let passwordInput = document.getElementById("Password").value;

  regex = /^(?=.*?[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex.exec(passwordInput) === null) {
    let passwordElement = document.getElementById("PasswordCheck");
    passwordElement.style.display = "block";
    passwordElement.innerText = "Enter a Valid Password ";


  } else {
    let emailElement = document.getElementById("PasswordCheck");
    emailElement.style.display = "none";
    emailElement.innerText = "Enter a Valid Password ";

  }
}

function passwordValidate() {
  let passwordInput = document.getElementById("Password").value;
  let passwordInput2 = document.getElementById("ConformPassword").value;

  if (passwordInput === passwordInput2) {
    let passwordMatchElement = document.getElementById("ConformPasswordCheck");
    passwordMatchElement.style.display = "none";
    passwordMatchElement.innerText = "Both Password Not Match ";

  } else {
    let passwordMatchElement = document.getElementById("ConformPasswordCheck");
    passwordMatchElement.style.display = "block";
    passwordMatchElement.innerText = "Both Password Not Match ";



    // let passwordMatchElement = document.getElementById("ConformPassword");
    // passwordMatchElement.value = ""; // Clear the input field
    // passwordMatchElement.placeholder = "Password Is Not match"; 
  }
}








function submitAndRedirect() {
  if (checkInputs()) {
    submitForm();
    RedirectToAnotherPagee();
  } else {
    alert('Please fill out all fields.');
  }
}

function checkInputs() {
  let inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      return false;
    }
  }
  return true;
}

function RedirectToAnotherPagee() {
  window.location.href = "Doctor.html"
}

function submitForm() {

  let mobileNumber = document.getElementById('TelNum').value;
  let email = document.getElementById('Email').value;
  let fullName = document.getElementById('FullName').value;
  let password = document.getElementById('Password').value;
  let confirmPassword = document.getElementById('ConformPassword').value;
  let dateOfGraduation = document.getElementById('DateOfGraduation').value;
  let degreeOne = document.getElementById('DegreeOne').value;
  let onlineFee = document.getElementById('OnlineFee').value;
  let inPersonFee = document.getElementById('InPersonfee').value;

  let degreeInputs = document.querySelectorAll('.degreeInput');
  let degrees = Array.from(degreeInputs).map(input => input.value);

  let user = {
    mobileNumber,
    email,
    fullName,
    password,
    confirmPassword,
    dateOfGraduation,
    degreeOne,
    degrees,
    onlineFee,
    inPersonFee
  };

  console.log(user, "????????????????????????????")
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => {
      console.log('User registered successfully:', data);
    })
    .catch(error => {
      console.error('Error registering user:', error);
    });
}







let i = 1;

function AddanotherDegree(event) {
  i++;
  event.preventDefault();
  let inputContainer = document.getElementById('AddDegreeInput');

  let brr = document.createElement('br')
  let brr2 = document.createElement('br')
  let newDiv = document.createElement('div');
  newDiv.classList.add('MoreInputtag');

  let label = document.createElement('label');
  label.textContent = `Degree ${i}`;

  let input = document.createElement('input');
  input.type = 'text';
  input.classList.add('degreeInput');

  let del = document.createElement('button')
  let img = document.createElement('img')
  img.setAttribute('src', 'assets/delete (2).png')
  img.classList.add("delimg")
  del.classList.add('degDel');

  del.onclick = function (event) {
    --i;
    event.preventDefault()
    newDiv.removeChild(label)
    newDiv.removeChild(input)
    newDiv.removeChild(del)
  }

  label.appendChild(brr)


  del.appendChild(img)

  newDiv.appendChild(label);
  newDiv.appendChild(input);
  newDiv.appendChild(del)

  inputContainer.appendChild(newDiv);
}

// const btnn=document.getElementsByClassName("del");






// function deletData(){
//   fetch('http://localhost:3000/users/33',{
//     method: 'DELETE'
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('All data deleted successfully:', data);
//     })
//     .catch(error => {
//       console.error('Error deleting data:', error);
//     });
// }


function ok() {
  console.log("c;lickkkkkkkkkkk")
}


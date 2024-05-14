let currentStage = 1;
const progressBar = document.getElementById('progressBar');

function nextStage() {
  if (currentStage < 5) {
    currentStage++;
    updateProgress();
  }
}

function prevStage() {
  if (currentStage > 1) {
    currentStage--;
    updateProgress();
  }
}

function updateProgress() {
  const percent = (currentStage - 1) * 25;
  progressBar.style.width = percent + '%';

  const stages = document.querySelectorAll('.stage');
  stages.forEach((stage, index) => {
    if (index + 1 === currentStage) {
      stage.classList.add('active');
    } else {
      stage.classList.remove('active');
    }
  });
}





function validateForm() {
  const firstName = document.getElementById('firstName').value;
  const middleName = document.getElementById('middleName').value;
  const lastName = document.getElementById('lastName').value;
  const gender = document.getElementById('gender').value;
  const nationality = document.getElementById('nationality').value;
  const homeAddress = document.getElementById('homeAddress').value;
  const dob = document.getElementById('dob').value;
  const passport = document.getElementById('passport').value;
  const religion = document.getElementById('religion').value;

  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');
  const genderError = document.getElementById('genderError');
  const nationalityError = document.getElementById('nationalityError');
  const homeAddressError = document.getElementById('homeAddressError');
  const dobError = document.getElementById('dobError');
  const passportError = document.getElementById('passportError');
  const religionError = document.getElementById('religionError');

  let isValid = true;

  // Validate first name
  if (firstName === '') {
    firstNameError.textContent = 'First name is required';
    isValid = false;
  } else {
    firstNameError.textContent = '';
  }

  // Validate last name
  if (lastName === '') {
    lastNameError.textContent = 'Last name is required';
    isValid = false;
  } else {
    lastNameError.textContent = '';
  }

  // Validate gender
  if (gender === '') {
    genderError.textContent = 'Gender is required';
    isValid = false;
  } else {
    genderError.textContent = '';
  }

  // Validate nationality
  if (nationality === '') {
    nationalityError.textContent = 'Nationality is required';
    isValid = false;
  } else {
    nationalityError.textContent = '';
  }

  // Validate home address
  if (homeAddress === '') {
    homeAddressError.textContent = 'Home address is required';
    isValid = false;
  } else {
    homeAddressError.textContent = '';
  }

  // Validate date of birth
  if (dob === '') {
    dobError.textContent = 'Date of birth is required';
    isValid = false;
  } else {
    dobError.textContent = '';
  }

  // Validate passport upload
  if (passport === '') {
    passportError.textContent = 'Passport upload is required';
    isValid = false;
  } else {
    passportError.textContent = '';
  }

  // Validate religion
  if (religion === '') {
    religionError.textContent = 'Religion is required';
    isValid = false;
  } else {
    religionError.textContent = '';
  }

  // If form is valid, submit it
  if (isValid) {
    // Here, you can submit the form using AJAX or regular form submission
    alert('Form submitted successfully!');
  }
}
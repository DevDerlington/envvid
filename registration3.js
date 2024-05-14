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

function submitForm() {
  // Logic to submit the form
  alert('Form submitted successfully!');
}



function validateForm() {
  const fatherName = document.getElementById('fatherName').value;
  const motherName = document.getElementById('motherName').value;
  const fatherNationality = document.getElementById('fatherNationality').value;
  const motherNationality = document.getElementById('motherNationality').value;
  const fatherOccupation = document.getElementById('fatherOccupation').value;
  const motherOccupation = document.getElementById('motherOccupation').value;
  const fatherBusinessAddress = document.getElementById('fatherBusinessAddress').value;
  const motherBusinessAddress = document.getElementById('motherBusinessAddress').value;
  const fatherPhoneNumber = document.getElementById('fatherPhoneNumber').value;
  const motherPhoneNumber = document.getElementById('motherPhoneNumber').value;

  const fatherNameError = document.getElementById('fatherNameError');
  const motherNameError = document.getElementById('motherNameError');
  const fatherNationalityError = document.getElementById('fatherNationalityError');
  const motherNationalityError = document.getElementById('motherNationalityError');
  const fatherOccupationError = document.getElementById('fatherOccupationError');
  const motherOccupationError = document.getElementById('motherOccupationError');
  const fatherBusinessAddressError = document.getElementById('fatherBusinessAddressError');
  const motherBusinessAddressError = document.getElementById('motherBusinessAddressError');
  const fatherPhoneNumberError = document.getElementById('fatherPhoneNumberError');
  const motherPhoneNumberError = document.getElementById('motherPhoneNumberError');

  let isValid = true;

  // Validate father's name
  if (fatherName === '') {
    fatherNameError.textContent = 'Father\'s name is required';
    isValid = false;
  } else {
    fatherNameError.textContent = '';
  }

  // Validate mother's name
  if (motherName === '') {
    motherNameError.textContent = 'Mother\'s name is required';
    isValid = false;
  } else {
    motherNameError.textContent = '';
  }

  // Validate father's nationality
  if (fatherNationality === '') {
    fatherNationalityError.textContent = 'Father\'s nationality is required';
    isValid = false;
  } else {
    fatherNationalityError.textContent = '';
  }

  // Validate mother's nationality
  if (motherNationality === '') {
    motherNationalityError.textContent = 'Mother\'s nationality is required';
    isValid = false;
  } else {
    motherNationalityError.textContent = '';
  }

  // Validate father's occupation
  if (fatherOccupation === '') {
    fatherOccupationError.textContent = 'Father\'s occupation is required';
    isValid = false;
  } else {
    fatherOccupationError.textContent = '';
  }

  // Validate mother's occupation
  if (motherOccupation === '') {
    motherOccupationError.textContent = 'Mother\'s occupation is required';
    isValid = false;
  } else {
    motherOccupationError.textContent = '';
  }

  // Validate father's business address
  if (fatherBusinessAddress === '') {
    fatherBusinessAddressError.textContent = 'Father\'s business address is required';
    isValid = false;
  } else {
    fatherBusinessAddressError.textContent = '';
  }

  // Validate mother's business address
  if (motherBusinessAddress === '') {
    motherBusinessAddressError.textContent = 'Mother\'s business address is required';
    isValid = false;
  } else {
    motherBusinessAddressError.textContent = '';
  }

  // Validate father's phone number
  if (fatherPhoneNumber === '') {
    fatherPhoneNumberError.textContent = 'Father\'s phone number is required';
    isValid = false;
  } else {
    fatherPhoneNumberError.textContent = '';
  }

  // Validate mother's phone number
  if (motherPhoneNumber === '') {
    motherPhoneNumberError.textContent = 'Mother\'s phone number is required';
    isValid = false;
  } else {
    motherPhoneNumberError.textContent = '';
  }

  // If form is valid, submit it
  if (isValid) {
    // Here, you can submit the form using AJAX or regular form submission
    alert('Form submitted successfully!');
  }
}
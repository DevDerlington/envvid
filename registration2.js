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
  const previousSchool = document.getElementById('previousSchool').value;
  const schoolAddress = document.getElementById('schoolAddress').value;
  const year = document.getElementById('year').value;
  const gradeCompleted = document.getElementById('gradeCompleted').value;
  const lastGradeUpload = document.getElementById('lastGradeUpload').value;

  const previousSchoolError = document.getElementById('previousSchoolError');
  const schoolAddressError = document.getElementById('schoolAddressError');
  const yearError = document.getElementById('yearError');
  const gradeCompletedError = document.getElementById('gradeCompletedError');
  const lastGradeUploadError = document.getElementById('lastGradeUploadError');

  let isValid = true;

  // Validate previous school
  if (previousSchool === '') {
    previousSchoolError.textContent = 'Previous school is required';
    isValid = false;
  } else {
    previousSchoolError.textContent = '';
  }

  // Validate school address
  if (schoolAddress === '') {
    schoolAddressError.textContent = 'School address is required';
    isValid = false;
  } else {
    schoolAddressError.textContent = '';
  }

  // Validate year
  if (year === '') {
    yearError.textContent = 'Year is required';
    isValid = false;
  } else {
    yearError.textContent = '';
  }

  // Validate grade completed
  if (gradeCompleted === '') {
    gradeCompletedError.textContent = 'Grade completed is required';
    isValid = false;
  } else {
    gradeCompletedError.textContent = '';
  }

  // Validate last grade upload
  if (lastGradeUpload === '') {
    lastGradeUploadError.textContent = 'Last grade upload is required';
    isValid = false;
  } else {
    lastGradeUploadError.textContent = '';
  }

  // If form is valid, submit it
  if (isValid) {
    // Here, you can submit the form using AJAX or regular form submission
    alert('Form submitted successfully!');
  }
}

function uploadFile() {
  const fileInput = document.getElementById('lastGradeUpload');
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    // Here, you can perform file upload operations
    alert('File uploaded successfully!');
  } else {
    alert('Please select a file to upload.');
  }
}



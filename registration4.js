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
  const needsTransportation = document.getElementById('needsTransportation').checked;
  const dropOffArea = document.getElementById('dropOffArea').value;
  const pickUpArea = document.getElementById('pickUpArea').value;

  const dropOffAreaError = document.getElementById('dropOffAreaError');
  const pickUpAreaError = document.getElementById('pickUpAreaError');

  let isValid = true;

  // If transportation is needed, validate drop-off and pick-up areas
  if (needsTransportation) {
    // Validate drop-off area
    if (dropOffArea === '') {
      dropOffAreaError.textContent = 'Drop-off area is required';
      isValid = false;
    } else {
      dropOffAreaError.textContent = '';
    }

    // Validate pick-up area
    if (pickUpArea === '') {
      pickUpAreaError.textContent = 'Pick-up area is required';
      isValid = false;
    } else {
      pickUpAreaError.textContent = '';
    }
  }

  // If form is valid, submit it
  if (isValid) {
    // Here, you can submit the form using AJAX or regular form submission
    alert('Form submitted successfully!');
  }
}

function toggleTransportationFields() {
  const transportationFields = document.getElementById('transportationFields');
  const needsTransportation = document.getElementById('needsTransportation').checked;
  transportationFields.style.display = needsTransportation ? 'block' : 'none';
}
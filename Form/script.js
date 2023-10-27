// Get references to the form and popup elements
const surveyForm = document.getElementById('survey-form');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');
const surveyResults = document.getElementById('survey-results');

// Add event listener to the form submission
surveyForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Validate the form fields
  if (
    !surveyForm.first_name.value ||
    !surveyForm.last_name.value ||
    !surveyForm.date_of_birth.value ||
    !surveyForm.country.value ||
    !surveyForm.profession.value ||
    !surveyForm.email.value ||
    !surveyForm.mobile_number.value
  ) {
    alert('Please fill in all the required fields.');
    return;
  }

  // Display the survey results in the popup
  surveyResults.innerHTML = '';
  const formData = new FormData(surveyForm);
  for (const [key, value] of formData.entries()) {
    const label = surveyForm.querySelector(`[name="${key}"]`).placeholder;
    const li = document.createElement('li');
    li.textContent = `${label}: ${value}`;
    surveyResults.appendChild(li);
  }

  // Show the popup
  popup.classList.remove('hidden');
});

// Add an event listener to close the popup
closePopupButton.addEventListener('click', function () {
  // Hide the popup
  popup.classList.add('hidden');

  // Reset the form
  surveyForm.reset();
});

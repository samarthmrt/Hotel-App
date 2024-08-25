$(document).ready(function() {
  $('#registration-form').on('submit', function(event) {
    event.preventDefault(); 

    const firstName = $('#first-name').val().trim();
    const lastName = $('#last-name').val().trim();
    const mobileNumber = $('#contact-number').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val().trim();
    const confirmPassword = $('#confirm-password').val().trim();

    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;
    $('.error-message').hide();

    if (firstName.length <= 3 || !namePattern.test(firstName)) {
      $('#first-name-error').show();
      isValid = false;
    }

    if (lastName.length <= 3 || !namePattern.test(lastName)) {
      $('#last-name-error').show();
      isValid = false;
    }
    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
      $('#contact-number-error').show();
      isValid = false;
    }

    if (!emailPattern.test(email)) {
      $('#email-error').show();
      isValid = false;
    }

    if (password !== confirmPassword) {
      $('#password-error').show();
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem('registered', 'true');
      alert('Form submitted successfully!');
      window.location.href = 'index.html';
    } else {
      alert('Fill the form correctly!');
    }
  });
});8


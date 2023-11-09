document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email-valid');
    const emailValidationMsg = document.getElementById('mail-validation');
    const successBanner = document.getElementById('sucess-banner');
    const subscribeButton = document.getElementById('button');
    const signIn = document.querySelector(".container");
  
    subscribeButton.addEventListener('click', function () {
      const emailValue = emailInput.value;
      if (isValidEmail(emailValue)) {
          // Valid email address, show success message
          signIn.style.display = 'none';
            successBanner.style.display = 'block';
            emailValidationMsg.style.display = 'none';
          
      } else {
        // Invalid email address, show validation message
          emailValidationMsg.style.display = 'block';
          emailInput.style.background = 'hsl(4, 100%, 94%)';
          emailInput.style.border = '2px solid hsl(4, 100%, 67%)';
          emailInput.style.color = 'hsl(4, 100%, 67%)';
      }
    });
  
    // Function to check if the email address is valid
    function isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    }
    
    // Dismiss the success message
    const dismissButton = document.querySelector('#sucess-banner button');
    dismissButton.addEventListener('click', function () {
        successBanner.style.display = 'none';
        signIn.style.display = 'block';
        emailInput.value = '';
        emailInput.style.background = '';
          emailInput.style.border = '';
          emailInput.style.color = '';
    });
  });
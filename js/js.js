document.addEventListener("DOMContentLoaded", function () {
  const getOtpButton = document.getElementById("get-otp");

  getOtpButton.addEventListener("click", function (event) {
      // Get the phone number from the form
      const phoneNumber = document.getElementById('phone').value;

      // Validate the phone number
      function validateNumber() {
          //const regex = /^01\d{9}$/; // Mobile number format 01
          const regex = /^(\+88)?01\d{9}$/; // Mobile number format +88/01

          if (!regex.test(phoneNumber)) {
              alert('Please enter a valid mobile number (Format: 01XXXXXXXXX)');
              event.preventDefault();
          }
      }

      validateNumber(); // Call the validateNumber function

      // If the phone number is valid, proceed to generate OTP
      if (!event.defaultPrevented) {
          // Generate a random 6-digit OTP
          const generatedOTP = 1234 //Manual
          /*Math.floor(1050 + Math.random() * 9999);*/ //Orginal

          // Store the OTP in sessionStorage for later verification
          sessionStorage.setItem("otp", generatedOTP);

          // Redirect to the OTP verification page
          window.location.href = "otp.html";
      }
  });
});

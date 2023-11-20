document.addEventListener("DOMContentLoaded", function () {
    const otpForm = document.getElementById("otp-form");

    otpForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const enteredOTP = document.getElementById("otp").value.trim();
        const storedOTP = sessionStorage.getItem("otp");

        if (enteredOTP === storedOTP) {
           /* alert("OTP verified successfully!");*/
            window.location.href = "./admin.html"; // Redirect to the profile page
        } else {
            alert("Invalid OTP. Please try again.");
        }
    });
});

document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let branch = document.getElementById("branch").value;
    let year = document.getElementById("year").value;
    let university = document.getElementById("university").value;
    let eventCode = document.getElementById("eventCode").value;

    // Validate inputs
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError("nameError", "Name should only contain alphabets.");
        return;
    }

    // if (!email.endsWith("@gmail.com")) {
    //     showError("emailError", "Email must be in the format @gmail.com.");
    //     return;
    // }

    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        showError("phoneError", "Phone number must be exactly 10 digits.");
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(branch)) {
        showError("branchError", "Branch should only contain alphabets.");
        return;
    }

    if (year < 1 || year > 5) {
        showError("yearError", "Year must be between 1 and 5.");
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(university)) {
        showError("universityError", "University name should only contain alphabets.");
        return;
    }

    if (eventCode.length !== 6 || !/^[a-zA-Z0-9]+$/.test(eventCode)) {
        showError("eventCodeError", "Event code must be exactly 6 characters long.");
        return;
    }

    // Fetch JSON file (users.json)
    fetch('./js/main/users.json') // Change this path to your actual JSON file location
        .then(response => response.json())
        .then(data => {
            let users = data.users;
            let existingUser = users.find(user => user.email === email);

            if (!existingUser) {
                showError("emailError", "Email not found in the registered users.");
                return;
            }

            // Send OTP
            let otp = Math.floor(Math.random() * 1000);
            sendEmail(email, otp);
            alert("OTP sent to your email.");

            document.getElementById("otpSection").classList.remove("hidden");

            document.getElementById("otpSubmit").addEventListener("click", function () {
                let enteredOtp = document.getElementById("otp").value;

                if (enteredOtp == otp) {
                    alert("Registered successfully.");
                    sendConfirmationEmail(email);
                } else {
                    showError("otpError", "Invalid OTP.");
                }
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
            showError("emailError", "Could not validate email. Please try again later.");
        });
});

function clearErrors() {
    document.querySelectorAll(".error-text").forEach(item => item.textContent = "");
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function sendEmail(email, otp) {
    Email.send({
        SecureToken: "6ecca54d-42a6-4a09-8e4a-1bb5dc8ebf26",
        To: email,
        From: "harrygarg457@gmail.com",
        Subject: "Registration Successful",
        Body: "You have successfully registered."
    });
}

function sendConfirmationEmail(email) {
    Email.send({
        SecureToken: "6ecca54d-42a6-4a09-8e4a-1bb5dc8ebf26",
        To: email,
        From: "harrygarg457@gmail.com",
        Subject: "Registration Successful",
        Body: "You have successfully registered."
    });
}

// JS for adding cards in index.html

document.addEventListener('DOMContentLoaded', () => {
    let currentItems = 4;
    const readMoreButton = document.querySelector('.read-more');
    const container = document.querySelector('.rowunique');

    // Function to create new item boxes
    function createBox(item) {
        const box = document.createElement('div');
        box.className = 'col-xl-3 col-lg-3 col-md-6 col-sm-12';
        box.innerHTML = `
        <div class="for_box">
          <i><img src="${item.image}" /></i>
          <h3>${item.heading}</h3>
          <p>${item.paragraph}</p>
        </div>
      `;
        return box;
    }

    // Function to load more items from home.json
    async function loadMoreItems() {
        try {
            const response = await fetch("assets/js/main/home.json");
            const data = await response.json();
            const newItems = data.slice(currentItems - 4, currentItems);

            newItems.forEach(item => {
                // Append the new item box at the end of the container
                container.appendChild(createBox(item));
            });

            currentItems += 4;

            // Disable the "Read More" button when all items are loaded
            if (currentItems >= 16) {
                readMoreButton.style.display = 'none';
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    readMoreButton.addEventListener('click', loadMoreItems);
});


// JS for popup cards

function toggle(num) {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var body = document.getElementById('mainbody');
    body.classList.toggle('no-scroll');
    if (num == 1) {
        var popup = document.getElementById('pop1');
        popup.classList.toggle('active');
    }
    if (num == 2) {
        var popup = document.getElementById('pop2');
        popup.classList.toggle('active');
    }
    if (num == 3) {
        var popup = document.getElementById('pop3');
        popup.classList.toggle('active');
    }
    if (num == 4) {
        var popup = document.getElementById('pop4');
        popup.classList.toggle('active');
    }
    if (num == 5) {
        var popup = document.getElementById('pop5');
        popup.classList.toggle('active');
    }
    if (num == 6) {
        var popup = document.getElementById('pop6');
        popup.classList.toggle('active');
    }
}


// JS for Contact form validation

document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission for validation testing

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let isValid = true;

    // Name Validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    } else if (/[^a-zA-Z\s]/.test(name)) {
        document.getElementById('nameError').textContent = 'Name should not contain numbers or special characters.';
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/; // Basic pattern for email validation
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format. Ensure it contains @ and a valid domain.';
        isValid = false;
    }

    // Phone Validation
    const phone = document.getElementById('phone').value.trim();
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        isValid = false;
    } else if (/[^0-9]/.test(phone)) {
        // If it contains any characters other than digits
        document.getElementById('phoneError').textContent = 'The phone number should contain only numbers.';
        isValid = false;
    } else if (phone.length !== 10) {
        // If it is not exactly 10 digits
        document.getElementById('phoneError').textContent = 'Phone number must be exactly 10 digits.';
        isValid = false;
    }

    // Message Validation
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message cannot be empty.';
        isValid = false;
    }

    // Form Submission if valid
    if (isValid) {
        alert('Form submitted successfully!'); // You can replace this with actual form submission logic
    }
});

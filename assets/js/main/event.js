document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('news-container');
    // Fetch data from JSON file
    fetch('./js/main/event.json')
        .then(response => response.json())
        .then(data => {
            const events = data.events ;
            events.forEach(item => {
                const newsBox = document.createElement('div');
                newsBox.className = 'col-xl-4 col-lg-4 col-md-4 col-sm-12 margin';

                newsBox.innerHTML = `
                    <div class="news-box">
    <figure>
        <img src="${item.image}" alt="${item.title}">
    </figure>
    <div class="content">
        <span class="date">
            ${item.date}
            <a href="register.html" class="register-link"> || Register</a>
        </span>
        <h3 class="title">${item.title}</h3>
        <p class="description">${item.description}</p>
    </div>
</div>`;

                container.appendChild(newsBox);
            });
        })
        .catch(error => console.error('Error fetching data:', error));


        
        
});

// Function to animate the number
function animateNumber(target, duration) {
    let start = 0; // Starting number
    const end = target; // Ending number
    const incrementTime = Math.ceil(duration / end); // Time for each increment
    const counterElement = document.getElementById("eventCount");

    const interval = setInterval(() => {
        start++; // Increment the number
        counterElement.innerText = start; // Update the displayed number

        // Stop the interval once the target is reached
        if (start >= end) {
            clearInterval(interval);
        }
    }, incrementTime);
}

// Call the function on page load
window.onload = () => {
    animateNumber(12, 800); // Animate to 6 in 2 seconds
};

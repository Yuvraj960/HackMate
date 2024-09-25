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

function toggle(num) {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var body = document.getElementById('mainbody');
    body.classList.toggle('no-scroll');
    if(num==1) {
        var popup = document.getElementById('pop1');
        popup.classList.toggle('active');
    }
    if(num==2) {
        var popup = document.getElementById('pop2');
        popup.classList.toggle('active');
    }
    if(num==3) {
        var popup = document.getElementById('pop3');
        popup.classList.toggle('active');
    }
    if(num==4) {
        var popup = document.getElementById('pop4');
        popup.classList.toggle('active');
    }
    if(num==5) {
        var popup = document.getElementById('pop5');
        popup.classList.toggle('active');
    }
    if(num==6) {
        var popup = document.getElementById('pop6');
        popup.classList.toggle('active');
    }
}

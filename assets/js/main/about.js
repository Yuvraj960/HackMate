// Toggle additional info on team members
const teamMembers = document.querySelectorAll('.for_box h3');                    // saare h3 elements jo for_box class ke andar hai
teamMembers.forEach(member => {
    member.addEventListener('click', function() {
        const siblingParagraph = this.nextElementSibling;
        siblingParagraph.classList.toggle('show');  // agr para (nextsibling) pe show lga hua hai toh hat jaaega, agr nhi hai toh lg jaaega
    });
});

// scroll to top 
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollTopBtn');   
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {    // it will check if the domcument is scrolled 500 px from <html> tag or not
    // dono isiliye se kra hai kyunki old browsers 'document.body.scrollTop' support krte hain and new browsers 'document.documentElement.scrollTop' use krte hain 
        scrollBtn.style.display = 'block';                                     // button show hoga
    } else {
        scrollBtn.style.display = 'none';                                     // button hide ho jaaega
    }
});

// team profile popup
    document.addEventListener("DOMContentLoaded", function () {
        const readMoreButton = document.querySelector(".read-more");
        const modal = document.getElementById("teamModal");
        const modalBody = document.getElementById("modal-body");
        const closeModal = document.querySelector(".close");

        const teamMembers = [
            {
                name: "Yuvraj Gupta",
                role: "Developer",
                bio: "A passionate developer focused on creating user-friendly interfaces and writing efficient, scalable code. Dedicated to bringing technical ideas to life through seamless functionality, always eager to tackle complex challenges with innovative solutions.",
                photo: "icon/about_team/developer.png",
                linkedin: "#", 
                twitter: "#"
            },
            {
                name: "Samridhi",
                role: "Manager",
                bio: "A proactive leader skilled in coordinating projects and guiding teams to success. Focused on achieving goals efficiently while nurturing collaboration and innovation.",
                photo: "icon/about_team/manager.png",
                linkedin: "https://www.linkedin.com/in/samridhi-nagpal-7b83b82a4/",
                twitter: "https://x.com/Samridhi470"
            },
            {
                name: "Harry Garg",
                role: "Designer",
                bio: "A creative designer who merges aesthetics with usability, skilled in crafting visually stunning designs that enhance user experience. Passionate about clean design, with a focus on creating products that are both beautiful and functional.",
                photo: "icon/about_team/designer.png",
                linkedin: "#",
                twitter: "#"
            },
            {
                name: "Riya Bansal",
                role: "Marketing",
                bio: "A strategic marketer with a talent for storytelling, focused on building brand presence through compelling campaigns. With a keen eye for understanding audience needs, excels at creating narratives that resonate and drive engagement.",
                photo: "icon/about_team/marketing.png",
                linkedin: "https://www.linkedin.com/in/riya-bansal-817a6a294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                twitter: "#"
            }
        ];

        readMoreButton.addEventListener("click", function () {
            modal.style.display = "block";
            modalBody.innerHTML = '';                // modalbody ko empty kra hai taaki new content add kr ske

            const container = document.createElement('div');               // iske andar saare cards banenge
            container.classList.add('container'); 

            let row = document.createElement('div');                // row for each card
            row.classList.add('row', 'justify-content-center'); 

            teamMembers.forEach((member, index) => {                // ek ek object pe jaake uska card banaega
                const memberCard = document.createElement('div');
                memberCard.classList.add('col-md-6', 'col-lg-5', 'mb-4'); 
    
                // creating individual card 
                memberCard.innerHTML = `                          
                <div class="card h-100 text-center">
                    <img src="${member.photo}" alt="${member.name}" class="card-img-top mx-auto" style="width: 80%; height: 150px; object-fit: contain;">
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text">${member.role}</p>
                        <p class="card-text">${member.bio}</p>
                        <p class="card-text">
                            <a href="${member.linkedin}" target="_blank" style="color: blue; text-decoration: underline;">LinkedIn</a> | 
                            <a href="${member.twitter}" target="_blank" style="color: blue; text-decoration: underline;">Twitter</a>
                        </p>
                    </div>
                </div>
            `;

                row.appendChild(memberCard);              // row div main add kra hai

                if ((index + 1) % 2 === 0 || index === teamMembers.length - 1) {   // check kr rha hai ki agr toh yeh card 2 se divisible hai ya phir last object hai toh hi iske andr jaaega
                    container.appendChild(row);                         // and row ko starting wle container main add kr dega and new row bna dega taaki ek row main sirf 2 hi cards aaen and not more than that.
                    row = document.createElement('div'); 
                    row.classList.add('row', 'justify-content-center');
                }
            });
    
            modalBody.appendChild(container);                    // container ko modalbody main add kr dia
        });
        closeModal.onclick = function () {                        // 'x' pe click krne se hide ho jaaega
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";              // displayed modal ke bahar kidhr bhi click krne se hide ho jaaega
            }
        };
    });
    

    // for hover effect 
document.addEventListener("DOMContentLoaded", function() {    // "DOMContentLoaded" isiliye use kra hai taaki pura html document acche se load
                                                              // ho jaae taaki jb ham hover kren toh hamare paas display wla content available ho, uska load hone ka wait na krna pde
    const serviceBoxes = document.querySelectorAll('.service-box');

    serviceBoxes.forEach(box => {
        const info = box.querySelector('.service-info');

        info.style.display = 'none';            // starting main kuch display nhi hoga
        box.style.height = '300px';            // sabhi boxes ka size same rakhne ke lie in the starting 
        box.style.transition = "transform 0.3s ease";    // for smooth transition after 0.3s

        box.addEventListener('mouseover', function() {
            info.style.display = 'block';                   // displays content
            this.style.transform = "scale(1.05)";       // box ka size bda krne ke lie
        });

        box.addEventListener('mouseleave', function() {
            info.style.display = 'none';               // hides content
            this.style.transform = "scale(1)";         // box ko original size main laane ke lie
        });
    });
});
// for date of birth should not exceed current year
document.addEventListener("DOMContentLoaded", function () {
    const birthDateInput = document.getElementById("birth-date");
    const today = new Date();                       // current date and time assign kra hai
    const minDate = new Date(today.getFullYear() - 25, today.getMonth(), today.getDate());   // for atmost 25 years of age validation

    const formattedToday = today.toISOString().split('T')[0];     // for 'YYYY-MM-DD' format. T is for date(0 index) and Z is for time(1 index)
    const formattedMinDate = minDate.toISOString().split('T')[0]; 

    birthDateInput.max = formattedToday;                       //setting max and min attribute of birthdate.
    birthDateInput.min = formattedMinDate;
});

// for live character count in username, phone number

document.addEventListener("DOMContentLoaded", function () {
    const username = document.getElementById("username");
    const username_small = document.getElementById("username_small");

    const phone = document.getElementById("phone-number");
    const phone_small = document.getElementById("phone_small");

    function updateCounter(input,small, maxLength) {
        const currentLength = input.value.length;       // input ki length calculate kr rha hai
        small.textContent = `${currentLength}/${maxLength} characters used`;       // small main content change ke rha hai
    }

    const maxUsernameLength = username.getAttribute("maxlength");     // maxlength attribute(iun html) main jo value hai usse store kr rha hai
    const maxPhoneLength = phone.getAttribute("maxlength");

    username.addEventListener("focus", function () {                 // jab username pe kuch type krne ke lie aaenge
        username_small.style.display = "block"; 
    });

    username.addEventListener("blur", function () {              // jab kisi aur field pe jaaenge(like password)
        username_small.style.display = "none"; 
    });

    phone.addEventListener("focus", function () {   // click bhi use kr skte the but agr user keyboard se(using tab key)dusre field pe jaata toh yeh listener call nhi hota isiliye focus use kra hai
        phone_small.style.display = "block"; 
    });

    phone.addEventListener("blur", function () {
        phone_small.style.display = "none";
    });
 
    username.addEventListener("input", function () {       // jab bhi input ki value change hogi yeh eventlistener call hoega
        updateCounter(username, username_small, maxUsernameLength);
    });

    phone.addEventListener("input", function () {
        updateCounter(phone, phone_small, maxPhoneLength);
    });
});




// for must username,password,confirm password

function validate(event){
    event.preventDefault();    // prevents the default form submission
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let confirm_password=document.getElementById("confirm-password").value;
    let email=document.getElementById("email").value;
    let phone_number=document.getElementById("phone-number").value;
    let birth_date=document.getElementById("birth-date").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;

    // previous error message ko clear krne ke lie 
    document.getElementById("email_span").innerHTML = "";
    document.getElementById("username_span").innerHTML = "";
    document.getElementById("password_span").innerHTML = "";
    document.getElementById("confirm-password_span").innerHTML = "";
    document.getElementById("phone-number_span").innerHTML = "";
    document.getElementById("birth-date_span").innerHTML = "";

    if(email==""){
        document.getElementById("email_span").innerHTML="Email is required";
        return false;
    }else if(!emailPattern.test(email)){
        document.getElementById("email_span").innerHTML="Invalid email format";
        return false;
    }else if(username==""){
        document.getElementById("username_span").innerHTML="Username is required";
        return false;
    }else if(password==""){
        document.getElementById("password_span").innerHTML="Password is required";
        return false;
    }else if(password.length!=6){
        document.getElementById("password_span").innerHTML="Password must be atleast 6 characters long";
        return false;
    } else if(confirm_password==""){
        document.getElementById("confirm-password_span").innerHTML="Confirm Password is required";
        return false;
    }else if(confirm_password!=password){
        document.getElementById("confirm-password_span").innerHTML="Password did not match!";
        return false;
    }else if(phone_number==""){
        document.getElementById("phone-number_span").innerHTML="Phone Number is required";
        return false;
    }else if(!phonePattern.test(password)){
        document.getElementById("phone-number_span").innerHTML="Phone Number must contain only digits";
        return false;
    }else if(phone_number.length!=10){
        document.getElementById("phone-number_span").innerHTML="Phone Number must be exactly 10 digits";
        return false;
    }else if(birth_date==""){
        document.getElementById("birth-date_span").innerHTML="Date is required";
        return false;
    }else{
        alert("Form-Submitted Successfully!");
        document.getElementById("signup-form").reset();  
        return true;
    }

}
const signInBtnLink=document.querySelector('.signInBtn-link');

const signUpBtnLink=document.querySelector('.signUpBtn-link');

const wrapper=document.querySelector('.wrapper')



signUpBtnLink.addEventListener('click',() =>{
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click',() =>{
    wrapper.classList.toggle('active');
});

var credentials = {"Gagan": "gagan123", "Ansh": "ansh123"};

function check() {
    var username = document.getElementById('Username1').value;
    var password = document.getElementById('Password1').value;

    if (credentials.hasOwnProperty(username)) {
        if (credentials[username] === password) {
            window.location.href = "page2_home.html";
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("Wrong Credentials");
    }
}

function saveall() {
    var user = document.getElementById('Username2').value;
    var pass = document.getElementById('Password2').value;

    if (!credentials.hasOwnProperty(user)) {
        credentials[user] = pass;
        alert("Account created successfully...")
    } else {
        alert("Username already exists...Please enter a different Username.");
    }
    
}

var button1 = document.getElementById("Button1");
var button2 = document.getElementById("Button2");

button2.addEventListener("click", function() {
    saveall();
});
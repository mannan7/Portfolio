// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyARgjH_I1SVdRwWBDFlb_kA5885OcoJN7Y",
    authDomain: "contact-fa281.firebaseapp.com",
    databaseURL:"https://contact-fa281-default-rtdb.firebaseio.com/",
    projectId: "contact-fa281",
    storageBucket: "contact-fa281.appspot.com",
    messagingSenderId: "965631407851",
    appId: "1:965631407851:web:ad9bc6e7d752a51b53b0ae",
    measurementId: "G-WMNT854T93"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Get rid of Preloader
window.addEventListener('load', () => {
    var loader = document.querySelector(".loader"); //on class 'loader'
    loader.classList.add('load-finish');  
});
//loader ends here

//on click ham-burger events
navHam();
function navHam(){
    var hamBurger = document.querySelector(".nav-container");
    var navMenu = document.querySelector(".nav-menu");
    var navLinks = document.querySelectorAll(".nav-item");
    var navDelay = 1;
    hamBurger.addEventListener("click", () =>{
        navMenu.classList.toggle("make-visible");
        hamBurger.classList.toggle("cross-icon");    
    });
    

    //to close hamnburger when a link is clicked
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", () => {
            navMenu.classList.remove("make-visible");
            hamBurger.classList.toggle("cross-icon");
        });

        //for animations
        navLinks[i].style.animation = `slideIn ${navDelay / 1.5}s`;
        navDelay+=0.35;
    }

    //from down to up animation on 
    navMenu.style.animation = "inFromBottom 1s";

    //Changing the nav upon scroll
    $(window).scroll( () => {
        if ($(".navbar").offset().top > 50) {
            $(".fixed-top").addClass("nav-scrolled");
        } else {
            $(".fixed-top").removeClass("nav-scrolled");
        }
    });
}

/*Typed Animation*/
var typed = new Typed('#typed', {
    strings: ["Web Developer", "Programmer", "Blogger"],
    backSpeed: 50,
    typeSpeed: 120,
    loop: true,
    backDelay: 500
});

/*Firebase*/
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.querySelector('form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('form-name');
    var email = getInputVal('form-email');
    var sub = getInputVal('form-sub');
    var message = getInputVal('form-msg');

    // Save message
    saveMessage(name, email, sub, message);

    // Clear form
    document.querySelector('form').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, sub, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        sub: sub,
        message: message
    });
}

const darkBtn = document.querySelector('#dark-mode');
const body = document.querySelector('body');
darkBtn.addEventListener('click', () => {
    if(darkBtn.checked){
         body.classList.add('dark-mode');
    }
    else{
        body.classList.remove('dark-mode');
    }
});
//body.classList.contains('dark-mode')

var expandProject = document.querySelector('#expand')
var modal = document.querySelector('.project-modal')
expandProject.addEventListener('click', () => {
    modal.style.display = 'block'
})

var closeProject = document.querySelector('#closeModal')
closeProject.addEventListener('click', () => {
    modal.style.display = 'none'
})
//toggle icon navbar
let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
menuIcon.onclick= () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



//scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top <offset +height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    // sticky nav Bar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle when user click nav button
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// scroll reaveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// typed multiple js
const typed =new Typed('.multiple-text',{
    strings: ['Software Engineer !','Frontend Developer !', 'Database Administrator !','Backend Developer !'],
    typeSpeed: 50,
    backSpeed: 50,
    backDealy:1000,
    loop: true

});


// Button open box

const boxContainers = document.querySelectorAll('.box-container');

boxContainers.forEach(boxContainer => {
    const btnLink = boxContainer.querySelector('.read-more');

    btnLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default behavior (page reload)

        boxContainer.classList.toggle('open');
        
        // Update the text content based on the box state
        const isOpen = boxContainer.classList.contains('open');
        btnLink.textContent = isOpen ? 'Close' : 'Read More';
    });
});

document.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (!clickedElement.closest('.box-container')) {
        // Close all open boxes when clicking outside
        boxContainers.forEach(boxContainer => {
            boxContainer.classList.remove('open');
            
            // Reset the text content to 'Read More' when closing
            const btnLink = boxContainer.querySelector('.read-more');
            btnLink.textContent = 'Read More';
        });
    }
});



        // Portfolio image enlargement and details

const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const enlargedView = document.getElementById('enlarged-view');
const enlargedImage = enlargedView.querySelector('img');

    portfolioBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const imgSrc = box.querySelector('img').src;
            enlargedImage.src = imgSrc;
            enlargedView.classList.add('active');
        });
    });

    function closeEnlargedView() {
        enlargedView.classList.remove('active');
    }



 // Form Submission


const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);

  // Send a POST request to Formspree using fetch API
  fetch("https://formspree.io/f/xeqygvor", {
    method: "POST",
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      // Successful submission, you can redirect or show a success message
      console.log("Form submitted successfully");
      // Reset form fields
      form.reset();
    } else {
      // Handle errors
      console.error("Form submission error:", data.error);
    }
  })
  .catch(error => {
    // Handle network errors
    console.error("Network error:", error);
  });

  // Reset form fields even if there was an error
  form.reset();
});


//for arrow hiding on home section
document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.querySelector(".footer-iconTop.arrow");
  
    window.addEventListener("scroll", function () {
      // Adjust the scroll threshold based on your preference
      if (window.scrollY > 200) {
        arrow.classList.add("show");
      } else {
        arrow.classList.remove("show");
      }
    });
  
    // Optional: Add smooth scrolling behavior when arrow is clicked
    arrow.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  
  
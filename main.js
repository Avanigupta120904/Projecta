window.onscroll = function(){
    scrollFunction();
};
function scrollFunction(){
    var scrollToTopbtn = document.getElementById("scrollToTopbtn");

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollToTopbtn.style.display = "block";
    } else {
        scrollToTopbtn.style.display = "none";
    }
}

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

  document.querySelector('.download-btn').addEventListener('click', function () {
    alert('Your download will begin shortly.');
  });



const ani = ScrollReveal({
    distance: '35px',
    duration: 2200,
    reset: true
});

ani.reveal('.b-text', {delay:100, origin: 'top'});
ani.reveal('.about-img', {delay:50, origin: 'top'});
ani.reveal('.about-text', {delay:50, origin: 'top'});
ani.reveal('.skill-content', {delay:100, origin: 'top'});
ani.reveal('.section header', {delay:100, origin: 'top'});
ani.reveal('.services-content', {delay:100, origin: 'top'});
ani.reveal('.contact-content', {delay:100, origin: 'top'});



window.addEventListener("DOMContentLoaded", function () {
  emailjs.init("fDVa6W1eTfkH-u900"); 
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_jqg5udo", "template_9z22reo", this)
      .then(
        function (response) {
          alert("Message sent successfully!");
          form.reset(); // Clear the form
        },
        function (error) {
          alert("Failed to send message. Please try again.");
          console.error("FAILED...", error);
        }
      );
  });
});

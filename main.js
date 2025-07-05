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

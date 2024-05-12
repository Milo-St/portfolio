function scrollToHome() {
    $('html, body').animate({
        scrollTop: $("#home-container").offset().top
    }, 1000); 
}

function scrollToContact() {
    $('html, body').animate({
        scrollTop: $("#contact-container").offset().top
    }, 1000);
}

function scrollToTestimonials() {
    $('html, body').animate({
        scrollTop: $("#testimonials-container").offset().top
    }, 1000);
}

function scrollToProjects() {
    $('html, body').animate({
        scrollTop: $("#projects-container").offset().top
    }, 1000);
}

function scrollToServices() {
    $('html, body').animate({
        scrollTop: $("#services-title").offset().top
    }, 1000);
}

function scrollToAboutme() {
    $('html, body').animate({
        scrollTop: $("#about-me-container").offset().top
    }, 1000);
}


var currentImage = 0;

function changeImage(direction) {

    if (direction === 'next') {
        currentImage += 1;
    } else if (direction === 'prev') {
        currentImage -= 1;
    }

     if(currentImage === -1) {
        currentImage = 0;
    } else if (currentImage === 0) {
        document.getElementById("current-project").innerHTML = "<h5>G</h5><h1>ame library</h1>";
        document.getElementById("projects-image1").innerHTML = "<img src='images/image1.jpg' id='responsive-image'>";
        document.getElementById("projects-image2").innerHTML = "<img src='images/image2.jpg' id='responsive-image'>";
        document.getElementById("projects-image3").innerHTML = "<img src='images/image3.jpg' id='responsive-image'>";
    } else if(currentImage === 1) {
        document.getElementById("current-project").innerHTML = "<h5>B</h5><h1>attle ships</h1>";
        document.getElementById("projects-image1").innerHTML = "<img src='images/image4.jpg' id='responsive-image'>";
        document.getElementById("projects-image2").innerHTML = "<img src='images/image5.jpg' id='responsive-image'>";
        document.getElementById("projects-image3").innerHTML = "<img src='images/image6.jpg' id='responsive-image'>";
    } else if(currentImage === 2) {
        document.getElementById("current-project").innerHTML = "<h5>P</h5><h1>okemon API</h1>";
        document.getElementById("projects-image1").innerHTML = "<img src='images/image7.jpg' id='responsive-image'>";
        document.getElementById("projects-image2").innerHTML = "<img src='images/image8.jpg' id='responsive-image'>";
        document.getElementById("projects-image3").innerHTML = "<img src='images/image9.jpg' id='responsive-image'>";
    } else if(currentImage === 3) {
        document.getElementById("current-project").innerHTML = "<h5>M</h5><h1>astermind</h1>";
        document.getElementById("projects-image1").innerHTML = "<img src='images/image10.jpg' id='responsive-image'>";
        document.getElementById("projects-image2").innerHTML = "<img src='images/image11.jpg' id='responsive-image'>";
        document.getElementById("projects-image3").innerHTML = "<img src='images/image12.jpg' id='responsive-image'>";
        currentImage = -1;
    }
}
/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// custom code
// opens test modal on page load when #test is in url
$(document).ready(function () {
  if (window.location.href.indexOf("#test") != -1) {
    $("test").modal("show");
  }
});




// these are functions from buttons in modals to hide current modal and open new one. 

//opens test from what is radon
$("#open2from1").click(function() {
    $('.modal').modal('hide');
    $("#portfolioModal2").modal('show');
});

//opens test from resources
$("#open2from4").click(function() {
    $('.modal').modal('hide');
    $("#portfolioModal2").modal('show');
}); 

//opens resources from what is radon
$("#open4from1").click(function() {
    $('.modal').modal('hide');
    $("#portfolioModal4").modal('show');
});

$("#open3from4").click(function() {
    $('.modal').modal('hide');
    $("#portfolioModal3").modal('show');
});

$("#open6").click(function() {
    $('.modal').modal('hide');
    $("#portfolioModal6").modal('show');
});


$(function () {
  $('a.remove-item').click(function () {
    var url = this.href;
    $('#myModal .btn-danger').click(function () {
      window.location.href = url;
    });
  });
});



// redirect after delay

function delayRedirectDHHS(){
    setTimeout(function() {
    window.open("https://www.dhhs.nh.gov/programs-services/environmental-health-and-you/radon#:~:text=Testing%20for%20radon%20is%20the%20only%20way%20to%20know%20if%20it%20is%20present%20in%20your%20home.", '_blank');

    },5000);
}

function delayRedirectARM(){
    setTimeout(function() {
    window.open("https://radonh2o.com/contact/", '_blank');

    },5000);
}

    







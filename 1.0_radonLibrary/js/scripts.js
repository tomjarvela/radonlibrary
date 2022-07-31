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
  if (window.location.href.indexOf("#portfolioModal1") != -1) {
    $("#portfolioModal1").modal("show");
  }
});




// these are functions from buttons in modals to hide current modal and open new one. 


$("#open2from1").click(function() {
    $('.modal').modal('hide');
    $("#portfolioModal2").modal('show');
});

$("#open2from4").click(function() {
    $('.modal').modal('hide');
    $("#portfolioModal2").modal('show');
});


$("#open4from2").click(function() {
    $('.modal').modal('hide');
    $("#portfolioModal4").modal('show');
});

$("#open5").click(function() {
    $('.modal').modal('hide');
    $("#portfolioModal5").modal('show');
});

$("#open6").click(function() {
    $('.modal').modal('hide');
    $("#portfolioModal6").modal('show');
});
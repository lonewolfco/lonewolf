import $ from 'jQuery';
import React from "react";
import '../App.css'

// declare variables
var navBtn = document.querySelector("#nav-btn");
var collapseContainer = document.querySelector("#navbarHeader");
var scrollTopBtn = document.querySelector ("#scrollTop");


function ScrollTop () {

// when window is being scrolled, run scroll function
window.onscroll = function() {scrollFunction()};

// when scroll button is clicked, run topFunction to take user to top of page
scrollTopBtn.addEventListener("click", topFunction);


// function to display the scroll button when user scrolls past 20px
function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
   
}

// function to scroll to the top of the webpage
function topFunction() {
 
     $('html, body').animate({scrollTop:0}, 'slow');
}
}

export default ScrollTop;
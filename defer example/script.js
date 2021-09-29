// script.js
const title = document.querySelector('#title')
console.log(title)
title.innerHTML = 'Hello'

// Edit the script here to set some style on the h1
// title.style.fontSize = '4rem' <-- for example!


// Console.log(title) here!




// None of this should work until you've added the
// defer attribute to the script tag. Notice title
// is null before you defer the script. This is 
// because the page has not loaded yet when the 
// script is run. 

// Try it again with defer. This time things work. 
// This is bause the script is waiting until the 
// page has loaded before running. 
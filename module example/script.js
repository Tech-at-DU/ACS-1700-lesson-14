// This script is a module. It can import data from other files.
// A module is self contained. Everything in a module stays in 
// the module, unless it is exported. Nothing gets into a 
// module unless it is imported. 

// helpers.js exports a few other things but you can access them
// unless you import them! 

// TODO: open helpers.js add a variable const name = "your name"

// Displaying your name here is not possible. Until you import 
// it from helpers.js. Test the page in the browser and notice 
// your name is still not appearing. 
// Add the following: 
// import { name } from './helpers.js' 

const displyName = document.querySelector('#display-name')
displyName.innerHTML = name













// Notice here we are using functions provided from helpers.js
// This is possible because we exported those functions from 
// helpers.js. Take a look at that file and scroll to the bottom
// of the page. 

// Now look at the line below. This line imports colors, 
// randomRange, and makeRainbow from `./helpers.js`
// NOTE! you must include the `./` in the path!
import { colors, randomRange, makeRainbow } from './helpers.js'

// For fun let's write some JS
// Style main as a flex container
const main = document.querySelector('main')
main.style.display = 'flex'
main.style.flexWrap = 'wrap'

// Use a loop to create some colored boxes.
for (let i = 0; i < colors.length; i += 1) {
	const box = document.createElement('div') // Make a div
	main.appendChild(box)                     // append the div
	box.style.backgroundColor = colors[i]     // set the background color
	box.style.width = '100px'	                // set the width
	box.style.height = '100px'                // set the height
	box.style.border = '1px solid'            // set the border
	box.style.margin = '1rem'                 // set the margin
	box.style.fontSize = '3rem'               // set the font size
	// Give each box a random number for some reason?
	box.innerHTML = randomRange(1, colors.length)
}

// The makeRainbow function returns a list of colors tell it how many
const rainbow = makeRainbow(24)

// TODO: Use a loop to display all of the colors in the rainbow

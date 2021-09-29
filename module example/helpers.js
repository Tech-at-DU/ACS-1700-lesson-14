// TODO: add a variable defined with your name here: 
// const name = 'some name' 

// TODO: Test this out. The page tries to display the 
// name but can't find it. Export your name by adding the 
// export key word like this: 
// export const name = 'some name'

// Open script.js and import your name. 

// Define an array
const colors = [
	'#f00', 
	'#0f0',
	'#00f',
	'#ff0',
	'#0ff',
	'#f0f',
	'#fff',
	'#000'
]

// Return a random number between 0 and n - 1
function random(n) {
	return Math.floor(Math.random() * n)
}

// Return a random number from min through max
function randomRange(min, max) {
	return random(max - min) + min
}

// Returns a random element from arr
function pickOne(arr) {
	return arr[random(arr.length)]
}

// Returns a random color from the colors array
function randomColor() {
	return pickOne(colors)
}

// Returns an array of colors steps in length
function makeRainbow(steps) {	
	const rainbow = []
	for (let i = 0; i < steps; i += 1) {
		const hue = 360 / steps * i
		rainbow.push(`hsl(${hue}, 100%, 50%)`)
	}
	return rainbow
}

// Export some useful things!
export {
	colors,
	random,
	randomRange,
	pickOne,
	randomColor,
	makeRainbow
}
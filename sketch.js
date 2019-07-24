// CHASER START

// Declare Global Variables
let chaser;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	chaser = {
		x: 10,
		y: 200,
		r: 10,
		rate: 0.05,
		col: 'green'
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// RUN LOGIC

	// Chaser Horizontal Movement
	let run = mouseX - chaser.x;
	chaser.x += run * chaser.rate;

	// Chaser Vertical Movement
	let rise = mouseY - chaser.y;
	chaser.y += rise * chaser.rate;
	

	// DRAW FRAME
	background("white");

	// Draw Chaser
	fill(chaser.col);
    ellipse(chaser.x, chaser.y, chaser.r * 2);
}


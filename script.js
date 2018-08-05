console.log("if you see this message in the console, then we know this JavaScript file is running!");

// Create a new instance of the p5js microphone input
let mic = new p5.AudioIn();


// The code inside the setup function will run ONLY ONCE when you open the web page
function setup() {
  
  // Setup code from before, for drawings/animations:
  createCanvas(500, 500);
  pixelDensity(1);
  frameRate(60);
    

  // Start receiving the microphone audio input
  mic.start();

  
  ////////////////////////////////////////////////////////////////////////////////////////////////
}  // end of setup() function


// The code inside the draw function will run OVER AND OVER again
function draw() {
  // Clear the screen before drawing each next frame
  clear();
  
  // Get the volume level from the microphone (value is between 0 and 1)
  let vol = mic.getLevel();
  
  // Map the mic volume to a y-coordinate somewhere between 0 and the height of the drawing canvas
  let yPosition = map(vol, 0, 1, height, 0);
  
  // Draw a circle and move it up based on the volume (using the mapped yPosition variable):
  ellipse(width/2, yPosition - 25, 100, 100);
  
}  // end of draw() function


console.log("if you see this message in the console, then we know this JavaScript file is running!");


// Create a new oscillator -- this lets us synthesize our own sounds!
let osc = new p5.Oscillator();


// The code inside the setup function will run ONLY ONCE when you open the web page
function setup() {
  
  // Setup code from before, for drawings/animations:
  createCanvas(500, 500);
  pixelDensity(1);
  frameRate(60);
    

  // Set the type of sound wave
  osc.setType('sine');
  
  // Set the frequency
  osc.freq(200);
  
  // Set the amplitude (basically, the volume) -- somewhere between 0 and 1
  osc.amp(0.3);
  
  // Play the sound!
  osc.start();

  
  ////////////////////////////////////////////////////////////////////////////////////////////////
}  // end of setup() function


// This p5js function runs when the user clicks their mouse
function mouseClicked() {
  // Stop playing the sound!
  osc.stop();
}


// The code inside the draw function will run OVER AND OVER again
function draw() {
  

  
  
  
}  // end of draw() function


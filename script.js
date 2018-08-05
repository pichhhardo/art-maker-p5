console.log("if you see this message in the console, then we know this JavaScript file is running!");

// The code inside the setup function will run ONLY ONCE when you open the web page
function setup() {
  
  // The createCanvas function creates a <canvas> element on the page after it loads, which lets us draw stuff!
  createCanvas(500, 500);
  
  // Fix for retina displays where clear() only clears the top left corner of the canvas)
  pixelDensity(1);

  // 60 frames per second
  frameRate(60);
    
  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Include your code here inside the setup() function
  // to do something once when the page loads.
  ////////////////////////////////////////////////////////////////////////////////////////////////


  // Create a new oscillator -- this lets us synthesize our own sounds!
  let osc = new p5.Oscillator();
  
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




// The code inside the draw function will run OVER AND OVER again
function draw() {
  

  
  
  
}  // end of draw() function


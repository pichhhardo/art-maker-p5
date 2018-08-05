console.log("if you see this message in the console, then we know this JavaScript file is running!");

// Create a global variable so we can access it in all of our functions
let snareDrum;
let bassDrum;

// The preload function is required to load things before the page is ready to interact with the user
function preload() {
  // Load a sound file
  snareDrum = loadSound('https://raw.githubusercontent.com/siggy/beatboxer/master/sounds/snare_drum.wav');
  bassDrum = loadSound('https://raw.githubusercontent.com/siggy/beatboxer/master/sounds/bass_drum.wav');
}

// The code inside the setup function will run ONLY ONCE when you open the web page
function setup() {
  
  // Setup code from before, for drawings/animations:
  createCanvas(500, 500);
  pixelDensity(1);
  frameRate(60);
  


  
  ////////////////////////////////////////////////////////////////////////////////////////////////
}  // end of setup() function


// The code inside the draw function will run OVER AND OVER again
function draw() {
  // Clear the screen before drawing each next frame
  clear();
  
  
  if (keyCode === LEFT_ARROW) {
    // Play the snare drum sound file
    snareDrum.play();
    
  } else if (keyCode === RIGHT_ARROW) {
    
    // Play the bass drum sound file
    bassDrum.play();
    
  } else if (keyCode === RIGHT_ARROW) {
    
    // Play the bass drum sound file
    bassDrum.play();
    
  }
  // ..... you can keep chaining more else ifs to play different sounds based on which key the user pressed!
  

  
}  // end of draw() function


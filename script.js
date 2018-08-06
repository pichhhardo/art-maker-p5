console.log("if you see this message in the console, then we know this JavaScript file is running!");

// Create global variables so we can access them in all of our functions
let snareDrum;
let bassDrum;
let hihat;


// The preload function is required to load things before the page is ready to interact with the user
function preload() {
  // Load a sound file
  snareDrum = loadSound('https://raw.githubusercontent.com/siggy/beatboxer/master/sounds/snare_drum.wav');
  bassDrum = loadSound('https://raw.githubusercontent.com/siggy/beatboxer/master/sounds/bass_drum.wav');
  hihat = loadSound('https://raw.githubusercontent.com/siggy/beatboxer/master/sounds/cl_hi_hat.wav');
  
}

// The code inside the setup function will run ONLY ONCE when you open the web page
function setup() {
  
  // Setup code from before, for drawings/animations:
  createCanvas(500, 500);
  pixelDensity(1);
  frameRate(60);
  

  ////////////////////////////////////////////////////////////////////////////////////////////////
}  // end of setup() function


// This function runs whenever the user types a key on the keyboard:
function keyTyped() {

  if (key === 'a') {
    // Play the snare drum sound file
    snareDrum.play();
    
  } else if (key === 'b') {
    
    // Play the bass drum sound file
    bassDrum.play();
    
  } else if (key === 'c') {
    
    // Play the cymbal sound file
    hihat.play();
    hihat.loop();
    clear();
  }
  // ..... you can keep chaining more else ifs to play different sounds based on which key the user pressed!
  
  
}//end keyPressed() function

/*function trapSnare(){
   
  if (key=== 'c'){
  
  }*/
  



// The code inside the draw function will run OVER AND OVER again
function draw() {

  // You could also draw something here if you want :)

  
}  // end of draw() function


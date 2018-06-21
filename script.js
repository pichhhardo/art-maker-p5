//    NOTE: these lines that start with two slashes are called COMMENTS.
//    Comments are ignored by the computer; they're great for writing notes to yourself!


// Creating the variables OUTSIDE of any function makes sure we can access them ANYWHERE in our file. (Called GLOBAL variables)
let squareWidth = 75;
let xPos = 0;
let yPos = 0;


// The code inside the setup function will run ONLY ONCE when you open the web page
function setup() {
  
  // The createCanvas function creates a <canvas> element on the page after it loads, which lets us draw stuff!
  createCanvas(500, 500);
   
}


// The code inside the draw function will run OVER AND OVER again
function draw() {
    
  // Let's animate! To make shapes MOVE, we need to now use our shape functions in here instead.
  
  // EXAMPLE:
  // Step 1: draw a blue square on EVERY frame, using our variables
  fill("blue");
  rect(xPos, yPos, squareWidth, squareWidth);
  
  // Step 2: Change the xPos to become equal to its previous value, plus 10
  //        So on every animation frame, the square is redrawn at 10 pixels past its previous location
  xPos = xPos + 10;
  
}





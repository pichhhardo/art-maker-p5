console.log("if you see this message in the console, then we know this JavaScript file is running!");

// The code inside the setup function will run ONLY ONCE when you open the web page
function setup() {
  
  // The createCanvas function creates a <canvas> element on the page after it loads, which lets us draw stuff!
  createCanvas(500, 500);
  
  // Fix for retina displays where clear() only clears the top left corner of the canvas)
  pixelDensity(1);

  // 2 frames per second -- slow animation to more easily see what's happening on each frame
  frameRate(2);
    
  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Include your code here inside the setup() function
  // to draw some stuff once when the page loads.

  



  ////////////////////////////////////////////////////////////////////////////////////////////////
}  // end of setup() function



// The code inside the draw function will run OVER AND OVER again
function draw() {
  
  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Include your code here inside the draw() function
  // to draw stuff OVER AND OVER again, creating an animation!
  
  let counter = 0;

  while (  counter < 100   ) {

    let x = random(0, 500);
    let y = random(0, 500);
    
    let w = random(0, 50);
    let h = random(0, 50);
    
    let r = random(0, 500);
    let g = random(0, 500);
    let b = random(0, 500);
    
    
    fill(r, g, b);
    
    rect(x,y,w,h);
    
    
    counter++;
  }
  
  
  

  ////////////////////////////////////////////////////////////////////////////////////////////////
  

}  // end of draw() function


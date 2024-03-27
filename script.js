// alert("Hello! I am an alert box!!");

// css style variables ---------------------------------------------------------------------------------------------
let txtColor = '#FFFF00'
let fontSize1 = '10vw'
let pSize = '1vw'
let imgSize = '2vw'
let fontFam = 'League Gothic'
let bkgColor = '#E44F45'


// html style variables -------------------------------------------------------------------------------------------
let message = "New Articles Coming Soon!"
let imgBagel = document.getElementsByClassName("bagel")
let imgBakers = document.getElementsByClassName("bakers")
let imgStar = document.getElementsByClassName("yellowstar")
let textSubscribe = "Subscribe to The Richmond Review!"
let year = ' JAN 2024'
let corner = document.getElementsByClassName("corner")
let yellowFlower = document.getElementById("yellowflower");




// Access 5 elements by ID and change their css in javascript using your variables---------------------------------

// make title yellow
let titleDiv = document.getElementById("title");  
titleDiv.style.color = 'yellow'

// change "to be continued" font size 
let continueDiv = document.getElementById("continue");
continueDiv.style.fontSize =fontSize1

// change text color to red 
continueDiv.style.color = '#E44F45'

// change author name to pink
let authorName= document.getElementById("author-name");
authorName.style.color = '#E48BB3'

// change author font size
authorName.style.fontSize = '2.7vw'




// Access 5 elements by CLASS and change their css in javascript using your variables -----------------------------

// change dots padding
let dots = document.getElementsByClassName("dots");
for (let i = 0; i < dots.length; i++) {
    dots[i].style.padding = '1px'; }

// resize paragraph text
let paragraphDiv = document.getElementsByClassName("paragraph");
for (let i = 0; i < paragraphDiv.length; i++) {
    paragraphDiv[i].style.fontSize = ".9 vw";}

// resize font size for quote
let quote = document.getElementsByClassName('largequote')
for (let i = 0; i < quote.length; i++) {
    quote[i].style.fontSize = '5.5vw'; }

// resize yellow flowers
    let flowers = document.getElementsByClassName('flower');
    for (let i = 0; i < flowers.length; i++) {
        flowers[i].style.width = '12vw'; // Set desired width
        flowers[i].style.height = '12vw'; // Set desired height
    }




// Access 5 elements by ID and change their innerHTML in javascript using your variables----------------------------

// change date to JAN 2024
let date = document.getElementById("date");
date.innerHTML = year 
date.style.fontSize = '5vw'

// change author name 
authorName.innerHTML = "Clarisse.Kim"

// change red flower into a yellow flower
let redFlower = document.getElementById("redflower2");
redFlower.src = "images/yellowflower2.png";

// Replace Final Text
let endText= document.getElementById("subscribe");
endText.innerHTML = textSubscribe;

// replace left red flower with a star 
let redFlowerLeft = document.getElementById("redflower");
redFlowerLeft.src = 'images/yellow_star-1.png';

// Access 5 elements by CLASS and change their innerHTML using your variables -------------------------------------

// change out the first yellow star
let yellowstar = document.getElementsByClassName('yellowstar2');
for (let i = 0; i < yellowstar.length; i++) {
   yellowstar[i].src = "images/yellowflower2.png";}

// change out the second yellowstar
let yellowStarTop = document.getElementsByClassName('yellowstar');
for (let i = 0; i < yellowStarTop.length; i++) {
   yellowStarTop[i].src = "images/yellowflower2.png";}

let urlName = document.getElementsByClassName('url-name');
for (let i = 0; i < urlName.length; i++) {
    urlName[i].src = "richmondsunsetnews"; }





// Add 5 if statements based on styles or content to change your HTML or CSS --------------------------------------

// Set the HTML content back to the element
continueDiv.innerHTML = "to be continued";

// CHANGE "TO BE CONTINUED" TO "NEW ARTICLES COMING SOON" ***************************

// Add click event listener to continueDiv
let isMessageDisplayed = false; // Flag variable to track the state
continueDiv.addEventListener("click", function() {
    // Toggle between continueDiv and message
    if (isMessageDisplayed) {
        continueDiv.innerHTML = "to be continued";
    } else {
        continueDiv.innerHTML = message;
    }
    // Update the flag variable
    isMessageDisplayed = !isMessageDisplayed;
});

// CHANGE COLOR OF ROUNDBOX WHEN YOU CLICK *****************************************

// // Initialize the currentColor variable to an empty string
// let currentColor = "";

// // Get a reference to the roundBox element
// const roundBox = document.getElementById("roundBox");

// // Add a click event listener to the roundBox element
// roundBox.addEventListener("click", changeColor);

// function changeColor() {
//     // Declare the variable inside the function scope
//     let currentColor;
    
//     // Check the current state
//     if (currentColor === "") {
//         roundBox.style.backgroundColor = "#E44F4F";
//         currentColor = "#E44F4F";
//     } else if (currentColor === "#E44F4F") {
//         roundBox.style.backgroundColor = "#E48BB3";
//         currentColor = "#E48BB3";
//     } else if (currentColor === "#E48BB3") {
//         roundBox.style.backgroundColor = "#E44F45";
//         currentColor = "#E44F45";
//     } else if (currentColor === "#E44F45") {
//         roundBox.style.backgroundColor = "#6A70A7";
//         currentColor = "#6A70A7";
//     } else if (currentColor === "#6A70A7") {
//         roundBox.style.backgroundColor = "white"; 
//         currentColor = ""; 
//     }
// }

// Initialize the currentColor variable to track the current color index
let currentColorIndex = 0;

// Define an array of colors to cycle through
const colors = ["#E44F4F", "#E48BB3", "#E44F45", "#6A70A7", "white"];

// Get a reference to the roundBox element
const roundBox = document.getElementById("roundBox");

// Add a click event listener to the roundBox element
roundBox.addEventListener("click", changeColor);

function changeColor() {
    // Change the background color to the next color in the array
    roundBox.style.backgroundColor = colors[currentColorIndex];
    
    // Increment the color index
    currentColorIndex++;
    
    // If the index exceeds the length of the colors array, reset it to 0
    if (currentColorIndex === colors.length) {
        currentColorIndex = 0;
    }
}

// CHANGE OPACITY OF BAGEL WHEN CLICKED ON ******************************************

// Reference to the imgBagel element
const imgBagelElement = document.getElementsByClassName("bagel")[0]; // Assuming there's only one element with this class name

//  click event listener 
imgBagelElement.addEventListener("click", changeOpacity);

// Flag variable 
let isOpaque = true;

function changeOpacity() {
    // Check the current state
    if (isOpaque) {
        // If the bagel is currently opaque, make it transparent
        imgBagelElement.style.opacity = "0"; // Set desired opacity (example: 50%)
    } else {
        // If the bagel is currently transparent, make it opaque
        imgBagelElement.style.opacity = "1"; // Set default opacity (example: 100%)
    }
    // Toggle the state
    isOpaque = !isOpaque;
}

// MAKE CORNER FLIP*****************************************************************

// Reference to the imgCorner element
const imgCornerElement = document.getElementsByClassName("corner")[0]; // Assuming there's only one element with this class name

// Click event listener 
imgCornerElement.addEventListener("click", changeCornerOpacity);

// Flag variable 
let isCornerOpaque = true;

function changeCornerOpacity() {
    // Check the current state
    if (isCornerOpaque) {
        // If the corner is currently opaque, make it transparent
        imgCornerElement.style.opacity = "0"; 
    } else {
        // If the corner is currently transparent, make it opaque
        imgCornerElement.style.opacity = "1"; 
    }
    // Toggle the state
    isCornerOpaque = !isCornerOpaque;
}

// CHANGE TITLE FONT**************************************************************

// Reference to the title element
const titleElement = document.getElementById("title");

// Flag variables to track the font state
let isBold = false;
let isLargeFont = false;

// Click event listener for the title element
titleElement.addEventListener("click", changeFontStyle);

function changeFontStyle() {
    // Check the current font state
    if (isBold) {
        // If the font is currently bold, change it to normal
        titleElement.style.fontFamily = "League Gothic"; // Set normal font weight
    } else {
        // If the font is currently normal, change it to bold
        titleElement.style.fontFamily = "Arial, Helvetica, sans-serif"; // Set bold font weight
    }
    
    // Toggle the font weight state
    isBold = !isBold;
    
    // Check the current font size state
    if (isLargeFont) {
        // If the font size is currently large, change it to normal
        titleElement.style.fontSize = "3.8vw"; 
    } else {
        // If the font size is currently normal, change it to large
        titleElement.style.fontSize = "2vw";
    }
    
    // Toggle the font size state
    isLargeFont = !isLargeFont;
}
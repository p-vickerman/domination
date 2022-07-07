/*
Part One - Querying DOM Elements

These functions don't need to return anything.

Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function always does the same thing, it requires no parameters!
Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.
Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.
Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>
Now use it to remove the first two items from that list. You'll need to call it twice!
Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
Try using it to change the size of any text on the page.
*/

function strikethrough(){
   let linestrike = document.querySelector('li');
   // let linestrike = document.querySelector('#agruments li')
   linestrike.style.textDecoration = "line-through" 
}
strikethrough();

function imageIdSource (id, url){
    let image = document.querySelector(id);
    //could also be let img = document.querySelector(`#${id}`) by doing this, i don't need the # when calling the function
    image.style.height = '300px'
    image.src = url;
}

imageIdSource("#image-1", 'https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-superJumbo-v2.jpg')
imageIdSource("#image-2", 'https://loginportal.funnyjunk.com/pictures/This_afc741_5991597.jpg')
imageIdSource("#image-3", 'https://loginportal.funnyjunk.com/pictures/This_04fa4c_5991597.jpg')


function removeFirst() {
    let removeItem = document.querySelector("#arguments li");
    removeItem.remove();
}
removeFirst()
removeFirst()

function changeSize(size, id){
    let sizer = document.getElementById(id);
    sizer.style.fontSize = size;

}

changeSize('100px', 'thing-1');
changeSize('150px', 'heading');

//Part Two
/*
Part Two - DOM Elements as Function Parameters

These functions will take in DOM elements as parameters. They also don't need to return anything.

Write a function that takes in a DOM element and appends it to the Arguments <ul>.
Let's use it! Create an image element in Javascript and pass it into your function.
Write a function that takes in an image element and modifies its height to be 30 pixels.
Let's use it. Query an image element and then pass it into the function.
Write a function that takes in an element and gives it the class invisible.
Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)
*/

function appendArg(domE){
    let unordered = document.querySelector('#arguments');
    unordered.appendChild(domE);
}
let imgDomE = document.createElement("img");
imgDomE.src = 'https://loginportal.funnyjunk.com/pictures/This_9ddee7_5991597.jpg'

appendArg(imgDomE)

function sizeUp(imageElement){
    imageElement.style.height = "30px";
}
sizeUp(imgDomE)

function invisible(domElement){
    // let newClass = document.querySelector(domElement);
    domElement.className = 'invisible';

}
let newClass = document.querySelector("h1");

invisible(newClass);

//Part Three
/*
Part Three - Creating DOM Elements

These functions will return new DOM elements.

Write a function that takes in text and returns a new <li> with the given text parameter as its innerText.
Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).
Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an <h3>) with that text in it.
Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).
*/

function newLi(text){
    let newItem = document.createElement('li');
    newItem.innerText = text;
    return newItem;
}

let newText1 = newLi("What is")
let newText2 = newLi("Happening")

appendArg(newText1)
appendArg(newText2)

function createHeader(hsize, text){
    let header = document.createElement('h' + hsize)
    // let headerName = 'h' + hsize
    // let headerReplacement = document.createElement(headerName);
    header.innertext = text;
    return header;
}

let newHeader1 = createHeader('2','I live in a van')
let newHeader2 = createHeader('3','down by the river!')

appendArg(newHeader1);
appendArg(newHeader2);
// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
//getElementByTagFUnction
function getUSA() {
    const allElements = document.getElementsByTagName('*');
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].textContent === "USA") {
            console.log(allElements[i].innerText);
        }
    }

}

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

// function getPeopleInSales() {
//     const allElements = document.getElementsByTagName('*');
//     for (let i = 0; i < allElements.length; i++) {
//         if (allElements[i].textContent === "Sales") {
//             console.log(allElements[i-1].innerText);
//         }
//     }
// }

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

// function getAnchorChildren() {
//     const anchorElements = document.querySelectorAll('a > span');
//     for (let i = 0; i < anchorElements.length; i++) {

//         console.log(anchorElements[i].innerText);

//     }
//   }

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

// function getHobbies() {

//     let selectAllHobbies = document.querySelector('[name = hobbies]');

//     for (let i = 0; i < selectAllHobbies.length; i++) { 

//     if (selectAllHobbies[i].getAttribute('selected') === 'selected') {
//          console.log(selectAllHobbies[i].innerText);
//          console.log(selectAllHobbies[i].attributes);
//        }
//     }
//   }

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 
function getCustomAttribute() {
    let selectCustom = document.getElementsByTagName('*');
    for (let i = 0; i < selectCustom.length; i++) {
        if (selectCustom[i].hasAttribute('data-customAttr')) {
            console.log(('Element: ' + selectCustom[i].innerText) + ' Attribute: ' + selectCustom[i].getAttribute('data-customAttr'));
        }
    }
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
function getNums() {
    console.log('hello')
    let grabNum1 = document.getElementById('num1').value;
    let grabNum2 = document.getElementById('num2').value;

    let sumUp = document.getElementById('sum');
    console.log(Number(grabNum1));
    if ((Number(grabNum1) === NaN) || (Number(grabNum2) === NaN)) {
        
        sumUp.textContent = 'Cannot Add';
    }
    else {
        
        sumUp.textContent = Number(grabNum1) + Number(grabNum2);
    }


}
let num1 = document.getElementById("num1").addEventListener("change", getNums);
let num2 = document.getElementById("num2").addEventListener("change", getNums);





//changeEvent!!!
//callback function!

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element


// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function selection() {
    let selector = document.querySelector('[name = skills]');
    let option = selector.options.selectedIndex;
    let optionName = selector.children[option].innerText;
    alert(`Are you sure ${optionName} is one of your skills?`);
}
let skillSelector = document.querySelector('[name = skills]').addEventListener("change", selection);



// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

let skillSelector = document.querySelector('[name = skills]').addEventListener("change", selection);

//changeEvent!!!

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

//mouseOver event!!


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

//set Interval
//Either 'new Date' or
//date.now


// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

//set time out

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use ****recursion.
// On each node, call func(node).

//

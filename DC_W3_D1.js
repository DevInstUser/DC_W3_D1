/// create HTML elements : input box and 2 buttons
var body = document.querySelector("body");
var h1 = document.createElement("h1");
var input_box = document.createElement("input");
var button_add = document.createElement("button");
var button_del = document.createElement("button");
var ul = document.createElement("ul");

body.appendChild(h1);

h1.innexHTML = "Chopping List";

/// locate the created HTML elements under body HTML element + add function name on buttons
body.appendChild(input_box);
body.appendChild(button_add);
button_add.innerText = "Add";
body.appendChild(button_del);
button_del.innerText = "Del";
body.appendChild(ul);



///  create function to each button
var ul_select = document.querySelector("ul");

/// button add item
function addItem()
{
    
	let list_item = document.createElement("li"); 
	var text = input_box.value ; 
	list_item.innerText = text ;
	ul_select.appendChild(list_item);
	input_box.value="";
    
}

/// button remove all items
function clearAll() 
{
  let list_to_clear = document.querySelector("ul");
  body.removeChild(ul_select);

}

button_add.addEventListener("click",addItem);
button_del.addEventListener("click",clearAll);



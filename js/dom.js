//The Dom Library
//Created by Corey Gumbs
//August 3rd 2018


function createdElement(element, classname, id){
	let elementClass = classname || "";
	let elementId = id || "";

	createElement = document.createElement(element);

	if(elementClass && !elementId){
		createElement.setAttribute('class', elementClass);
	}else if(elementId && !elementClass){
		createElement.setAttribute('id', elementId);
	}else if(elementClass && elementId){
		createElement.setAttribute('class', elementClass);
		createElement.setAttribute('id', elementId);
	}

	return createElement;
}

console.log(createdElement('div'));

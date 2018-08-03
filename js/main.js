//Written By Corey Gumbs
//August 2, 2018
//All Star Code Lesson


///function that creates element and adds class or id to element
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

function appendElementByClassName(className, element){
	appendedElement =  document.getElementsByClassName(className);
}



// console.log(userResults(data[0][1]));

// let docBody = document.body;
// let createContainerDiv = document.createElement("div");

// //give container div a class
// createContainerDiv.setAttribute("id", "container");


// //create container div in body
// docBody.appendChild(createContainerDiv);

// //loop to create profile container divs and content 
// //for each user from data.js 
// for(let i = 0; i < data.results.length; i++){

// 	//get container div
// 	let getProfileContainer = document.getElementById("container");
	
// 	//create profile container div
// 	profileDiv = document.createElement("div");
	
// 	//append  profile div to container
// 	getProfileContainer.appendChild(profileDiv);
	
// 	//give profile div class	
// 	profileDiv.setAttribute("class", "profile");

// 	//get profile container div
// 	let getProfileDiv = document.getElementsByClassName("profile");

// 	//create profile img div 
// 	let imgDiv = document.createElement("div");

// 	//for loop that add an img container div to the profile div
// 	for(let i = 0; i < getProfileDiv.length; i++){
		
// 		//add img container div to profile div
// 		getProfileDiv[i].appendChild(imgDiv);

// 		//add class to img container div
// 		imgDiv.setAttribute("class", "img-container");

// 	}
// 	//create img tag
// 	let createProfileImgTag = document.createElement("img");
		
// 	//give img tag class attribue
// 	createProfileImgTag.setAttribute("class", "profile-img");
		
// 	//append img to profile img container
// 	imgDiv.appendChild(createProfileImgTag); 

// }

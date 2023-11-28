// Initialization
let buttons = document.querySelectorAll(".btn-c-m");
let searchInput = document.querySelector('#searchInput');
let searchResults = document.querySelector('#searchResults');

// Add an event listener to the input field to trigger search
searchInput.addEventListener('input', performSearch);

// [FONT SIZE CHANGER]
function updateButtonFontSize() {
  let screenWidth = window.innerWidth;
  buttons.forEach(button => {
    if (screenWidth < 1200 && screenWidth > 992) {
      button.style.fontSize = "14pt";
    } 
    else if (screenWidth < 992) {
      button.style.fontSize = "18pt";
    }
    else {
      button.style.fontSize = "18pt";
    }
  });
}

// Call the function once to set the initial font size
updateButtonFontSize();

// Call the function every time the window is resized
window.addEventListener("resize", updateButtonFontSize);


// Initialization
const yourContentArray = [
	// Unit 1
	{
		title: '1.1: Make a Recipe',
		link: '../HTML/Unit1/1.1.html',
		content: 'My first project, featuring the 5 most basic tags.'
	},
	{
		title: '1.2: Make a Card',
		link: '../HTML/Unit1/1.2.html',
		content: 'My second project, featuring basic JavaScript code.'
	},
	{
		title: '1.3: Tell a Story',
		link: '../HTML/Unit1/1.4.html',
		content: 'This project features my first experience with div tags.'
	},
	{
		title: '1.4: Design a Poster',
		link: '../HTML/Unit1/1.4.html',
		content: 'This project shows off my first use of borders via Cascading Style Sheets.'
	},
	{
		title: '1.5: Make a Robot',
		link: '../HTML/Unit1/1.5.html',
		content: 'This project was my first experience with positioning objects using the absolute positioning style.'
	},
	{
		title: '1.6: Web Showcase',
		link: '../HTML/Unit1/1.6.html',
		content: 'This project is my first iteration of this website, featuring a basic layout.'
	},
	{
		title: '1.7: Team Task - Web Design',
		link: '../HTML/Unit1/1.7.html',
		content: 'This project was my first time doing a project with multiple people, showing off some wacky vehicles.'
	},
	// Unit 2
	{
		title: '2.1: Build a Town',
		link: '../HTML/Unit2/2.1.html',
		content: 'This was my first time using Scaleable Vector Graphics icons.'
	},
	{
		title: '2.2: Animate a Ferris Wheel',
		link: '../HTML/Unit2/2.2.html',
		content: 'This was the first time I used animations in Cascading Style Sheets.'
	},
	{
		title: '2.3: Advanced CSS Scene',
		link: '../HTML/Unit2/2.3.html',
		content: 'This was my first overly ambitious project, which had to be massively scaled down due to lack of time.'
	},
	{
		title: '2.4: Responsive Portfolio',
		link: '../HTML/Unit2/2.4.html',
		content: 'This project was my first time using the Bootstrap framework, which I have continued to use to this day.'
	},
	{
		title: '2.5: Responsive Personal Website',
		link: '../HTML/Unit2/2.5.html',
		content: 'This project is this project.'
	},
	// Unit 3
	{
		title: '3.1: Intro to JS Tutorial',
		link: '../HTML/Unit3/3.1.html',
		content: 'This was my first time making actual code, in the form of JavaScript.'
	},
	{
		title: '3.2: First JS Website',
		link: '../HTML/Unit3/3.2.html',
		content: 'This was the second time I used JavaScript in an actual website.'
	},
	{
		title: '3.3: Advanced CSS Scene',
		link: '../HTML/Unit3/3.3.html',
		content: 'This was my first proper &#39;game&#39;, about guessing numbers (with a twist).'
	},
	{
		title: '3.4: Responsive Portfolio',
		link: '../HTML/Unit3/3.4.html',
		content: 'This project my second &#39;game&#39;, about guessing colors.'
	},
	{
		title: '3.5: Minigame',
		link: '../HTML/Unit3/3.5.html',
		content: 'This project was a collaborative effort to make an actual game, and we did it, <em>kind of</em>.'
	},
];
// [SEARCH]

// Function to perform the search
function performSearch() {
	const query = searchInput.value.toLowerCase();
	const results = []; // Store search results here

	// Loop through your content to find matches
	for (const item of yourContentArray) {
		if (item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query)) {
			results.push(item);
		}
	}

	// Display the results
	displayResults(results);
}

// Function to display search results
function displayResults(results) {
	// Clear previous results
	searchResults.innerHTML = '';

	// Display results in the results container
	if (results.length === 0 || searchInput.value == '') {
		const noResultsElement = document.createElement('div');
		noResultsElement.innerHTML = `No Results Found`;
		searchResults.appendChild(noResultsElement);
	}
	else {
		// Display results in the results container
		for (const result of results) {
			const resultElement = document.createElement('div');
			if (searchInput.value.trim() !== "") {
				resultElement.innerHTML = `<h3><a href="${result.link}" class="link">${result.title}</a></h3><p>${result.content}</p>`;
				searchResults.appendChild(resultElement);
			}
			else {
				resultElement.innerHTML = `No Results Found`;
				searchResults.appendChild(resultElement);
				break;
			}
		}
	}
}

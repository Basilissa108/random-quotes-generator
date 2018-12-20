// quotes array of json objects
var quotes = [
	{
		quote    : "Don’t compare yourself with anyone in this world…if you do so, you are insulting yourself.",
		source  : "Bill Gates",
		tag      : "Inspirational"
	},
	{
		quote    : "The greatest thing in the world is to know how to belong to oneself.",
		source  : "Michel de Montaigne",
		citation : "The Complete Essays",
		date     : 1580,
		tag      : "Inspirational"
	},
	{
		quote    : "Real spirituality is about getting the bullshit out of your life and getting real.",
		source  : "Bryant McGill",
		tag      : 'Inspirational'
	},
	{
		quote    : "Your radiant energy is waiting to shine through if you’re willing to do the work to release it.",
		source  : "Kimberley Blaine",
		tag      : "Affirmative"
	},
	{
		quote    : "Y. That perfect letter. The wishbone, fork in the road, empty wineglass. The question we ask over and over.",
		source  : "Marjorie Celona",
		citation : "Y",
		date     : 2017,
		tag      : "Other"
	},
	{
		quote    : "Success is doing ordinary things extraordinarily well.",
		source  : "Jim Rohn",
		tag      : "Business"
	},
	{
		quote    : "Nothing great was ever built on excuses. You can’t whine your way through life. Kick your inner-whiner’s ass and get to living the good life.",
		source  : "Bryant McGill",
		tag      : "Business"
	},
	{
		quote    : "Don’t try to win over the haters; you are not a jackass whisperer.",
		source  : "Scott Stratten",
		citation : "Unmarketing: Stop Marketing. Start Engaging.",
		date     : 2010,
		tag      : "Business"
	},
	{
		quote    : "Do what you like, so long as it is intelligent.",
		source  : "Paul Gauguin",
		tag      : "Affirmative"
	},
	{
		quote    : "Use your talents. They are precious gifts given to you to put to work.",
		source  : "Robyn O'Brien",
		tag      : "Business"
	},
	{
		quote    : "If the grass looks greener on the other side, stop staring, comparing, and complaining, and start watering the grass you’re standing on.",
		source  : "Eugene Cho",
		tag      : "Inspirational"
	},
	{
		quote    : "If we did all the things we are capable of, we would literally astound ourselves.",
		source  : "Thomas Edison",
		tag      : "Affirmative"
	},
	{
		quote    : "Science is organised knowledge. Wisdom is organised life.",
		source  : "Immanuel Kant",
		tag      : "Inspirational"
	},
	{
		quote    : "Intelligence is the ability to adapt to change.",
		source  : "Stephen Hawkin",
		citation : "At his Oxford University graduation",
		tag      : "Business"
	},
	{
		quote    : "There’s a difference between challenging yourself and overwhelming yourself.",
		source  : "Anonymous",
		citation : "Something that took me too many years in school to realise",
		tag      : "Affirmative"
	}
]

//
var usedQuotes = [];

// function to return a random quote
function getRandomQuote() {
  // generate a random number within the possible indexes
  var random = Math.floor(Math.random() * (quotes.length - 1));
  // use the random number as index to get the object at the position in the quotes array
  var quote = quotes[random];
  // add quote to usedQuotes array
  usedQuotes.push(quote);
  // remove quote from quotes array
  quotes.splice(random, 1);
  // check if the quotes array is empty
  if(quotes.length === 0){
    // assign usedQuotes to quotes
    quotes = usedQuotes;
    // assign an empty array to usedQuotes
		usedQuotes = [];
	};
  // use the random number as index and return the object at the position in the quotes array
  return quote;
} 

// function to print the quote
function printQuote() {
  // get a random quote
  var quote = getRandomQuote();
  // string literal with quote and source
  var html = `<p class="quote">${quote.quote}</p>
              <p class="source">${quote.source}`;
  // check if the quote has a citation and add it to the html string
  if(quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  // check if the quote has a date and add it to the html string
  if(quote.date) {
    html += `<span class="year">${quote.date}</span>`;
  }
  // check if the quote has a tag and add it to the html string
  if(quote.date) {
    html += `<p class="tag">${quote.tag}</p>`;
  }
  // add a closing tag to the html string
  html += `</p>`;
  // replace the innerHtml of the element with the id quote-box with the new html string
  document.getElementById("quote-box").innerHTML = html;
  // set background color on the body
  document.body.style.backgroundColor = getRandomColor();
  // clear interval
  clearInterval(interval);
  // interval to call the printQuote function every 5 seconds
  interval = setInterval(printQuote, 5000);
}

// function to return a random number between 0 and 256
function randomRGB(){
  return Math.floor(Math.random() * 256 );
}

// function to return random rgb color
function getRandomColor(){
  // call randomRGB to get a number between 0 and 256 for R, G and B values and generate a string to use as css value
  return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
}

// event handler to call the printQuote function when the button with the id loadQuote is called
document.getElementById("loadQuote").addEventListener("click", printQuote, false);

// interval to call the printQuote function every 5 seconds
var interval = setInterval(printQuote, 5000);
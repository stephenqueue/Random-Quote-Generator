//quotes array
var quotes = [
  {
    quote: "The Way To Get Started Is To Quit Talking And Begin Doing.",
    source: "Walt Disney",
    citation: "Publication",
    year: 1940
  },
  {
    quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    source: "Winston Churchill",
    citation: "",
    year: ""
  },
  {
    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
    source: "Will Rogers",
    citation: "Publication",
    year: 1915
  },
  {
    quote: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
    source: "Nelson Mandela",
    citation: "",
    year: ""
  },
  {
    quote: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    source: "Steve Jobs",
    citation: "Article",
    year: 2004
  },
  {
    quote: "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
    source: "Rob Siltanen",
    citation: "Article",
    year: 1970
  },
  {
    quote: "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    source: "Og Mandino",
    citation: "Publication",
    year: 1920
  },
  {
    quote: "If you don’t make the time to work on creating the life you want, you’re eventually going to be forced to spend a LOT of time dealing with a life you DON’T want.",
    source: "Kevin Ngo",
    citation: "Publication",
    year: 2013
  },
  {
    quote: "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
    source: "Johann Wolfgang Von Goethe",
    citation: "Article",
    year: 1875
  },
  {
    quote: "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
    source: "Hasidic Proverb",
    citation: "Publication",
    year: 2016
  },

]; //end of quotes array

//selects a random quote from the array and returns a value
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
console.log(getRandomQuote());

//printQuote function
function printQuote() {

  //call getRandomQuote function and store inside variable
  var print = getRandomQuote();
  //setting up variable to construct an HTML string
  var html;
  //displays final HTML string to the page
  html += '<p class = "quote">' + print.quote + '</p>' +
  '<p class = "source">' + print.source +
  '<span class = "citation"> ' + print.citation + '</span>' +
  '<span class = "year"> ' + print.year + '</span>' +
  '</p>';

  document.getElementById('quote-box').innerHTML = html;

} // end printQuote function

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

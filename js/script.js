//global variables
var message;

//quotes array
var quotes = [
  {
    quote: "The Way To Get Started Is To Quit Talking And Begin Doing.",
    source: " - Walt Disney",
  },
  {
    quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    source: " - Winston Churchill",
  },
  {
    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
    source: " - Will Rogers",
  },
  {
    quote: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
    source: " - Unknown",
  },
  {
    quote: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    source: " - Steve Jobs",
  },
  {
    quote: "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
    source: " - Rob Siltanen",
  },
  {
    quote: "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    source: " - Og Mandino",
  },
  {
    quote: "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    source: " - Og Mandino",
  },
  {
    quote: "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
    source: " - Johann Wolfgang Von Goethe",
  },
  {
    quote: "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
    source: " - Hasidic Proverb",
  },

]; //end of quotes array

//selects a random quote from the array and returns arandomly selected quote object
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
console.log(getRandomQuote());

//printQuote calls getRandomQuote function
function printQuote() {
  var newQuote = getRandomQuote();


}




// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

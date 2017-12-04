//quotes array
var quotes = [
  {
    quote: "The Way To Get Started Is To Quit Talking And Begin Doing.",
    source: " - Walt Disney",
    citation: "",
    year: ""
  },
  {
    quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    source: " - Winston Churchill",
    citation: "",
    year: ""
  },
  {
    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
    source: " - Will Rogers",
    citation: "",
    year: ""
  },
  {
    quote: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
    source: " - Unknown",
    citation: "",
    year: ""
  },
  {
    quote: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    source: " - Steve Jobs",
    citation: "",
    year: ""
  },
  {
    quote: "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
    source: " - Rob Siltanen",
    citation: "",
    year: ""
  },
  {
    quote: "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    source: " - Og Mandino",
    citation: "",
    year: ""
  },
  {
    quote: "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    source: " - Og Mandino",
    citation: "",
    year: ""
  },
  {
    quote: "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
    source: " - Johann Wolfgang Von Goethe",
    citation: "",
    year: ""
  },
  {
    quote: "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
    source: " - Hasidic Proverb",
    citation: "",
    year: ""
  },

]; //end of quotes array

//selects a random quote from the array and returns a value
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
console.log(getRandomQuote());

//printQuote calls getRandomQuote function and stoes in variable
function printQuote() {
  var newQuote = getRandomQuote();

  //for loop to iterate throguh each object in quotes array 

  for (var i = 0; i < quotes.length; i++) {

    //construct HTML string to print to the page
    var message = '<p>' + quotes[quote] + '</p>';
    message += '<p>' + quotes[source] + '</p>';
    message += '<p>' + quotes[citation] + '</p>';
    message += '<p>' + quotes[year]+ '</p>';
  }

} // end printQuote function




// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Variables
let person = document.querySelector('.person');
let quote = document.querySelector('.quote');
let btn = document.querySelector('#new-quote');

// Quotes array
const quotes = [
  {
    quote: `"Be yourself; everyone else is already taken."`,
    person: "Oscar Wilde"
  },
  {
    quote: `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
    person: "Marilyn Monroe"
  },
  {
    quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
    person: "Albert Einstein"
  },
  {
    quote: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
    person: "Dr. Seuss"
  },
  {
    quote: `"Be the change that you wish to see in the world."`,
    person: "Mahatma Gandhi"
  }
];

// Event listener for the button
btn.addEventListener('click', function () {
  // Generate a random index
  let random = Math.floor(Math.random() * quotes.length);

  // Update the quote and person
  quote.textContent = quotes[random].quote;
  person.textContent = quotes[random].person;
});

import './App.css';

// inspirational NPM that works and returns any random quote

const Quote = require('inspirational-quotes');

function App() {
  return(Quote.getRandomQuote());
}

export default App
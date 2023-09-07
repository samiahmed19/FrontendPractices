const quoteContainer = document.querySelector('.quote');
const newQuoteBtn = document.getElementById('new-quote-btn');

async function fetchRandomQuote() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    if (response.ok) {
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      quoteContainer.innerHTML = `
      <p>   ${randomQuote.text}                       </p> 
      <p> - ${randomQuote.author || 'Unknown author' }</p>
      `;
    } 
    else {
      quoteContainer.innerHTML = 'Failed to fetch a quote.';
    }
  } catch (error) {
    console.error('Error fetching a quote:', error);
    quoteContainer.innerHTML = 'An error occurred while fetching a quote.';
  }
}
newQuoteBtn.addEventListener('click', fetchRandomQuote);
fetchRandomQuote();

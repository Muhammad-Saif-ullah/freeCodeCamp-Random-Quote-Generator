const textEl = document.getElementById('text');
const authorEl = document.getElementById('author');
const newQuoteEl = document.getElementById('new-quote');
const tweetQuoteEl = document.getElementById('tweet-quote');

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];

newQuoteEl.addEventListener('click', () => {
    showRandomQuote();
})

var quotesArr = []
var currQuote = ''
var currAuthor = ''

const showRandomQuote = () => {
    if (quotesArr) {
        const index = Math.floor(Math.random() * quotesArr.length);
        currQuote = quotesArr[index].quote
        currAuthor = quotesArr[index].author
    }

    textEl.innerHTML = `<i class="fa fa-quote-left"></i> ${currQuote}`;
    authorEl.textContent = '- ' + currAuthor;

    changeColor();
}

const changeColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[index];
    textEl.style.color = colors[index];
    authorEl.style.color = colors[index];
    newQuoteEl.style.backgroundColor = colors[index];
    tweetQuoteEl.style.backgroundColor = colors[index];
}

document.addEventListener('DOMContentLoaded', () => {
    // Fetching the quotes
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => {
        quotesArr = data.quotes.filter(quote => quote.quote.length <= 100);
        showRandomQuote();
    })
})
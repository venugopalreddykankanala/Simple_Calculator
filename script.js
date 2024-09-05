// Array of quotes
const quotes = [
    "Mathematics is the language in which God has written the universe. — Galileo Galilei",
    "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. — William Paul Thurston",
    "Pure mathematics is, in its way, the poetry of logical ideas. — Albert Einstein",
    "Mathematics is the most beautiful and most powerful creation of the human spirit. — Stefan Banach",
    "Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers. — Shakuntala Devi",
    "Mathematics is the science of patterns. — Marcus du Sautoy",
    "The book of nature is written in the language of mathematics. — Galileo Galilei",
    "Mathematics is the queen of the sciences. — Carl Friedrich Gauss",
    "Mathematics is the art of giving the same name to different things. — Henri Poincaré"
];

// Function to display a new quote
function displayRandomQuote() {
    const quoteElement = document.querySelector('.quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Calculator functionality
function appendValue(value) {
    document.getElementById('display').value += value;
    displayRandomQuote();
}

function clearDisplay() {
    document.getElementById('display').value = '';
    displayRandomQuote();
}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
    displayRandomQuote();
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    displayRandomQuote();
}

// Initialize with a random quote
window.onload = displayRandomQuote;

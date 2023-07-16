// Remove the #main node
document.getElementById('main').remove();

// Create a new header with id and textContent
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';

// Append newHeader to the body
document.body.appendChild(newHeader);

const userInput = document.querySelector('#user-input');
const decipherBtn = document.querySelector('#decipher-btn');
const resultsDiv = document.querySelector('.result');

function rot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const charCode = char.charCodeAt(0);
    const base = 'A'.charCodeAt(0);
    return String.fromCharCode(((charCode - base + 13) % 26) + base);
  });
}

decipherBtn.addEventListener('click', () => {
  const str = userInput.value;
  resultsDiv.innerHTML = `<span>${rot13(str)}</span>`;
})
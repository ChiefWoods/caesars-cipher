function rot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const charCode = char.charCodeAt(0);
    const base = 'A'.charCodeAt(0);
    return String.fromCharCode(((charCode - base + 13) % 26) + base);
  });
}

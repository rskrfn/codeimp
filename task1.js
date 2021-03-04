let kata = "malam"
let halfLength = (kata.length / 2) - (kata.length / 2) % 1
for (i = 0; i < halfLength; i++) {
  if (kata[i] !== kata[kata.length - i - 1]) {
    hasil = "bukan palindrome";
  } else {
    hasil = "palindrome";
  }
}
console.log(kata + " adalah " + hasil)
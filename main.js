/*1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova*/
var j = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var k = prompt("inserisci cognomi");
k = k.charAt(0).toUpperCase() + k.slice(1).toLowerCase();
j.push(k);
j.sort();

var x = 0;
while (x < j.length) {
  document.getElementById("nami").innerHTML += j[x];
  x++;
}
var f = j.indexOf(k) + 1;
document.getElementById("posizione").innerHTML = "la posizione umana :" + f;

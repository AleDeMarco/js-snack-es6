function btn1() {
  const n = parseInt(prompt('Inserisci un numero:'))

  if (n % 2 == 0) {
    document.getElementById('ex1').innerHTML = n;
  }
  else {
    document.getElementById('ex1').innerHTML = n + 1;
  }
//
//   setTimeout(function () {
//     palla.peso = parseInt(prompt('Inserisci il peso della palla:'));
//     document.getElementById('ex1').innerHTML += 'La palla ora pesa: ' + palla.peso + 'kg';
//   }, 1000);
}

function btn2() {
  const n = [0,1,2,3,4,5,6,7,8,9];
  const pari = [];
  const dispari = [];

  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
      pari.push(n[i]);
    }
    else {
      dispari.push(n[i]);
    }
  }
  document.getElementById('ex2').innerHTML =
  `
  <div style="color: green;">${pari}</div>
  <div style="color: red;">${dispari}</div>
  `
  ;
}

function btn3() {
  const parola1 = prompt('Inserire la prima parola:');
  const parola2 = prompt('Inserire la seconda parola:');

  if (parola1.length == parola2.length) {
    document.getElementById('ex3').innerHTML = parola1 + '<br>' + parola2;
  }
  if (parola1.length < parola2.length) {
    document.getElementById('ex3').innerHTML = parola2;
  }
  if (parola1.length > parola2.length) {
    document.getElementById('ex3').innerHTML = parola1;
  }
}

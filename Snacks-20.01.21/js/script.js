function btn1() {
  const bici = [
    {
      nome: 'americana',
      peso: 200
    },
    {
      nome: 'turca',
      peso: 140
    },
    {
      nome: 'egiziana',
      peso: 740
    },
    {
      nome: 'polacca',
      peso: 320
    },
    {
      nome: 'austriaca',
      peso: 210
    },
    {
      nome: 'francese',
      peso: 310
    },
    {
      nome: 'spagnola',
      peso: 310
    },
    {
      nome: 'svizzera',
      peso: 110
    },
    {
      nome: 'tedesca',
      peso: 220
    },
    {
      nome: 'italiana',
      peso: 134
    }
  ];
  let leggera = 1000;

  for (var i = 0; i < bici.length; i++) {
    let {nome, peso} = bici[i];
    if (peso < leggera) {
      leggera = peso;
      leggeraNome = nome;
    }
  }
  document.getElementById('ex1').innerHTML =
  `
  <h2>La bici più leggera è la <span style="color: red;">${leggeraNome}</span> e pesa <span style="color: red;">${leggera}</span> grammi.</h2>
  `
  ;
}

function btn2() {
  const array = ['Zero', 'Uno', 'Due', 'Tre', 'Quattro', 'Cinque', 'Sei', 'Sette', 'Otto', 'Nove', 'Dieci'];
  const min = parseInt(prompt('Inserisci il primo numero tra 0 e 10:'));
  const max = parseInt(prompt('Inserisci il secondo numero maggiore o uguale al primo e minore o uguale a 10:'));
  let arrayUtente = [];

  array.forEach((element, index) => {
    if (index >= min && index <= max) {
      arrayUtente.push(element);
    }
  });
  arrayUtente.forEach((element) => {
    document.getElementById('ex2').innerHTML += element + '<br>';
  });
}

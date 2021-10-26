
// Mail
/*
.1 creare una lista di email finte degli eventuali utenti, quindi creare un array con tutte le email.
.2 chiedere all'utente tramite prompt di inserire la sua email.
.3 controllare che l'email sia valida oppure no
.4 output dicendo all'uitente che l'email è valida (perchè nella lista), oppure no
*/

/*
const email = [
  'perdigon@sewce.com',
  'perdigon@gmailni.com',
  'perdigon@noisemails.com',
  'perdigon@teeoli.com',
  'perdigon@onlinecmail.com',
  'perdigon@howti.site',
  'perdigon@howtiss.site',
  'perdigon@howti.site',
  'perdigon@beaplumbereducationok.sale',
  'perdigon@psasey.site',
  'perdigon@ccvisal.xyz',
  'perdigon@1ki.co',
  'perdigon@psasey.site',
  'perdigon@mexcool.com',
]
console.log(email);

let emailValida = prompt('inserisci qui la tua email');
console.log(emailValida);

for (let i = 0; i < email.length; i++) {
  console.log(email [i]);
  

  if (email[i] === emailValida) {
    emailValida = true;
    console.log('puoi accedere');
  } else if (email[i] !== emailValida) {
    console.log('non puoi accedere');
  }
}

let accediONo = document.getElementById('output');

if (emailValida == true) {
  accediONo.innerHTML = 'puoi accedere';
  console.log('puoi accedere');
} else {
  accediONo.innerHTML = 'non puoi accedere';
  console.log('non puoi accedere');
}*/




//Gioco dei dadi

/*
.1 creare un ciclo da 1 a 6 che genera un numero randome sia per il pc che per l'utente
.2 far uscire il numero e controllare a chi è uscito quello più alto
.3 dichiarare il vincitore
*/


let pc = Math.floor(Math.random() * 6) +1;
console.log('pc', pc);
let adolfo = Math.floor(Math.random() * 6) +1;
console.log('adolfo',adolfo);

let winner = document.getElementById('output');

if (pc<adolfo) {
  winner.innerHTML = 
  `Hai vinto Adolfo perchè il tuo dado è uscito ${adolfo} mentre il pc ${pc} , il tuo numero è più alto e quindi hai vinto`;
} else if (pc>adolfo) {
  winner.innerHTML = 
  `Mi dispiace Adolfo, hai perso. È uscito ${adolfo} mentre il pc ${pc} , ritenta!`;
} else if (pc==adolfo) {
  winner.innerHTML = 
  `Pari! Entrambi avete tirato ${pc, adolfo}`;
}



// creo le variabili
const inputEl = document.querySelector('input');
const btnMailEl = document.querySelector('button');
const messaggioEl = document.querySelector('.messaggio')

// creo lista array per mail che possono accedere

const mailValide = ['ciao@comestai.it', 'ciao1@comestai.it', 'ciao2@comestai.it']

// scateno il pulsante Verifica
btnMailEl.addEventListener('click', function() {
  
  // ottengo il valore inserito nell'imput
  const inputMail = inputEl.value

  
  
  // faccio un ciclo sulla lista delle mail per verificare se sono uguali a mail valide
  for (let i = 0; i < mailValide.length; i++) {

    messaggioEl.innerHTML = '';
    
    if (inputMail === mailValide[i]) {
      console.log('accesso eseguito');
      messaggioEl.innerHTML = 'accesso eseguito';
      // esco dal ciclo quando trova una corrisponzenza
      break;
      
    } else if (inputMail !== mailValide[i]) {
      console.log('accesso negato');
      messaggioEl.innerHTML = 'accesso negato';
    }
  }
});




// ########################## DADI ###########################



// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const btnDadi =         document.querySelector('.btn-dadi');
const messaggioUtente = document.querySelector('.messaggio-utente');
const messaggioCPU =    document.querySelector('.messaggio-CPU');
const risultatiFinali = document.querySelector('.risultati-finali');



// scateno tutte le azioni dopo il click sul bottone
btnDadi.addEventListener('click', function() {

  // scelta casuale dado del playerUtente
  const playerUtente = Math.ceil(Math.random() * 6);
  console.log(`Numero Player ${playerUtente}`);

  const playerCPU = Math.ceil(Math.random() * 6);
  console.log(`Numero CPU ${playerCPU}`);

  if (playerUtente > playerCPU) {
    console.log('vince il giocatore umano');
    // messaggioUtente.append(`Punteggio Umano: ${playerUtente}`);
    // messaggioCPU.append(`Punteggio CPU: ${playerCPU}`);
    risultatiFinali.append('Vince l\'umanoide');
  
  } else if (playerUtente < playerCPU) {
    console.log('vince il robot mannacc');
    // messaggioUtente.append(`Punteggio Umano: ${playerUtente}`);
    // messaggioCPU.append(`Punteggio CPU: ${playerCPU}`);
    risultatiFinali.append('Vince il robot mannacc');
  }

  })


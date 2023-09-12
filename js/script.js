


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

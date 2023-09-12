


// creo le variabili
const inputEl = document.querySelector('input');
const btnMailEl = document.querySelector('button');

// creo lista array per mail che possono accedere

const mailValide = ['ciao@comestai.it', 'ciao1@comestai.it', 'ciao2@comestai.it',]

// scateno il pulsante Verifica
btnMailEl.addEventListener('click', function() {

  // ottengo il valore inserito nell'imput
  const inputMail = inputEl.value

  // imposto l'accesso come negato
  let accessoConsentito = false 

  // faccio un ciclo sulla lista delle mail per verificare se sono uguali a mail valide
  for (let i = 0; i < mailValide.length; i++) {

    if (inputMail === mailValide[i]) {
      // se hai trovato la corrispondenza imposta l'accesso valido
      accessoConsentito = true;
      console.log('accesso eseguito');
    
    }
  }


});

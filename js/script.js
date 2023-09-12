


// creo le variabili
const inputEl = document.querySelector('.input');
const btnMail = document.querySelector('button');

// creo lista array per mail che possono accedere
const mailValide = ['ciao@comestai.it', 'ciao1@comestai.it', 'ciao2@comestai.it',]


// scateno il pulsante Verifica
btnMail.addEventListener('click', function() {
  
  if (inputEl !== mailValide) {
    console.log('non puoi accedere');

  } else if (inputEl === mailValide) {
    console.log('accesso eseguito')
  }

});

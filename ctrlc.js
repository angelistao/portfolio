function copiarEmail() {
    /* Selecionamos por ID o nosso input */
    var textoCopiado = "angel.mahlke@gmail.com"
  
    /* Deixamos o texto selecionado (em azul) */
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); /* Para mobile */
  
    /* Copia o texto que está selecionado */
    document.execCommand("copy");
  
    alert("Email copiado para a área de transferência!");
  }
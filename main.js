function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
  
    if (elemento && elemento.localName === 'audio') {
      elemento.play();
    } else {
      console.log('Elemento não encontrado ou seletor inválido');
    }
  }
  
  const ListaDeTeclas = document.querySelectorAll('.tecla');
  
  for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `som-${instrumento}`; // template string
  
    tecla.onclick = function () {
      tocaSom(idAudio);
    };
  
    tecla.onkeydown = function (evento) {
      if (evento.code === "Space" || evento.code === "Enter") {
        tecla.classList.add('Ativo');
        tocaSom(idAudio);
      }
    };
  
    tecla.onkeyup = function () {
      tecla.classList.remove('Ativo');
    };
  }
  
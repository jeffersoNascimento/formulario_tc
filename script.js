// Função para ajustar o estilo do conteúdo para dispositivos móveis
function ajustarParaDispositivoMovel() {
  const header = document.querySelector('header');
  const text1 = document.querySelector('.text1');
  const text2 = document.querySelector('.text2');
  const link = document.querySelector('.link');

  if (window.innerWidth <= 576) { // Verifica se a largura da tela é menor ou igual a 576 pixels (celulares)
      header.style.height = '200px'; // Reduz a altura do header
      text1.style.textAlign = 'center'; // Centraliza horizontalmente o texto
      text2.style.textAlign = 'center'; // Centraliza horizontalmente o texto
      text1.style.display = 'flex'; // Usa flexbox para centralizar verticalmente o texto
      text1.style.alignItems = 'center'; // Centraliza verticalmente o texto
      text2.style.display = 'flex'; // Usa flexbox para centralizar verticalmente o texto
      text2.style.alignItems = 'center'; // Centraliza verticalmente o texto
      link.style.fontSize = '16px'; // Ajusta o tamanho do texto do link
  } else {
      header.style.height = '400px'; // Restaura a altura original do header
      text1.style.textAlign = 'left'; // Retorna o alinhamento do texto ao padrão
      text2.style.textAlign = 'left'; // Retorna o alinhamento do texto ao padrão
      text1.style.display = 'block'; // Remove flexbox
      text2.style.display = 'block'; // Remove flexbox
      link.style.fontSize = 'inherit'; // Retorna o tamanho do texto ao padrão
  }
}

// Chama a função quando a página é carregada e quando a janela é redimensionada
window.addEventListener('load', ajustarParaDispositivoMovel);
window.addEventListener('resize', ajustarParaDispositivoMovel);


// Chama a função quando a página é carregada e quando a janela é redimensionada
window.addEventListener('load', ajustarParaDispositivoMovel);
window.addEventListener('resize', ajustarParaDispositivoMovel);


// Chama a função quando a página é carregada e quando a janela é redimensionada
window.addEventListener('load', ajustarParaDispositivoMovel);
window.addEventListener('resize', ajustarParaDispositivoMovel);
  
  // Adicione o evento de clique para cada botão de orçamento
  const botoesOrcamento = document.querySelectorAll('.button');
  botoesOrcamento.forEach(botao => {
  botao.addEventListener('click', function () {
    window.location.href = "index.html";
  });
});

  const botoesOrcamento1 = document.querySelectorAll('.button1');
  botoesOrcamento1.forEach(botao => {
  botao.addEventListener('click', function () {
    window.location.href = "index.html";
  });
});

const botoesOrcamento2 = document.querySelectorAll('.button2');
  botoesOrcamento2.forEach(botao => {
  botao.addEventListener('click', function () {
    window.location.href = "index.html";
  });
});

const botoesOrcamento3 = document.querySelectorAll('.button3');
  botoesOrcamento3.forEach(botao => {
  botao.addEventListener('click', function () {
    window.location.href = "index.html";
  });
});

const botoesOrcamento4 = document.querySelectorAll('.button4');
  botoesOrcamento4.forEach(botao => {
  botao.addEventListener('click', function () {
    window.location.href = "index.html";
  });
});


  function aumentarProduto(catalog) {
    catalog.style.transform = 'scale(1.05)'; /* Aumentando em 5% */
}

function restaurarProduto(catalog) {
    catalog.style.transform = 'scale(1)'; /* Restaurando a escala original */
}

// Função para animar os elementos na entrada da página
function animatePageEntry() {
  const header = document.querySelector('header');
  const cards = document.querySelectorAll('.card-item');
  const textElements = document.querySelectorAll('.text');
  const textElements1 = document.querySelectorAll('.text1');
  const textElements2 = document.querySelectorAll('.text2');

  // Animar o cabeçalho (header)
  header.style.opacity = '0';
  header.style.transform = 'translateY(-30px)';
  setTimeout(() => {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
  }, 500);

  // Animar os elementos de texto
  textElements.forEach((textElement, index) => {
      textElement.style.opacity = '0';
      textElement.style.transform = 'translateY(30px)';
      setTimeout(() => {
          textElement.style.opacity = '1';
          textElement.style.transform = 'translateY(0)';
      }, 800 + index * 200); // Atraso maior para cada elemento de texto
  });

  // Animar os elementos de texto adicionais
  textElements1.forEach((textElement1, index) => {
      textElement1.style.opacity = '0';
      textElement1.style.transform = 'translateY(30px)';
      setTimeout(() => {
          textElement1.style.opacity = '1';
          textElement1.style.transform = 'translateY(0)';
      }, 800 + textElements.length * 200 + index * 200); // Atraso maior para cada elemento de texto adicional
  });

  textElements2.forEach((textElement2, index) => {
    textElement2.style.opacity = '0';
    textElement2.style.transform = 'translateY(30px)';
    setTimeout(() => {
        textElement2.style.opacity = '1';
        textElement2.style.transform = 'translateY(0)';
    }, 800 + textElements.length * 200 + index * 200); // Atraso maior para cada elemento de texto adicional
});

  // Animar os cards
  cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
      }, 800 + (textElements.length + textElements1.length) * 200 + index * 200); // Atraso maior para cada card
  });
}

// Chamar a função de animação ao carregar a página
window.addEventListener('load', animatePageEntry);


function runLightAnimation() {
  const lightEffect = document.querySelector('.light-effect');
  lightEffect.style.animation = 'lightOpacity 2s infinite, lightPass 2s infinite';
  setTimeout(() => {
      lightEffect.style.animation = 'none';
  }, 1900);
}

window.addEventListener('load', runLightAnimation);
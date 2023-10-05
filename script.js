
// Função para animar os elementos na entrada da página
function animatePageEntry() {
  const header = document.querySelector('header');
  const cards = document.querySelectorAll('.card-item');
  const textElements = document.querySelectorAll('.text');
  const textElements1 = document.querySelectorAll('.text1');

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

function voltar() {
  // URL externo a ser aberto em uma nova guia
  var urlExterno = 'https://www.canva.com/design/DAFq4mzO5s0/tdSb389x8zfQM0YiLd2u_A/view?website#2';

  // Abrir o link externo em uma nova guia
  window.open(urlExterno, '_blank');
}
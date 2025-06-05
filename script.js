document.addEventListener("DOMContentLoaded", function () {
  // AOS
  AOS.init({
    duration: 1000,
    once: true
  });

  // EmailJS
  emailjs.init("aMjUbSSIqcwxx14C4");

  const form = document.getElementById("form-contato");
  const mensagem = document.getElementById("mensagem-sucesso");
  const telInput = document.querySelector('input[name="telefone"]');

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm('service_f122t4h', 'template_4gn5hpd', this)
        .then(() => {
          mensagem.classList.remove("oculto");
          form.reset();
        })
        .catch((error) => {
          console.error("Erro ao enviar e-mail:", error);
          alert("Erro ao enviar, tente novamente.");
        });
    });
  }

  if (telInput) {
    telInput.addEventListener("input", function () {
      let num = telInput.value.replace(/\D/g, "");
      num = num.replace(/^(\d{2})(\d)/g, "($1) $2");
      num = num.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
      telInput.value = num;
    });
  }

  // Botão "Quero saber mais"
  const botao = document.querySelector('.btn-fofinho');
  if (botao) {
    botao.addEventListener('click', function(e) {
      e.preventDefault();
      const secao = document.getElementById('quem-somos');
      if (!secao) return;

      secao.classList.remove('oculto');

      setTimeout(() => {
        const animaveis = secao.querySelectorAll('.animar-esquerda, .animar-baixo');
        animaveis.forEach(el => el.classList.add('visivel'));
      }, 50);

      secao.scrollIntoView({ behavior: 'smooth' });
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const imagensGaleria = document.querySelectorAll(".galeria img, .daycare-galeria img, .banhoTosa-galeria img, .hospedagem-galeria img, .pesseio-galeria img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

imagensGaleria.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("ativo");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("ativo");
});

  
});
// Alternar modo claro/escuro
const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;

// Carrega o tema salvo
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
} else {
  toggleBtn.textContent = '🌙';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '🌙';
  }
});

// Botão de subir ao topo
const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animação de elementos ao scroll
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

document.addEventListener('DOMContentLoaded', handleScrollAnimation);

// Formulário funcional (envio via email real com EmailJS)
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

// Troque as informações abaixo pelas suas do EmailJS:
  const serviceID = 'YOUR_SERVICE_ID';
  const templateID = 'YOUR_TEMPLATE_ID';
  const publicKey = 'YOUR_PUBLIC_KEY';

  emailjs.init(publicKey);

  emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      alert('Mensagem enviada com sucesso! Obrigada pelo contato.');
      form.reset();
    }, (error) => {
      alert('Erro ao enviar a mensagem. Tente novamente.');
      console.error(error);
    });
});

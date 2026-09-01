var I18N = {
  'pt': {
    'nav-about': 'Sobre',
    'nav-rooms': 'Acomodações',
    'nav-experience': 'Experiência',
    'nav-location': 'Localização',
    'nav-book': 'Reservar',
    'hero-title': 'Viva o Rio<br>de verdade.',
    'hero-text': 'O Favela Hostel fica no coração da Rocinha. Acomodações simples, conexão real e o melhor da experiência local.',
    'hero-cta': 'Consultar disponibilidade',
    'sec-about-title': 'Sobre o hostel',
    'sec-about-p1': 'O <strong>Favela Hostel</strong> está localizado na <strong>Travessa Roma, 5, Rocinha</strong>, no Rio de Janeiro.',
    'sec-about-p2': 'Uma experiência de hospedagem que conecta viajantes à comunidade e à cultura local, com o apoio de quem conhece a região.',
    'sec-rooms-title': 'Acomodações',
    'sec-rooms-sub': 'Consulte os tipos de dormitórios e disponibilidade pelo WhatsApp.',
    'room1-title': 'Dormitórios',
    'room1-text': 'Ambientes compartilhados, simples e acolhedores.',
    'room2-title': 'Áreas comuns',
    'room2-text': 'Espaços para conviver e trocar experiências.',
    'rooms-note': '* Tipos de dormitório, comodidades e valores a confirmar com o hostel. Consulte pelo WhatsApp.',
    'ph': 'Foto em breve',
    'ph2': 'Foto em breve',
    'sec-exp-title': 'Experiência local',
    'sec-exp-p': 'A Rocinha é uma das maiores comunidades do Brasil, no coração do Rio de Janeiro. Hospedar-se aqui é viver de perto a energia, a gastronomia e o dia a dia da comunidade.',
    'exp-note': '* Tours e atividades locais: pergunte ao hostel sobre a programação disponível.',
    'sec-loc-title': 'Localização',
    'cta-title': 'Sua próxima aventura começa aqui.',
    'cta-text': 'Consulte disponibilidade e valores pelo WhatsApp.',
    'footer-contact-label': 'Telefone/WhatsApp:',
    'footer-copy': '&copy; <span class="year"></span> Favela Hostel. Todos os direitos reservados.',
    'wa-nav': 'https://wa.me/5521984684988?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20no%20Favela%20Hostel.',
    'wa-cta': 'https://wa.me/5521984684988?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20no%20Favela%20Hostel.'
  },
  'en': {
    'nav-about': 'About',
    'nav-rooms': 'Accommodation',
    'nav-experience': 'Experience',
    'nav-location': 'Location',
    'nav-book': 'Book Now',
    'hero-title': 'Live Rio<br>for real.',
    'hero-text': 'Favela Hostel is located in the heart of Rocinha. Simple rooms, real connections and the best of the local experience.',
    'hero-cta': 'Check availability',
    'sec-about-title': 'About the hostel',
    'sec-about-p1': '<strong>Favela Hostel</strong> is located at <strong>Travessa Roma, 5, Rocinha</strong>, in Rio de Janeiro, Brazil.',
    'sec-about-p2': 'A stay experience that connects travellers to the community and local culture, with the support of those who know the area.',
    'sec-rooms-title': 'Accommodation',
    'sec-rooms-sub': 'Check room types and availability on WhatsApp.',
    'room1-title': 'Dormitories',
    'room1-text': 'Shared rooms, simple and welcoming.',
    'room2-title': 'Common areas',
    'room2-text': 'Spaces to hang out and share experiences.',
    'rooms-note': '* Room types, amenities and rates to be confirmed with the hostel. Check on WhatsApp.',
    'ph': 'Photo coming soon',
    'ph2': 'Photo coming soon',
    'sec-exp-title': 'Local experience',
    'sec-exp-p': 'Rocinha is one of Brazil\u2019s largest communities, in the heart of Rio de Janeiro. Staying here means experiencing the energy, food and everyday life of the community up close.',
    'exp-note': '* Local tours and activities: ask the hostel about what\u2019s available.',
    'sec-loc-title': 'Location',
    'cta-title': 'Your next adventure starts here.',
    'cta-text': 'Check availability and rates on WhatsApp.',
    'footer-contact-label': 'Phone/WhatsApp:',
    'footer-copy': '&copy; <span class="year"></span> Favela Hostel. All rights reserved.',
    'wa-nav': 'https://wa.me/5521984684988?text=Hello!%20I%27d%20like%20to%20book%20at%20Favela%20Hostel.',
    'wa-cta': 'https://wa.me/5521984684988?text=Hello!%20I%27d%20like%20to%20check%20availability%20at%20Favela%20Hostel.'
  }
};

var currentLang = 'pt';
var toggleBtn = document.querySelector('[data-i18n-toggle]');
var menu = document.getElementById('menu');

function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  var dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.querySelectorAll('a[data-wa]').forEach(function (a) {
    var key = a.getAttribute('data-wa');
    if (dict[key] !== undefined) {
      a.setAttribute('href', dict[key]);
    }
  });
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
    toggleBtn.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Trocar para português');
    toggleBtn.setAttribute('aria-pressed', String(lang === 'en'));
  }
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', function () {
    setLang(currentLang === 'pt' ? 'en' : 'pt');
  });
}

var toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', function () {
    var open = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open');
  });
}
if (menu) {
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.year').forEach(function (el) { el.textContent = new Date().getFullYear(); });
setLang('en');
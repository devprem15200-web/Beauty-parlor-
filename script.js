function setLanguage(lang) {
   document.querySelectorAll('[data-en]').forEach(el => {
       el.textContent = el.getAttribute(lang === 'en' ? 'data-en' : 'data-hi');
   });
}
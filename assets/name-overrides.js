(function () {
  document.title = 'Pavle — Junior Developer';
  document.querySelectorAll('meta[name="description"]').forEach(function (meta) {
    meta.content = meta.content.replace(/Alex PetroviÄ‡|Alex Petrović|Alex/g, 'Pavle');
  });
  document.querySelectorAll('*').forEach(function (element) {
    element.childNodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/Alex PetroviÄ‡|Alex Petrović|Alex/g, 'Pavle').replace(/\bAP\b/g, 'P');
      }
    });
  });
})();

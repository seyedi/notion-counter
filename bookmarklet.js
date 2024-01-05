javascript: (function () {
  let textAreas = document.querySelectorAll('[spellcheck="true"]');
  let content = "";
  for (const textArea of textAreas) {
    content += textArea.textContent + "\n";
  }
  alert("Characters: " + content.length + "\n" + "Words: " + content.split(/\s+/).length);
})(document);

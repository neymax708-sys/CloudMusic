const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const file = document.getElementById('fileInput').files[0];
  const format = document.getElementById('formatSelect').value;

  if (!file) {
    result.innerHTML = 'Selecione um arquivo.';
    return;
  }

  result.innerHTML = `Arquivo "${file.name}" pronto para conversão em ${format}.`;
});

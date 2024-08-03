const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes(); // Corrigido 'mim' para 'min'
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min; // Corrigido 'mim' para 'min'
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min; // Corrigido 'minutos.textContent = mim' para 'minutos.textContent = min'
    segundos.textContent = s;
}, 1000); // Adicionado tempo para o setInterval

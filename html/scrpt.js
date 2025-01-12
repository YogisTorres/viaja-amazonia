
const toggleButton = document.getElementById('toggle-info');
const infoExtra = document.getElementById('info-extra');

toggleButton.addEventListener('click', () => {
    infoExtra.style.display = infoExtra.style.display === 'none' ? 'block' : 'none';
    toggleButton.textContent = infoExtra.style.display === 'none' ? 'Mostrar Más Información' : 'Ocultar Información';
});
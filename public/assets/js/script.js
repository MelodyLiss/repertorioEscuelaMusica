

//!Actualización de placeholder busqueda

const searchInput = document.getElementById('searchInput');
const radioButtons = document.querySelectorAll('input[name="busqueda"]');

function updatePlaceholder() {
    const valorCheckd = document.querySelector('input[name="busqueda"]:checked').value;
    searchInput.placeholder = `Buscar por ${valorCheckd}`;
}

radioButtons.forEach(radio => {
    radio.addEventListener('change', updatePlaceholder);
});

updatePlaceholder();
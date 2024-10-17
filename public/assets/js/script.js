

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

//!Mostrar input para actualizar valores

const inputEdit = document.querySelectorAll('.edit-btn');
inputEdit.forEach(button => {
    button.addEventListener('click', () => {
        const fila = this.closest('tr')
        const editando = fila.classList.contains('editando')

        if (!editando) {
            fila.classList.add('editanto')
            fila.querySelectorAll('.valorFijo').forEach(valor => valor.classList.add('d-none'));
            fila.querySelectorAll('.edit-input').forEach(input => input.classList.remove('d-none'));
            this.textContent = 'Guardar';
        }else{
            const id = fila.getAttribute('data-id');
        }
    })
})
/* funcion imcompleta !!!!!!!!! */
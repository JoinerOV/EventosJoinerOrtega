// Ejercicio 3
document.addEventListener('DOMContentLoaded', (event) => {
    let notes = [
        { id: 1, title: 'Sacar la basura', text: 'Mi mamá me va retar si no lo hago', realizada: false },
        { id: 2, title: 'Hacer la tarea', text: 'Matemáticas y ciencia', realizada: false }
    ];

    let idGlobal = 2; // Inicializado en el valor del último id que creaste manualmente

    const notesList = document.getElementById('notesList');
    const noteTitle = document.getElementById('noteTitle');
    const noteText = document.getElementById('noteText');
    const addNoteButton = document.getElementById('addNoteButton');
    const clearFieldsButton = document.getElementById('clearFieldsButton');
    const searchText = document.getElementById('searchText');
    const filterCompleted = document.getElementById('filterCompleted');

    function filterByCompleted(notesArray) {
        return notesArray.filter(note => note.realizada);
    }

    function filterByText(notesArray, text) {
        if (!text) return notesArray;
        return notesArray.filter(note => note.title.includes(text) || note.text.includes(text));
    }

    function renderNotes() {
        let filteredNotes = notes;

        if (filterCompleted.checked) {
            filteredNotes = filterByCompleted(filteredNotes);
        }

        filteredNotes = filterByText(filteredNotes, searchText.value);

        notesList.innerHTML = '';
        if (filteredNotes.length === 0) {
            notesList.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>';
            return;
        }

        filteredNotes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.className = 'note';
            noteElement.innerHTML = `
                <div class="note-title">${note.title}</div>
                <div class="note-text">${note.text}</div>
                <input type="checkbox" onclick="marcarRealizada(${note.id})" ${note.realizada ? 'checked' : ''}>
                <button onclick="borrarNota(${note.id})">Borrar Nota</button>
            `;
            notesList.appendChild(noteElement);
        });
    }

    function agregarNota(titulo, texto) {
        const newNote = {
            id: ++idGlobal,
            title: titulo,
            text: texto,
            realizada: false
        };
        notes.push(newNote);
        renderNotes();
    }

    function addNote() {
        if (!noteTitle.value || !noteText.value) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        agregarNota(noteTitle.value, noteText.value);
        noteTitle.value = '';
        noteText.value = '';
    }

    function clearFields() {
        noteTitle.value = '';
        noteText.value = '';
    }

    window.borrarNota = function (id) {
        notes = notes.filter(note => note.id !== id);
        renderNotes();
    }

    window.marcarRealizada = function (id) {
        const note = notes.find(note => note.id === id);
        if (note) {
            note.realizada = !note.realizada;
            renderNotes();
        }
    }

    addNoteButton.addEventListener('click', addNote);
    clearFieldsButton.addEventListener('click', clearFields);
    searchText.addEventListener('input', renderNotes);
    filterCompleted.addEventListener('change', renderNotes);
    renderNotes();
});

const notesListEl = document.querySelector(".notes-list");
const saveButtonEl = document.querySelector(".save-note");
const titleInputEl = document.getElementById("title-input");
const contentInputEl = document.getElementById("content-input");

saveButtonEl.addEventListener("click", clickSaveButton);

function displayNotesList() {
  const notes = getNotes();

  const sortedNotes = notes.sort(
    (noteA, noteB) => noteB.lastUpdated - noteA.lastUpdated
  );

  let html = "";

  sortedNotes.forEach((note) => {
    html += `
       <div class="note-entry" data-id="${note.id}">
        <div class="note-title">${note.title}</div>
        <div class="note-content-teaser">
          ${note.content}
          </div>
        <div class="note-date">${new Date(note.lastUpdated).toLocaleString(
          "en-us"
        )}</div>
    
    `;
  });

  notesListEl.innerHTML = html;
}

function clickSaveButton() {
  const title = titleInputEl.value;
  const content = contentInputEl.value;

  if (!title || !content) {
    alert("Please enter title and heading");
    return;
  }

  saveNote(title, content);

  titleInputEl.value = "";
  contentInputEl.value = "";

  displayNotesList();
}

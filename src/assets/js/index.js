let noteTitle;
let noteContent;
let noteSaveBtn;
let noteNewBtnBtn;
let noteList;

if (window.location.pathname === '/notes') {
  noteTitle = document.querySelector('.note-title');
  noteContent = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  noteList = document.querySelectorAll('.list-container .list-group');
}

// Show an element
const show = (elem) => {
    elem.style.display = 'inline';
  };
  
  // Hide an element
  const hide = (elem) => {
    elem.style.display = 'none';
  };
  
  // activeNote is used to keep track of the note in the textarea
  let activeNote = {};
  
  const getNotes = () =>
    fetch('/api/notes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
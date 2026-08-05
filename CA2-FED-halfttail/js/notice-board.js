const STORAGE_KEY = "athenaeum-notice-board";

const boardGrid = document.getElementById("boardGrid");
const boardEmpty = document.getElementById("boardEmpty");
const noteForm = document.getElementById("noteForm");
const noteNameInput = document.getElementById("noteName");
const noteMessageInput = document.getElementById("noteMessage");

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function formatTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderNotes() {
  const notes = loadNotes();
  boardGrid.innerHTML = "";

  boardEmpty.classList.toggle("is-hidden", notes.length > 0);

  notes.forEach((note) => {
    const card = document.createElement("div");
    card.className = "note-card";
    card.innerHTML = `
      <div class="note-pin"></div>
      <div class="note-name"></div>
      <div class="note-message"></div>
      <div class="note-time"></div>
    `;
    card.querySelector(".note-name").textContent = note.name || "Anonymous";
    card.querySelector(".note-message").textContent = note.message;
    card.querySelector(".note-time").textContent = formatTime(note.time);
    boardGrid.appendChild(card);
  });
}

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = noteMessageInput.value.trim();
  if (!message) return;

  const notes = loadNotes();
  notes.unshift({
    name: noteNameInput.value.trim(),
    message: message,
    time: new Date().toISOString()
  });
  saveNotes(notes);

  noteForm.reset();
  renderNotes();

  boardGrid.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderNotes();

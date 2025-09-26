import { useState, useEffect } from "react";
import api from "./api";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const res = await api.get("/notes");
    setNotes(res.data);
  }

  async function handleSubmit() {
    if (!title || !content) return;

    if (editId) {
      await api.patch(`/notes/${editId}`, { title, content });
      setEditId(null);
    } else {
      await api.post("/notes", { title, content });
    }

    setTitle("");
    setContent("");
    fetchNotes();
  }

  function handleEdit(note) {
    setEditId(note.id);
    setTitle(note.title);
    setContent(note.content);
  }

  async function handleDelete(id) {
    await api.delete(`/notes/${id}`);
    fetchNotes();
  }

  return (
    <div className="app-container">
      <h1>Minhas Anotações</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Conteúdo"
      />
      <button onClick={handleSubmit}>{editId ? "Salvar" : "Adicionar"}</button>

      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <div className="note-text">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
            <div className="note-actions">
              <button onClick={() => handleEdit(note)}>Editar</button>
              <button onClick={() => handleDelete(note.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

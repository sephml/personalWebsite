import React, { useState } from "react";
import { Button, Form, Card, Modal, Badge } from "react-bootstrap";
import { AiOutlinePlus, AiFillEdit, AiFillDelete, AiFillMessage } from "react-icons/ai";

function NotesTab({ notes, onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "general"
  });

  const categories = ["general", "goals", "ideas", "plans", "reminders"];

  const handleClose = () => {
    setShowModal(false);
    setEditingIndex(null);
    setFormData({ title: "", content: "", category: "general" });
  };

  const handleShow = (index = null) => {
    if (index !== null) {
      setEditingIndex(index);
      setFormData(notes[index]);
    }
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNotes = [...notes];
    const noteWithTimestamp = {
      ...formData,
      createdAt: editingIndex !== null ? notes[editingIndex].createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (editingIndex !== null) {
      updatedNotes[editingIndex] = noteWithTimestamp;
    } else {
      updatedNotes.push(noteWithTimestamp);
    }

    onUpdate(updatedNotes);
    handleClose();
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      const updatedNotes = notes.filter((_, i) => i !== index);
      onUpdate(updatedNotes);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      general: "secondary",
      goals: "success",
      ideas: "info",
      plans: "warning",
      reminders: "danger"
    };
    return colors[category] || "secondary";
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Our Notes <AiFillMessage className="purple" /></h4>
        <Button className=" d-flex flex-row" variant="primary" onClick={() => handleShow()}>
          <AiOutlinePlus className="m-auto mt-1"/> Add Note
        </Button>
      </div>

      {notes.length === 0 ? (
        <div className="text-center py-5">
          <p>No notes yet. Write something! 📝</p>
        </div>
      ) : (
        <div className="notes-list">
          {notes.map((note, index) => (
            <Card key={index} className="note-card mb-3">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <Card.Title className="mb-0">{note.title}</Card.Title>
                      <Badge bg={getCategoryColor(note.category)}>{note.category}</Badge>
                    </div>
                    <Card.Subtitle className="mb-2 text-muted">
                      {new Date(note.updatedAt).toLocaleString()}
                    </Card.Subtitle>
                  </div>
                  <div>
                    <Button 
                      variant="link" 
                      size="sm" 
                      onClick={() => handleShow(index)}
                      className="p-1"
                    >
                      <AiFillEdit />
                    </Button>
                    <Button 
                      variant="link" 
                      size="sm" 
                      onClick={() => handleDelete(index)}
                      className="p-1 text-danger"
                    >
                      <AiFillDelete />
                    </Button>
                  </div>
                </div>
                <Card.Text style={{ whiteSpace: "pre-wrap" }}>{note.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{editingIndex !== null ? "Edit" : "Add"} Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Note title..."
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="Write your note here..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                {editingIndex !== null ? "Update" : "Save"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NotesTab;

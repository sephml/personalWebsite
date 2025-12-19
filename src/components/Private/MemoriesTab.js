import React, { useState } from "react";
import { Button, Form, Card, Row, Col, Modal } from "react-bootstrap";
import { AiFillHeart, AiOutlinePlus, AiFillEdit, AiFillDelete } from "react-icons/ai";

function MemoriesTab({ memories, onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    feeling: ""
  });

  const handleClose = () => {
    setShowModal(false);
    setEditingIndex(null);
    setFormData({ title: "", date: "", description: "", feeling: "" });
  };

  const handleShow = (index = null) => {
    if (index !== null) {
      setEditingIndex(index);
      setFormData(memories[index]);
    }
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMemories = [...memories];
    const memoryWithTimestamp = {
      ...formData,
      createdAt: editingIndex !== null ? memories[editingIndex].createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (editingIndex !== null) {
      updatedMemories[editingIndex] = memoryWithTimestamp;
    } else {
      updatedMemories.push(memoryWithTimestamp);
    }

    onUpdate(updatedMemories);
    handleClose();
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this memory?")) {
      const updatedMemories = memories.filter((_, i) => i !== index);
      onUpdate(updatedMemories);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Our Memories <AiFillHeart className="purple" /></h4>
        <Button className=" d-flex flex-row" variant="primary" onClick={() => handleShow()}>
          <AiOutlinePlus className="m-auto mt-1"/> Add Memory
        </Button>
      </div>

      {memories.length === 0 ? (
        <div className="text-center py-5">
          <p>No memories yet. Create your first one! 💕</p>
        </div>
      ) : (
        <Row>
          {memories.map((memory, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="memory-card h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="mb-0">{memory.title}</Card.Title>
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
                  <Card.Subtitle className="mb-2 text-muted">
                    {new Date(memory.date).toLocaleDateString()}
                  </Card.Subtitle>
                  <Card.Text>{memory.description}</Card.Text>
                  {memory.feeling && (
                    <div className="mt-2">
                      <small className="text-muted">Feeling: {memory.feeling}</small>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editingIndex !== null ? "Edit" : "Add"} Memory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Our first date, Trip to..."
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What made this moment special..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Feeling (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Happy, Excited, Grateful..."
                value={formData.feeling}
                onChange={(e) => setFormData({ ...formData, feeling: e.target.value })}
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

export default MemoriesTab;

import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { AiFillLock } from "react-icons/ai";

function PasswordEntry({ onPasswordSubmit, error }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim()) {
      onPasswordSubmit(password);
    }
  };

  return (
    <Container fluid className="private-section">
      <Container>
        <Row style={{ justifyContent: "center", minHeight: "70vh", alignItems: "center" }}>
          <Col md={6} lg={4}>
            <Card className="password-entry-card">
              <Card.Body className="text-center p-5">
                <AiFillLock className="purple mb-4 m-auto" size={60} />
                <h2 className="mb-4 text-white">Private Space</h2>
                <p className="text-white mb-4">
                  If you have a password, you know what to do.
                </p>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="text-center"
                      autoFocus
                    />
                  </Form.Group>
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100"
                    disabled={!password.trim()}
                  >
                    Unlock
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PasswordEntry;

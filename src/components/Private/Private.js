import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Card, Button, Form, Alert, Tabs, Tab } from "react-bootstrap";
import { decryptData, encryptData } from "../../utils/encryption";
import PasswordEntry from "./PasswordEntry";
import MemoriesTab from "./MemoriesTab";
import NotesTab from "./NotesTab";
import MoviesTab from "./MoviesTab";
import "./Private.css";

function Private() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [privateData, setPrivateData] = useState(null);
  const [encryptedData, setEncryptedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sessionExpiry, setSessionExpiry] = useState(null);
  const [, setTick] = useState(0); // Force re-render for timer

  // Session cache key and duration (1 hour in milliseconds)
  const SESSION_CACHE_KEY = 'privatePageSession';
  const SESSION_DURATION = 60 * 60 * 1000; // 1 hour

  // Define handleLogout first since it's used in other functions
  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setPassword("");
    setPrivateData(null);
    setSessionExpiry(null);
    
    // Clear the cached session
    localStorage.removeItem(SESSION_CACHE_KEY);
  }, [SESSION_CACHE_KEY]);

  const loadEncryptedData = useCallback(async () => {
    try {
      // First check localStorage for updated data
      const localData = localStorage.getItem('privateEncryptedData');
      
      if (localData) {
        setEncryptedData(localData);
        setLoading(false);
        return;
      }

      // If no local data, fetch from public folder
      const response = await fetch('/privateData.enc');
      const data = await response.text();
      setEncryptedData(data);
      setLoading(false);
    } catch (err) {
      console.error('Error loading encrypted data:', err);
      setError('Failed to load encrypted data');
      setLoading(false);
    }
  }, []);

  // Load encrypted data on mount
  useEffect(() => {
    loadEncryptedData();
  }, [loadEncryptedData]);

  const checkCachedSession = useCallback(() => {
    try {
      const cachedSession = localStorage.getItem(SESSION_CACHE_KEY);
      
      if (!cachedSession) {
        return;
      }

      const session = JSON.parse(cachedSession);
      const now = Date.now();
      
      // Check if session is still valid (within 1 hour)
      if (session.timestamp && (now - session.timestamp) < SESSION_DURATION) {
        // Verify the cached password still works
        const decrypted = decryptData(encryptedData, session.password);
        setPrivateData(decrypted);
        setPassword(session.password);
        setIsAuthenticated(true);
        setSessionExpiry(session.timestamp + SESSION_DURATION);
        setError("");
      } else {
        // Session expired, clear it
        localStorage.removeItem(SESSION_CACHE_KEY);
      }
    } catch (err) {
      // Invalid session or wrong password, clear it
      localStorage.removeItem(SESSION_CACHE_KEY);
    }
  }, [SESSION_CACHE_KEY, SESSION_DURATION, encryptedData]);

  // Check for cached session on mount
  useEffect(() => {
    if (encryptedData) {
      checkCachedSession();
    }
  }, [encryptedData, checkCachedSession]);

  // Update session timer and auto-logout when expired
  useEffect(() => {
    if (!isAuthenticated || !sessionExpiry) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = sessionExpiry - now;
      
      if (remaining <= 0) {
        handleLogout();
        setError("Session expired. Please login again.");
      } else {
        // Force component update to refresh timer display
        setTick(prev => prev + 1);
      }
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [isAuthenticated, sessionExpiry, handleLogout]);

  const handlePasswordSubmit = (enteredPassword) => {
    try {
      const decrypted = decryptData(encryptedData, enteredPassword);
      setPrivateData(decrypted);
      setPassword(enteredPassword);
      setIsAuthenticated(true);
      setError("");
      
      // Cache the session with timestamp
      const timestamp = Date.now();
      const session = {
        password: enteredPassword,
        timestamp: timestamp
      };
      localStorage.setItem(SESSION_CACHE_KEY, JSON.stringify(session));
      setSessionExpiry(timestamp + SESSION_DURATION);
    } catch (err) {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleDataUpdate = (updatedData) => {
    try {
      // Update the in-memory data
      setPrivateData(updatedData);
      
      // Encrypt and save to localStorage
      const encrypted = encryptData(updatedData, password);
      localStorage.setItem('privateEncryptedData', encrypted);
      setEncryptedData(encrypted);
    } catch (err) {
      console.error('Error saving data:', err);
      setError('Failed to save data');
    }
  };

  const getTimeRemaining = () => {
    if (!sessionExpiry) return '';
    
    const now = Date.now();
    const remaining = sessionExpiry - now;
    
    if (remaining <= 0) {
      handleLogout();
      return 'Session expired';
    }
    
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    
    if (minutes > 0) {
      return `Session expires in ${minutes}m`;
    }
    return `Session expires in ${seconds}s`;
  };

  if (loading) {
    return (
      <Container fluid className="private-section">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h1 className="project-heading">
                Loading...
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

  if (!isAuthenticated) {
    return <PasswordEntry onPasswordSubmit={handlePasswordSubmit} error={error} />;
  }

  return (
    <Container fluid className="private-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ paddingTop: "50px", paddingBottom: "20px" }}>
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
              <h1 className="project-heading">
                Our Private <strong className="purple">Space </strong> 💕
              </h1>
              <div className="d-flex align-items-center gap-3">
                {sessionExpiry && (
                  <small className="text-muted">
                    {getTimeRemaining()}
                  </small>
                )}
                <Button variant="outline-danger" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>

            {error && <Alert variant="danger" dismissible onClose={() => setError("")}>{error}</Alert>}

            <Card className="private-card">
              <Card.Body>
                <Tabs defaultActiveKey="memories" id="private-tabs" className="mb-3">
                  <Tab eventKey="memories" title="Memories">
                    <MemoriesTab 
                      memories={privateData.memories || []} 
                      onUpdate={(memories) => handleDataUpdate({ ...privateData, memories })}
                    />
                  </Tab>
                  
                  <Tab eventKey="notes" title="Notes">
                    <NotesTab 
                      notes={privateData.notes || []} 
                      onUpdate={(notes) => handleDataUpdate({ ...privateData, notes })}
                    />
                  </Tab>
                  
                  <Tab eventKey="movies" title="Movies & Series">
                    <MoviesTab 
                      movies={privateData.movies || []} 
                      onUpdate={(movies) => handleDataUpdate({ ...privateData, movies })}
                    />
                  </Tab>
                </Tabs>

                <div className="text-muted text-center mt-4">
                  <small>Last updated: {new Date(privateData.lastUpdated || Date.now()).toLocaleString()}</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Private;

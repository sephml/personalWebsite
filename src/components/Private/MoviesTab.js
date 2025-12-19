import React, { useState } from "react";
import { Button, Form, Card, Row, Col, Modal, Badge, ProgressBar } from "react-bootstrap";
import { AiOutlinePlus, AiFillEdit, AiFillDelete, AiFillPlayCircle } from "react-icons/ai";
import { BsFillCameraReelsFill } from "react-icons/bs";

function MoviesTab({ movies, onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "movie", // movie or series
    genre: "",
    releaseYear: "",
    // For series tracking
    totalSeasons: "",
    episodesPerSeason: "", // e.g., "10,12,8,10" or just one number if all same
    currentSeason: "1",
    currentEpisode: "1",
    // Opinions
    sepOpinion: "",
    dinaOpinion: "",
    // Ratings
    sepRating: "",
    dinaRating: "",
    // Status
    status: "watching", // watching, completed, paused
    dateStarted: "",
    dateCompleted: ""
  });

  const handleClose = () => {
    setShowModal(false);
    setEditingIndex(null);
    setFormData({
      title: "",
      type: "movie",
      genre: "",
      releaseYear: "",
      totalSeasons: "",
      episodesPerSeason: "",
      currentSeason: "1",
      currentEpisode: "1",
      sepOpinion: "",
      dinaOpinion: "",
      sepRating: "",
      dinaRating: "",
      status: "watching",
      dateStarted: "",
      dateCompleted: ""
    });
  };

  const handleShow = (index = null) => {
    if (index !== null) {
      setEditingIndex(index);
      setFormData(movies[index]);
    }
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovies = [...movies];
    
    const cleanedData = {
      ...formData,
      totalSeasons: formData.totalSeasons || "",
      episodesPerSeason: formData.episodesPerSeason || "",
      currentSeason: formData.currentSeason || "1",
      currentEpisode: formData.currentEpisode || "1",
      createdAt: editingIndex !== null ? movies[editingIndex].createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (editingIndex !== null) {
      updatedMovies[editingIndex] = cleanedData;
    } else {
      updatedMovies.push(cleanedData);
    }

    onUpdate(updatedMovies);
    handleClose();
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      const updatedMovies = movies.filter((_, i) => i !== index);
      onUpdate(updatedMovies);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      watching: "primary",
      completed: "success",
      paused: "warning"
    };
    return colors[status] || "secondary";
  };

  const parseEpisodesPerSeason = (episodesStr) => {
    if (!episodesStr) return [];
    
    // If it's just a single number, return it as an array
    if (!episodesStr.includes(',')) {
      const num = parseInt(episodesStr);
      return isNaN(num) ? [] : [num];
    }
    
    // Parse comma-separated values
    return episodesStr.split(',').map(e => parseInt(e.trim())).filter(n => !isNaN(n));
  };

  const calculateTotalEpisodes = (movie) => {
    const episodes = parseEpisodesPerSeason(movie.episodesPerSeason);
    if (episodes.length === 0) return 0;
    
    // If single number provided, multiply by total seasons
    if (episodes.length === 1 && movie.totalSeasons) {
      return episodes[0] * parseInt(movie.totalSeasons);
    }
    
    // Sum all episodes
    return episodes.reduce((sum, ep) => sum + ep, 0);
  };

  const calculateWatchedEpisodes = (movie) => {
    const episodes = parseEpisodesPerSeason(movie.episodesPerSeason);
    if (episodes.length === 0) return 0;
    
    const currentSeason = parseInt(movie.currentSeason) || 1;
    const currentEpisode = parseInt(movie.currentEpisode) || 0;
    
    // Calculate episodes from completed seasons
    let watchedFromCompletedSeasons = 0;
    
    if (episodes.length === 1) {
      // Single number means all seasons have same episodes
      watchedFromCompletedSeasons = (currentSeason - 1) * episodes[0];
    } else {
      // Sum episodes from all completed seasons
      for (let i = 0; i < currentSeason - 1 && i < episodes.length; i++) {
        watchedFromCompletedSeasons += episodes[i];
      }
    }
    
    // Add current episode in current season
    return watchedFromCompletedSeasons + currentEpisode;
  };

  const hasValidEpisodeStructure = (movie) => {
    return movie.episodesPerSeason && parseEpisodesPerSeason(movie.episodesPerSeason).length > 0;
  };

  const calculateProgress = (movie) => {
    if (movie.type !== "series" || !hasValidEpisodeStructure(movie)) return 0;
    
    const total = calculateTotalEpisodes(movie);
    const watched = calculateWatchedEpisodes(movie);
    
    if (total === 0) return 0;
    
    return Math.min(Math.round((watched / total) * 100), 100);
  };

  const getProgressText = (movie) => {
    if (movie.type === "movie") {
      return movie.status === "completed" ? "Watched" : "Not watched yet";
    }
    
    const season = movie.currentSeason || "1";
    const episode = movie.currentEpisode || "1";
    const watched = calculateWatchedEpisodes(movie);
    const total = calculateTotalEpisodes(movie);
    
    if (total > 0) {
      return `S${season}:E${episode} (${watched}/${total} episodes)`;
    }
    return `S${season}:E${episode}`;
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Movies & Series <BsFillCameraReelsFill className="purple" /></h4>
        <Button className=" d-flex flex-row" variant="primary" onClick={() => handleShow()}>
          <AiOutlinePlus className="m-auto mt-1"/> Add Movie/Series
        </Button>
      </div>

      {movies.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-white">No movies or series yet. Add your first one! 🎬</p>
        </div>
      ) : (
        <Row>
          {movies.map((movie, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="movie-card h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <Badge bg={movie.type === "movie" ? "info" : "warning"}>
                          {movie.type === "movie" ? "Movie" : "Series"}
                        </Badge>
                        <Badge bg={getStatusColor(movie.status)}>
                          {movie.status}
                        </Badge>
                      </div>
                      <Card.Title className="mb-1">{movie.title}</Card.Title>
                      {movie.genre && (
                        <Card.Subtitle className="mb-2 text-muted small">
                          {movie.genre} {movie.releaseYear && `(${movie.releaseYear})`}
                        </Card.Subtitle>
                      )}
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

                  {/* Progress for series */}
                  {movie.type === "series" && (
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <small className="text-white">{getProgressText(movie)}</small>
                        {hasValidEpisodeStructure(movie) && (
                          <small className="text-white">{calculateProgress(movie)}%</small>
                        )}
                      </div>
                      {hasValidEpisodeStructure(movie) ? (
                        <ProgressBar 
                          now={calculateProgress(movie)} 
                          variant="success"
                          style={{ height: "10px" }}
                        />
                      ) : (
                        <small className="text-white opacity-75" style={{ fontSize: "0.8rem" }}>
                          Add episode structure to see progress
                        </small>
                      )}
                    </div>
                  )}

                  {/* Opinions */}
                  <div className="opinions-section">
                    {movie.sepOpinion && (
                      <div className="mb-2">
                        <strong className="text-primary small">Sep's Opinion:</strong>
                        <p className="mb-1 small text-white">{movie.sepOpinion}</p>
                        {movie.sepRating && (
                          <span className="text-warning">{"⭐".repeat(parseInt(movie.sepRating))}</span>
                        )}
                      </div>
                    )}
                    {movie.dinaOpinion && (
                      <div className="mb-2">
                        <strong className="text-success small">Dina's Opinion:</strong>
                        <p className="mb-1 small text-white">{movie.dinaOpinion}</p>
                        {movie.dinaRating && (
                          <span className="text-warning">{"⭐".repeat(parseInt(movie.dinaRating))}</span>
                        )}
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{editingIndex !== null ? "Edit" : "Add"} Movie/Series</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Title *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Movie or series title..."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Type *</Form.Label>
                  <Form.Select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Action, Comedy, Drama, etc."
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="2024"
                    value={formData.releaseYear}
                    onChange={(e) => setFormData({ ...formData, releaseYear: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Series-specific fields */}
            {formData.type === "series" && (
              <>
                <hr className="my-3" />
                <h6 className="text-muted mb-3">Series Progress Tracking</h6>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Total Seasons</Form.Label>
                      <Form.Control
                        type="number"
                        min="1"
                        placeholder="e.g., 5"
                        value={formData.totalSeasons}
                        onChange={(e) => setFormData({ ...formData, totalSeasons: e.target.value })}
                      />
                      <Form.Text className="text-muted">
                        Total number of seasons
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Episodes Per Season *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g., 10 or 10,12,8,10"
                        value={formData.episodesPerSeason}
                        onChange={(e) => setFormData({ ...formData, episodesPerSeason: e.target.value })}
                      />
                      <Form.Text className="text-muted">
                        One number if all same, or comma-separated
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Current Season</Form.Label>
                      <Form.Control
                        type="number"
                        min="1"
                        placeholder="1"
                        value={formData.currentSeason}
                        onChange={(e) => setFormData({ ...formData, currentSeason: e.target.value })}
                      />
                      <Form.Text className="text-muted">
                        Which season are you on?
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Current Episode</Form.Label>
                      <Form.Control
                        type="number"
                        min="1"
                        placeholder="1"
                        value={formData.currentEpisode}
                        onChange={(e) => setFormData({ ...formData, currentEpisode: e.target.value })}
                      />
                      <Form.Text className="text-muted">
                        Which episode in that season?
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                
                <div className="alert alert-info" style={{ fontSize: "0.85rem" }}>
                  <strong>💡 Examples:</strong><br/>
                  • All seasons have 10 episodes → Enter: <code>10</code><br/>
                  • Season 1: 10, Season 2: 12, Season 3: 8 → Enter: <code>10,12,8</code>
                </div>
              </>
            )}

            <hr className="my-3" />
            <h6 className="text-muted mb-3">Status & Dates</h6>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="watching">Watching</option>
                    <option value="completed">Completed</option>
                    <option value="paused">Paused</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Date Started</Form.Label>
                  <Form.Control
                    type="date"
                    value={formData.dateStarted}
                    onChange={(e) => setFormData({ ...formData, dateStarted: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Date Completed</Form.Label>
                  <Form.Control
                    type="date"
                    value={formData.dateCompleted}
                    onChange={(e) => setFormData({ ...formData, dateCompleted: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr className="my-3" />
            <h6 className="text-muted mb-3">Our Opinions</h6>

            {/* Sep's Opinion */}
            <div className="opinion-box mb-3 p-3" style={{ backgroundColor: "rgba(59, 130, 246, 0.1)", borderRadius: "8px" }}>
              <h6 className="text-primary">Sep's Opinion</h6>
              <Form.Group className="mb-2">
                <Form.Label>Rating</Form.Label>
                <Form.Select
                  value={formData.sepRating}
                  onChange={(e) => setFormData({ ...formData, sepRating: e.target.value })}
                >
                  <option value="">No rating yet</option>
                  <option value="1">⭐ (1/5)</option>
                  <option value="2">⭐⭐ (2/5)</option>
                  <option value="3">⭐⭐⭐ (3/5)</option>
                  <option value="4">⭐⭐⭐⭐ (4/5)</option>
                  <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Thoughts</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="What do you think about it?"
                  value={formData.sepOpinion}
                  onChange={(e) => setFormData({ ...formData, sepOpinion: e.target.value })}
                />
              </Form.Group>
            </div>

            {/* Dina's Opinion */}
            <div className="opinion-box mb-3 p-3" style={{ backgroundColor: "rgba(34, 197, 94, 0.1)", borderRadius: "8px" }}>
              <h6 className="text-success">Dina's Opinion</h6>
              <Form.Group className="mb-2">
                <Form.Label>Rating</Form.Label>
                <Form.Select
                  value={formData.dinaRating}
                  onChange={(e) => setFormData({ ...formData, dinaRating: e.target.value })}
                >
                  <option value="">No rating yet</option>
                  <option value="1">⭐ (1/5)</option>
                  <option value="2">⭐⭐ (2/5)</option>
                  <option value="3">⭐⭐⭐ (3/5)</option>
                  <option value="4">⭐⭐⭐⭐ (4/5)</option>
                  <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Thoughts</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="What do you think about it?"
                  value={formData.dinaOpinion}
                  onChange={(e) => setFormData({ ...formData, dinaOpinion: e.target.value })}
                />
              </Form.Group>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
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

export default MoviesTab;

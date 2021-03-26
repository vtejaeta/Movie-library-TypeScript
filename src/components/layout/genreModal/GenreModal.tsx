import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Example: React.FC = () => {
  const [show, setShow] = useState(false);
  const [genre, setGenre] = useState("action");

  const history = useHistory();

  function handleClose() {
    return setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="nav-link">
        Genre
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Genre</Modal.Title>
        </Modal.Header>
        <Form
          className="w-75 p-3 ml-auto mr-auto"
          onSubmit={(e) => {
            e.preventDefault();
            history.push(`/browse/${genre}/1`);
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select a genre</Form.Label>
            <Form.Control
              as="select"
              value={genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
              custom
            >
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="documentary">Documentary</option>
              <option value="drama">Drama</option>
              <option value="family">Family</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">History</option>
              <option value="horror">Horror</option>
              <option value="music">Music</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="science-fiction">Science Fiction</option>
              <option value="tv-movie">TV Movie</option>
              <option value="thriller">Thriller</option>
              <option value="war">War</option>
              <option value="western">Western</option>
            </Form.Control>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Example;

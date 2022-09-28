import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddMovie({ addMovie }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    if (title && description && posterUrl && rate) {
      addMovie({
        id: Math.random(),
        title,
        description,
        posterUrl,
        rate: Number(rate),
      });
      setTitle("");
      setDescription("");
      setPosterUrl("");
      setRate("");
      handleClose();
    }
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type='text'
            placeholder='title'
            onChange={e => setTitle(e.target.value)}
          />
          <br />
          <Form.Control
            type='text'
            placeholder='description'
            onChange={e => setDescription(e.target.value)}
          />
          <br />
          <Form.Control
            type='text'
            placeholder='poster url'
            onChange={e => setPosterUrl(e.target.value)}
          />
          <br />
          <Form.Control
            type='number'
            placeholder='rate'
            onChange={e => setRate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;

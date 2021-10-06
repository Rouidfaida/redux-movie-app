import React, { useState } from 'react'
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { handelEdit } from '../redux/action';
import StartRating from './StartRating'

const Edit = ({movie}) => {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(movie.imgs)
    const [name, setName] = useState(movie.name)
    const [rating, setRating] = useState(movie.rating)
    const [years, setYears] = useState(movie.years)
 
      let handelRating = (x) => {
        setRating(x)
      }
      const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmitOFthemovie = (e) => {
    e.preventDefault()
    let newaddmovie = {
        id:movie.id,
      imgs:image,
      name:name,
      rating:rating,
      years:years,
    }
    dispatch(handelEdit(newaddmovie))
    handleClose()
  }
    return (
             <div>
    <button onClick={handleShow}>edit</button> 

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Add new Movies</Modal.Title>
      </Modal.Header>
      <Form
        style={{ marginLeft: "10px", marginTop: "10px" }}
        
      >
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextPassword"
        >
          <Form.Label column sm="2">
            name
          </Form.Label>
          <Col sm="10">
            <input
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextPassword"
        >
          <Form.Label column sm="2">
            image
          </Form.Label>
          <Col sm="10">
            <input
              type="url"
              value={image}
              placeholder="image"
              onChange={(e) => setImage(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextPassword"
        >
          <Form.Label column sm="2">
            years
          </Form.Label>
          <Col sm="10">
            <input
              type="text"
              value={years}
              placeholder="years"
            onChange={(e) => setYears(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextPassword"
        >
          <Form.Label column sm="2">
            rating
          </Form.Label>
          <Col sm="10">
          <StartRating rating={rating} handelRating={handelRating} /> 

            ,{" "}
          </Col>
        </Form.Group>
      </Form>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
        onClick={handleSubmitOFthemovie}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default Edit

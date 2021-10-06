import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handelAdd } from '../redux/action'
import StartRating from './StartRating'

const AddMovie = () => {
 
   
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [rating, setRating] = useState(1)
  const [years, setYears] = useState('')
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let newaddmovie = {
      imgs:image,
      name:name,
      rating:rating,
      years:years,
    }
    setImage('')
    setName('')
    setRating('')
    setYears('')
    dispatch(handelAdd(newaddmovie))
  handleClose()
  }
  let handelRating = (x) => {
    setRating(x)
  }
  return (
    <div>
    <GrAddCircle
      style={{
        backgroundColor: "teal",
        fontSize: "60px",
        marginLeft: "700px",
      }}
      variant="primary"
      onClick={handleShow}
    ></GrAddCircle>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Add new Movies</Modal.Title>
      </Modal.Header>
      <Form
        style={{ marginLeft: "10px", marginTop: "10px" }}
        onSubmit={handleSubmit}
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
              type="date"
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
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
          

  )
}
export default AddMovie

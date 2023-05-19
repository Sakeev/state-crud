import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";

const AddProduct = ({ show, handleClose, handleAddProduct }) => {
  // ? создадим состояния для всех инпутов и свяжем их
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = () => {
    if (!title || !desc || !price || !image) {
      alert("Some inputs are empty!");
      return;
    }

    let newObj = {
      title,
      desc,
      price,
      image,
      id: Date.now(),
    };

    handleAddProduct(newObj);

    setTitle("");
    setDesc("");
    setPrice("");
    setImage("");

    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct;

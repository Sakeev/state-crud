import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";

const EditProduct = ({
  editProduct,
  showEditModal,
  handleEditClose,
  handleSave,
}) => {
  // ? локальное состояние для актуальной информации в инпутах
  const [product, setProduct] = useState(editProduct);

  //  ? функции для изменения каждого инпута (индивидуально)
  const editTitle = (e) => {
    let newObj = {
      ...product,
      title: e.target.value,
    };
    setProduct(newObj);
  };

  const editDesc = (e) => {
    let newObj = {
      ...product,
      desc: e.target.value,
    };
    setProduct(newObj);
  };

  const editPrice = (e) => {
    let newObj = {
      ...product,
      price: e.target.value,
    };
    setProduct(newObj);
  };

  const editImage = (e) => {
    let newObj = {
      ...product,
      image: e.target.value,
    };
    setProduct(newObj);
  };

  //  ? функция на сохранение изменений
  const saveChanges = () => {
    handleSave(product);
  };

  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Title"
              onChange={editTitle}
              value={product.title}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Description"
              onChange={editDesc}
              value={product.desc}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Price"
              onChange={editPrice}
              value={product.price}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Image"
              onChange={editImage}
              value={product.image}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="dark" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProduct;

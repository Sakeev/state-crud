import React, { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  // ? создание модалки для добавления товара
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // ? состояние для массива с продуктами
  const [products, setProducts] = useState([]);

  // ? функция для добавления товара
  const handleAddProduct = (newObj) => {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);
  };

  // ? модалка для редактирования товара
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditShow = () => setShowEditModal(true);
  const handleEditClose = () => setShowEditModal(false);

  // ? состояние на изменяемый товар
  const [editProduct, setEditProduct] = useState({});

  // ? функция для заполнения полей editModal
  const handleEdit = (id) => {
    let obj = products.filter((item) => item.id == id);
    setEditProduct(obj[0]);
    handleEditShow();
  };

  // ? функция для сохранения изменения
  const handleSave = (obj) => {
    let newProducts = products.map((item) => {
      if (item.id === obj.id) {
        return obj;
      }
      return item;
    });
    setProducts(newProducts);
    setShowEditModal(false);
  };

  // ? функция для удаления
  const handleDelete = (id) => {
    let newProducts = [...products];
    newProducts = newProducts.filter((item) => item.id !== id);
    setProducts(newProducts);
  };

  return (
    <div>
      <Header handleShow={handleShow} />
      <AddProduct
        show={show}
        handleClose={handleClose}
        handleAddProduct={handleAddProduct}
      />
      <ProductList
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {/* делаем проверку, усли у нас модалка открыта, в этом случае перерисуем компонент */}
      {showEditModal && (
        <EditProduct
          editProduct={editProduct}
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          handleSave={handleSave}
        />
      )}
    </div>
  );
};

export default App;

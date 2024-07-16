import React, { useState, useEffect } from 'react';
import { fetchProduct, deleteProduct, fetchCategories, addProduct } from '../services/productService';
import axios from 'axios';

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    description: '',
    price: '',
    categoryID: '',
    categoryName: '',
    imgUrl: '',
    costPrice: '',
    salePrice: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await fetchProduct();
        setProducts(productResponse.data);

        const categoryResponse = await fetchCategories();
        setCategories(categoryResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'categoryID') {
      const selectedCategory = categories.find(category => category._id === value);
      setNewProduct(prevState => ({
        ...prevState,
        [name]: value,
        categoryName: selectedCategory ? selectedCategory.categoryName : '',
      }));
    } else {
      setNewProduct(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddProduct = async () => {
    try {
      await addProduct(newProduct);
      const productResponse = await fetchProduct();
      setProducts(productResponse.data);
      setShowModal(false);
      setNewProduct({
        productName: '',
        description: '',
        price: '',
        categoryID: '',
        categoryName: '',
        imgUrl: '',
        costPrice: '',
        salePrice: '',
      });
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterType === 'all' || (product.categoryID && product.categoryID.categoryName && product.categoryID.categoryName.toLowerCase() === filterType))
  );

  return (
    <div className="p-10 text-[#655050]">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by product name"
          className="px-4 py-2 border border-[#655050] rounded mr-4"
        />
        <div className="flex items-center">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 ${filterType === 'all' ? 'bg-[#655050] text-white' : 'bg-white text-[#655050]'} border border-[#655050] rounded mr-2 hover:bg-[#655050] hover:text-white`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType('hot')}
            className={`px-4 py-2 ${filterType === 'hot' ? 'bg-[#655050] text-white' : 'bg-white text-[#655050]'} border border-[#655050] rounded mr-2 hover:bg-[#655050] hover:text-white`}
          >
            Hot
          </button>
          <button
            onClick={() => setFilterType('cold')}
            className={`px-4 py-2 ${filterType === 'cold' ? 'bg-[#655050] text-white' : 'bg-white text-[#655050]'} border border-[#655050] rounded mr-2 hover:bg-[#655050] hover:text-white`}
          >
            Cold
          </button>
          <button
            onClick={() => setFilterType('bakery')}
            className={`px-4 py-2 ${filterType === 'bakery' ? 'bg-[#655050] text-white' : 'bg-white text-[#655050]'} border border-[#655050] rounded hover:bg-[#655050] hover:text-white`}
          >
            Bakery
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="ml-4 px-4 py-2 bg-[#655050] text-white border border-[#655050] rounded hover:bg-white hover:text-[#655050]"
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.imgUrl} alt={product.productName} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{product.productName}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-700">Category: {product.categoryID ? product.categoryID.categoryName : 'Uncategorized'}</p>
            <p className="text-gray-700">Price: ฿{product.price}</p>
            <p className="text-gray-700">Cost Price: ฿{product.costPrice}</p>
            <p className="text-gray-700">Sale Price: ฿{product.salePrice}</p>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl mb-4">Add New Product</h2>
            <input
              type="text"
              name="productName"
              value={newProduct.productName}
              onChange={handleChange}
              placeholder="Product Name"
              className="mb-2 px-4 py-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              placeholder="Description"
              className="mb-2 px-4 py-2 border border-gray-300 rounded w-full"
            />
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Price"
              className="mb-2 px-4 py-2 border border-gray-300 rounded w-full"
            />
            <select
              name="categoryID"
              value={newProduct.categoryID}
              onChange={handleChange}
              className="mb-2 px-4 py-2 border border-gray-300 rounded w-full"
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>{category.categoryName}</option>
              ))}
            </select>
            <input
              type="text"
              name="imgUrl"
              value={newProduct.imgUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="mb-2 px-4 py-2 border border-gray-300 rounded w-full"
            />
            <input
              type="number"
              name="costPrice"
              value={newProduct.costPrice}
              onChange={handleChange}
              placeholder="Cost Price"
              className="mb-2 px-4 py-2 border border-gray-300 rounded w-full"
            />
            <input
              type="number"
              name="salePrice"
              value={newProduct.salePrice}
              onChange={handleChange}
              placeholder="Sale Price"
              className="mb-2 px-4 py-2 border border-gray-300 rounded w-full"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 bg-[#655050] text-white rounded hover:bg-white hover:text-[#655050]"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProduct;

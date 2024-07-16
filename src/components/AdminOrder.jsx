import React, { useState, useEffect } from 'react';
import { fetchOrder } from '../services/orderService';

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [sortType, setSortType] = useState('total');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('customerName');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchOrder();
        setOrders(response);
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (a, b) => {
    if (sortType === 'total') {
      return b.subTotal - a.subTotal;
    } else if (sortType === 'purchaseDate') {
      return new Date(b.purchaseDate) - new Date(a.purchaseDate);
    }
  };

  const filteredOrders = orders.filter(order => {
    if (searchType === 'customerName') {
      return order.customerName.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchType === 'orderDetail') {
      return order.orderDetails.some(detail => 
        detail.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  }).sort(handleSort);

  return (
    <div className="p-10 text-[#655050]">
      <h1 className="text-3xl font-semibold mb-6">Orders</h1>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="px-4 py-2 border border-[#655050] rounded mr-4"
          >
            <option value="customerName">Search by Customer Name</option>
            <option value="orderDetail">Search by Order Detail</option>
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search"
            className="px-4 py-2 border border-[#655050] rounded mr-4"
          />
        </div>
        <div className="flex items-center">
          <label className="mr-2">Sort by:</label>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="px-4 py-2 border border-[#655050] rounded"
          >
            <option value="total">Total</option>
            <option value="purchaseDate">Purchase Date</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => (
            <div key={order._id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Order ID: {order._id}</h2>
              <p className="text-gray-700">Customer Name: {order.customerName}</p>
              <p className="text-gray-700">Total: ฿{order.subTotal}</p>
              <p className="text-gray-700">VAT: ฿{order.vat}</p>
              <p className="text-gray-700">Purchase Date: {new Date(order.purchaseDate).toLocaleDateString()}</p>
              <p className="text-gray-700">Status: {order.status}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Order Details</h3>
                <ul className="list-disc ml-5">
                  {order.orderDetails.map(detail => (
                    <li key={detail._id}>
                      <p>Product Name: {detail.productName}</p>
                      <p>Quantity: {detail.quantity}</p>
                      <p>Price: ฿{detail.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminOrder;

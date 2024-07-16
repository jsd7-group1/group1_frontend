import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchOrder } from '../services/orderService';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesByProductChart = () => {
  const [chartData, setChartData] = useState(null);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await fetchOrder();

        // Flatten order details
        let orderDetails = orders.flatMap(order => order.orderDetails);

        // Aggregate quantities by product name
        const aggregatedData = orderDetails.reduce((acc, detail) => {
          const productName = detail.productID.productName;
          if (!acc[productName]) {
            acc[productName] = 0;
          }
          acc[productName] += detail.quantity;
          return acc;
        }, {});

        // Filter by product type if filterType is not 'all'
        let filteredData = Object.entries(aggregatedData).map(([productName, quantity]) => {
          const categoryName = orderDetails.find(detail => detail.productID.productName === productName).productID.categoryID.categoryName.toLowerCase();
          return { productName, quantity, categoryName };
        });

        if (filterType !== 'all') {
          filteredData = filteredData.filter(data => data.categoryName === filterType);
        }

        // Sort by quantity
        filteredData.sort((a, b) => sortOrder === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity);

        // Limit to 5 items if descending is selected
        filteredData.sort((a, b) => sortOrder === 'descending' ? b.quantity - a.quantity : a.quantity - b.quantity);

        // Extract product names and quantities
        const productNames = filteredData.map(data => data.productName);
        const quantities = filteredData.map(data => data.quantity);

        setChartData({
          labels: productNames,
          datasets: [
            {
              label: 'Quantity',
              data: quantities,
              backgroundColor: 'rgba(101, 80, 80, 0.6)',
              borderColor: 'rgba(101, 80, 80, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching order data", error);
      }
    };

    fetchData();
  }, [sortOrder, filterType]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <label className="mr-2">Sort Order:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border border-[#655050] rounded mr-4"
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className="flex items-center">
          <label className="mr-2">Filter Type:</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-[#655050] rounded"
          >
            <option value="all">All</option>
            <option value="hot">Hot</option>
            <option value="cold">Cold</option>
            <option value="bakery">Bakery</option>
          </select>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">Sales by Product</h2>
      {chartData ? (
        <div style={{ height: '300px' }}>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default SalesByProductChart;

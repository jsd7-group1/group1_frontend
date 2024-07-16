import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchOrder } from '../services/orderService';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const MonthlySummaryChart = () => {
  const [chartData, setChartData] = useState(null);
  const [displayType, setDisplayType] = useState('subtotal');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await fetchOrder();

        // Group data by month
        const groupedData = orders.reduce((acc, order) => {
          const date = new Date(order.purchaseDate);
          const month = date.toLocaleString('default', { month: 'short' });
          const year = date.getFullYear();
          const key = `${month} ${year}`;

          if (!acc[key]) {
            acc[key] = { subtotal: 0, vat: 0, total: 0 };
          }

          acc[key].subtotal += order.subTotal;
          acc[key].vat += order.vat;
          acc[key].total += order.subTotal + order.vat;

          return acc;
        }, {});

        // Prepare chart data
        const labels = Object.keys(groupedData);
        const data = labels.map(label => groupedData[label][displayType]);

        setChartData({
          labels,
          datasets: [
            {
              label: displayType,
              data,
              backgroundColor: 'rgba(101, 80, 80, 0.6)',
              borderColor: 'rgba(101, 80, 80, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching order data', error);
      }
    };

    fetchData();
  }, [displayType]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <label className="mr-2">Display:</label>
          <select
            value={displayType}
            onChange={(e) => setDisplayType(e.target.value)}
            className="px-4 py-2 border border-[#655050] rounded"
          >
            <option value="subtotal">Subtotal</option>
            <option value="vat">VAT</option>
            <option value="total">Total</option>
          </select>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">Monthly Summary</h2>
      {chartData ? (
        <div style={{ height: '300px' }}>
          <Line
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

export default MonthlySummaryChart;

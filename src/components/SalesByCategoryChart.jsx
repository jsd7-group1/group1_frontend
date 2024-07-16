import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { fetchOrder } from '../services/orderService';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
  );
  
const SalesByCategoryChart = () => {
  const [pieData, setPieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await fetchOrder();

        // Flatten order details
        let orderDetails = orders.flatMap(order => order.orderDetails);

        // Aggregate quantities by category
        const categoryData = orderDetails.reduce((acc, detail) => {
          const category = detail.productID.categoryID.categoryName.toLowerCase();
          if (!acc[category]) {
            acc[category] = 0;
          }
          acc[category] += detail.quantity;
          return acc;
        }, { hot: 0, cold: 0, bakery: 0 });

        // Calculate total quantity
        const totalQuantity = categoryData.hot + categoryData.cold + categoryData.bakery;

        // Extract categories and their quantities
        const categories = ['hot', 'cold', 'bakery'];
        const categoryQuantities = categories.map(category => categoryData[category]);

        setPieData({
          labels: categories.map(category => category.charAt(0).toUpperCase() + category.slice(1)),
          datasets: [
            {
              data: categoryQuantities,
              backgroundColor: [
                'rgba(128, 70, 27, 0.6)', // Brown gradient 1
                'rgba(165, 105, 70, 0.6)', // Brown gradient 2
                'rgba(210, 180, 140, 0.6)' // Brown gradient 3
              ],
              hoverBackgroundColor: [
                'rgba(128, 70, 27, 0.8)', // Brown gradient 1 hover
                'rgba(165, 105, 70, 0.8)', // Brown gradient 2 hover
                'rgba(210, 180, 140, 0.8)' // Brown gradient 3 hover
              ],
            },
          ],
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  const quantity = tooltipItem.raw;
                  return `${tooltipItem.label}: ${quantity}`;
                }
              }
            },
            legend: {
              display: true,
              position: 'right',
              labels: {
                generateLabels: function (chart) {
                  const data = chart.data;
                  if (data.labels.length && data.datasets.length) {
                    return data.labels.map((label, i) => {
                      const meta = chart.getDatasetMeta(0);
                      const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
                      const value = data.datasets[0].data[i];
                      const percentage = ((value / total) * 100).toFixed(2) + '%';
                      return {
                        text: label + ' (' + percentage + ')',
                        fillStyle: data.datasets[0].backgroundColor[i],
                        strokeStyle: data.datasets[0].borderColor ? data.datasets[0].borderColor[i] : undefined,
                        lineWidth: data.datasets[0].borderWidth,
                        hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                        index: i
                      };
                    });
                  }
                  return [];
                }
              }
            }
          }
        });
      } catch (error) {
        console.error("Error fetching order data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Sales by Category</h2>
      {pieData ? (
        <div style={{ height: '300px' }}>
          <Pie
            data={pieData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: 'right',
                  labels: {
                    generateLabels: function (chart) {
                      const data = chart.data;
                      if (data.labels.length && data.datasets.length) {
                        return data.labels.map((label, i) => {
                          const meta = chart.getDatasetMeta(0);
                          const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
                          const value = data.datasets[0].data[i];
                          const percentage = ((value / total) * 100).toFixed(2) + '%';
                          return {
                            text: label + ' (' + percentage + ')',
                            fillStyle: data.datasets[0].backgroundColor[i],
                            strokeStyle: data.datasets[0].borderColor ? data.datasets[0].borderColor[i] : undefined,
                            lineWidth: data.datasets[0].borderWidth,
                            hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                            index: i
                          };
                        });
                      }
                      return [];
                    }
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function (tooltipItem) {
                      const quantity = tooltipItem.raw;
                      return `${tooltipItem.label}: ${quantity}`;
                    }
                  }
                }
              }
            }}
          />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default SalesByCategoryChart;

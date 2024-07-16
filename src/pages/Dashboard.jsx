import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SalesByCategoryChart from "../components/SalesByCategoryChart";
import SalesByProductChart from "../components/SaleByProductChart";
import MonthlySummaryChart from "../components/MonthlySummaryChart";
import AdminProduct from "../components/AdminProduct";
import AdminOrder from "../components/AdminOrder";
import AdminUser from "../components/AdminUser";
import { getUsers } from "../services/userService";

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [sortOrder, setSortOrder] = useState("descending");
  const [filterType, setFilterType] = useState("all");
  const navigate = useNavigate();

  const decodeToken = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  useEffect(() => {
    const checkUserType = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = decodeToken(token);
        const userId = decoded.id;
        try {
          const response = await getUsers();
          const user = response.data.find((user) => user._id === userId);
          if (user.userType === 1) {
            navigate("/");
          }
        } catch (error) {
          console.error("Error fetching user details", error);
        }
      }
    };

    checkUserType();
  }, [navigate]);

  useEffect(() => {
    if (activeSection === "logout") {
      localStorage.removeItem("token"); // Remove token from local storage
      navigate("/");
    }
  }, [activeSection, navigate]);

  return (
    <div className="flex h-screen bg-[#FCFAFA]">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <MainContent
        activeSection={activeSection}
        sortOrder={sortOrder}
        filterType={filterType}
        setSortOrder={setSortOrder}
        setFilterType={setFilterType}
      />
    </div>
  );
};

const MainContent = ({
  activeSection,
  sortOrder,
  filterType,
  setSortOrder,
  setFilterType,
}) => {
  return (
    <div className="flex-1 p-10 text-[#655050]">
      {activeSection === "overview" && (
        <>
          <h1 className="text-3xl font-semibold mb-6">Sale Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-screen-xl">
            <div className="mb-4 flex items-center justify-between col-span-2">
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
            <SalesByProductChart
              sortOrder={sortOrder}
              filterType={filterType}
            />
            <SalesByCategoryChart />
            <div className="col-span-2">
              <MonthlySummaryChart />
            </div>
          </div>
        </>
      )}
      {activeSection === "products" && <AdminProduct />}
      {activeSection === "orders" && <AdminOrder />}
      {activeSection === "user" && <AdminUser />}
      {activeSection === "logout" && (
        <div>
          <h1 className="text-3xl font-semibold mb-6">Logout</h1>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

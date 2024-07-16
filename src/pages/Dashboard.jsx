import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SalesByCategoryChart from '../components/SalesByCategoryChart';
import SalesByProductChart from '../components/SaleByProductChart';
import MonthlySummaryChart from '../components/MonthlySummaryChart';
import AdminProduct from '../components/AdminProduct';
import AdminOrder from '../components/AdminOrder';
import AdminUser from '../components/AdminUser';

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex h-screen bg-[#FCFAFA]">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent activeSection={activeSection} />
    </div>
  );
};

const MainContent = ({ activeSection }) => {
  return (
    <div className="flex-1 p-10 text-[#655050]">
      {activeSection === 'overview' && (
        <>
          <h1 className="text-3xl font-semibold mb-6">Sale Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-screen-xl">
            <SalesByProductChart />
            <SalesByCategoryChart />
            <div className="col-span-2">
              <MonthlySummaryChart />
            </div>
          </div>
        </>
      )}
      {activeSection === 'products' && <AdminProduct />}
      {activeSection === 'orders' && <AdminOrder />}
      {activeSection === 'user' &&<AdminUser/>}
      {activeSection === 'logout' && (
        <div>
          <h1 className="text-3xl font-semibold mb-6">Logout</h1>
          {/* Logout content goes here */}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

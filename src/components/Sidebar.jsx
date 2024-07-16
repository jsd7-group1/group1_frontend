import React from 'react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { name: 'Dashboard', section: 'overview' },
    { name: 'Products', section: 'products' },
    { name: 'Orders', section: 'orders' },
    { name: 'User', section: 'user' },
    { name: 'Logout', section: 'logout' }
  ];

  return (
    <div className="w-64 bg-[#F4F4F4] shadow-md">
      <div className="p-4 text-xl font-bold text-[#655050]">Potion Cafe</div>
      <nav className="mt-10">
        {menuItems.map((item) => (
          <button
            key={item.section}
            onClick={() => setActiveSection(item.section)}
            className={`w-full text-left block py-2.5 px-4 rounded transition duration-200 hover:bg-[#E0E0E0] hover:text-[#655050] ${
              activeSection === item.section ? 'bg-[#E0E0E0] text-[#655050]' : 'text-[#655050]'
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

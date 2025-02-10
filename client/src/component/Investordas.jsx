import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'GreenTech Solutions',
    imageSrc: '../../src/assets/images/4.png',
    description: 'A startup using AI to optimize energy consumption in industrial operations, reducing carbon footprints and providing cost savings while promoting sustainability.',
    category: 'Tech',
    investorName: 'John Doe',
    date: '2025-02-10',
    ROI: '15%',
    AQI: 'Low',
    otherDetails: 'Investing in green technologies for a sustainable future.',
  },
  {
    id: 2,
    name: 'Urban Farming Network',
    imageSrc: '../../src/assets/images/5.png',
    description: 'An initiative to create vertical farming systems in urban spaces, transforming underutilized buildings into sustainable food production hubs.',
    category: 'Sustainability',
    investorName: 'Jane Smith',
    date: '2025-02-09',
    ROI: '12%',
    AQI: 'Moderate',
    otherDetails: 'Revolutionizing the future of urban food systems.',
  },
  {
    id: 3,
    name: 'Smart Waste Management',
    imageSrc: '../../src/assets/images/6.png',
    description: 'A tech-driven solution that uses AI and IoT sensors to optimize waste collection and recycling processes.',
    category: 'Sustainability',
    investorName: 'Michael Lee',
    date: '2025-02-08',
    ROI: '20%',
    AQI: 'Good',
    otherDetails: 'Turning waste management into a smart solution.',
  },
  {
    id: 4,
    name: 'Eco-Friendly Packaging',
    imageSrc: '../../src/assets/images/7.png',
    description: 'A company providing sustainable, biodegradable packaging alternatives to replace single-use plastics.',
    category: 'Tech',
    investorName: 'Sarah Williams',
    date: '2025-02-08',
    ROI: '10%',
    AQI: 'Good',
    otherDetails: 'Helping businesses switch to eco-friendly packaging.',
  },
  {
    id: 5,
    name: 'AI Health Monitoring Wearables',
    imageSrc: '../../src/assets/images/8.png',
    description: 'A wearable technology startup focused on developing advanced health monitoring devices powered by AI.',
    category: 'Health',
    investorName: 'David Brown',
    date: '2025-02-08',
    ROI: '18%',
    AQI: 'Moderate',
    otherDetails: 'AI-powered health monitoring for the future.',
  },
];

const CartItem = ({ product }) => (
  <div className="flex gap-12 bg-white px-4 py-6 rounded-lg border border-gray-200 shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)] mb-4 ml-4 mr-4">
    <div className="flex gap-4">
      <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
        <img src={product.imageSrc} className="w-full h-full object-contain" alt={product.name} />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-md sm:text-base font-bold text-gray-800">{product.name}</h3>
          <p className="text-sm font-semibold text-gray-500 mt-2">{product.description}</p>
        </div>
        {/* Investor Name, ROI, AQI and Other Details */}
        <div className="mt-4 text-gray-700">
          <p><strong>Investor Name:</strong> {product.investorName}</p>
          <p><strong>ROI:</strong> {product.ROI}</p>
          <p><strong>AQI:</strong> {product.AQI}</p>
          <p><strong>Details:</strong> {product.otherDetails}</p>
        </div>
      </div>
    </div>
    <div className="ml-auto flex flex-col">
      <div className="flex items-start gap-4 justify-end">
        <p className="text-sm font-semibold text-gray-900 mt-2 whitespace-nowrap">Date: {product.date}</p>
      </div>
    </div>
  </div>
);

const Investordas = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [otherFilter, setOtherFilter] = useState("All");

  // Filter products based on selected category filter
  const filteredProducts = products.filter((product) => {
    if (categoryFilter === "All" && otherFilter === "All") {
      return true;
    }
    if (categoryFilter !== "All" && otherFilter === "All") {
      return product.category === categoryFilter;
    }
    if (categoryFilter === "All" && otherFilter !== "All") {
      return product.category === otherFilter;
    }
    return product.category === categoryFilter || product.category === otherFilter;
  });

  return (
    <div className="w-full py-10">
      {/* Dropdown and Filter Section */}
      <div className="flex justify-between mb-8">
        {/* Dropdown on the Left */}
        <div className="relative ml-6 text-4xl font-bold text-gray-800 font-poppins">
          Ideas
        </div>

        {/* Filter on the Right */}
        <div className="relative mr-4">
          <select
            value={otherFilter}
            onChange={(e) => setOtherFilter(e.target.value)}
            className=" bg-white text-gray-600 py-2 px-6 border-2 border-gray-400 rounded-md hover:border-[#0062B6]"
          >
            <option value="All">Filter</option>
            <option value="Sustainability">Sustainability</option>
            <option value="Tech">Tech</option>
            <option value="Health">Health</option>
          </select>
        </div>
      </div>

      {/* Products Section */}
      {filteredProducts.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Investordas;

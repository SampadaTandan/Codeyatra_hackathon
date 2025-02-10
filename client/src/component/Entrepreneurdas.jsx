import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'John Doe',
    imageSrc: '../../src/assets/images/12.png',
    description: 'Tech investor with 15+ years of experience, focused on scaling startups in sustainability and innovation.',
    
    category: 'Tech',
  },
  {
    id: 2,
    name: 'Jane Smith',
    imageSrc: '../../src/assets/images/13.png',
    description: 'Venture capitalist specializing in AI-driven solutions and sustainable business models.',
    
    category: 'Sustainability',
  },
  {
    id: 3,
    name: 'Michael Lee',
    imageSrc: '../../src/assets/images/14.png',
    description: 'Serial entrepreneur turned investor, passionate about green tech and advancing renewable energy.',
    
    category: 'Sustainability',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    imageSrc: '../../src/assets/images/15.png',
    description: ' Angel investor focused on health tech startups aiming to disrupt the healthcare industry with innovative solutions.',
    
    category: 'Tech',
  },
  {
    id: 5,
    name: 'David Brown',
    imageSrc: '../../src/assets/images/16.png',
    description: 'nvestor with a background in engineering, specializing in innovative startups that drive environmental sustainability.',
    
    category: 'Health',
  },
];

const CartItem = ({ product }) => (
  <div className="flex gap-12 bg-white px-4 py-6 rounded-lg border border-gray-200 shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)] mb-4 ml-4 mr-4">
    <div className="flex gap-4">
      <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
        <img src={product.imageSrc} className="w-full h-full object-contain rounded" alt={product.name} />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-gray-800">{product.name}</h3>
          <p className="text-sm font-semibold text-gray-500 mt-2">{product.description}</p>
        </div>
      </div>
    </div>
    
  </div>
);

const Entrepreneurdas = () => {
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
          {/* <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-white text-gray-600 py-2 px-6 border-2 border-gray-400 rounded-md hover:border-[#0062B6]"
          >
            <option value="All">Category</option>
            <option value="Sustainability">Sustainability</option>
            <option value="Tech">Tech</option>
            <option value="Health">Health</option>
          </select> */}
          Investors
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

export default Entrepreneurdas;

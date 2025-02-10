import React, { useState, useEffect } from "react";

const Investordas = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [otherFilter, setOtherFilter] = useState("All");
  const [businesses, setBusinesses] = useState([]);

  // Assuming curElem fetches data from a database or API
  useEffect(() => {
    // Mocking a database/API fetch with an example structure
    const fetchedBusinesses = [
      {
        businessName: "GreenTech Energy",
        category: "Renewable Energy",
        imageSrc: "../../src/assets/images/1.png",
        ROI: 25,
        AQI: "High",
        bulletPoints: [
          "GreenTech Energy is a pioneering company dedicated to providing cutting-edge renewable energy solutions",
          "The company specializes in solar panels and advanced battery systems for energy storage",
          "GreenTech Energy was founded in 2007 and has offices in New York, Washington, and Los Angeles.",
        ],
      },
      {
        businessName: "Urban Mobility",
        category: "Transportation",
        imageSrc: "../../src/assets/images/4.png",
        ROI: 15,
        AQI: "High",
        bulletPoints: [
          "Urban Mobility is revolutionizing urban transportation by offering electric scooter rentals to city commuters",
          "Urban Mobility is a subsidiary of Urban Mobility, which is based in New York City",
          "The company's scooter rental service is called Urban Mobility Scooter Rides.",
        ],
      },
      {
        businessName: "EcoFarms",
        category: "Agriculture",
        imageSrc: "../../src/assets/images/5.png",
        ROI: 18,
        AQI: "High",
        bulletPoints: [
          "EcoFarms is at the forefront of transforming the agriculture industry",
          "EcoFarms promotes organic farming practices that are not only sustainable but also highly productive",
          "For more information, visit www.ecofarms.com or visit the company's Facebook page.",
        ],
      },
      {
        businessName: "AI FinTech",
        category: "Financial Services",
        imageSrc: "../../src/assets/images/6.png",
        ROI: 22,
        AQI: "Medium",
        bulletPoints: [
          "AI FinTech is an innovative financial technology company that leverages artificial intelligence to offer intelligent, data-driven trading solutions",
          "The company is based in New York and has offices in London and San Francisco",
          "For more information, visit: www.aifintech.com.",
        ],
      },
      {
        businessName: "Waste2Wealth",
        category: "Waste Management",
        imageSrc: "../../src/assets/images/7.png",
        ROI: 10,
        AQI: "High",
        bulletPoints: [
          "Waste2Wealth is revolutionizing the waste management industry",
          "It offers innovative solutions that convert waste into valuable resources",
          "The company is based in New York City and has offices in London and Paris",
          "For more information, visit waste2wealth.com.",
        ],
      },
      {
        businessName: "AutoRevive",
        category: "Automotive",
        imageSrc: "../../src/assets/images/8.png",
        ROI: 20,
        AQI: "Medium",
        bulletPoints: [
          "AutoRevive is a forward-thinking company that specializes in providing high-quality parts and components to the electric vehicle (EV) industry",
          "AutoRevive provides parts and parts components for electric vehicles",
          "The company is based in San Francisco, California.",
        ],
      },
      {
        businessName: "TextilePro",
        category: "Manufacturing",
        imageSrc: "../../src/assets/images/9.png",
        ROI: 17,
        AQI: "High",
        bulletPoints: [
          "TextilePro is a leading manufacturer of sustainable fabrics designed for the fashion industry",
          "TextilePro's fabrics are made from sustainable materials such as cotton, silk and polyester",
          "The company's fabrics can be found in stores across the U.S and Europe.",
        ],
      },
      {
        businessName: "CarbonCut",
        category: "Industrial Solutions",
        imageSrc: "../../src/assets/images/10.png",
        ROI: 12,
        AQI: "Medium",
        bulletPoints: [
          "CarbonCut is a company at the forefront of developing and providing innovative carbon capture technologies",
          "The company's technologies are designed to reduce industrial emissions",
          "CarbonCut is based in San Francisco, California and has offices in London and New York",
          "For more information on CarbonCut, visit their website.",
        ],
      },
      {
        businessName: "MegaMines Corp",
        category: "Mining",
        imageSrc: "../../src/assets/images/4.png",
        ROI: 8,
        AQI: "Low",
        bulletPoints: [
          "MegaMines Corp is a prominent player in the mining industry",
          "The company specializes in the extraction and sale of coal and valuable minerals",
          "MegaMines is one of the largest coal mining companies in the United States",
          "It is based in Atlanta, Georgia, and has more than 1,000 employees.",
        ],
      },
      {
        businessName: "Cloud IT Solutions",
        category: "Information Technology",
        imageSrc: "../../src/assets/images/6.png",
        ROI: 20,
        AQI: "Medium",
        bulletPoints: [
          "Cloud IT Solutions is an IT services provider offering cloud-based solutions that allow businesses to optimize their operations",
          "Cloud IT Solutions offers secure, scalable, and efficient technology",
          "For more information, visit www.clouditsolutions.com",
          "For confidential support call the Samaritans on 08457 90 90 90, visit a local Samaritans branch or click here.",
        ],
      },
    ];

    // Simulating fetching data
    setBusinesses(fetchedBusinesses);
  }, []);

  // Filter businesses based on selected category filter
  const filteredBusinesses = businesses.filter((business) => {
    if (categoryFilter === "All" && otherFilter === "All") {
      return true;
    }
    if (categoryFilter !== "All" && otherFilter === "All") {
      return business.category === categoryFilter;
    }
    if (categoryFilter === "All" && otherFilter !== "All") {
      return business.category === otherFilter;
    }
    return (
      business.category === categoryFilter || business.category === otherFilter
    );
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
            className="bg-white text-gray-600 py-2 px-6 border-2 border-gray-400 rounded-md hover:border-[#0062B6]"
          >
            <option value="All">Filter</option>
            <option value="Sustainability">Sustainability</option>
            <option value="Tech">Tech</option>
            <option value="Health">Health</option>
          </select>
        </div>
      </div>

      {/* Businesses Section */}
      {filteredBusinesses.map((curElem) => (
        <div
          key={curElem.id}
          className="flex gap-12 bg-white px-4 py-6 rounded-lg border border-gray-200 shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)] mb-4 ml-4 mr-4"
        >
          <div className="flex gap-4">
            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
              <img
                src={curElem.imageSrc}
                className="w-full h-full object-contain"
                alt={curElem.businessName}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-md sm:text-base font-bold text-gray-800">
                  {curElem.businessName}
                </h3>
                {/* Display Bullet Points */}
                <ul className="text-sm font-semibold text-gray-500 mt-2">
                  {curElem.bulletPoints.map((point, index) => (
                    <li key={index} className="ml-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Display ROI, AQI */}
              <div className="mt-4 text-gray-700">
                <p>
                  <strong>ROI:</strong> {curElem.ROI}
                </p>
                <p>
                  <strong>AQI:</strong> {curElem.AQI}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Investordas;

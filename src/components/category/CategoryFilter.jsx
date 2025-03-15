import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const CategoryFilter = ({ onSelect }) => {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    fetch("/postjobs.json")
      .then((response) => response.json())
      .then((data) => {
        const categoryMap = {};
        data.forEach((job) => {
          const { category, subCategory } = job;
          if (!categoryMap[category.name]) {
            categoryMap[category.name] = new Set();
          }
          categoryMap[category.name].add(subCategory.name);
        });
        setCategories(Object.entries(categoryMap));
      });
  }, []);

  const toggleExpand = (categoryName) => {
    setExpanded((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className="fixed top-16 left-0 w-64 h-[calc(100vh-3.5rem)] overflow-y-auto p-8">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">Categories</h2>
      <ul className="space-y-2">
        {categories.map(([categoryName, subCategories]) => (
          <li key={categoryName} className="mb-2">
            <button
              className="w-full flex justify-between items-center text-left text-gray-800 hover:text-blue-600 transition-all duration-200"
              onClick={() => toggleExpand(categoryName)}
            >
              {categoryName}
              {expanded[categoryName] ? (
                <FaChevronDown className="text-sm" />
              ) : (
                <FaChevronRight className="text-sm" />
              )}
            </button>
            {expanded[categoryName] && (
              <ul className="ml-4 mt-2 space-y-1">
                {[...subCategories].map((subCategoryName) => (
                  <li
                    key={subCategoryName}
                    className="text-gray-600 hover:text-blue-500 cursor-pointer pl-4 border-l-2 border-gray-300 transition-all duration-150"
                    onClick={() => onSelect(subCategoryName)}
                  >
                    {subCategoryName}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;

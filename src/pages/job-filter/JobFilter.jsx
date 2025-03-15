import { useState } from 'react';

const categories = [
  {
    name: 'Norway',
    count: 595,
    subcategories: [
      {
        name: 'Oslo',
        count: 261,
        subcategories: [
          { name: 'Downtown', count: 120 },
          { name: 'Suburbs', count: 141 },
        ],
      },
      {
        name: 'Rogaland',
        count: 60,
        subcategories: [],
      },
      {
        name: 'Trondelag',
        count: 61,
        subcategories: [
          { name: 'Trondheim', count: 40 },
          { name: 'Steinkjer', count: 21 },
        ],
      },
    ],
  },
  {
    name: 'Abroad',
    count: 3,
    subcategories: [],
  },
];

const jobs = [
  {
    id: 1,
    company: 'Kartverket',
    location: 'Downtown',
    position: 'Architect Development',
    description: 'Looking for an experienced architect in Downtown Oslo.',
  },
  {
    id: 2,
    company: 'Wood',
    location: 'Trondheim',
    position: 'Cyber Engineer',
    description: 'Exciting cybersecurity opportunities available in Trondheim!',
  },
];

export default function JobFilter() {
  const [selectedFilters, setSelectedFilters] = useState(new Set());

  function handleFilterChange(checked, category) {
    setSelectedFilters((prevFilters) => {
      const newFilters = new Set(prevFilters);
      checked ? newFilters.add(category) : newFilters.delete(category);
      return newFilters;
    });
  }

  const renderCheckboxes = (items, level = 0) => {
    return items.map((item, index) => (
      <div key={index} className={`ml-${level * 4} mt-2`}>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) => handleFilterChange(e.target.checked, item.name)}
          />
          {item.name} ({item.count})
        </label>
        {selectedFilters.has(item.name) && item.subcategories?.length > 0 && (
          <div className="ml-4">{renderCheckboxes(item.subcategories, level + 1)}</div>
        )}
      </div>
    ));
  };

  const filteredJobs =
    selectedFilters.size === 0
      ? jobs
      : jobs.filter((job) => selectedFilters.has(job.location));

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r">
        <h2 className="text-lg font-semibold mb-4">Area</h2>
        {renderCheckboxes(categories)}
      </div>

      {/* Job Listings */}
      <div className="w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{job.company}</h3>
              <p className="text-gray-600">{job.location}</p>
              <p className="font-semibold mt-2">{job.position}</p>
              <p className="text-gray-700 mt-1">{job.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
  );
}

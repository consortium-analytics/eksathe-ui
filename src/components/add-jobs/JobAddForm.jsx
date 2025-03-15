import React, { useState, useEffect } from "react";

const JobAddForm = () => {
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    vacancy: "",
    location: "Bangladesh",
    experience: "",
    deadline: "",
    latitude: 23.8103,
    longitude: 90.4125,
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Details Submitted:", jobDetails);
  };

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initMap();
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
        script.async = true;
        script.onload = initMap;
        document.head.appendChild(script);
      }
    };

    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: jobDetails.latitude, lng: jobDetails.longitude },
        zoom: 13,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: jobDetails.latitude, lng: jobDetails.longitude },
        map,
        draggable: true,
      });

      marker.addListener("dragend", (event) => {
        setJobDetails({ ...jobDetails, latitude: event.latLng.lat(), longitude: event.latLng.lng() });
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="max-w-xl mx-auto my-20 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">Add New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Job Title</label>
          <input
            type="text"
            name="title"
            value={jobDetails.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Vacancy</label>
          <input
            type="number"
            name="vacancy"
            value={jobDetails.vacancy}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Job Description</label>
          <textarea
            name="description"
            value={jobDetails.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-teal-500"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Experience Required</label>
          <input
            type="text"
            name="experience"
            value={jobDetails.experience}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Salary</label>
          <input
            type="number"
            name="salary"
            value={jobDetails.salary}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={jobDetails.deadline}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Select Job Location</h3>
          <input
            type="text"
            id="location-input"
            placeholder="Enter location"
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-teal-500"
          />
          <div id="map" className="w-full h-60 rounded-lg mt-3"></div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default JobAddForm;

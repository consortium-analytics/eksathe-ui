import React, { useState, useEffect } from "react";

const AdForm = () => {
  const [adDetails, setAdDetails] = useState({
    title: "",
    category: "Electronics",
    description: "",
    price: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    location: "Bangladesh",
    latitude: 23.8103,
    longitude: 90.4125,
    expiryDate: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdDetails({ ...adDetails, [name]: value });
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setAdDetails({ ...adDetails, images: files });

    // Preview Images
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ad Details Submitted:", adDetails);
  };

  return (
    <div className="max-w-3xl mx-auto my-20 p-8 bg-white shadow-lg rounded-xl border border-gray-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Post an Advertisement</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Ad Title</label>
            <input type="text" name="title" value={adDetails.title} onChange={handleChange} 
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Category</label>
            <select name="category" value={adDetails.category} onChange={handleChange} 
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500">
              <option>Electronics</option>
              <option>Vehicles</option>
              <option>Real Estate</option>
              <option>Jobs</option>
              <option>Services</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea name="description" value={adDetails.description} onChange={handleChange} rows="4" 
            className="w-full p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500" required />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Price</label>
          <input type="number" name="price" value={adDetails.price} onChange={handleChange} 
            className="w-full p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500" required />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Contact Name</label>
            <input type="text" name="contactName" value={adDetails.contactName} onChange={handleChange} 
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input type="email" name="contactEmail" value={adDetails.contactEmail} onChange={handleChange} 
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Phone</label>
            <input type="text" name="contactPhone" value={adDetails.contactPhone} onChange={handleChange} 
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500" required />
          </div>
        </div>

        {/* Expiry Date */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Expiry Date</label>
          <input type="date" name="expiryDate" value={adDetails.expiryDate} onChange={handleChange} 
            className="w-full p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500" required />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Upload Images</label>
          <input type="file" multiple accept="image/*" onChange={handleImageUpload} 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
          <div className="mt-3 flex flex-wrap gap-3">
            {imagePreviews.map((src, idx) => (
              <img key={idx} src={src} alt="Preview" className="w-20 h-20 object-cover rounded-md shadow" />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
          Post Ad
        </button>
      </form>
    </div>
  );
};

export default AdForm;

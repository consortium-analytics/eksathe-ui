import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

export default function HotJobs() {
  const jobs = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Software Engineer",
      company: "Google",
      description:
        "Join Google's innovative engineering team to build scalable solutions.",
      location: "Mountain View, CA",
      time: "3 days ago",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Data Scientist",
      company: "Facebook",
      description:
        "Work on cutting-edge data analysis and machine learning projects.",
      location: "Menlo Park, CA",
      time: "1 week ago",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "UX Designer",
      company: "Airbnb",
      description:
        "Design beautiful user experiences for Airbnb’s product suite.",
      location: "San Francisco, CA",
      time: "2 weeks ago",
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Product Manager",
      company: "Microsoft",
      description: "Lead product development for Microsoft’s Azure Cloud team.",
      location: "Redmond, WA",
      time: "5 days ago",
    },
    {
      id: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Marketing Specialist",
      company: "Tesla",
      description:
        "Manage marketing campaigns and help expand Tesla’s customer base.",
      location: "Palo Alto, CA",
      time: "3 days ago",
    },
    {
      id: 6,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Cybersecurity Analyst",
      company: "Amazon",
      description: "Help ensure the security of Amazon’s systems and data.",
      location: "Seattle, WA",
      time: "1 month ago",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center tracking-tight leading-tight border-b-2 border-gray-100 pb-4">
        Hot Jobs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg border border-gray-200 transition-all duration-200 ease-in-out hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-full border-2 border-gray-200"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
              </div>
              <FavoriteButton />
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {job.description}
              </p>
              <div className="flex justify-between items-center text-gray-500 text-xs">
                <span>{job.location}</span>
                <span>{job.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`transition-all duration-200 focus:outline-none ${
        isFavorite ? "text-yellow-400" : "text-gray-400"
      } 
      hover:text-yellow-500`}
    >
      <FaBookmark className="w-6 h-6" />
    </button>
  );
}

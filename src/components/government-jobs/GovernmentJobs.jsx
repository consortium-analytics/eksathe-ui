import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

export default function GovernmentJobs() {
  const jobs = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Researcher in Health...",
      company: "DNV",
      description:
        "We are looking for a Researcher in Healthcare program to join our team in Oslo!",
      location: "Oslo",
      time: "1 month ago",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Senior Research Engi...",
      company: "DNV AS",
      description:
        "Are you our new Senior Researcher in Group, Research and Development?",
      location: "Oslo",
      time: "3 weeks ago",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Researcher in the fie...",
      company: "Defence Research Institute",
      description:
        "Would you like to help develop Norway's defense against biological threats?",
      location: "Basement",
      time: "3 weeks ago",
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Postdoctoral fellow/R...",
      company: "Oslo University Hospital HF",
      description:
        "Postdoctoral fellow/Researcher position in translational research: Tankyrase inhibition",
      location: "Oslo",
      time: "3 weeks ago",
    },
    {
      id: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Analyst",
      company: "StudentConsulting",
      description:
        "Chemical engineer with experience from the pharmaceutical industry? Look here!",
      location: "Oslo",
      time: "1 month ago",
    },
    {
      id: 6,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Researcher",
      company: "NIFU Nordic Institute for Studies",
      description: "Researcher for higher education studies",
      location: "Oslo",
      time: "3 weeks ago",
    },
    {
      id: 7,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Researcher in technic...",
      company: "Defence Research Institute",
      description:
        "We are looking for a researcher in technical and natural science subjects.",
      location: "Horten",
      time: "4 weeks ago",
    },
    {
      id: 8,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Data Scientist",
      company: "Telescope",
      description:
        "Do you want more responsibility, technological innovation and a positive...",
      location: "Oslo",
      time: "2 weeks ago",
    },
    {
      id: 9,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Research Engineer / ...",
      company: "4Subsea AS",
      description:
        "Ready to be part of our visionary Data Lab team solving advanced, high-risk engine...",
      location: "Asker",
      time: "2 weeks ago",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center tracking-tight leading-tight border-b-2 border-gray-100 pb-4">
        Government Jobs
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

import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

export default function Courses() {
  const courses = [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Coursera_logo_%282020%29.svg",
      title: "Web Development Bootcamp",
      instructor: "John Doe",
      description:
        "Learn to build modern, responsive websites and web applications.",
      duration: "3 months",
      price: "$499",
      level: "Beginner",
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Coursera_logo_%282020%29.svg",
      title: "Data Science Masterclass",
      instructor: "Jane Smith",
      description:
        "Dive deep into data analysis, machine learning, and statistics.",
      duration: "4 months",
      price: "$599",
      level: "Intermediate",
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Coursera_logo_%282020%29.svg",
      title: "AI and Machine Learning",
      instructor: "Michael Brown",
      description:
        "Master the fundamentals of AI and machine learning algorithms.",
      duration: "5 months",
      price: "$699",
      level: "Advanced",
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Coursera_logo_%282020%29.svg",
      title: "Digital Marketing Essentials",
      instructor: "Sarah Lee",
      description:
        "Understand SEO, content marketing, and social media strategies.",
      duration: "2 months",
      price: "$299",
      level: "Beginner",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Coursera_logo_%282020%29.svg",
      title: "Cybersecurity Fundamentals",
      instructor: "David Wilson",
      description: "Learn how to protect networks and data from cyber threats.",
      duration: "6 months",
      price: "$799",
      level: "Advanced",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center tracking-tight leading-tight border-b-2 border-gray-100 pb-4">
        Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg border border-gray-200 transition-all duration-200 ease-in-out hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-12 h-12 rounded-full border-2 border-gray-200"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Instructor: {course.instructor}
                  </p>
                </div>
              </div>
              <FavoriteButton />
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {course.description}
              </p>
              <div className="flex justify-between items-center text-gray-500 text-xs">
                <span>Duration: {course.duration}</span>
                <span>Price: {course.price}</span>
              </div>
              <div className="mt-4">
                <span className="text-xs text-gray-500 bg-gray-200 py-1 px-2 rounded">
                  Level: {course.level}
                </span>
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

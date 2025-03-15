import React from "react";
import HotJobs from "../../components/hot-jobs/HotJobs";
import GovernmentJobs from "../../components/government-jobs/GovernmentJobs";
import PrivateJobs from "../../components/private-jobs/PrivateJobs";
import Courses from "../../components/courses/Courses";
import CategoryFilter from "../../components/category/CategoryFilter";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const Home = () => {
  return (
    <div className="flex">
      {/* Fixed Category Filter */}
      <CategoryFilter />

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6">
        <CarouselHeader/>
        <HotJobs />
        <GovernmentJobs />
        <PrivateJobs />
      </div>
    </div>
  );
};

export default Home;

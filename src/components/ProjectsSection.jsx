import React from "react";

export const ProjectsSection = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold">Our Projects</h2>
      <div className="flex space-x-6 mt-8">
        <div className="bg-gray-800 p-6 rounded-lg">Mobile App</div>
        <div className="bg-gray-800 p-6 rounded-lg">Website Design</div>
        <div className="bg-gray-800 p-6 rounded-lg">Data Analysis</div>
      </div>
    </div>
  );
}
export default ProjectsSection;
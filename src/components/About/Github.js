import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="text-center space-y-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Days I <span className="gradient-text">Code</span>
      </h1>
      <div className="flex justify-center overflow-x-auto">
        <GitHubCalendar
          username="sephml"
          blockSize={15}
          blockMargin={5}
          color="#06b6d4"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;

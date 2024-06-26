import React from "react";
import VideoPlayer from "../components/VideoPlayer";

function CreateVideoPage() {
  return (
    <div className="flex flex-wrap justify-center">
      <main className="main">
        <div className="container"></div>

        <div className="container">
          <VideoPlayer />
        </div>
      </main>
    </div>
  );
}

export default CreateVideoPage;

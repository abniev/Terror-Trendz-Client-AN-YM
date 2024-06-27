import React from "react";
import VideoPlayer from "../components/VideoPlayer";

function CreateVideoPage() {
  return (
    <div className="flex justify-center shadow w-full shadow-lg">
      <main className="main">
        <div className="container">
          <VideoPlayer />
        </div>
      </main>
    </div>
  );
}

export default CreateVideoPage;

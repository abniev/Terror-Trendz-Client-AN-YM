import React from "react";
import VideoPlayer from "../components/VideoPlayer";

function CreateVideoPage() {
  return (
    <div className="flex justify-center w-full pt-5">
      <main className="main">
        <div className="container">
          <VideoPlayer />
        </div>
      </main>
    </div>
  );
}

export default CreateVideoPage;

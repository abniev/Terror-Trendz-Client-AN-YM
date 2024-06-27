import ReactPlayer from "react-player/youtube";
import CreateVideoForm from "./CreateVideoForm";
import { MusicContext } from "../context/music.context";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";

function VideoPlayer() {
  const [videoList, setVideoList] = useState("");
  const { user } = useContext(AuthContext);

  const { music } = useContext(MusicContext);
  useEffect(() => {
    music && setVideoList(music[Math.floor(Math.random() * music.length)]);
  }, [music]);

  console.log(user);
  return (
    <div className="w-full h-auto max-w-full bg-gray-100 border border-black rounded-lg dark:border-gray-700 mb-5">
      {videoList && (
        <ReactPlayer url={videoList.videoUrl} controls muted playing />
      )}
      <CreateVideoForm />

      {music ? (
        music.map((music) => (
          <div
            key={music._id}
            className=" mx-auto p-5 rounded-lg font-sophisto text-xl font-medium text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <ul
              className={`  ${
                music._id === videoList._id && "active"
              } flex flex-col justify-content-between`}
              aria-current={music._id === videoList._id}
            >
              <span className="m-2 text-4xl">{music.artist}</span>
            </ul>
            <ul className="m-2 text-2xl">
              <span onClick={() => setVideoList(music)}>{music.title}</span>

              {user && user.isAdmin && (
                <button
                  className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-yellow-400 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-yellow-400"
                  type="submit"
                  onClick={() => handleDeleteVideo(music._id, music.title)}
                >
                  Delete Video
                </button>
              )}
            </ul>
            <p className="mt-5 border-b-2 border-gray-900"></p>
          </div>
        ))
      ) : (
        <p>Loading...😈</p>
      )}
    </div>
  );
}

export default VideoPlayer;

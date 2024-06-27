import ReactPlayer from "react-player/youtube";
import CreateVideoForm from "./CreateVideoForm";
import { MusicContext } from "../context/music.context";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";

function VideoPlayer() {
  const [videoList, setVideoList] = useState("");
  const { deleteMusic } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  const { music } = useContext(MusicContext);
  useEffect(() => {
    music && setVideoList(music[Math.floor(Math.random() * music.length)]);
  }, [music]);

  console.log(user);
  return (
    <div className=" w-full h-auto max-w-full bg-gray-100 border border-black rounded-lg dark:border-gray-700 mb-5">
      {videoList && (
        <ReactPlayer url={videoList.videoUrl} controls muted playing />
      )}
      <CreateVideoForm />

      {music ? (
        music.map((music) => (
          <div
            key={music._id}
            className="p-5 rounded-lg font-sophisto text-xl font-medium text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <div>
              <ul
                className={`  ${
                  music._id === videoList._id && "active"
                } flex flex-col justify-content-between`}
                aria-current={music._id === videoList._id}
              >
                <span className="m-2 text-4xl">{music.artist}</span>
              </ul>
              <ul>
                <span className="m-2 text-2xl">{music.title}</span>
              </ul>
            </div>
            <div>
              <button className="flex flex-wrap">
                <svg
                  className="text-gray-800 dark:text-white hover:text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  onClick={() => setVideoList(music)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div>
              {user && user.isAdmin && (
                <button
                  className="mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-yellow-400 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-yellow-400"
                  type="submit"
                  onClick={() => deleteMusic(music._id)}
                >
                  Delete Video
                </button>
              )}
            </div>
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

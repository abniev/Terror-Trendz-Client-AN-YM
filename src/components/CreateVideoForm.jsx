import { useContext, useState } from "react";
import { MusicContext } from "../context/music.context";

function CreateVideoForm() {
  const [videoInfo, setVideoInfo] = useState({
    videoUrl: "",
    artist: "",
    title: "",
  });

  const { createMusic } = useContext(MusicContext);
  const handleChange = (e) => {
    setVideoInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form
      className="font-sophisto max-w-lg mx-auto p-5 m-5 rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        createMusic(videoInfo);
      }}
    >
      <label htmlFor="URL">URL</label>
      <input
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        type="url"
        name="videoUrl"
        onChange={handleChange}
        value={videoInfo.videoUrl}
      />
      <label htmlFor="artist"> Artist</label>
      <input
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        type="text"
        name="artist"
        onChange={handleChange}
        value={videoInfo.artist}
      />
      <label htmlFor="title"> Title</label>
      <input
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        type="text"
        name="title"
        onChange={handleChange}
        value={videoInfo.title}
      />
      <button
        type="submit"
        className="mt-5 mr-5 text-white bg-black hover:bg-gray-200 hover:text-black border border-black focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
      >
        Submit
      </button>
    </form>
  );
}
export default CreateVideoForm;

import { useContext, useContext } from "react";
import { MusicContext } from "../context/music.context";

function CreateVideoForm() {
  const [videoInfo, setVideoInfo] = useState({
    videoUrl: "",
    artist: "",
    title: "",
  });
  const { createVideo } = useContext(MusicContext);
  const handleChange = (e) => {
    setVideoInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createVideo(videoInfo);
      }}
    >
      <label htmlFor="URL">url</label>
      <input
        type="text"
        name="url"
        onChange={handleChange}
        value={videoInfo.videoUrl}
      ></input>
      <label htmlFor="artist"> artist</label>
      <input
        type="text"
        name="artist"
        onChange={handleChange}
        value={videoInfo.artist}
      ></input>
      <label htmlFor="title"> title</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={videoInfo.title}
      ></input>
      <button type="submit" className="btn">
        Create
      </button>
    </form>
  );
}
export default CreateVideoForm;

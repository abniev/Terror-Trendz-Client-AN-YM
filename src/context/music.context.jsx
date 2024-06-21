import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MusicContext = createContext();

function MusicProvider({ children }) {
  const [music, setMusic] = useState(null);
  const navigate = useNavigate();

  const getAllMusic = async () => {
    try {
      const response = await api.get("/music/all");

      setMusic(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createMusic = async (body) => {
    try {
      const response = await api.post("/music", body);
      if (response.status === 200 || response.status === 201) {
        toast.success(body.name + " created successfully");

        getAllMusic();
        navigate("/music");
      }
    } catch (error) {
      console.log("error while creating the music", error);
    }
  };

  const updateMusic = async (body, id, toggle) => {
    try {
      const response = await api.put("/music" + id, body);

      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.updated.name + " was updated successfully");
        getAllProducts();
        toggle(false);
      }
    } catch (error) {
      toast.error("Error updating this music");
      console.log(error);
    }
  };
  const deleteMusic = async (id) => {
    try {
      const check = confirm("Are you sure you wan to delete this song?");
      if (check) {
        const response = await api.delete("/music/" + id);
        if (response.status === 200) {
          toast.success("Song deleted successfully");
          getAllMusic();

          navigate(-1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMusic();
  }, []);
  return (
    <MusicContext.Provider
      value={{
        music,
        createMusic,
        updateMusic,
        deleteMusic,
        getAllMusic,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
export { MusicContext, MusicProvider };

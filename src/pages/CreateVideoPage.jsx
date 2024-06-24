import React, { useContext, useEffect } from "react";
import CreateVideoForm from "../components/CreateVideoForm";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function CreateVideoPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    user && user.isAdmin ? null : navigate("/");
  }, [user]);

  return (
    <div>
      <CreateVideoForm />
    </div>
  );
}

export default CreateVideoPage;

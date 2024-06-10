import React, { useEffect, useState } from "react";
import { getForum } from "../../../api/forumApi.js";
import Button from "../../atoms/Button/index.jsx";

export default function ForumList() {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchForums() {
      try {
        const data = await getForum();
        setForums(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchForums();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="forum-list">
        {forums.map((forum) => (
          <div key={forum.id} className="forum-item">
            <h3>{forum.title}</h3>
            <p>{forum.description}</p>
          </div>
        ))}
      </div>
      <Button variant={"primary"} type={"button"} children={"Refresh"} className="mt-1 w-100 rounded-3" onClick={() => window.location.reload()} />
    </>
  );
}

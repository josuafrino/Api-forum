import axios from "axios";

export async function getTopics() {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/topics`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

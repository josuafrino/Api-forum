import axios from "axios";

export async function getQuestions() {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/questions",
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getQuestionById(id) {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/question/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createQuestion(data) {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/question",
      headers: { "Content-Type": "application/json" },
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateQuestion(id, data) {
  try {
    const response = await axios({
      method: "put",
      url: `http://localhost:3000/question/${id}`,
      headers: { "Content-Type": "application/json" },
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteQuestion(id) {
  try {
    const response = await axios({
      method: "delete",
      url: `http://localhost:3000/question/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

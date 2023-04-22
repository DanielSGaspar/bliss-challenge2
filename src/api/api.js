import axios from "axios";

const baseURL = "https://private-anon-233be48b15-blissrecruitmentapi.apiary-mock.com"

export const checkHealth = async () => {
  try {
    const response = await axios.get(`${baseURL}/health`);
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

export const getQuestions = async (limit, offset, filter) => {
  try {
    const response = await axios.get(`${baseURL}/questions`, {
      params: {
        limit,
        offset,
        filter,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error getting questions:", error);
    return [];
  }
};

export const getQuestion = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/questions/${id}`);
    return response.data
  } catch (error) {
    console.error(`Error getting question ${id}:`, error);
    return [];
  }
}

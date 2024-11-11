import apiClient from "./index";

export function fetchQuestions(categoryId) {
  return apiClient
    .get(`/questions/category/${categoryId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching questions:", error);
      throw error;
    });
}

import apiClient from "./index";

export function fetchCategorys(categoryId) {
  return apiClient
    .get(`/categories/${categoryId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching questions:", error);
      throw error;
    });
}

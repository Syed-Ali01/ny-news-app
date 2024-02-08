import { API_ENDPOINT } from "./constant";

export const fetchArticles = () => {
  return fetch(`${API_ENDPOINT.POPULAR_ARTICLES}`).then((resp) => {
    if (resp.status === 200) return resp.json();
    else throw new Error("Invalid response");
  });
};

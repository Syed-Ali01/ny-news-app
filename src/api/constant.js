export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const API_ENDPOINT = {
  POPULAR_ARTICLES: `${API_BASE_URL}svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`,
};

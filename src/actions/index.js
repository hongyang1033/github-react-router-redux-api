import axios from 'axios'

export const FETCH_REPOS = 'FETCH_REPOS'


const API = 'https://api.github.com/search/repositories'

export const fetchRepos = (name) => {
  const request = axios.get(`${API}?q=${name}`)
    .catch((err) => { return err.message; });
  return {
    type: FETCH_REPOS,
    payload: request
  };
};
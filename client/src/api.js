import axios from 'axios';

const api = axios.create({
  baseURL: 'https://paper-translation-service.herokuapp.com/api/',
});

export const translationApi = {
  google: (text) => {
    return api.get('google', {
      params: {
        text: text,
      },
    });
  },
  googleCloud: (text) => {
    return api.get('google/cloud', {
      params: {
        text: text,
      },
    });
  },
  papago: (text) =>
    api.get('papago', {
      params: {
        text: text,
      },
    }),
};

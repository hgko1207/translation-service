import axios from "axios";

const api = axios.create({
  baseURL: "/api/"
});

export const translationApi = {
  google: text =>
    api.get("google", {
      params: {
        text: text
      }
    }),
  papago: text =>
    api.get("papago", {
      params: {
        text: text
      }
    })
};

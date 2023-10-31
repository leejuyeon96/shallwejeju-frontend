import axios from "axios";


const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export const login = async (data) => {
  return await instance.post("login", data);
};

export const getCategories = async () => {
  return await instance.get("category");

};























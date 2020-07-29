import axios from "axios";

const baseURL = axios.create({
  //baseURL: "http://nm-apps/mag7webapi/api/tasklist",
  baseURL: "http://localhost:64198/api/tasklist",
});

export const getTasks = () => {
  return baseURL.get("/getTasks");
};

export const getTaskById = (id) => {
  return baseURL.get(`/getTaskById?id=${id}`);
};

export const getUsers = () => {
  return baseURL.get("/getUsers");
};

export const addTask = (task) => {
  return baseURL.post("/insertTask", { ...task });
};

export const updateTask = (task) => {
  return baseURL.post("/editTask", { ...task });
};

export const removeTask = (id) => {
  return baseURL.delete(`/deleteTask/${id}`);
};

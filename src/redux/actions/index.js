import history from "../../history";
import {
  addTask,
  getUsers,
  getTasks,
  getTaskById,
  updateTask,
} from "../../api/taskApi";
import { sleeper } from "../../api/apiUtils";
import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FETCH_TASK,
  FETCH_TASKS,
  FETCH_USERS,
} from "./actionTypes";

export const createTask = (formValues) => async (dispatch, getState) => {
  const response = await addTask({ ...formValues });

  dispatch({ type: CREATE_TASK, payload: response.data });
  history.push("/tasks");
};

export const editTask = (formValues) => async (dispatch) => {
  const response = await updateTask({ ...formValues });

  dispatch({ type: EDIT_TASK, payload: response.data });
  history.push("/tasks");
};

export const fetchTasks = () => async (dispatch) => {
  const response = await getTasks().then(sleeper(1000));

  dispatch({ type: FETCH_TASKS, payload: response.data });
};

export const fetchTask = (id) => async (dispatch) => {
  const response = await getTaskById(id);

  dispatch({ type: FETCH_TASK, payload: response.data });
};

export const fetchUsers = () => async (dispatch) => {
  const response = await getUsers();

  dispatch({ type: FETCH_USERS, payload: response.data });
};

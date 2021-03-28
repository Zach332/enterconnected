import { createGlobalState } from "react-hooks-global-state";
import axios from "axios";

export const userPersistenceKey = "user_persistent_storage";

const firstUserState = {
    firstName: "User",
    id: null,
};

const userFromStorage = localStorage.getItem(userPersistenceKey);
const userObject = JSON.parse(userFromStorage);
const user =
    userFromStorage === null || !userObject.id ? firstUserState : userObject;

const initialState = { user };

axios.defaults.headers.common["authorization"] = initialState.user.id;

const { setGlobalState, useGlobalState } = createGlobalState(initialState);

export const login = (firstName, id) => {
    localStorage.setItem(userPersistenceKey, JSON.stringify({firstName, id}));
    setGlobalState("user", (v) => ({
        ...v,
        firstName: firstName,
        id: id,
    }));
    axios.defaults.headers.common["authorization"] = id;
};

export const logout = () => {
    setGlobalState("user", firstUserState);
    axios.defaults.headers.common["authorization"] = null;
};

export { useGlobalState };

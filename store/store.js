import { action, createStore } from "easy-peasy";

const initialState = {
  user: {},
  isAuthenticated: false,
};

const actions = {
  addUser: action((state, payload) => ({
    ...state,
    user: payload,
    isAuthenticated: !!payload,
  })),
  logout: action((state) => ({
    ...state,
    user: initialState.user,
    isAuthenticated: false,
  })),
};

const storeModel = {
  ...initialState,
  ...actions,
};

const store = createStore(storeModel);

export default store;

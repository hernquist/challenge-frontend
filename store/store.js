import { action, thunk, createStore } from "easy-peasy";
import { FETCH_CONTENT_MAP } from "../gql/queries";
import handleQuery from "../request/handleQuery";
import handleMutation from "../request/handleMutation";
import { SET_UP_NEXT_MODULES } from "../gql/mutations";

const initialState = {
  user: {},
  isAuthenticated: false,
  contentMap: [],
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
  updateContentMap: action((state, contentMap) => ({
    ...state,
    contentMap,
  })),
  updateUpNextModulesToUser: action((state, upNextModules) => ({
    ...state,
    user: {
      ...state.user,
      upNextModules,
    },
  })),
  addContentMap: thunk(async (actions) => {
    handleQuery(FETCH_CONTENT_MAP, {})
      .then(({ contentMap }) => actions.updateContentMap(contentMap))
      .catch((e) => {
        console.log("error in action addContentMap: ", e);
      });
  }),
  setUpNextModules: thunk(async (actions) => {
    handleMutation(SET_UP_NEXT_MODULES, {})
      .then(({ setUpNextModules: { upNextModules = [] } }) =>
        actions.updateUpNextModulesToUser(upNextModules)
      )
      .catch((e) => {
        console.log("error in action setUpNextModules: ", e);
      });
  }),
};

const storeModel = {
  ...initialState,
  ...actions,
};

const store = createStore(storeModel);

export default store;

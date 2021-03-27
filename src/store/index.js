import { createStore } from "vuex";
import getters from './getters.js';
import app from './modules/app.js';
import user from './modules/user.js';

export default createStore({
  modules: {
    app,
    user
  },
  getters
});

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    allMenu: [],
    selectedMenu: [],
    countItemsCart: 0,
  },
  getters: {
    allMenu: (state) => state.allMenu,
    totalPrice: (state) => {
      let total = 0;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < state.selectedMenu.length; i++) {
        total += state.selectedMenu[i].price;
      }
      return total;
    },
  },
  mutations: {
    getAllMenu(state, data) {
      state.allMenu = data;
    },
    addToCart(state, data) {
      state.selectedMenu.push(data);
    },
  },
  actions: {
    getAllMenu(context) {
      axios.get('http://localhost:3030/pos/api/product')
        .then((result) => {
          context.commit('getAllMenu', result.data.response);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },

    addDataMenu(context, data) {
      return new Promise((resolve) => {
        axios.post('http://localhost:3030/pos/api/product/add', data)
          .then((result) => {
            // context.commit('addDataMenu', result);
            resolve(result);
          })
          .catch((error) => {
          // eslint-disable-next-line no-console
            console.log(error);
          });
      });
    },

    actionLogin(context, data) {
      return new Promise((resolve) => {
        axios.post('http://localhost:3030/pos/api/user/login', data)
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      });
    },
  },
  modules: {
  },
});

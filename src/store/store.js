import { createStore } from 'vuex';

const store = createStore({
  state: {
    cartItems: [],
    carts: [],
  },
  mutations: {
    addToCart(state, payload) {
      state.cartItems.push(payload);
    },
    removeFromCart(state, itemId) {
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload);
    },
    addingToCart(payload) {
      this.carts.push(payload);
    },
    removeFromCart({ commit }, itemId) {
      commit('removeFromCart', itemId);
    },
  },
  getters: {
    cartLength(state) {
      return state.cartItems.length;
    },
    getCartItems(state) {
      return state.cartItems;
    },
  },
});

export default store;

// store/index.js -- 파일 생성하니 알아서 vuex 다운받음ㄷㄷ

import { fetchCartItems } from "~/api";

// constants
// 상수화
export const FETCH_CART_ITEMS = ' FETCH_CART_ITEMS';


// store
export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItems) {
    state.cartItems.push(cartItems);
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  }
}

export const actions = {
  // 동적으로 키값 정의
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems();
    commit('setCartItems', data);
  }
}
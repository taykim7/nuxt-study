// store/index.js -- 파일 생성하니 알아서 vuex 다운받음ㄷㄷ

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItems) {
    state.cartItems.push(cartItems);
  },
}

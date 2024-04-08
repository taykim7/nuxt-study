<template>
  <div class="container">
    <h1 class="list-title">cart page</h1>
    <div class="list-wrapper">
      <ul>
        <li v-for="cartItem in $store.state.cartItems"
          :key="cartItem.id"
          class="list-item"
        >
          <img class="thumbnail"
            :src="cartItem.imageUrl"
            :alt="cartItem.name">
          <div class="description">
            <p>{{ cartItem.name }}</p>
            <span>{{ cartItem.price }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>

  </div>
</template>

<script>
// import { FETCH_CART_ITEMS } from '@/store'
// 넉스트의 다이나믹 라우팅으로 인해 별도의 라우터 등록없이 컴포넌트 생성만으로 바로 연결
export default {
  // nuxtServerInit으로 대체됨
  // async asyncData({ store }) {
  //   await store.dispatch(FETCH_CART_ITEMS);
  // }
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
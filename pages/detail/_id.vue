<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
// 언더바를 붙힌 파일은 동적라우트로 정의된다.
import { fetchProductById, createCartItem } from '@/api/index'

export default {
  async asyncData({ params }) {
    const response = await fetchProductById(params.id);
    const product = response.data;
    // 이미지 api 교체
    product.imageUrl = `https://picsum.photos/id/${Math.floor(
      Math.random() * 30
    )}/640/480`
    return { product }
  },
  methods: {
    async addToCart() {
      const response = await createCartItem(this.product);
      console.log(response);
      
      this.$store.commit('addCartItem', this.product);
      this.$router.push(`/cart`);   
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
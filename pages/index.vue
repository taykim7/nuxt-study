<template>
  <div class="app">
    <!-- <SearchInput :search-keyword="searchKeyword"
    @input="updateSearchKeyword"></SearchInput> -->
    <SearchInput v-model="searchKeyword"></SearchInput>
    <main>
      <ul>
        <li v-for="product in products"
        :key="product.id"
        class="item flex"
        @click="moveToDetailPage(product.id)">
          <img class="product-image" :src="product.imageUrl" :alt="product.name" />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script> 
import axios from 'axios';
import SearchInput from '~/components/SearchInput.vue';

export default {
  components: { SearchInput },
  async asyncData() {
    // 이미지 api 종료되서 교체
    const response = await axios.get('http://localhost:3000/products');
    const products = response.data.map(item => ({
      ...item,
      imageUrl: `https://picsum.photos/id/${Math.floor(
      Math.random() * 30
    )}/640/480`,
    }));
    return { products };
  },

  data() {
    return {
      searchKeyword: '',
    }
  },

  methods: {
    moveToDetailPage(id) {
      // nuxt 는 내부적으로 router가 세팅되어 있어서 바로 사용 가능
      this.$router.push(`detail/${id}`);      
    },
    updateSearchKeyword(keyword) {
      this.searchKeyword = keyword;
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
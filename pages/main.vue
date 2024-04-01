<template>
  <div>
    <p>메인페이지</p>
    <ProductList :products="products"></ProductList>
  </div>
</template>

<script> 
// import axios from 'axios';
import ProductList from '~/components/ProductList.vue';

export default {
  components: { ProductList },
  // async asyncData() {
  //   const response = await axios.get('http://localhost:3000/products');
  //   const products = response.data;
  //   return { products };
  // },
  // data() {
  //   return {
  //     products: [],
  //   }
  // },
  // async created() {
  //   const response = await axios.get('http://localhost:3000/products');
  //   this.products = response.data;
  // } //==> 깜빡이는 문제가 발생 -> asyncData 를 사용하자
}
</script>

<style>

</style>
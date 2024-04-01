<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // asyncData속성은 pages 컴포넌트에 위치해야한다. (pageds 폴더 안에 있는 컴포넌트)
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products');
    const products = response.data;
    return { products };
  },
}
</script>

<style>

</style>
<template>
  <div>
    <h1>상세 페이지</h1>
  </div>
</template>

<script>
export default {
  // 언더바를 붙힌 파일은 동적라우트로 정의된다.
  created() {
    console.log(this.$route);
  }
}
</script>

<style>

</style>
<template>
  <div>
    <button @click="handleClick">클릭하세요</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    handleClick() {
      alert('버튼이 클릭되었습니다!');
    }
  }
}
</script>

<style scoped>
button {
  font-size: 18px;
  padding: 10px 20px;
}
</style>

<template>
  <div>
    <img src="@/assets/SIN.jpg" alt="신 창 섭" />
    <button @click="handleClick">클릭하세요</button>
    <iframe
      width="0"
      height="0"
      :src="youtubeEmbedUrl"
      frameborder="0"
      allow="autoplay"
      style="display: none;"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      youtubeVideoId: 'cYRkZmBuDqI' // 여기에 원하는 YouTube 동영상 ID를 입력하세요
    }
  },
  computed: {
    youtubeEmbedUrl() {
      return `https://www.youtube.com/embed/${this.youtubeVideoId}?autoplay=1&loop=1&playlist=${this.youtubeVideoId}`;
    }
  },
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
  margin-top: 20px;
}
img {
  max-width: 100%;
  height: auto;
}
/* iframe을 화면에 표시하지 않기 위한 스타일 */
iframe {
  position: absolute;
  width: 0;
  height: 0;
  border: 0;
}
</style>
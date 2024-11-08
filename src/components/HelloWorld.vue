<template>
  <div>
    <img src="@/assets/SIN.jpg" alt="신 창 섭" />
    <button @click="handleClick">클릭하세요</button>
    <button @click="toggleMute" class="mute-button">
      <img :src="isMuted ? speakerOffIcon : speakerOnIcon" alt="Mute/Unmute" />
    </button>
    <div id="player"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      youtubeVideoId: 'cYRkZmBuDqI', // 원하는 YouTube 동영상 ID
      player: null,
      isMuted: false,
      speakerOnIcon: require('@/assets/speaker-on.png'),
      speakerOffIcon: require('@/assets/speaker-off.png')
    };
  },
  mounted() {
    // YouTube IFrame API를 로드합니다.
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // API 로드 후 실행될 콜백 함수 등록
      window.onYouTubeIframeAPIReady = this.initializePlayer;
    } else {
      this.initializePlayer();
    }
  },
  methods: {
    handleClick() {
      alert('버튼이 클릭되었습니다!');
    },
    initializePlayer() {
      this.player = new YT.Player('player', {
        videoId: this.youtubeVideoId,
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: this.youtubeVideoId,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          rel: 0
        },
        events: {
          onReady: this.onPlayerReady
        }
      });
    },
    onPlayerReady(event) {
      // 초기에는 음소거 상태로 설정
      event.target.mute();
      this.isMuted = true;
    },
    toggleMute() {
      if (this.player) {
        if (this.isMuted) {
          this.player.unMute();
        } else {
          this.player.mute();
        }
        this.isMuted = !this.isMuted;
      }
    }
  }
};
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

/* 스피커 아이콘 버튼 스타일 */
.mute-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

.mute-button img {
  width: 32px;
  height: 32px;
}

/* 플레이어를 화면에 표시하지 않기 위한 스타일 */
#player {
  display: none;
}
</style>

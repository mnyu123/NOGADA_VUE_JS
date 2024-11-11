/* global YT */
export default {
    name: 'HelloWorld',
    data() {
      return {
        youtubeVideoId: 'cYRkZmBuDqI',
        player: null,
        isMuted: false,
        speakerOnIcon: require('@/assets/speaker-on.png'),
        speakerOffIcon: require('@/assets/speaker-off.png')
      };
    },
    mounted() {
      document.title = '연습용';
      if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = this.initializePlayer;
      } else {
        this.initializePlayer();
      }
    },
    methods: {
      handleClick() {
        alert('정 상 화');
        if (this.player) {
          this.player.seekTo(23, true);
          this.player.playVideo();
        }
      },
      initializePlayer() {
        this.player = new YT.Player('player', {
          width: 300,
          height: 300,
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
        event.target.mute();
        this.isMuted = true;
      },
      toggleMute() {
        if (this.player) {
          if (this.isMuted) {
            this.player.unMute();
            document.title = '신 창 섭';
          } else {
            this.player.mute();
            document.title = '연습용';
          }
          this.isMuted = !this.isMuted;
        }
      }
    }
  };
  
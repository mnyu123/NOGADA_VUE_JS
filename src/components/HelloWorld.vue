<template>
  <div class="container">
    <img src="@/assets/SIN.jpg" alt="신 창 섭" class="main-image" />
    <button @click="handleClick" class="worship-button">숭배하세요</button>
    <div class="player-container">
      <div id="player" class="video-player"></div>
    </div>
    <button @click="toggleMute" class="mute-button">
      <img :src="isMuted ? speakerOffIcon : speakerOnIcon" alt="Mute/Unmute" />
    </button>
  </div>
</template>

<script src="./HelloWorld.js"></script>

<style src="./HelloWorld.css" scoped></style>

<script setup lang="ts">
const bubbles: number[] = [4, 2, 1, 1, 4, 3, 1, 4, 2];
</script>

<template>
  <div class="bottom-reached">
    <div class="bottom-reached__title">You have reached the bottom! 🌊🐬</div>
    <div class="bottom-reached__subtitle">There is no more emoji...</div>

    <div class="bubbles" aria-hidden="true">
      <div
        class="bubbles__bubble"
        v-for="bubbleNum in bubbles"
        :style="{
          'animation-delay': bubbleNum + 's',
          width: bubbleNum + 'rem',
          height: bubbleNum + 'rem',
          opacity: bubbleNum * 0.1,
          filter: `blur(${bubbleNum / 2}px)`,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.bottom-reached {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(68, 146, 255);
  color: white;
  width: 100%;
  margin-top: 5rem;
  padding: 4rem 0;
  position: relative;
}
.bottom-reached__title {
  font-size: 3rem;
  font-weight: bold;
}
.bottom-reached__subtitle {
  font-size: 2rem;
}

.bubbles {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  height: 100%;
}
.bubbles__bubble {
  opacity: 0;
  animation: bubble-up 5s infinite linear;
  border: 4px solid white;
  border-radius: 50%;
}

/* Delete animation for some people */
@media (prefers-reduced-motion: reduce) {
  .bubbles__bubble {
    animation: none;
  }
}

@keyframes bubble-up {
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }
  50% {
    opacity: 1;
    transform: translateY(-10rem);
  }
  100% {
    opacity: 0;
    transform: translateY(-20rem);
  }
}
@media (max-width: 1090px) {
  .bottom-reached {
    padding: 3rem 0;
  }
  .bottom-reached__title {
    font-size: 2rem;
    font-weight: bold;
  }
  .bottom-reached__subtitle {
    font-size: 2rem;
  }
}
@media (max-width: 620px) {
  .bottom-reached__title {
    font-size: 1.5rem;
  }
  .bottom-reached__subtitle {
    font-size: 1.2rem;
  }
}
@media (max-width: 410px) {
  .bottom-reached__title {
    font-size: 1.2rem;
  }
}
</style>

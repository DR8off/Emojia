<script setup lang="ts">
import database from "../data/database";
import { ref, onUnmounted } from "vue";

const currentEmoji = ref(database[Math.floor(Math.random() * database.length)]);
const isEmojiVisible = ref(false);
let firstTimeout: number | undefined;
let secondTimeout: number | undefined;

function setNextEmoji() {
  currentEmoji.value = database[Math.floor(Math.random() * database.length)];
}

const EMOJI_SHOWING_TIME: number = 9000; // 9 sec
const EMOJI_HIDING_TIME: number = 1000; // 1 sec
function startAnimationCycle() {
  // First emoji is visible
  isEmojiVisible.value = true;

  // Hide it after 9 seconds
  firstTimeout = setTimeout(() => {
    isEmojiVisible.value = false;

    // Show it again after 9 seconds + 1 sec
    secondTimeout = setTimeout(() => {
      setNextEmoji();
      startAnimationCycle();
    }, EMOJI_HIDING_TIME);
  }, EMOJI_SHOWING_TIME);
}

startAnimationCycle();

onUnmounted(() => {
  clearTimeout(firstTimeout);
  clearTimeout(secondTimeout);
});
</script>

<template>
  <div class="banner">
    <div class="banner-inner" :class="{ hide: !isEmojiVisible }">
      <div class="banner__left">
        <div class="banner__emoji">
          {{ currentEmoji.emoji }}
        </div>
      </div>
      <div class="banner__right">
        <h2 class="banner__article">Did you know?</h2>
        <h3 class="banner__emoji-name">
          {{ currentEmoji.name }}
          <span class="banner__emoji-unicode">{{ currentEmoji.unicode }}</span>
        </h3>
        <p class="banner__text">
          {{ currentEmoji.fact }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 2rem 4rem;
  max-width: 78rem;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-background);
}
.banner-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: 1s;
}

.banner__emoji {
  font-size: 6rem;
}

.banner__article {
  font-size: 2rem;
  opacity: 0.3;
}

.banner__right {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.banner__text {
  font-size: 1.1rem;
  opacity: 0.8;
}
.banner__emoji-name {
  font-size: 1.5rem;
  font-weight: bold;
}
.banner__emoji-unicode {
  opacity: 0.4;
  padding-left: 0.5rem;
}

.hide {
  transform: translateY(10rem);
}

@media (max-width: 1370px) {
  .banner {
    max-width: 60rem;
  }
}
@media (max-width: 1090px) {
  .banner {
    padding: 1rem 2rem;
    max-width: 50rem;
  }
  .banner__emoji {
    font-size: 4rem;
  }

  .banner__article {
    font-size: 1.5rem;
  }

  .banner__right {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .banner__text {
    font-size: 1.1rem;
  }
  .banner__emoji-name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .banner__emoji-unicode {
    font-size: 1.2rem;
  }
}
@media (max-width: 855px) {
  .banner__article {
    font-size: 1.2rem;
  }
  .banner__text {
    font-size: 0.95rem;
  }
}
@media (max-width: 620px) {
  .banner {
    display: flex;
    height: 11rem;
    align-items: center;
    justify-content: center;
  }

  .banner__emoji {
    font-size: 3rem;
  }
  .banner__article {
    display: none;
  }
  .banner__text {
    font-size: 0.9rem;
  }
}
</style>

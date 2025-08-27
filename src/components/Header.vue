<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import { useStore } from "../store/store";
import { onMounted, onUnmounted, ref } from "vue";
import Sun from "../assets/icons/Sun.vue";
import Moon from "../assets/icons/Moon.vue";
import { links } from "../data/links";
const { repo } = links;
const spinninEmojisList = ["😍", "🤪", "😎", "🥰", "🦄", "😍"];
const store = useStore();

// Animation
const emojisPosition = ref(0);
const EMOJI_HEIGHT_IN_REM: number = 2;
const ANIMATION_DELAY: number = 3000;
let transition: number = 1; //0 - transition off / 1 - transition on
let animationInterval: number;

// Flag for arial optimisation
const isFaqOpen = ref<boolean>(false);

function updatePosition() {
  const newPositionValue =
    (emojisPosition.value + 1) % spinninEmojisList.length;
  if (newPositionValue === 0) {
    transition = 0;
  } else {
    transition = 1;
  }

  emojisPosition.value = newPositionValue;
}

onMounted(() => {
  animationInterval = setInterval(updatePosition, ANIMATION_DELAY);
});

onUnmounted(() => {
  clearInterval(animationInterval);
});
</script>

<template>
  <header class="header" role="banner">
    <div class="header__left">
      <div class="header__logo" aria-label="Emojia - поиск эмодзи">
        Emojia
        <div class="emojis" aria-hidden="true">
          <div
            class="emojis__container"
            :style="{
              transform: `translateY(${
                -emojisPosition * EMOJI_HEIGHT_IN_REM
              }rem)`,
              transition: transition + 's',
            }"
          >
            <span class="emojis__emoji" v-for="emoji in spinninEmojisList">{{
              emoji
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <SearchBar />
    <div class="header__right">
      <div
        class="header__faq"
        aria-label="Frequently asking questions"
        @mouseover="isFaqOpen = true"
        @mouseleave="isFaqOpen = false"
      >
        FAQ
        <div class="header__faq-dropdown" :aria-hidden="!isFaqOpen">
          This website was created solely out of enthusiasm to implement and
          showcase the capabilities of
          <a class="header__vue-link" href="https://vuejs.org/" target="_blank"
            >Vue.js</a
          >. You can find the entire source code on
          <a :href="repo" target="_blank">GitHub</a>. Don't forget to leave a
          star :)
        </div>
      </div>
      <div class="header__theme-switcher" @click="store.switchTheme()">
        <component :is="store.theme === 'light' ? Sun : Moon" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 0 4rem;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
}
.header__logo {
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.emojis {
  width: 2rem;
  height: 2rem;
  position: relative;
  overflow: hidden;
}
.emojis__container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  transition: 1s;
}
.emojis__emoji {
  font-size: 1.5rem;
}

.header__right {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.header__faq {
  cursor: pointer;
  position: relative;
}
.header__faq-dropdown {
  width: 20rem;
  padding: 1rem;
  box-shadow: 0 5px 10px 5px var(--color-shadow);
  border-radius: var(--border-radius);
  position: absolute;
  background-color: var(--color-frontground);
  left: -15rem;
  transform: translateY(-1rem);
  opacity: 0;
  transition: var(--transition);
  pointer-events: none;
  z-index: 2;
}
.header__faq:hover .header__faq-dropdown {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}
.header__vue-link {
  color: green;
}

.header__theme-switcher {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__theme-switcher svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 855px) {
  .header {
    padding: 1.5rem 2rem;
  }
}
@media (max-width: 620px) {
  .header__logo {
    font-size: 1rem;
  }
  .header__right {
    gap: 1rem;
  }
  .header__faq {
    font-size: 0.9rem;
  }
}
</style>

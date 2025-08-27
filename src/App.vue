<script setup lang="ts">
import BottomReached from "./components/BottomReached.vue";
import Hero from "./components/Hero.vue";
import DidYouKnowBanner from "./components/DidYouKnowBanner.vue";
import EmojiList from "./components/EmojiList.vue";
import Footer from "./components/Footer.vue";
import GitHubAdd from "./components/GitHubAdd.vue";
import Header from "./components/Header.vue";
import NotSupportedOnPhones from "./components/NotSupportedOnPhones.vue";
import { useStore } from "./store/store";

const store = useStore();
</script>

<template>
  <!-- Placeholder for mobile devices -->
  <NotSupportedOnPhones />

  <div :class="['wrapper', store.theme]">
    <Header />
    <div class="container">
      <Hero />
      <DidYouKnowBanner />
      <EmojiList />
    </div>
    <BottomReached />
    <GitHubAdd />
    <Footer />
  </div>
</template>

<style>
.container {
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}
@media (max-width: 855px) {
  .container {
    padding: 0 1rem;
  }
}

/* Hide all content for mobile devices */
@media (max-width: 500px) {
  .wrapper {
    display: none;
  }
}
</style>

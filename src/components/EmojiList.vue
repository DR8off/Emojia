<script setup lang="ts">
import database from "../data/database";
import CopiedPopup from "./CopiedPopup.vue";
import { ref } from "vue";

const selectedFilter = ref("");
const displayArray = ref(database);
const popup = ref<InstanceType<typeof CopiedPopup> | null>(null);

interface Filter {
  emoji: string;
  category: string;
  background: string;
}
const filters: Filter[] = [
  { emoji: "😊", category: "Emotion", background: "#fae1a1" },
  { emoji: "🖐", category: "Gesture", background: "#fae1a1" },
  { emoji: "🐶", category: "Animals", background: "#d4b8a1" },
  { emoji: "🍕", category: "Food & Drink", background: "#fae1a1" },
  { emoji: "🚗", category: "Transport", background: "#faa1a1" },
  { emoji: "🌧️", category: "Nature", background: "#a1c3fa" },
  { emoji: "💻", category: "Technology", background: "#d4a1fa" },
  { emoji: "⚽", category: "Sports", background: "#b8faa1" },
  { emoji: "🎂", category: "Celebration", background: "yellow" },
  { emoji: "❤️", category: "Symbols", background: "#faa1a1" },
  { emoji: "🦄", category: "Fantasy", background: "#faa1db" },
  { emoji: "🎲", category: "Activities", background: "#faa1a1" },
];

function handleSetFilter(category: string): void {
  if (category === selectedFilter.value) {
    selectedFilter.value = "";
    displayArray.value = database;
  } else {
    displayArray.value = database.filter(
      (e) => e.filter === category.toLowerCase()
    );
    selectedFilter.value = category;
  }
}
async function handleCopyEmoji(emoji: string): Promise<void> {
  try {
    navigator.clipboard.writeText(emoji);
    popup.value?.show();
  } catch (error) {
    console.error("Copy failed: ", error);
  }
}
</script>

<template>
  <CopiedPopup ref="popup" />

  <div class="container">
    <header>
      <ul class="emoji-filters">
        <li
          class="emoji-filters__item"
          :class="{
            'emoji-filters__item_selected': selectedFilter === category,
          }"
          v-for="{ emoji, category, background } in filters"
          :style="
            selectedFilter === category
              ? { 'background-color': background }
              : {}
          "
          @click="handleSetFilter(category)"
        >
          {{ emoji }} {{ category }}
        </li>
      </ul>
    </header>
    <div class="emoji-list-wrapper">
      <ul class="emoji-list" id="emoji-list">
        <li
          v-for="(element, index) in displayArray"
          :key="index"
          @click="handleCopyEmoji(element.emoji)"
          :title="'Click to copy' + element.emoji"
          class="emoji-list__item"
        >
          <div class="emoji-list__emoji">{{ element.emoji }}</div>
          <div class="emoji-list__name">{{ element.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.emoji-list-wrapper {
  position: relative;
}

header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.emoji-filters {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.emoji-filters__item {
  width: 22rem;
  height: 7rem;
  font-size: 2rem !important;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  user-select: none;
  background-color: var(--color-background);
}
.emoji-filters__item_selected {
  color: white;
  text-shadow: 0 3px 3px black;
  border: none;
}
.emoji-filters__item:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px 10px var(--color-shadow);
}

.emoji-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.emoji-list__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--border-color);
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  background-color: var(--color-background);
}
.emoji-list__item:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 10px var(--color-shadow);
}

.emoji-list__emoji {
  font-size: 2rem;
}

.emoji-list__name {
  position: absolute;
  font-family: Roboto;
  top: -3rem;
  white-space: nowrap;
  border: 1px solid var(--border-color);
  padding: 0.5rem;
  border-radius: var(--border-radius);
  background-color: var(--color-frontground);
  transition: var(--transition);
  transform: translateY(1rem);
  pointer-events: none;
  opacity: 0;
}
.emoji-list__item:hover .emoji-list__name {
  transform: translateY(0);
  opacity: 1;
}

/* Loader */
.loader {
  color: var(--color-main);
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.3s infinite linear;
  transform: translateZ(0);
}

@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}

@media (max-width: 1370px) {
  .emoji-list {
    max-width: 55rem;
  }
  .emoji-filters {
    max-width: 60rem;
    margin: 0 auto;
  }
  .emoji-filters__item {
    width: 12rem;
    height: 4rem;
    font-size: 1.5rem !important;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
  }
}
@media (max-width: 1050px) {
  .emoji-list {
    max-width: 40rem;
  }
}
@media (max-width: 855px) {
  .emoji-list {
    max-width: 30rem;
  }
}
@media (max-width: 620px) {
  .emoji-list {
    max-width: 20rem;
  }
  .emoji-filters__item {
    width: 9rem;
    height: 2rem;
    font-size: 1rem !important;
  }
}
</style>

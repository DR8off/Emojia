<script setup lang="ts">
import Magnifier from "../assets/icons/Magnifier.vue";
import { onMounted, onUnmounted, ref, watch } from "vue";
import debounce from "../utils/debounce";
import database from "../data/database";
import CopiedPopup from "./CopiedPopup.vue";

const copiedPopupRef = ref<InstanceType<typeof CopiedPopup> | null>(null);

const isOpen = ref<boolean>(false);
const displayList = ref(database.slice(0, 8));
const query = ref<string>("");
const thisComponentWindowRef = ref<any>(null);
const isDebouncing = ref<boolean>(false);

function inputOnChange(event: Event): void {
  const eventTarget = event.target as HTMLInputElement;
  query.value = eventTarget.value.toLowerCase();
}

function searchEmojiByName() {
  if (query.value.length > 0) {
    displayList.value = database.filter((el) =>
      el.name.toLowerCase().includes(query.value)
    );
  } else {
    displayList.value = database.slice(0, 8);
  }
}
function debounceOn() {
  isDebouncing.value = true;
}
function debounceOff() {
  isDebouncing.value = false;
}

const debouncedSearchEmojiByName = debounce(
  searchEmojiByName,
  1000,
  debounceOn,
  debounceOff
);

watch(query, debouncedSearchEmojiByName);

function handleClickOutside(event: MouseEvent) {
  if (
    thisComponentWindowRef.value &&
    !thisComponentWindowRef.value.contains(event.target)
  ) {
    isOpen.value = false;
    displayList.value = database.slice(0, 8);
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

async function handleCopyEmoji(emoji: string): Promise<void> {
  try {
    navigator.clipboard.writeText(emoji);
    copiedPopupRef.value?.show();
  } catch (error) {
    console.error("Copy failed: ", error);
  }
}
</script>
<template>
  <CopiedPopup ref="copiedPopupRef" />

  <div class="search" ref="thisComponentWindowRef">
    <Magnifier />
    <input
      type="text"
      placeholder="Start typing to search"
      class="search__input"
      @focus="isOpen = true"
      @input="inputOnChange"
    />

    <ul
      class="search__list"
      :class="{ search__list_show: isOpen }"
      :style="isDebouncing ? { filter: 'blur(1px)' } : {}"
    >
      <li
        class="search__item"
        v-for="el in displayList"
        title="Click to copy"
        @click="handleCopyEmoji(el.emoji)"
      >
        <div class="search__emoji">
          {{ el.emoji }}
        </div>
        <div class="search__info">
          <div>
            <span class="search__name">{{ el.name }}</span>
            <span class="search__unicode">{{ el.unicode }}</span>
          </div>
          <p class="search__fact">{{ el.fact }}</p>
        </div>
      </li>

      <li class="search__item">🔎 Type text to see more...</li>
    </ul>
  </div>
</template>
<style scoped>
.search {
  position: relative;
  max-width: 50rem;
  width: 100%;
  border: 1px solid var(--border-color);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0 1rem;
  border-radius: var(--border-radius);
  background-color: var(--color-background);
}
.search svg {
  width: 1.2rem;
  height: 1.2rem;
  opacity: 0.6;
}
.search__input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  background: none;
  color: inherit;
}

.search__list {
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: var(--color-frontground);
  box-shadow: 0 10px 10px 5px var(--color-shadow);
  border-radius: var(--border-radius);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-1rem);
  transition: var(--transition);
  overflow-y: scroll;
  max-height: 785.5px;
  overflow-x: hidden;
}
.search__list_show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}
.search__item {
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border-color_thin);
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
}
.search__item:hover {
  transform: translateX(0.5rem);
}
.search__emoji {
  font-size: 1.5rem;
  width: 3rem;
}
.search__info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.search__info div {
  display: flex;
  align-items: end;
  gap: 0.5rem;
}
.search__name {
  font-weight: bold;
  font-size: 1rem;
}
.search__unicode {
  font-weight: bold;
  opacity: 0.5;
}
.search__fact {
  white-space: wrap;
  opacity: 0.8;
  font-size: 0.95rem;
}

@media (max-width: 1185px) {
  .search {
    max-width: 30rem;
  }
}
@media (max-width: 855px) {
  .search {
    max-width: 20rem;
  }
  .search__item {
    padding: 1rem;
    gap: 0.5rem;
  }
  .search__name {
    font-size: 0.9rem;
  }
  .search__unicode {
    font-size: 0.9rem;
  }
  .search__fact {
    display: none;
  }
}
@media (max-width: 620px) {
  .search {
    max-width: 15rem;
  }
}
</style>

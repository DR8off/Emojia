<script setup lang="ts">
import { ref, onUnmounted } from "vue";
const isCopying = ref<boolean>(false);
let timeoutId: number = 0;

function show() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  isCopying.value = true;

  timeoutId = setTimeout(() => {
    isCopying.value = false;
  }, 2000);
}
onUnmounted(() => clearTimeout(timeoutId));

defineExpose({ show });
</script>
<template>
  <div class="copied-popup" :class="{ 'copied-popup_show': isCopying }">
    Copied!
  </div>
</template>
<style scoped>
.copied-popup {
  position: fixed;
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  background-color: #0000007a;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  opacity: 0;
  transition: var(--transition);
  z-index: 5;
  pointer-events: none;
}
.copied-popup_show {
  opacity: 1;
  transform: translate(-50%, -50%);
}
</style>

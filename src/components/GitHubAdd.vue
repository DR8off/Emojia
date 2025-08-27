<script setup lang="ts">
import GitHub from "../assets/icons/GitHub.vue";
import Star from "../assets/icons/Star.vue";
import { links } from "../data/links";
const { repo } = links;
</script>

<template>
  <div class="github-add-wrapper">
    <div class="github-add">
      <div class="github-add__left">
        <GitHub />
      </div>
      <div class="github-add__right">
        <h3 class="github-add__article">Do you like the project?</h3>
        <p>
          Please share the <Star /> on <a :href="repo" target="_blank">GitHub</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.github-add {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1rem;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 4rem;
  background-color: var(--color-background);
}

.github-add__left svg {
  width: 8rem;
  height: 8rem;
}

.github-add__right {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.github-add__article {
  font-size: 2rem;
}

svg {
  display: inline;
}

a {
  text-decoration: none;
  color: blue;
}

@media (max-width: 1090px) {
  .github-add {
    gap: 2rem;
  }
  .github-add__left svg {
    width: 5rem;
    height: 5rem;
  }

  .github-add__article {
    font-size: 1.5rem;
  }
}
@media (max-width: 620px) {
  .github-add__left svg {
    width: 4rem;
    height: 4rem;
  }
  .github-add__article {
    font-size: 1.2rem;
  }
  p {
    font-size: 0.9rem;
  }
}
</style>

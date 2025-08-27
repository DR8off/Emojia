<script setup lang="ts">
import YouTube from "../assets/icons/YouTube.vue";
import Telegram from "../assets/icons/Telegram.vue";
import Discord from "../assets/icons/Discord.vue";
import GitHub from "../assets/icons/GitHub.vue";
import { links } from "../data/links";
const { github, musicChannel, discord, telegram } = links;
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <ul class="socials">
          <li class="socials__item">
            <a :href="github" target="_blank"><GitHub /> Git Hub</a>
          </li>
          <li class="socials__item">
            <a :href="discord" target="_blank"><Discord /> Discord</a>
          </li>
          <li class="socials__item">
            <a :href="musicChannel" target="_blank"><YouTube /> Dev Channel</a>
          </li>
          <li class="socials__item">
            <a :href="musicChannel" target="_blank"><YouTube />Music Channel</a>
          </li>
          <li class="socials__item">
            <a :href="telegram" target="_blank"><Telegram /> Telegram</a>
          </li>
        </ul>

        <div class="copyright">
          Made by
          <a href="https://github.com/DR8off" target="_blank">DR8</a>
          ©{{ currentYear }}
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  background-color: var(--color-background);
}

.container {
  height: 100%;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
  padding: 2rem 0;
  padding-bottom: 1rem;
}

.socials {
  display: flex;
  gap: 2rem;
}

a {
  text-decoration: none;
  color: inherit;
  opacity: 0.7;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
a:hover {
  opacity: 1;
}

@media (max-width: 855px) {
  .socials__item {
    font-size: 0.9rem;
  }
  .socials__item svg {
    width: 0.9rem;
    height: 0.9rem;
  }
  .copyright {
    font-size: 0.9rem;
  }
}
@media (max-width: 620px) {
  .socials {
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
}
</style>

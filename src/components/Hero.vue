<template>
  <section class="hero">
    <h1 class="hero__title">Emojia</h1>
    <p class="hero__description">
      Just <span>emojis</span>, everything about <span>emojis</span>!
    </p>
    <button class="hero__button"><a href="#emoji-list">Explore</a></button>

    <div class="hero__emoji hero__emoji_1">🎉</div>
    <div class="hero__emoji hero__emoji_2">🤣</div>
    <div class="hero__emoji hero__emoji_3">😍</div>
    <div class="hero__emoji hero__emoji_4">💀</div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: relative;
  margin-top: 7rem;
  margin-bottom: 5rem;
}

.hero__title {
  font-size: 4rem;
  transform: translateY(5rem);
  opacity: 0;
  animation: show-text 1s;
  animation-fill-mode: forwards;
}
.hero__description {
  font-size: 5rem;
  font-weight: bold;
  transform: translateY(5rem);
  opacity: 0;
  animation: show-text 1s;
  animation-fill-mode: forwards;
  text-align: center;
}
span {
  color: #ebb930;
  text-shadow: 0 0 40px #ebb9306c;
}

.hero__button {
  background-color: var(--color-button);
  border: none;
  border-radius: var(--border-radius);
  color: white;
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin-top: 5rem;
  font-weight: bold;
  transition: var(--transition);
  border: 2px solid var(--border-color);
}
.hero__button:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.2);
}
a {
  color: inherit;
}

.hero__emoji {
  pointer-events: none;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transform: translateY(2rem);
}

.hero__emoji_1 {
  font-size: 4rem;
  right: -5rem;
  animation: emoji-move-right 1.5s;
  animation-fill-mode: forwards;
}

.hero__emoji_2 {
  font-size: 5rem;
  left: -5rem;
  animation: emoji-move-left 1.5s;
  animation-fill-mode: forwards;
}

.hero__emoji_3 {
  font-size: 3rem;
  left: 10rem;
  bottom: -8rem;
  animation: emoji-move-left 1.5s;
  animation-fill-mode: forwards;
}

.hero__emoji_4 {
  font-size: 3rem;
  right: 10rem;
  bottom: -8rem;
  animation: emoji-move-right 1.5s;
  animation-fill-mode: forwards;
}

@keyframes show-text {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes emoji-move-right {
  100% {
    transform: translateX(1rem) translateY(-2rem);
    opacity: 1;
  }
}
@keyframes emoji-move-left {
  100% {
    transform: translateX(-1rem) translateY(-2rem);
    opacity: 1;
  }
}

@media (max-width: 1500px) {
  .hero__title {
    font-size: 2.5rem;
  }
  .hero__description {
    font-size: 3.5rem;
  }
  .hero__button {
    font-size: 1rem;
    margin-top: 2rem;
  }
  .hero__emoji_1 {
    font-size: 3rem;
    right: -1rem;
    animation: emoji-move-right 1.5s;
    animation-fill-mode: forwards;
  }
  .hero__emoji_2 {
    font-size: 3rem;
    left: -1rem;
    animation: emoji-move-left 1.5s;
    animation-fill-mode: forwards;
  }
  .hero__emoji_3 {
    font-size: 3rem;
    left: 10rem;
    bottom: -2rem;
    animation: emoji-move-left 1.5s;
    animation-fill-mode: forwards;
  }
  .hero__emoji_4 {
    font-size: 3rem;
    right: 10rem;
    bottom: -3rem;
    animation: emoji-move-right 1.5s;
    animation-fill-mode: forwards;
  }
}
@media (max-width: 1090px) {
  .hero__title {
    font-size: 2rem;
  }
  .hero__description {
    font-size: 3rem;
  }
  .hero__button {
    font-size: 1rem;
    margin-top: 2rem;
  }
  .hero__emoji_1 {
    font-size: 3rem;
    right: 4rem;
    animation: emoji-move-right 1.5s;
    animation-fill-mode: forwards;
  }
  .hero__emoji_2 {
    font-size: 3rem;
    left: 4rem;
    animation: emoji-move-left 1.5s;
    animation-fill-mode: forwards;
  }
}
@media (max-width: 855px) {
  .hero__description {
    font-size: 2.5rem;
  }
  .hero__emoji_1 {
    font-size: 2rem;
    right: 4rem;
    animation: emoji-move-right 1.5s;
    animation-fill-mode: forwards;
  }
  .hero__emoji_2 {
    font-size: 3rem;
    left: 4rem;
    animation: emoji-move-left 1.5s;
    animation-fill-mode: forwards;
  }
  .hero__emoji_3 {
    font-size: 2rem;
    left: 10rem;
    bottom: -1rem;
    animation: emoji-move-left 1.5s;
    animation-fill-mode: forwards;
  }
  .hero__emoji_4 {
    font-size: 2rem;
    right: 10rem;
    bottom: -0.5rem;
    animation: emoji-move-right 1.5s;
    animation-fill-mode: forwards;
  }
}
@media (max-width: 620px) {
  .hero {
    margin-bottom: 2rem;
    margin-top: 5rem;
  }
  .hero__emoji_1,
  .hero__emoji_2,
  .hero__emoji_3,
  .hero__emoji_4 {
    display: none;
  }
}
</style>

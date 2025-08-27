<!-- 
I hate creating designs, especially for mobile devices.
I'm a developer, not a designer. So for now, there will be a placeholder.
If you're an enthusiast, you can modify the app for mobile devices. 
Thank you in advance 

DR8
-->

<template>
  <div class="not-supported-on-phones">
    <h4>ERROR 604: Lazy developer</h4>
    <h3>Unfortunately this app is not available for phones 😥</h3>
    <p>Please check this site on a PC or tablet</p>
  </div>
</template>
<style scoped>
h4 {
    font-size: 1.5rem;
    color: red;
}
p {
    font-size: 1.5rem;
}
.not-supported-on-phones {
  pointer-events: all;
  width: 100vw;
  height: 100vh;
  background-color: #1b1b1b;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 2rem;
  color: white;
  padding: 1rem;
  text-align: center;
  gap: 1rem;
}

@media (max-width: 500px) {
  .not-supported-on-phones {
    display: flex;
  }
}
</style>

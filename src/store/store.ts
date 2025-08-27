import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  const storedTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    } else {
      localStorage.setItem("theme", "light");
      return "light";
    }
  };
  const theme = ref<string>(storedTheme());

  function switchTheme() {
    if (theme.value === "light") {
      theme.value = "dark";
    } else {
      theme.value = "light";
    }

    localStorage.setItem("theme", theme.value);
  }

  return { theme, switchTheme };
});

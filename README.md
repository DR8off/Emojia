# Emojia 😄

**Emojia** is a small, fun application—a kind of "Emoji Wikipedia".

![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## 🚀 Live Demo

Check out the live application here: **[[LiveDemo](https://dr8off.github.io/Emojia/)]**

## 🛠️ Tech Stack

- **Framework:** [Vue 3](https://v3.vuejs.org/) (Composition API)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **Styling:** CSS

## 📖 The Story Behind Emojia

This project started as a learning exercise to understand the core concepts of Vue 3. Since I couldn't find a suitable free API for emojis that met my needs for this simple project, I decided to build my own internal database directly within the application. This approach allowed me to focus entirely on mastering Vue's reactivity and components.

## 🤝 How to Contribute

Contributions are what make the open-source community an amazing place to learn and create. Any contributions you make are **greatly appreciated**, especially in growing emoji collection!

### Adding New Emojis

You can easily help expand the built-in emoji database! Here’s how:

1.  **Fork the Project**
2.  **Find the Emoji Data:** The emojis are stored in a central file, located in `src/data/database.ts`.
3.  **Add Your Emoji:** Follow the existing structure to add a new entry to the array.

    ```js
    // Example structure (check the actual file for the exact format)
    {
        name: "Smiling Face",
        emoji: "😊",
        unicode: "U+1F60A",
        filter: "emotion",
        fact: "This emoji is often called the 'blushing smiley.' In Japan, it represents happiness but can also imply shyness or slight embarrassment.",
    }
    ```

4.  **Submit a Pull Request (PR):** Describe the new emoji(s) you've added.

## 📜 License

Distributed under the MIT License. See the `LICENSE` file for more information.

## 🙏 Acknowledgments

- Thanks to the Vue.js team for the fantastic framework.
- Shoutout to the open-source community for constant inspiration.

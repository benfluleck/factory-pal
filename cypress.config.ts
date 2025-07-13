import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      // optionally pass in vite config
    },
  },

  e2e: {
    baseUrl: "http://localhost:5173",
    retries: {
      runMode: 1,
      openMode: 0,
    },
    numTestsKeptInMemory: 5,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

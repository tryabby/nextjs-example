import { defineConfig } from "@tryabby/next";

if (typeof process.env.NEXT_PUBLIC_ABBY_PROJECT_ID != "string") {
  throw new Error("NEXT_PUBLIC_ABBY_PROJECT_ID is not defined");
}

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_ABBY_PROJECT_ID,
  currentEnvironment: "default",
  environments: ["default"],
  tests: {
    Home: {
      variants: ["A", "B", "C"],
    },
    Marketing: {
      variants: ["b", "c", "original"],
    },
  },
  flags: {
    clientFlag: "Boolean",
    serverFlag: "Boolean",
  },
});

// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    sayHello: "src/sayHello.ts",
  },
  format: ["esm", "cjs"],
  clean: true,
  dts: true,
});

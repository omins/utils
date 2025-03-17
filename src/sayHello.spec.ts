import { expect, test } from "vitest";
import { sayHello } from "./sayHello";

test("sayHello", () => {
  expect(sayHello("John")).toBe("Hello, John!");
});

import { sum } from "../components/Sum";

test("Renders main page correctly", () => {
  const result = sum(4, 5);

  //Assertion
  expect(result).toBe(9);
});
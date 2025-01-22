import { validateAddressSchema } from "./validation";

describe("validateLoginSchema", () => {
  it.each`
    email                | password       | result
    ${"green@gmail.com"} | ${"1"}         | ${true}
    ${"green@gmail.com"} | ${"11232asd"}  | ${true}
    ${"green@gmail.com"} | ${"112322324"} | ${true}
    ${"green@gmail.com"} | ${"asdsadsad"} | ${true}
    ${"green@gmail.com"} | ${"@#!#@%$@#"} | ${true}
    ${"green@gmail"}     | ${"11232asd"}  | ${false}
    ${"green"}           | ${"11232asd"}  | ${false}
    ${"green@gmail.com"} | ${""}          | ${false}
    ${""}                | ${"dd"}        | ${false}
  `(
    "should return $result for input $input",
    async ({ email, password, result }) => {
      expect(await validateAddressSchema().isValid({ email, password })).toBe(
        result
      );
    }
  );
});

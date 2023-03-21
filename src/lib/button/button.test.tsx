import renderer from "react-test-renderer";
import { afterEach, describe, expect, test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Button } from "./button";

describe("Button - Unit test", () => {
  test("renders correctly", () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("size prop", () => {
    const component = renderer.create(<Button size={"md"} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("variant prop", () => {
    const component = renderer.create(<Button variant={"solid"} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Button - Integration test", () => {
  afterEach(cleanup);

  test("Expected label is displayed", () => {
    const label = "Hello, button";
    render(<Button>{label}</Button>);
    expect(screen.getByText(label));
  });
});

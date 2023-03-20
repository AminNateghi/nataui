import renderer from "react-test-renderer";
import { afterEach, describe, expect, test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Button } from "./button";

describe("Button - Unit test", () => {
  test("renders correctly", () => {
    const component = renderer.create(<Button label={"test"} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("label prop", () => {
    const component = renderer.create(<Button label={"test"} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Button - Integration test", () => {
  afterEach(cleanup);

  test("Expected label is displayed", () => {
    const label = "Hello, test";
    render(<Button label={label} />);
    expect(screen.getByText(label));
  });
});

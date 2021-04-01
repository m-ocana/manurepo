import React from "react";
import { render, act } from "@testing-library/react";
import Cheatsheet from "../../../pages/cheatsheets/[id]";
import Prism from "prismjs";

jest.mock("prismjs", () => ({
  highlightAll: jest.fn(),
}));

describe("Cheatsheet page", () => {
  beforeEach(jest.clearAllMocks);

  it("renders a Cheatsheet page", () => {
    const rendered = render(
      <Cheatsheet name="Dummy Sheet" contentHtml={<div>Dummy Content</div>} />
    );
    expect(rendered.asFragment()).toMatchSnapshot();
  });

  it("loads Prism when the component mounts", () => {
    act(() => {
      render(
        <Cheatsheet name="Dummy Sheet" contentHtml={<div>Dummy Content</div>} />
      );
    });
    expect(Prism.highlightAll).toHaveBeenCalledTimes(1);
  });
});

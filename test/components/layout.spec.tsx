import React from "react";
import { render, act } from "@testing-library/react";
import Layout from "../../components/layout";

describe("Layout", () => {
  it("scaffolds the home page", () => {
    const rendered = render(<Layout home children={null} />);
    expect(rendered.asFragment()).toMatchSnapshot();
  });

  it("scaffolds any other page", () => {
    const rendered = render(<Layout children={null} />);
    expect(rendered.asFragment()).toMatchSnapshot();
  });
});

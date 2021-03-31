import React from "react";
import renderer from "react-test-renderer";
import Layout from "./layout";

describe("Layout", () => {
  it("scaffolds the home page", () => {
    const tree = renderer.create(<Layout home children={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("scaffolds any other page", () => {
    const tree = renderer.create(<Layout children={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

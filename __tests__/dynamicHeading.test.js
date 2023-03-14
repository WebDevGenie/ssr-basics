import React from "react";
import { render } from "@testing-library/react";
import Posts from "../pages/posts/[slug]";
import { JSDOM } from "jsdom";
import "@testing-library/jest-dom/extend-expect";

// Create fake implementation of the 'window' and 'document' for testing
const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;
global.window = window;
global.document = window.document;

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: {
      slug: "test-slug",
    },
  }),
}));

describe("Posts", () => {
  it("should render the correct slug", () => {
    const slug = "test-slug";
    const { getByText } = render(<Posts slug={slug} />);
    const header = getByText(slug);

    expect(header).toBeInTheDocument();
  });
});

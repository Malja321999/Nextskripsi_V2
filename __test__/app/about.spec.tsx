import About from "@/app/about/page";

import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("About", () => {
  it("should render", () => {
    const page = render(<About />);
    expect(page).toMatchSnapshot();
  });
});

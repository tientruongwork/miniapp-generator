import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";

import App from "./App";

describe("testing App.tsx", () => {
    it("should match a11y test", async () => {
        const { container } = render(<App />);
        const result = await axe(container);
        expect(result).toHaveNoViolations();
    });

    it("should render correctly", () => {
        const { getByText } = render(<App />);
        expect(getByText("Hello React")).toBeInTheDocument();
    });
});

/**
 * @jest-environment jsdom
 */

import React from "react";
import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import App from "App"

test("All sections should exist as SPA", () => {
    const sections = ["Home", "About", "Experience", "Skills", "Projects", "Tutorials", "Contact"]

    render(<App/>)
    sections.map(section => {
        expect(screen.getByText(section)).toBeTruthy()
    })
})
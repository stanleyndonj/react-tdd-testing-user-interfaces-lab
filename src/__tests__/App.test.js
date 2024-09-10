import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text 'Hi, I'm ________'", () => {

    render(<App />);

    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with the text describing the content of the image", () => {

    render(<App />);

    const image = document.querySelector("img");
    const altText = image.getAttribute("alt");
    expect(altText).toBeTruthy();
});

test("displays a 2nd level heading with the text 'About Me'", () => {

    render(<App />);

    const secondLevelHeading = screen.getByRole("heading", {
        name: /About Me/i,
        exact: false,
        level: 2,
    });

    expect(secondLevelHeading).toBeInTheDocument();
});


test("displays paragraph", () => {

    render(<App />);

    const biographyParagraph = screen.getByText("I am", {
        name: /I am/i,
        exact: false,
    });

    expect(biographyParagraph).toBeInTheDocument();
});

test("displays link to LinkedIn", () => {

    render(<App />);

    const linkedInLink = screen.getByRole("link", {
        name: /LinkedIn/i,
        exact: false,
    });

    expect(linkedInLink).toBeInTheDocument();
})

test("displays link to GitHub", () => {

    render(<App />);

    const githubLink = screen.getByRole("link", {
        name: /GitHub/i,
        exact: false,
    });

    expect(githubLink).toBeInTheDocument();
})
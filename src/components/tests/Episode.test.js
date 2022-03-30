import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

const exampleData = {
  id: 578663,
  url: "https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
  name: "Chapter Two: The Weirdo on Maple Street",
  season: 1,
  number: 2,
  type: "regular",
  airdate: "2016-07-15",
  airtime: "",
  airstamp: "2016-07-15T12:00:00+00:00",
  runtime: 56,
  rating: {
    average: 8.2,
  },
  image: null,
  summary: "My summary value",
};

beforeAll(() => {
  render(<Episode episode={exampleData} />);
});

test("renders without error", () => {
  render(<Episode episode={exampleData} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={exampleData} />);

  const testSummary = "My summary value";
  const summary = screen.queryByText("My summary value");

  expect(summary).toBeInTheDocument();
  expect(summary).toBeTruthy();
  expect(summary).toBeVisible();
  expect(summary).toHaveTextContent(testSummary);
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={exampleData} />);
  const defaultImage = screen.queryByAltText(
    "https://i.ibb.co/2FsfXqM/stranger-things.png"
  );
  expect(defaultImage).toBeInTheDocument();
});

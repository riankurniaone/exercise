import React from "react";
import { getByLabelText, render, screen } from "@testing-library/react";
import store from "../../redux/store";
import { Provider } from "react-redux";
import SearchGif from "./index";

test("All component should be render", () => {
render(<Provider store={store}><SearchGif /></Provider>);

const searchBox = screen.getByLabelText("searchBox");
const searchButton = screen.getByText("Search");

expect(searchBox).toBeInTheDocument();
expect(searchButton).toBeInTheDocument();
});
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreenButton from "./HomeScreenButton";

describe("HomeScreenButton", () => {
  it("renders Login button correctly", () => {
    const { getByTestId, getByText } = render(<HomeScreenButton />);
    const loginButton = getByTestId("login-button");
    expect(loginButton).toBeTruthy();

    fireEvent.press(loginButton);
  });

  it("renders Sign Up button correctly", () => {
    const { getByTestId, getByText } = render(<HomeScreenButton />);
    const signUpButton = getByTestId("signup-button");
    expect(signUpButton).toBeTruthy();

    fireEvent.press(signUpButton);
  });
});

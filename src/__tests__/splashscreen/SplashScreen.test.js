import React from "react";
import { render } from "@testing-library/react-native";
import SplashScreen from "../../.././components/SplashScreen";

describe("SplashScreen component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<SplashScreen />);

    const appNameText = getByText("AVINX_HEALTH");
    const sloganText = getByText("Care, Assistance & Friend");

    expect(appNameText).toBeTruthy();
    expect(sloganText).toBeTruthy();
  });
});

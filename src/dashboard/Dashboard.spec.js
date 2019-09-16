// Test away

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "../controls/Controls";
import Dashboard from "./Dashboard";
import renderer from "react-test-renderer";

it("should invoke a function when unlock or lock gate is clicked", () => {
  const toggleLocked = jest.fn();
  const locked = true;
  const closed = true;

  const { getByText, queryByText } = render(
    <Controls toggleLocked={toggleLocked} locked={locked} closed={closed} />
  );
  fireEvent.click(getByText("Unlock Gate"));

  expect(toggleLocked).toHaveBeenCalled();
});

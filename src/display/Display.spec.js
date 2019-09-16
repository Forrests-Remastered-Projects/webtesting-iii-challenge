// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Display from "./Display";
import renderer from "react-test-renderer";

it("displays Closed if the `closed` prop is `true` and Open if otherwise", () => {
  const closedClass = jest.fn();
  const locked = true;
  const closed = true;

  const { getByText, queryByText } = render(
    <Display toggleLocked={toggleLocked} locked={locked} closed={closed} />
  );

  fireEvent.click(getByText("Open Gate"));

  expect(closedClass).toHaveBeenCalled();
});

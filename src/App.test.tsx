import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe("App", () => {
  test("should render hello world text", () => {
    setup(<App />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  test("should render initial count of 0", () => {
    setup(<App />);
    expect(screen.getByText("The count is 0")).toBeInTheDocument();
  });

  test("should increment the count", async () => {
    const { user } = setup(<App />);
    await user.click(screen.getByRole("button", { name: /click me/i }));
    expect(screen.getByText("The count is 1")).toBeInTheDocument();
  });
});

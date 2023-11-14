const { render } = require("@testing-library/react");
import App from "./App";
import Navbar from "./components/navbar/navbar";

describe("App", () => {
  it("should display elements", () => {
    render(<App />)
  });
});
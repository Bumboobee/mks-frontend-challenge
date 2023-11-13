import { render } from "@testing-library/react";
import Footer from "./footer";

describe("Footer", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Footer />);
    
    expect(getByText("MKS sistemas © Todos os direitos reservados")).toBeInTheDocument();
  });
});
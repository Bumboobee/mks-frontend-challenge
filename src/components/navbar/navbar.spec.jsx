import { render, fireEvent } from "@testing-library/react";
import { ProductProvider } from "../../context/productContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../service/queryClient";
import Navbar from "../navbar/navbar";
import SideMenu from "../side-menu/sideMenu";

describe("Navbar", () => {
  describe("Rendering", () => {
    it("should render correctly", async () => {
      const { getByTestId, getByAltText } = render(
        <QueryClientProvider client={queryClient}>
          <ProductProvider>
            <Navbar />
          </ProductProvider>
        </QueryClientProvider>
      );

      expect(getByTestId("cart-button")).toBeInTheDocument();
      expect(getByAltText("MKS Logo")).toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    it("should open the side menu when the cart button is clicked", async () => {
      const { getByTestId } = render(
        <QueryClientProvider client={queryClient}>
          <ProductProvider>
            <Navbar />
            <SideMenu />
          </ProductProvider>
        </QueryClientProvider>
      );

      expect(getByTestId("cart-button")).toBeInTheDocument();

      expect(getByTestId("side-menu")).toHaveAttribute("data-ishide", "true");

      fireEvent.click(getByTestId("cart-button"));

      expect(getByTestId("side-menu")).not.toHaveAttribute("data-ishide", "true");
    });
  });
});

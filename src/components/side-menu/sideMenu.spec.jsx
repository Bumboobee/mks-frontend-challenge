import { render, fireEvent } from "@testing-library/react";
import { ProductProvider } from "../../context/productContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../service/queryClient";
import Navbar from "../navbar/navbar";
import SideMenu from "./sideMenu";

describe("SideMenu", () => {
  describe("Interaction", () => {
    it("should close the side menu when the close button is clicked", async () => {
      const { getByTestId } = render(
        <QueryClientProvider client={queryClient}>
          <ProductProvider>
            <SideMenu />
            <Navbar />
          </ProductProvider>
        </QueryClientProvider>
      );

      expect(getByTestId("close-button")).toBeInTheDocument();
      expect(getByTestId("cart-button")).toBeInTheDocument();

      expect(getByTestId("side-menu")).toHaveAttribute("data-ishide", "true");

      fireEvent.click(getByTestId("cart-button"));

      expect(getByTestId("side-menu")).not.toHaveAttribute(
        "data-ishide",
        "true"
      );

      fireEvent.click(getByTestId("close-button"));

      expect(getByTestId("side-menu")).toHaveAttribute("data-ishide", "true");
    });
  });
});

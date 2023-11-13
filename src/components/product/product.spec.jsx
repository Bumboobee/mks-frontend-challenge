import { render, screen, waitFor } from "@testing-library/react";
import { ProductProvider } from "../../context/productContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../service/queryClient";
import Product from "../product/product";
import { mockData } from "../../mockdata";

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQuery: jest.fn(() => ({ data: [mockData[0]], isFetching: false })),
}));

describe("Product", () => {
  it("should render correctly with product data", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <Product product={mockData[0]} />
        </ProductProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      const productName = screen.getByText(mockData[0].name);
      expect(productName).toBeInTheDocument();

      const productDescription = screen.getByText(mockData[0].description);
      expect(productDescription).toBeInTheDocument();

      const productPrice = screen.getByText("R$ 1.200,00");
      expect(productPrice).toBeInTheDocument();

      const productImage = screen.getByAltText(mockData[0].name);
      expect(productImage).toBeInTheDocument();

      const buyButton = screen.getByTestId("buy-button");
      expect(buyButton).toBeInTheDocument();
    });
  });
});

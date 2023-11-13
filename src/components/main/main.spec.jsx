import { render } from "@testing-library/react";
import { ProductProvider } from "../../context/productContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../service/queryClient";
import { mockData } from "../../mockdata";
import Main from "./main";
import Product from "../product/product";

describe("Main", () => {
  it("should render correctly with product data", () => {
    const { getByTestId, getAllByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <Main />
          <Product />
        </ProductProvider>
      </QueryClientProvider>
    );

    expect(getByTestId("main-section")).toBeInTheDocument();

    const productElements = getAllByTestId("product");
    expect(productElements.length * mockData.length).toBe(mockData.length);
  });

  it("should render correctly with no product data", () => {
    const { getByTestId, queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <Main />
        </ProductProvider>
      </QueryClientProvider>
    );

    expect(getByTestId("main-section")).toBeInTheDocument();

    const productElement = queryByTestId("product");
    expect(productElement).toBeNull();
  });
});

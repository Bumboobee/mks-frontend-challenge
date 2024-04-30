import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ProductProvider } from "../../context/productContext";
import { mockData } from "../../mockdata";
import ProductPreview from './productPreview';

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQuery: jest.fn(() => ({ data: [mockData[0]], isFetching: false })),
}));

describe("ProductPreview", () => {
  const product = mockData[0];

  it("should renders component correctly", () => {
    render(
      <ProductProvider>
        <ProductPreview product={product} />
      </ProductProvider>
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText('R$ 1.200,00')).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByText('X')).toBeInTheDocument();
  });
});

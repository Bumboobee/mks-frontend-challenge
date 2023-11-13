import { renderHook, act } from "@testing-library/react";
import { ProductProvider } from "./context/productContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./service/queryClient";
import App from "./App";

describe("ProductProvider functions", () => {
  test("addToCart adds a product to the cart", () => {
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <App />
        </ProductProvider>
      </QueryClientProvider>
    );

    const { result } = renderHook(() => ProductProvider(), { wrapper });
    const product = { id: 1, name: "Test Product", price: 20.0 };

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].id).toBe(product.id);
    expect(result.current.cart[0].quantity).toBe(1);
  });
});

// describe("ProductProvider functions", () => {
//   test("addToCart adds a product to the cart", () => {
//     const { result } = renderHook(() => ProductProvider());
//     const product = { id: 1, name: "Test Product", price: 20.0 };

//     act(() => {
//       result.current.addToCart(product);
//     });

//     expect(result.current.cart).toHaveLength(1);
//     expect(result.current.cart[0].id).toBe(product.id);
//     expect(result.current.cart[0].quantity).toBe(1);
//   });

//   test("removeFromCart removes a product from the cart", () => {
//     const { result } = renderHook(() => ProductProvider());
//     const product = { id: 1, name: "Test Product", price: 20.0 };
//     result.current.addToCart(product);

//     act(() => {
//       result.current.removeFromCart(product.id);
//     });

//     expect(result.current.cart).toHaveLength(0);
//   });

//   test("increaseQuantity increases the quantity of a product in the cart", () => {
//     const { result } = renderHook(() => ProductProvider());
//     const product = { id: 1, name: "Test Product", price: 20.0 };
//     result.current.addToCart(product);

//     act(() => {
//       result.current.increaseQuantity(product.id);
//     });

//     expect(result.current.cart[0].quantity).toBe(2);
//   });

//   test("decreaseQuantity decreases the quantity of a product in the cart", () => {
//     const { result } = renderHook(() => ProductProvider());
//     const product = { id: 1, name: "Test Product", price: 20.0 };
//     result.current.addToCart(product);

//     act(() => {
//       result.current.decreaseQuantity(product.id);
//     });

//     expect(result.current.cart[0].quantity).toBe(0);
//   });

//   test("setCurrency formats the price correctly", () => {
//     const { result } = renderHook(() => ProductProvider());
//     const price = 20.0;

//     const formattedPrice = result.current.setCurrency(price);

//     expect(formattedPrice).toBe("R$ 20,00");
//   });

//   test("finishOrder clears the cart and displays a success toast", () => {
//     const { result } = renderHook(() => ProductProvider());
//     const product = { id: 1, name: "Test Product", price: 20.0 };
//     result.current.addToCart(product);

//     act(() => {
//       result.current.finishOrder();
//     });

//     expect(result.current.cart).toHaveLength(0);
//     // Add expectations for toast success notification
//   });
// });

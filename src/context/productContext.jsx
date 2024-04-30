import {createContext, useCallback, useState, useMemo, useEffect} from "react";
import { toast } from 'react-toastify';
import { useQuery } from "react-query";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC"
const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { data, isFetching } = useQuery("products", async () => {
    const response = await axios.get(baseUrl);
    return response.data.products;
  })

  const openSideMenu = useCallback(() => {
    setMenuIsOpen(true);
  }, []);

  const closeSideMenu = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      //   if product already exists in the cart, update the quantity
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        const updatedProduct = { ...updatedCart[existingProductIndex] };

        updatedProduct.quantity += 1;
        updatedCart[existingProductIndex] = updatedProduct;

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return updatedCart;
      } else {
        // add it with quantity 1
        localStorage.setItem("cart", JSON.stringify([...prevCart, { ...product, quantity: 1 }]));
       
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }, [ ]);

  const removeFromCart = useCallback((productId) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === productId
    );
    existingProductIndex !== -1 && updatedCart.splice(existingProductIndex, 1);
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }, [cart]);

  const increaseQuantity = useCallback((productId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProductIndex = updatedCart.findIndex(
        (item) => item.id === productId
      );
      const updatedProduct = { ...updatedCart[existingProductIndex] };

      updatedProduct.quantity += 1;
      updatedCart[existingProductIndex] = updatedProduct;

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const decreaseQuantity = useCallback((productId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProductIndex = updatedCart.findIndex(
        (item) => item.id === productId
      );
      const updatedProduct = { ...updatedCart[existingProductIndex] };

      updatedProduct.quantity -= 1;
      updatedCart[existingProductIndex] = updatedProduct;

      if (updatedProduct.quantity === 0) {
        updatedCart.splice(existingProductIndex, 1);
      }
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const setCurrency = useCallback((price) => {
    price = parseFloat(price);
    return price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }, []);

  const finishOrder = useCallback(() => {
    const order = {
      products: cart,
      total,
    }

    if(cart.length === 0) {
      return;
    } 

    const productsQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    closeSideMenu()

    toast.success(`Compra de ${productsQuantity} produto(s) no valor de ${setCurrency(order.total)} finalizada com sucesso!`);
    setCart([]);
    localStorage.removeItem("cart");
  }, [cart, total, setCurrency, closeSideMenu]);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => { 
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart && setCart(cart);
  }, []);

  const value = useMemo(() => {
    return {
      products: data || [],
      menuIsOpen,
      cart,
      total,
      isFetching,
      setCurrency,
      setProducts,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      openSideMenu,
      closeSideMenu,
      finishOrder,
    };
  }, [
    data,
    menuIsOpen,
    cart,
    total,
    isFetching,
    setCurrency,
    addToCart,
    removeFromCart,
    setProducts,
    increaseQuantity,
    decreaseQuantity,
    openSideMenu,
    closeSideMenu,
    finishOrder
  ]);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;

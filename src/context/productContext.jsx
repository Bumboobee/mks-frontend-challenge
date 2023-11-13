import {createContext, useCallback, useState, useMemo, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const ProductContext = createContext();

const data = [
  {
    id: 2,
    name: "AirPods",
    brand: "Apple",
    description:
      "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
    price: "1200.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  },
  {
    id: 5,
    name: "Apple Watch Series 7",
    brand: "Apple",
    description:
      "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
    price: "3200.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  },
  {
    id: 7,
    name: "Headset Cloud Revolver",
    brand: "HyperX",
    description:
      "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
    price: "1000.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  },
  {
    id: 8,
    name: "Headset Cloud Stinger",
    brand: "HyperX",
    description:
      "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
    price: "600.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  },
  {
    id: 6,
    name: "iPad",
    brand: "Apple",
    description:
      "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
    price: "4200.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  },
  {
    id: 1,
    name: "Iphone 11 128 GB",
    brand: "Apple",
    description:
      "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
    price: "5000.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  },
  {
    id: 4,
    name: "iPhone 12 64 GB",
    brand: "Apple",
    description:
      "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp",
    price: "6500.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  },
  {
    id: 3,
    name: "Macbook Air",
    brand: "Apple",
    description:
      "Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp",
    price: "8200.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  },
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);


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

        return updatedCart;
      } else {
        // add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === productId
    );
    existingProductIndex !== -1 && updatedCart.splice(existingProductIndex, 1);
    setCart(updatedCart);
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
    alert('Compra  no valor de  finalizada com sucesso!')

    // toast.success(`Compra  no valor de  finalizada com sucesso!`);
  }, []);


  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL).then((response) => {
        setProducts(response.data.products);
      }).catch((error) => {
        toast.error('Não foi possível carregar os produtos');
      });
  }, [toast]);

  const value = useMemo(() => {
    return {
      products,
      menuIsOpen,
      cart,
      total,
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
    products,
    menuIsOpen,
    cart,
    total,
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

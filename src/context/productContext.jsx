import { createContext, useCallback, useState, useMemo, useRef, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(['Macbook', 'Iphone', 'Ipad']);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openSideMenu = useCallback(() => {
        setMenuIsOpen(true)
    }, []);

    const closeSideMenu = useCallback(() => {
        setMenuIsOpen(false)
    }, []);

    const addProduct = useCallback((product) => {
        
    }, []);



    const value = useMemo(() => {
        return {
            products,
            menuIsOpen,
            openSideMenu,
            closeSideMenu
        }
    }, [products, menuIsOpen, openSideMenu, closeSideMenu]);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;
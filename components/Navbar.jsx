import React from 'react';
import Link from "next/link";
import {AiOutlineShopping} from "react-icons/ai";
import Cart from "./Cart";
import {useStateContext} from "../Context/StateContext";

const Navbar = () => {
    const {showCart, setShowCart, totalQuantities} = useStateContext();

    return (
        <React.Fragment>
            <div className="navbar-container">
                <p className="logo">
                    <Link href="/">Prajul&apos; Shop</Link>
                </p>
                <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                    <AiOutlineShopping/>
                    <span className="cart-item-qty">{totalQuantities}</span>
                </button>
                {showCart && <Cart/>}
            </div>

        </React.Fragment>
    );
};

export default Navbar;

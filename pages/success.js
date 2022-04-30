import React, {useEffect} from 'react';
import {useStateContext} from "../Context/StateContext";
import {BsBagCheckFill} from "react-icons/bs";
import Link from "next/link";
import {runFireworks, runSnowFall} from "../lib/utils";

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
        runSnowFall();
    }, []);

    return (
        <React.Fragment>
            <div className="success-wrapper">
                <div className="success">
                    <p className="icon">
                        <BsBagCheckFill/>
                    </p>
                    <h2>Thank you for your order!</h2>
                    <p className="email msj">
                        Check your mail for the receipt.
                    </p>
                    <p className="description">
                        For more queries, please email
                        <a href="mailto:brocode@dummymail.com" className="email">brocode@dummymail.com</a>
                    </p>
                    <Link href="/">
                        <button type="button" width="300px" className="btn">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Success;

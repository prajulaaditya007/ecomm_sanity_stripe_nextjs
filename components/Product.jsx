import React from 'react';
import {urlFor} from "../lib/client";
import Link from 'next/link';

const Product = ({product: {image, name, slug, price}}) => {
    return (
        <React.Fragment>
            <div>
                <Link href={`/product/${slug.current}`}>
                    <div className="product-card">
                        <img
                            src={urlFor(image && image[0])}
                            width={250}
                            height={250} alt="images for product"
                        />
                        <p className="product-name">{name}</p>
                        <p className="product-price">₹{price}</p>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Product;

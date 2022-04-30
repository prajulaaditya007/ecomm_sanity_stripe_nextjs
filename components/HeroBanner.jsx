import React from 'react';
import Link from "next/link";

import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner}) => {
    return (
        <React.Fragment>
            <div className="hero-banner-container">
                <div>
                    <p className="beats-solo">{heroBanner.smallText}</p>
                    <h3>{heroBanner.midText}</h3>
                    <h1>{heroBanner.largeText1}</h1>
                    <img src={urlFor(heroBanner.image)} alt="headphones" className={"hero-banner-image"}/>
                    <div>
                        <Link href={`/product/${heroBanner.product}`}>
                            <button type="button">{heroBanner.buttonText}</button>
                        </Link>
                        <div className="desc">
                            <h5>Description</h5>
                            <p>{heroBanner.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HeroBanner;

// TO_REMEMBER - You can always change product in Sanity no need to make changes in here,
// TODO : Create same app in MERN stack or in Django, using a backend.

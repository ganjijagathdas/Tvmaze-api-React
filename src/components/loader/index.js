import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = () =>(
    <div>
        <img
            alt="Loader icon"
            src={loaderSrc}
            className="loader"
        />
    </div>
);

export default Loader;
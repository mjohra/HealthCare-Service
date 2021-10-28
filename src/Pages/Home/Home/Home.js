import React from 'react';
import Blog from '../Blog/Blog';


import About from '../About/About';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Details></Details>
            <Services/>
            <Blog></Blog>
           
        </div>
    );
};

export default Home;
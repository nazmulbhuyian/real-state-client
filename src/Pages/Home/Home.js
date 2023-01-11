import React from 'react';
import Categories from './Categories/Categori/Categories';
import Header from './Header/Header'
import OurAggent from './OurAggent/OurAggent';
import Testimonial from './Testimonial/Testimonial';
import WeProbide from './WeProvide/WeProbide';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <WeProbide></WeProbide>
            <OurAggent></OurAggent>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
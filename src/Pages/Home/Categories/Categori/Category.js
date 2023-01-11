import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ product }) => {
    const { img, name, _id } = product;


    return (
        // <Link to={`/details/${_id}`}>
        <Link to={{ pathname: `/details/${_id}` }} state={ _id }>
            <div className="hero">
                <img src={img} alt="" />
                <div className="hero-overlay lg:bg-opacity-50 hover:lg:bg-opacity-10"></div>
                <div className="text-center text-neutral-content p-0">
                    <h1 className="mb-2 text-2xl font-bold">{name}</h1>
                    {/* <p className='mb-3'>{detail.length} Poperties</p> */}
                    <Link to={ { pathname: `/details/${_id}` }} state={ _id } className='underline'>Details</Link>
            </div>
        </div>
        </Link >
    );
};

export default Category;
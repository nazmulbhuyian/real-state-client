import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useProduct } from '../../../../Context/ProductReducer/ProductReducer';
import Category from './Category';

const Categories = () => {

    // const context = useProduct()
    // console.log(context);
    // const {state} = useProduct()
    // console.log(state);
    // console.log(state.products);



    const { isLoading, refetch, data: products = [] } = useQuery({
        queryKey: ['/allCategories'],
        queryFn: async () => {
            const res = await fetch('https://real-state-server.vercel.app/allCategories')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='my-16 lg:mx-32 mx-8'>
            <h2 className='text-center mb-12 lg:text-4xl text-2xl font-bold text-primary'>We Provide This Services</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                {
                    products?.map(product => <Category key={product._id} product={product}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;
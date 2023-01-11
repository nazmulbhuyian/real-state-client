import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SingleBook = ({ product, refetch }) => {
    const { book_img, price, proparty_name, type, _id, book_id } = product

    const handleDelete = (id) => {
        fetch(`https://real-state-server.vercel.app/bookingDelete/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${proparty_name} Deleted Successfully`)
                    refetch()
                }
            })
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={book_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className='text-xl'>Proparty-Type: <strong>{type}</strong></h2>
                <h3 className='text-xl'>proparty_name: <strong>{proparty_name}</strong></h3>
                <h3 className="card-title font-bold">Price: {price}$</h3>
                <div className="card-actions justify-between mt-3">
                    <Link to={`/singleDetail/${book_id}`}><button className='btn btn-primary'>Details</button></Link>
                    <button className="btn btn-primary">Pay</button>
                    <button className="btn btn-primary" onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
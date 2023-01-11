import React from 'react';
import { Link } from 'react-router-dom';

const SingleBookings = ({ booking, refetch, i, setItems }) => {
    const { book_img, user_email, proparty_name, type, price, _id, book_id } = booking;
    console.log(book_id);
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{user_email}</td>
            <td>{type}</td>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={book_img} alt='' />
                    </div>
                </div>
            </td>
            <td>{proparty_name}</td>
            <td>{price}$</td>
            <td>not</td>
            <td><div className='mt-3'>
                <Link to={`/singleDetail/${book_id}`}><button className='btn btn-primary'>Details</button></Link>
            </div></td>
            <td><button className='btn btn-primary'>Delivery</button></td>
            <td>
                <label htmlFor="user-info" className="btn btn-primary" onClick={() => setItems(booking)}>Details</label>
            </td>
        </tr>
    );
};

export default SingleBookings;
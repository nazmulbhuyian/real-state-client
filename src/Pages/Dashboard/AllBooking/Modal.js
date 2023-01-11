import React from 'react';

const Modal = ({ items }) => {
    return (
        <div>
            <input type="checkbox" id="user-info" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">


                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row p-0">
                            <img src={items.img} className="max-w-sm rounded-lg" alt='' width='350px' />
                            <div className='ml-8'>
                                <div className='mb-3'>
                                    <h3 className=''>User-Email: <strong>{items.user_email}</strong></h3>
                                    <h3 className=''>User-Name: <strong>{items.user_name}</strong></h3>
                                </div>
                                <p className="">Booking-Email: <strong>{items.book_email}</strong></p>
                                <p className=''>Booking-Name: <strong>{items.book_name}</strong></p>
                                <p className='pt-3'>User-Phone: <strong>{items.phone}</strong></p>
                            </div>
                        </div>
                    </div>


                    <div className="modal-action">
                        <label htmlFor="user-info" className="btn btn-primary">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
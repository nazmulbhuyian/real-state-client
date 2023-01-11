import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../../Context/AuthProvider/AuthProvider';

const Booking = ({ type, head, detail, refetch, _id }) => {

    const { user } = useContext(AuthContext);

    const { name, img } = head;
    const { price } = detail;

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const book_name = form.Name.value;
        const book_img = img;
        const book_id = _id;
        const book_email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            book_name,
            book_email,
            user_email: user?.email,
            user_name: user?.displayName,
            phone,
            price,
            type,
            book_img,
            proparty_name: name,
            img: user?.photoURL,
            book_id
        }
        fetch('https://real-state-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    form.reset()
                    toast.success(`${name} Book Successfully`)
                    refetch()
                }
            })

    }

    return (
        <div className='bg-white p-12 ml-12'>
            <h1 className='text-center font-bold mb-5 text-primary'>Please Book It</h1>
            <h3 className='font-bold'>{name}</h3>
            <h3 className='font-bold'>Price: {price} $</h3>

            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                <input name='Name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                <input name='email' type="email" placeholder="Your E-mail" className="input w-full input-bordered" />
                <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                <input className='btn btn-accent w-full mt-5' type="submit" value="Book Now" />
            </form>
        </div>
    );
};

export default Booking;
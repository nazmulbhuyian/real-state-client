import React, { useContext } from 'react';
import { AuthContext } from '../../../../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const Comments = ({ comments, refetch, types }) => {


    const { user } = useContext(AuthContext)


    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const imageBBHostKey = '14f1e107e329b44a04c4481b2e76451e'

    const handleComment = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageBBHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.status === 200) {
                    const image = imgData.data.url;
                    const name = data.name;
                    const ratting = data.ratting;
                    const text = data.text;
                    const email = data.email
                    const info = {
                        img: image,
                        name: name,
                        ratting: ratting,
                        email: email,
                        comment: text,
                        type: types
                    }
                    fetch('https://real-state-server.vercel.app/comment', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(info)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged === true) {
                                reset()
                                toast.success(`Comment Added Successfully`)
                                refetch()
                            }
                        })
                }
                else {
                    toast.error('Please Add A Photo')
                }
            })
    }


    const handleDelete = (id) => {
        fetch(`https://real-state-server.vercel.app/commentDelete/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Comment Deleted Successfully')
                    refetch()
                }
            })
    }

    return (
        <div className='my-12'>
            <h3 className='text-xl font-semibold'>People Who Comments This Poparties</h3>
            <div className='mx-12 mt-12'>
                {
                    comments?.map(comment =>
                        <div className='flex items-center mb-8'>
                            <div className="avatar mr-8">
                                <div className="w-24 rounded-full">
                                    <img src={comment?.img} alt='' />
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center justify-between mb-3'>
                                    <h4>{comment?.name}</h4>
                                    <h4><strong>{comment?.ratting}</strong> OUT OF 5</h4>
                                </div>
                                <p>{comment?.comment}</p>
                                {
                                    user?.email === comment?.email ?
                                        <button onClick={() => handleDelete(comment?._id)} className='btn btn-primary btn-sm mt-5'>Delete</button>
                                        :
                                        ''
                                }
                            </div>
                        </div>)
                }
            </div>


            <div>

                <div className='mt-12'>
                    <div className='bg-white p-8'>
                        <h3 className='text-xl font-semibold'>Leave A Comment</h3>
                        <div className='divider'></div>

                        <div>

                            <form onSubmit={handleSubmit(handleComment)}>


                                <div className="form-control w-full mb-2">
                                    <label className="label">
                                        <span className="label-text font-bold">E-mail</span>
                                    </label>
                                    <input type="email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered" defaultValue={user?.email} />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>

                                <div className='flex items-center justify-between'>

                                    <div className="form-control w-full max-w-xs mb-2">
                                        <label className="label"><span className="label-text font-bold">Your Name</span></label>
                                        <input type="text" {...register("name", { required: 'Name is required' })}
                                            className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} />
                                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                                    </div>

                                    <div className="form-control w-full max-w-xs mb-2">
                                        <label className="label"><span className="label-text font-bold">Please Ratting</span></label>
                                        <input type="text" {...register("ratting", { required: 'Ratting is required' })}
                                            className="input input-bordered w-full max-w-xs" />
                                        {errors.ratting && <p className='text-red-600'>{errors.ratting?.message}</p>}
                                    </div>

                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Product Photo</span>
                                    </label>
                                    <input {...register("img", { required: 'Image is required' })} type="file" className="file-input file-input-bordered file-input-info  w-full max-w-xs" />
                                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Your Comment</span>
                                    </label>
                                    <textarea type="text" {...register("text", { required: 'Comment is required' })} className="textarea textarea-bordered h-32" placeholder="Write Your Comment"></textarea>
                                    {errors.text && <p className='text-red-600'>{errors.text?.message}</p>}
                                </div>

                                <input className='btn hover:bg-blue-500 mt-5 bg-teal-400 border-0' value='Submit Review' type="submit" />

                            </form>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Comments;
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {


    // const [loginUserEmail, setLoginUserEmail] = useState('')
    // const [token] = UseToken(loginUserEmail)

    const { createUser, updateUser } = useContext(AuthContext);

    const navigate = useNavigate()

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const imageBBHostKey = '14f1e107e329b44a04c4481b2e76451e'

    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;

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
                            const userInfo = {
                                displayName: data.name,
                                photoURL: image
                            }
                            updateUser(userInfo)
                                .then(() => {
                                    saveUser(data.name, data.email)
                                })
                                .catch(err => console.error(err))
                        }
                    })
            })
            .then(error => console.error(error))
    };

    const saveUser = (name, email) => {
        const info = {
            name,
            email,
            role: 'bayer'
        }
        fetch('https://real-state-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    // setLoginUserEmail(email)
                    toast.success('User Created Successfully')
                    reset()
                    navigate('/')
                }
            })
    }


    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 caracter or longer' },
                                // pattern:{value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[$@])/, message: 'Passwor should be strong'}
                            })
                        }
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Please Upload A Photo Photo</span>
                        </label>
                        <input {...register("img", { required: 'Image is required' })} type="file" className="file-input file-input-bordered file-input-info  w-full max-w-xs" />
                        {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                    </div>

                    <input className='btn hover:bg-blue-500 w-full mt-5 bg-teal-400 border-0' value='Sign Up' type="submit" />

                </form>
                <p>Already have an account <Link className='text-emerald-400' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                {/* <Google></Google> */}
            </div>
        </div>
    );
};

export default Register;